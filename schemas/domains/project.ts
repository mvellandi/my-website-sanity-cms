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
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Untitled Project',
        subtitle: subtitle ? subtitle.substring(0, 100) + (subtitle.length > 100 ? '...' : '') : 'No description',
        media: media,
      }
    },
  },
}) 