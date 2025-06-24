import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'graphicImage',
  type: 'object',
  title: 'Image',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
    }),
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'image',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title || 'Image',
        media: media,
      }
    },
  },
}) 