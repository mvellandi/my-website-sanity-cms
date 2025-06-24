import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'graphicImage',
  type: 'image',
  title: 'Graphic Image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
      validation: (Rule) => Rule.required(),
    }),
  ],
}) 