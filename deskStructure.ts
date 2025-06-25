import displaySettings from './schemas/settings/settings'
import {categories as displayCategories} from './schemas/categories/categories'
import categoriesDefault from './schemas/categories/categories'
import displayDomains from './schemas/domains/domains'

// icons
import {FiTag as categoriesIcon} from 'react-icons/fi'
import {VscSettingsGear as settingsIcon} from 'react-icons/vsc'

import {parentList, singleChildItem, multiChildItem} from './deskUtils'

export default (S: any) => {
  const structuredSettings = displaySettings.map((s: any) => singleChildItem(S, s))
  const structuredCategories = displayCategories.map((c: any) =>
    multiChildItem(S, {...c, icon: c.icon || categoriesIcon}),
  )

  // List of all category type names (from the default export, which is the schema definitions)
  const categoryTypeNames = categoriesDefault.map((c: any) => c.name)

  // Filter out category types from main navigation
  const domains = displayDomains
    .filter((d: any) => !categoryTypeNames.includes(d.name))
    .map((d: any) => multiChildItem(S, d))

  const categories = parentList(S, {
    parentTitle: 'Categories',
    icon: categoriesIcon,
    childTitle: 'Project Structure',
    showChildIcons: true,
    childItems: structuredCategories,
  })

  const settings = parentList(S, {
    parentTitle: 'Settings',
    icon: () => settingsIcon({size: '1.3rem'}),
    childTitle: 'Website Settings',
    showChildIcons: false,
    childItems: structuredSettings,
  })

  return S.list()
    .title('Base')
    .items([...domains, S.divider(), categories, settings])
} 