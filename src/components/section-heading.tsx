import { cn } from 'cn';

export function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn('text-2xl font-light tracking-tight text-foreground sm:text-3xl', className)}>
      {children}
    </h2>
  );
}
