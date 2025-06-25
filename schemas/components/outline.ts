import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'outline',
  type: 'object',
  title: 'Outline',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [{type: 'string'}],
    }),
  ],
}) 