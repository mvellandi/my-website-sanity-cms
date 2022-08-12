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

console.log("Page Icon:\n", page.icon);
console.log("Author Icon:\n", author.icon);

export const domains = [
  {
    name: "project",
    title: "Project",
    icon: project.icon,
  },
  {
    name: "article",
    title: "Article",
    icon: article.icon,
  },
  {
    name: "toy",
    title: "Toy",
    icon: toy.icon,
  },
  {
    name: "page",
    title: "Page",
    icon: page.icon,
  },
  {
    name: "author",
    title: "Author",
    icon: author.icon,
  },
];
