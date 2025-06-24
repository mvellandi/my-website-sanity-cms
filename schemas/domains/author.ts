import {defineType, defineField} from 'sanity'
import {FaUser as icon} from 'react-icons/fa'

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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      type: 'text',
      title: 'Bio',
      rows: 4,
    }),
    defineField({
      name: 'avatar',
      type: 'image',
      title: 'Avatar',
      options: {
        hotspot: true,
      },
    }),
  ],
}) 