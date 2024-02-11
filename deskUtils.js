export function parentList(S, {
  parentTitle,
  childTitle,
  childItems,
  icon,
  showChildIcons,
}) {
  return S.listItem()
    .title(parentTitle)
    .icon(icon)
    .child(
      S.list().title(childTitle).showIcons(showChildIcons).items(childItems)
    );
}

// singleton, ex: website settings
export function singleChildItem(S, { name, title }) {
  return S.listItem()
    .title(title)
    .child(S.document().schemaType(name).documentId(name));
}

// multi-record document, ex: project, article, page, author
export function multiChildItem(S, { name, title, icon }) {
  return S.listItem().title(title).icon(icon).child(S.documentTypeList(name));
}

export function listNames(list) {
  return list.map((item) => item.name);
}

// export function filterDocuments(list) {
//   let exclusionList = [];
//   list.forEach((sublist) => exclusionList.push(...listNames(sublist)));
//   return S.documentTypeListItems().filter(
//     (listItem) => !exclusionList.includes(listItem.getId())
//   );
// }
