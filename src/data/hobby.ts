import { Hobby } from '@/types';

export const hobby: Hobby = {
  content:
    'Outside of coding, I spend my free time watching Anime, reading Manga and Light Novels, and listening to Anime and Japanese music. They are my favorite ways to relax and recharge.',
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
