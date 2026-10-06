import { ImageResponse } from 'next/og';
import { profile } from '@/data/profile';

export const alt = `${profile.name} — ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 72,
        background: '#0a0a0a',
        color: '#f9fafb',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 16, height: 16, borderRadius: 9999, background: '#22c55e' }} />
        <div style={{ fontSize: 32, color: '#22c55e' }}>zawhlaingphyo.dev</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ fontSize: 88, fontWeight: 700 }}>{profile.name}</div>
        <div style={{ fontSize: 40, color: '#a3a3a3' }}>{profile.headline}</div>
      </div>
      <div style={{ display: 'flex', gap: 14, fontSize: 28, color: '#737373' }}>
        <div>{profile.location}</div>
        <div>·</div>
        <div>Available for work</div>
      </div>
    </div>,
    size,
  );
}
