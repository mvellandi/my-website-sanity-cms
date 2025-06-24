import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'textLink',
  type: 'object',
  title: 'Text Link',
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Text',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
    }),
  ],
}) 