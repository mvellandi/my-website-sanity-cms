import {defineType, defineField} from 'sanity'
import {FaProjectDiagram as icon} from 'react-icons/fa'

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Project',
  icon: () => icon({size: '1.5rem'}),
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sector',
      type: 'string',
      title: 'Sector',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Short Description',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      type: 'graphicImage',
      title: 'Project Logo',
    }),
    defineField({
      name: 'completionDate',
      type: 'date',
      title: 'Completion Date',
      initialValue: new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      type: 'array',
      title: 'Summary',
      validation: (Rule) => Rule.required(),
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'List Heading', value: 'h3'},
          ],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [],
          },
        },
      ],
    }),
    defineField({
      name: 'structure',
      type: 'projectStructure',
      title: 'Tech / Design Structure',
    }),
    defineField({
      name: 'links',
      type: 'array',
      title: 'Project Links',
      description: "Links to project's website, GitHub, etc.",
      of: [{type: 'textLink'}],
    }),
    defineField({
      name: 'media',
      type: 'array',
      title: 'Media',
      description: 'Screenshot project images',
      of: [{type: 'graphicFigure'}],
    }),
    defineField({
      name: 'process',
      type: 'array',
      title: 'Process',
      description: "Describe project's development process",
      of: [
        {type: 'richText', title: "'Process' Heading and Text"},
        {type: 'headingRichText', title: 'Custom Heading and Text'},
        {type: 'outline', title: 'Outline'},
      ],
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
        title: title || 'Untitled Project',
        subtitle: subtitle ? subtitle.substring(0, 100) + (subtitle.length > 100 ? '...' : '') : date ? new Date(date).toLocaleDateString() : 'No description',
        media: media,
      }
    },
  },
}) 