// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import { settings as displaySettings } from "./schemas/settings";
import { categories as displayCategories } from "./schemas/categories";
import { domains as displayDomains } from "./schemas/domains";

// icons
import { tag as categoriesIcon, gear as settingsIcon } from "./icons";

import { parentList, singleChildItem, multiChildItem } from "./deskUtils";

const structuredSettings = displaySettings.map((s) => singleChildItem(s));
const structuredCategories = displayCategories.map((s) =>
  multiChildItem({ ...s, icon: categoriesIcon })
);

const settings = parentList({
  parentTitle: "Settings",
  icon: settingsIcon,
  childTitle: "Website Settings",
  showChildIcons: false,
  childItems: structuredSettings,
});

const categories = parentList({
  parentTitle: "Categories",
  icon: categoriesIcon,
  childTitle: "Project Structure",
  showChildIcons: true,
  childItems: structuredCategories,
});

const domains = displayDomains.map((s) => multiChildItem(s));

export default () =>
  S.list()
    .title("Base")
    .items([...domains, S.divider(), categories, settings]);
