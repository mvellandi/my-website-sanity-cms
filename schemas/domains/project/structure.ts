import {defineType, defineField} from 'sanity'
import {entriesUnique} from './utilities'
import at from './structureAspects'

const aspectTypes = at.map(({name}: {name: string}) => {
  return {type: name}
})

export default defineType({
  name: 'projectStructure',
  type: 'object',
  title: 'Project Structure',
  fields: [
    defineField({
      name: 'aspects',
      type: 'array',
      title: 'Aspects',
      of: [...aspectTypes],
      validation: (Rule) => [Rule.custom(entriesUnique)],
    }),
  ],
}) 