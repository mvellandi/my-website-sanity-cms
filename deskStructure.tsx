import {StructureBuilder} from 'sanity/structure'
import {FiTag as categoriesIcon} from 'react-icons/fi'
import {VscSettingsGear as settingsIcon} from 'react-icons/vsc'
import React from 'react'

// Import your schema data
import displaySettings from './schemas/settings/settings'
import {categories as displayCategories} from './schemas/categories/categories'
import categoriesDefault from './schemas/categories/categories'

// Custom preview component for iframe
const ArticlePreviewPane = (props: any) => {
  const {document} = props
  const slug = document?.displayed?.slug?.current
  if (!slug) {
    return <div style={{padding: 20}}>No slug set for this document.</div>
  }
  // Change this URL to match your Next.js preview route
  const url = `http://localhost:3000/api/preview?slug=${slug}`
  return <iframe src={url} style={{width: '100%', height: '100%', border: 0}} title="Preview" />
}

export default (S: StructureBuilder) => {
  const categoryTypeNames = categoriesDefault.map((c: any) => c.name)
  const settingsTypeNames = displaySettings.map((s: any) => s.name)
  const excludedTypeNames = [...categoryTypeNames, ...settingsTypeNames, 'media.tag']

  // All document types except categories, settings, and media.tag
  const baseItems = S.documentTypeListItems()
    .map((item) => {
      if (item.getId() === 'article') {
        return item.child(
          S.documentTypeList('article').child((id) =>
            S.document()
              .schemaType('article')
              .documentId(id)
              .views([
                S.view.form().title('Edit'),
                S.view.component(ArticlePreviewPane).title('Preview'),
              ]),
          ),
        )
      }
      return item
    })
    .filter((listItem) => !excludedTypeNames.includes(listItem.getId()))

  // Create settings items
  const settingsItems = displaySettings.map((setting: any) =>
    S.listItem()
      .title(setting.title)
      .child(S.document().schemaType(setting.name).documentId(setting.name)),
  )

  // Create categories items
  const categoriesItems = displayCategories.map((category: any) =>
    S.listItem()
      .title(category.title)
      .icon(category.icon || categoriesIcon)
      .child(S.documentTypeList(category.name)),
  )

  return S.list()
    .title('Content')
    .items([
      ...baseItems,
      S.divider(),
      S.listItem()
        .title('Categories')
        .icon(categoriesIcon)
        .child(S.list().title('Project Structure').items(categoriesItems)),
      S.listItem()
        .title('Settings')
        .icon(() => settingsIcon({size: '1.3rem'}))
        .child(S.list().title('Website Settings').items(settingsItems)),
    ])
}
