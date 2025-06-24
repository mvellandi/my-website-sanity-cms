import deskStructure from './deskStructure'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas/schemas'

// plugins
import {visionTool} from '@sanity/vision'
import {media, mediaAssetSource} from 'sanity-plugin-media'
// import {codeInput} from '@sanity/code-input'
// import {theme} from 'https://themer.sanity.build/api/hues'

export default defineConfig({
  // theme,
  name: 'Vellandi_Dev',
  title: 'Vellandi',

  projectId: 'nkdwfm1n',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: deskStructure as any,
    }),
    visionTool(),
    media(),
  ],

  form: {
    // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
      },
    },
  },

  tools: (prev, context) => {
    const isAdmin = context.currentUser?.roles.find(({name}) => name === 'administrator')
    if (isAdmin) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  },

  schema: {
    types: schemaTypes as any,
  },
  document: {
    newDocumentOptions: (prev, {creationContext}) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId !== 'settings')
      }
      return prev
    },
    actions: (prev, {schemaType}) => {
      if (schemaType === 'settings') {
        return prev.filter(({action}) => action && !['unpublish', 'delete', 'duplicate'].includes(action))
      }
      return prev
    },
  },
}) 