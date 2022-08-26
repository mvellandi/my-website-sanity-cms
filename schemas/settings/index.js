import site from "./site";
import colors from "./colors";
import navigation from "./navigation";

// For main schema.js
export default [site, colors, navigation];

// for Structure Builder
export const settings = [
  {
    name: "site",
    title: "Metadata",
  },
  {
    name: "colors",
    title: "Colors",
  },
  {
    name: "navigation",
    title: "Main Navigation",
  },
];
