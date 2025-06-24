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
}) 