'use client';

// oxlint-disable jsx-a11y/click-events-have-key-events jsx-a11y/no-static-element-interactions jsx-a11y/no-noninteractive-tabindex
import React, { useRef, useEffect, useState, type CSSProperties } from 'react';

interface PixelTransitionProps {
  firstContent: React.ReactNode | string;
  secondContent: React.ReactNode | string;
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number;
  once?: boolean;
  className?: string;
  style?: CSSProperties;
  aspectRatio?: string;
}

const PixelTransition: React.FC<PixelTransitionProps> = ({
  firstContent,
  secondContent,
  gridSize = 7,
  pixelColor = 'currentColor',
  animationStepDuration = 0.3,
  once = false,
  aspectRatio = '100%',
  className = '',
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pixelGridRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<HTMLDivElement | null>(null);
  const timersRef = useRef<number[]>([]);

  const [isActive, setIsActive] = useState<boolean>(false);
  const [isTouchDevice] = useState<boolean>(
    () =>
      typeof window !== 'undefined' &&
      ('ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches),
  );

  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = '';

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixelated-image-card__pixel');
        pixel.classList.add('absolute', 'hidden');
        pixel.style.backgroundColor = pixelColor;

        const size = 100 / gridSize;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;

        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  useEffect(() => {
    const timers = timersRef.current;
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  const animatePixels = (activate: boolean): void => {
    setIsActive(activate);

    const pixelGridEl = pixelGridRef.current;
    const activeEl = activeRef.current;
    if (!pixelGridEl || !activeEl) return;

    const pixels = pixelGridEl.querySelectorAll<HTMLDivElement>('.pixelated-image-card__pixel');
    if (!pixels.length) return;

    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
    pixels.forEach((pixel) => {
      pixel.style.display = 'none';
    });

    const staggerMs = (animationStepDuration / pixels.length) * 1000;
    const showOrder = [...pixels].sort(() => Math.random() - 0.5);
    const hideOrder = [...pixels].sort(() => Math.random() - 0.5);

    showOrder.forEach((pixel, i) => {
      timersRef.current.push(
        window.setTimeout(() => {
          pixel.style.display = 'block';
        }, i * staggerMs),
      );
    });

    timersRef.current.push(
      window.setTimeout(() => {
        activeEl.style.display = activate ? 'block' : 'none';
        activeEl.style.pointerEvents = activate ? 'none' : '';
      }, animationStepDuration * 1000),
    );

    hideOrder.forEach((pixel, i) => {
      timersRef.current.push(
        window.setTimeout(
          () => {
            pixel.style.display = 'none';
          },
          animationStepDuration * 1000 + i * staggerMs,
        ),
      );
    });
  };

  const handleEnter = (): void => {
    if (!isActive) animatePixels(true);
  };
  const handleLeave = (): void => {
    if (isActive && !once) animatePixels(false);
  };
  const handleClick = (): void => {
    if (!isActive) animatePixels(true);
    else if (isActive && !once) animatePixels(false);
  };
  return (
    <div
      ref={containerRef}
      className={`
        ${className}
        relative
        overflow-hidden
      `}
      style={style}
      onMouseEnter={!isTouchDevice ? handleEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleLeave : undefined}
      onClick={isTouchDevice ? handleClick : undefined}
      onFocus={!isTouchDevice ? handleEnter : undefined}
      onBlur={!isTouchDevice ? handleLeave : undefined}
      tabIndex={0}
    >
      <div style={{ paddingTop: aspectRatio }} />

      <div className="absolute inset-0 w-full h-full" aria-hidden={isActive}>
        {firstContent}
      </div>

      <div
        ref={activeRef}
        className="absolute inset-0 w-full h-full z-2"
        style={{ display: 'none' }}
        aria-hidden={!isActive}
      >
        {secondContent}
      </div>

      <div ref={pixelGridRef} className="absolute inset-0 w-full h-full pointer-events-none z-3" />
    </div>
  );
};

export default PixelTransition;
