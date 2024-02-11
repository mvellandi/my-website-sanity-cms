import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import deskStructure from './deskStructure'
// import {theme} from 'https://themer.sanity.build/api/hues'

export default defineConfig({
  // theme,
  name: 'Vellandi_Dev',
  title: 'Vellandi',

  projectId: 'nkdwfm1n',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],

  tools: (prev, context) => {
    const isAdmin = context.currentUser.roles.find(({name}) => name === 'administrator')
    if (isAdmin) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  },

  schema: {
    types: schemaTypes,
  },
  document: {
    newDocumentOptions: (prev, {creationContext}) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId != 'settings')
      }
      return prev
    },
    actions: (prev, {schemaType}) => {
      if (schemaType === 'settings') {
        return prev.filter(({action}) => !['unpublish', 'delete', 'duplicate'].includes(action))
      }
      return prev
    },
  },
})
