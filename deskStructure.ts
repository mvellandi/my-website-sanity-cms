import displaySettings from './schemas/settings/settings'
import displayCategories from './schemas/categories/categories'
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

  const domains = displayDomains.map((d: any) => multiChildItem(S, d))

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