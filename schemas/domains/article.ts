import {RiArticleLine as icon} from 'react-icons/ri'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
  type: 'document',
  title: 'Article',
  icon: () => icon({size: '1.6rem'}),
  fields: [
    defineField({
      name: 'headline',
      type: 'string',
      title: 'Headline',
    }),
    defineField({
      name: 'subheading',
      type: 'text',
      title: 'Subheading',
      rows: 3,
    }),
    defineField({
      name: 'publicationDate',
      type: 'date',
      title: 'Publication Date',
      initialValue: new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'headline',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      type: 'graphicImage',
      title: 'Article Thumbnail',
    }),
    defineField({
      name: 'body',
      type: 'richText',
      title: 'Body',
    }),
  ],
  preview: {
    select: {
      title: 'headline',
      subtitle: 'subheading',
      media: 'coverImage.image',
      date: 'publicationDate',
    },
    prepare({title, subtitle, media, date}) {
      return {
        title: title || 'Untitled Article',
        subtitle: subtitle ? subtitle.substring(0, 100) + (subtitle.length > 100 ? '...' : '') : date ? new Date(date).toLocaleDateString() : 'No subtitle',
        media: media,
      }
    },
  },
}) 