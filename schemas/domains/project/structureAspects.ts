import {defineType, defineField} from 'sanity'
import {entriesUnique} from './utilities'
import {categories} from '../../categories/categories'

interface Category {
  name: string
  title: string
  frontendTitle: string
  icon: any
}

interface AspectValue {
  v1?: string
  v2?: string
  v3?: string
  v4?: string
  v5?: string
  v6?: string
}

// For the preview, we're statically looking up references that may not exist in the array
// since it's not possible to see how many values there are. There shouldn't be more than 6, so that's a
// hard limit set. If some are undefined, we'll filter out before displaying
export default categories.map(({name, title, frontendTitle}: Category) => {
  return defineType({
    name: `projectStructure_${name.split('category_')[1]}`,
    title,
    type: 'object',
    fields: [
      defineField({
        name: 'aspect',
        type: 'string',
        hidden: true,
        readOnly: true,
        initialValue: `${frontendTitle}`,
      }),
      defineField({
        name: 'values',
        type: 'array',
        title: 'Values',
        of: [{type: 'reference', to: [{type: name}]}],
        validation: (Rule: any) => [Rule.required(), Rule.custom(entriesUnique)],
      }),
    ],
    preview: {
      select: {
        v1: 'values.0.name',
        v2: 'values.1.name',
        v3: 'values.2.name',
        v4: 'values.3.name',
        v5: 'values.4.name',
        v6: 'values.5.name',
      },
      prepare({v1, v2, v3, v4, v5, v6}: AspectValue) {
        const subtitle = [v1, v2, v3, v4, v5, v6].filter((v) => v || false).join(', ')
        return {
          title,
          subtitle,
          media: categories.find((c: any) => c.name === name)?.['icon'],
        }
      },
    },
  })
}) 