import {richText as icon} from './icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'richText',
  type: 'object',
  title: 'Rich Text',
  fields: [
    defineField({
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [
        {
          type: 'block',
        },
        {
          type: 'graphicFigure',
        },
        // {
        //   type: 'code',
        // },
      ],
    }),
  ],
  preview: {
    select: {body: 'body'},
    prepare({body}: {body: any[]}) {
      return {
        title: body?.[0]?.['children']?.[0]?.['text'] || 'Rich Text',
        media: () => icon({scale: '80%'}),
      }
    },
  },
}) 