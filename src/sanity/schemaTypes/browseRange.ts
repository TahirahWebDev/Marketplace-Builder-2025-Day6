import { defineType } from 'sanity';

export const browseRange = defineType({
  name: 'browseRange',
  title: 'Browse Range',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
});
