// /deskStructure.js
import {settings as displaySettings} from './schemas/settings'
import {categories as displayCategories} from './schemas/categories'
import {domains as displayDomains} from './schemas/domains'

// icons
import {FiTag as categoriesIcon} from 'react-icons/fi'
import {VscSettingsGear as settingsIcon} from 'react-icons/vsc'

import {parentList, singleChildItem, multiChildItem} from './deskUtils'

export default (S) => {
  const structuredSettings = displaySettings.map((s) => singleChildItem(S, s))
  const structuredCategories = displayCategories.map((c) =>
    multiChildItem(S, {...c, icon: c.icon || categoriesIcon}),
  )

  const domains = displayDomains.map((d) => multiChildItem(S, d))

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
