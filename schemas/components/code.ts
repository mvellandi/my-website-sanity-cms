import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'code',
  type: 'object',
  title: 'Code',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      title: 'Language',
    }),
    defineField({
      name: 'code',
      type: 'text',
      title: 'Code',
      rows: 6,
    }),
  ],
}) 