import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'graphicFigure',
  type: 'object',
  title: 'Graphic Figure',
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
      name: 'caption',
      type: 'string',
      title: 'Caption',
    }),
  ],
  preview: {
    select: {
      media: 'image',
      title: 'caption',
    },
    prepare({media, title}) {
      return {
        title: title || 'Figure',
        media: media,
      }
    },
  },
}) 