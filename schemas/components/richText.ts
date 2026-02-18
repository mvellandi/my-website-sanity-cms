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
        {
          type: 'code',
          options: {
            languageAlternatives: [
              {title: 'CSS', value: 'css'},
              {title: 'Elixir', value: 'elixir'},
              {title: 'Go', value: 'golang'},
              {title: 'GROQ', value: 'groq'},
              {title: 'HTML', value: 'html'},
              {title: 'Java', value: 'java'},
              {title: 'JavaScript', value: 'javascript'},
              {title: 'JSON', value: 'json'},
              {title: 'JSX', value: 'jsx'},
              {title: 'Markdown', value: 'markdown'},
              {title: 'MySQL', value: 'mysql'},
              {title: 'PHP', value: 'php'},
              {title: 'Plain text', value: 'text'},
              {title: 'Python', value: 'python'},
              {title: 'Ruby', value: 'ruby'},
              {title: 'SASS', value: 'sass'},
              {title: 'SCSS', value: 'scss'},
              {title: 'sh', value: 'sh'},
              {title: 'SQL', value: 'sql'},
              {title: 'TSX', value: 'tsx'},
              {title: 'TypeScript', value: 'typescript'},
              {title: 'XML', value: 'xml'},
              {title: 'YAML', value: 'yaml'},
            ],
          },
        },
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