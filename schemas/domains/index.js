// domains
import project from "./project";
// import projectMedia from "./project/media";
import projectStructure from "./project/structure";
import projectStructureAspect from "./project/structureAspect";

import article from "./article";
import toy from "./toy";
import page from "./page";
import author from "./author";

export default [
  project,
  projectStructure,
  projectStructureAspect,
  article,
  toy,
  page,
  author,
];

export const domains = [
  {
    title: "Project",
    name: "project",
  },
  {
    title: "Article",
    name: "article",
  },
  {
    title: "Toy",
    name: "toy",
  },
  {
    title: "Page",
    name: "page",
  },
  {
    title: "Author",
    name: "author",
  },
];
