// blocks/ContentWithMedia.ts
import { Block } from 'payload';

export const ContentWithMedia: Block = {
  slug: 'content-with-media',
  fields: [
    {
      name: 'text',
      type: 'richText',
      required: true,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};
