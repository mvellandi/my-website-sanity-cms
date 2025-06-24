import {defineType, defineField} from 'sanity'
import {MdInsertDriveFile as icon} from 'react-icons/md'

export default defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
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
      name: 'body',
      type: 'richText',
      title: 'Body',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Untitled Page',
        subtitle: subtitle ? `/${subtitle}` : 'No slug',
      }
    },
  },
}) 