import {richText as icon} from './icons'

export default {
  name: 'richText',
  type: 'object',
  title: 'Rich Text',
  fields: [
    {
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
    },
  ],
  preview: {
    select: {body: 'body'},
    prepare({body}) {
      return {
        title: body[0]['children'][0]['text'],
        media: () => icon({scale: '80%'}),
      }
    },
  },
}
