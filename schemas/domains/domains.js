// domains
import project from './project'
import projectStructure from './project/structure.js'
import projectStructureAspects from './project/structureAspects.js'

import article from './article'
import toy from './toy'
import page from './page'
import author from './author'

// For main schema.js
export default [project, projectStructure, ...projectStructureAspects, article, toy, page, author]

// for Structure Builder
export const domains = [
  {
    name: 'project',
    title: 'Project',
    icon: project.icon,
  },
  {
    name: 'article',
    title: 'Article',
    icon: article.icon,
  },
  {
    name: 'toy',
    title: 'Toy',
    icon: toy.icon,
  },
  {
    name: 'page',
    title: 'Page',
    icon: page.icon,
  },
  {
    name: 'author',
    title: 'Author',
    icon: author.icon,
  },
]
