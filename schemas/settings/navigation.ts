import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'navigation',
  type: 'document',
  title: 'Navigation',
  fields: [
    defineField({
      name: 'items',
      type: 'array',
      title: 'Navigation Items',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', type: 'string', title: 'Label'},
            {name: 'url', type: 'url', title: 'URL'},
          ],
        },
      ],
    }),
  ],
}) 