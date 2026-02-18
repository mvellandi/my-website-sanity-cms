import {defineMigration, at, set} from 'sanity/migrate'

const oldType = 'toy'
const newType = 'demo'

export default defineMigration({
  title: 'Rename toy document type to demo',
  documentTypes: ['toy'],

  migrate: {
    object(object) {
      if (object._type === oldType) {
        return at('_type', set(newType))
      }
    },
  },
})
