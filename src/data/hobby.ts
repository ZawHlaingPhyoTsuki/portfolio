import { Hobby } from '@/types';

export const hobby: Hobby = {
  content:
    'Living across the worlds of anime, manga, and light novels is what makes me feel alive. I enjoy immersing myself in the stories and characters, whether it’s through watching anime, reading manga, or exploring light novels.',
  tags: ['Anime', 'Reading', 'Music'],
};

export const hobbyCards = [
  {
    src: '/hobbies/anime.jpg',
    alt: 'Anime collection and figures',
  },
  {
    src: '/hobbies/reading.jpg',
    alt: 'Books on a desk',
  },
  {
    src: '/hobbies/music.jpg',
    alt: 'Headphones and music setup',
  },
  {
    src: '/hobbies/desk.jpg',
    alt: 'Cozy workspace',
  },
] as const;
