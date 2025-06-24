import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'colors',
  type: 'document',
  title: 'Colors',
  fields: [
    defineField({
      name: 'primary',
      type: 'string',
      title: 'Primary Color',
    }),
    defineField({
      name: 'secondary',
      type: 'string',
      title: 'Secondary Color',
    }),
    defineField({
      name: 'accent',
      type: 'string',
      title: 'Accent Color',
    }),
  ],
}) 