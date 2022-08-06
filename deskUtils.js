import S from "@sanity/desk-tool/structure-builder";

export function parentList({ parentTitle, childTitle, childItems }) {
  return S.listItem()
    .title(parentTitle)
    .child(S.list().title(childTitle).items(childItems));
}

// singleton, ex: website settings
export function singleChildItem({ name, title }) {
  return S.listItem()
    .title(title)
    .child(S.document().schemaType(name).documentId(name));
}

// multi-record document, ex: project, article, page, author
export function multiChildItem({ name, title }) {
  return S.listItem().title(title).child(S.documentTypeList(name));
}

export function listNames(list) {
  return list.map((item) => item.name);
}

export function filterDocuments(list) {
  let exclusionList = [];
  list.forEach((sublist) => exclusionList.push(...listNames(sublist)));
  return S.documentTypeListItems().filter(
    (listItem) => !exclusionList.includes(listItem.getId())
  );
}
