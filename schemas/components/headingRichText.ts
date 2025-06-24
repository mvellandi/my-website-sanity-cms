import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'headingRichText',
  type: 'object',
  title: 'Heading Rich Text',
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
  ],
}) 