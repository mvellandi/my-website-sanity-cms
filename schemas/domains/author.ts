import {defineType, defineField} from 'sanity'
import {IoPerson as icon} from 'react-icons/io5'

export default defineType({
  name: 'author',
  type: 'document',
  title: 'Author',
  icon: () => icon({size: '1.3rem'}),
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'bio_short',
      type: 'text',
      title: 'Short Bio',
      rows: 3,
    }),
    defineField({
      name: 'bio_full',
      type: 'richText',
      title: 'Full Bio',
    }),
    defineField({
      name: 'coverImage',
      type: 'graphicImage',
      title: 'Portrait Photo',
    }),
  ],
}) 