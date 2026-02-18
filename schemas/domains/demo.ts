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
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'coverImage.image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Untitled Demo',
        subtitle: subtitle ? subtitle.substring(0, 100) + (subtitle.length > 100 ? '...' : '') : 'No description',
        media: media,
      }
    },
  },
}) 