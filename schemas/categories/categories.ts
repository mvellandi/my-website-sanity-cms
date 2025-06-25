import {cms} from './icons'
import {
  FaRegHandshake as handshake,
  FaWarehouse as warehouse,
} from 'react-icons/fa'
import {FiPenTool as pen} from 'react-icons/fi'
import {GoTools as tool} from 'react-icons/go'
import {GrTest as beaker} from 'react-icons/gr'
import {HiLibrary as library, HiOutlineCode as code} from 'react-icons/hi'
import {MdOutlineEmail as envelope} from 'react-icons/md'
import {ImDatabase as database} from 'react-icons/im'
import {RiStackFill as stack} from 'react-icons/ri'

// for Structure Builder
export const categories = [
  {
    title: 'App Framework',
    name: 'category_app',
    fieldTitle: 'App Framework Name',
    frontendTitle: 'App',
    icon: () => stack({size: '1.6rem'}),
  },
  {
    title: 'CMS',
    name: 'category_cms',
    fieldTitle: 'CMS Name',
    frontendTitle: 'CMS',
    icon: () => cms({width: '80%'}),
  },
  {
    title: 'Code Language',
    name: 'category_codeLanguage',
    fieldTitle: 'Programming Language Name',
    frontendTitle: 'Code',
    icon: () => code({size: '1.7rem'}),
  },
  {
    title: 'Code Library',
    name: 'category_codeLibrary',
    fieldTitle: 'Code Library Name',
    frontendTitle: 'Libs',
    icon: () => library({size: '1.7rem'}),
  },
  {
    title: 'CRM',
    name: 'category_crm',
    fieldTitle: 'CRM Name',
    frontendTitle: 'CRM',
    icon: () => handshake({size: '1.9rem'}),
  },
  {
    title: 'Database',
    name: 'category_database',
    fieldTitle: 'Database Name',
    frontendTitle: 'DB',
    icon: database,
  },
  {
    title: 'Design',
    name: 'category_design',
    fieldTitle: 'Design Tool Name',
    frontendTitle: 'Design',
    icon: () => pen({size: '1.5rem'}),
  },
  {
    title: 'ESP',
    name: 'category_esp',
    fieldTitle: 'Email Service Provider Name',
    frontendTitle: 'Email',
    icon: () => envelope({size: '1.7rem'}),
  },
  {
    title: 'General Tool',
    name: 'category_tool',
    fieldTitle: 'General Tool Name',
    frontendTitle: 'Tools',
    icon: tool,
  },
  {
    title: 'Host',
    name: 'category_host',
    fieldTitle: 'Host Provider Name',
    frontendTitle: 'Host',
    icon: () => warehouse({size: '1.4rem'}),
  },
  {
    title: 'Testing',
    name: 'category_testing',
    fieldTitle: 'Testing Tool Name',
    frontendTitle: 'Testing',
    icon: beaker,
  },
]

// For main schema.js
export default categories.map(({name, title, icon, fieldTitle}) => {
  return {
    name,
    title,
    type: 'document',
    icon,
    fields: [
      {
        name: 'name',
        title: fieldTitle,
        type: 'string',
      },
    ],
  }
})