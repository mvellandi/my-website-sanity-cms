import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'outline',
  type: 'object',
  title: 'Outline',
  fields: [
    defineField({
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [{type: 'string'}],
    }),
  ],
}) 