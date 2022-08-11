// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import { settings as displaySettings } from "./schemas/settings";
import { categories as displayCategories } from "./schemas/categories";
import { domains as displayDomains } from "./schemas/domains";

import { parentList, singleChildItem, multiChildItem } from "./deskUtils";

const structuredSettings = displaySettings.map((s) => singleChildItem(s));
const structuredCategories = displayCategories.map((s) => multiChildItem(s));

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

const domains = displayDomains.map((s) => multiChildItem(s));

export default () =>
  S.list()
    .title("Base")
    .items([...domains, S.divider(), categories, settings]);
