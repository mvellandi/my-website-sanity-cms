import type {IconType} from 'react-icons'

interface ParentListOptions {
  parentTitle: string
  childTitle: string
  childItems: any[]
  icon: IconType | (() => JSX.Element) | any
  showChildIcons: boolean
}

interface SingleChildItemOptions {
  name: string
  title: string
}

interface MultiChildItemOptions {
  name: string
  title: string
  icon?: IconType | (() => JSX.Element) | any
}

export function parentList(S: any, {parentTitle, childTitle, childItems, icon, showChildIcons}: ParentListOptions) {
  return S.listItem()
    .title(parentTitle)
    .icon(icon)
    .child(S.list().title(childTitle).showIcons(showChildIcons).items(childItems))
}

// singleton, ex: website settings
export function singleChildItem(S: any, {name, title}: SingleChildItemOptions) {
  return S.listItem().title(title).child(S.document().schemaType(name).documentId(name))
}

// multi-record document, ex: project, article, page, author
export function multiChildItem(S: any, {name, title, icon}: MultiChildItemOptions) {
  return S.listItem().title(title).icon(icon).child(S.documentTypeList(name))
}

export function listNames(list: any[]) {
  return list.map((item) => item.name)
} 