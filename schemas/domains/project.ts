import {defineType, defineField} from 'sanity'
import {MdWork as icon} from 'react-icons/md'

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Project',
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
    defineField({
      name: 'image',
      type: 'image',
      title: 'Project Image',
      options: {
        hotspot: true,
      },
    }),
  ],
}) 