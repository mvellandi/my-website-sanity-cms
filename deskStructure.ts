import {StructureBuilder} from 'sanity/structure'
import {FiTag as categoriesIcon} from 'react-icons/fi'
import {VscSettingsGear as settingsIcon} from 'react-icons/vsc'

// Import your schema data
import displaySettings from './schemas/settings/settings'
import {categories as displayCategories} from './schemas/categories/categories'
import categoriesDefault from './schemas/categories/categories'

export default (S: StructureBuilder) => {
  const categoryTypeNames = categoriesDefault.map((c: any) => c.name);
  const settingsTypeNames = displaySettings.map((s: any) => s.name);

  // All document types except categories
  const baseItems = S.documentTypeListItems().filter(
    (listItem) =>
      !categoryTypeNames.includes(listItem.getId()) &&
      !settingsTypeNames.includes(listItem.getId())
  );

  // Create settings items
  const settingsItems = displaySettings.map((setting: any) =>
    S.listItem()
      .title(setting.title)
      .child(
        S.document()
          .schemaType(setting.name)
          .documentId(setting.name)
      )
  )

  // Create categories items
  const categoriesItems = displayCategories.map((category: any) =>
    S.listItem()
      .title(category.title)
      .icon(category.icon || categoriesIcon)
      .child(S.documentTypeList(category.name))
  )

  // Place this before the return
  console.log(S.documentTypeListItems().map(item => item.getId()));

  return S.list()
    .title('Content')
    .items([
      ...baseItems,
      
      // Divider
      S.divider(),
      
      // Categories section
      S.listItem()
        .title('Categories')
        .icon(categoriesIcon)
        .child(
          S.list()
            .title('Project Structure')
            .items(categoriesItems)
        ),
      
      // Settings section
      S.listItem()
        .title('Settings')
        .icon(() => settingsIcon({size: '1.3rem'}))
        .child(
          S.list()
            .title('Website Settings')
            .items(settingsItems)
        )
    ])
} 