import {defineType, defineField} from 'sanity'
import {GiPuzzle as icon} from 'react-icons/gi'

export default defineType({
  name: 'toy',
  type: 'document',
  title: 'Toy',
  icon: () => icon({size: '1.3rem'}),
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      rows: 4,
    }),
  ],
}) 