// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import { displaySettings } from "./schemas/settings";
import { displayCategories } from "./schemas/categories";
import { parentList, childItem, filterDocuments } from "./deskUtils";

const structuredSettings = displaySettings.map((s) => childItem(s));
const structuredCategories = displayCategories.map((s) => childItem(s));

const settings = parentList({
  parentTitle: "Settings",
  childTitle: "Website Settings",
  childItems: structuredSettings,
});

const categories = parentList({
  parentTitle: "Categories",
  childTitle: "Content Categories",
  childItems: structuredCategories,
});

const documents = filterDocuments([displaySettings, displayCategories]);

export default () =>
  S.list()
    .title("Base")
    .items([...documents, S.divider(), categories, settings]);
