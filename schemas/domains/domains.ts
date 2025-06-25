import article from './article'
import author from './author'
import page from './page'
import project from './project'
import toy from './toy'
import projectStructure from './project/structure'
import structureAspects from './project/structureAspects'

const domains = [article, author, page, project, toy, projectStructure, ...structureAspects]
export default domains 