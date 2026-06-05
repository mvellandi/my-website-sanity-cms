import {defineType, defineField} from 'sanity'
import {MdOutlineToys as icon} from 'react-icons/md'

export default defineType({
  name: 'demo',
  type: 'document',
  title: 'Demo',
  icon: () => icon({size: '1.7rem'}),
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Short Description',
      rows: 3,
    }),
    defineField({
      name: 'coverImage',
      type: 'graphicImage',
      title: 'Demo Thumbnail',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
    }),
    defineField({
      name: 'completionDate',
      type: 'date',
      title: 'Completion Date',
      initialValue: new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      name: 'completionDateDesc',
      title: 'Newest',
      by: [{field: 'completionDate', direction: 'desc'}],
    },
    {
      name: 'completionDateAsc',
      title: 'Oldest',
      by: [{field: 'completionDate', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'coverImage.image',
      date: 'completionDate',
    },
    prepare({title, subtitle, media, date}) {
      return {
        title: title || 'Untitled Demo',
        subtitle: subtitle
          ? subtitle.substring(0, 100) + (subtitle.length > 100 ? '...' : '')
          : date ? new Date(date).toLocaleDateString() : 'No description',
        media: media,
      }
    },
  },
})
