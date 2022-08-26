import { cms } from "./icons";
import {
  FaRegHandshake as handshake,
  FaWarehouse as warehouse,
} from "react-icons/fa";
import { FiPenTool as pen } from "react-icons/fi";
import { GoTools as tool } from "react-icons/go";
import { GrTest as beaker } from "react-icons/gr";
import { HiLibrary as library, HiOutlineCode as code } from "react-icons/hi";
import { MdOutlineEmail as envelope } from "react-icons/md";
import { ImDatabase as database } from "react-icons/im";
import { RiStackFill as stack } from "react-icons/ri";

// for Structure Builder
export const categories = [
  {
    title: "App Framework",
    name: "category_app",
    fieldTitle: "App Framework Name",
    icon: () => stack({ size: "1.6rem" }),
  },
  {
    title: "CMS",
    name: "category_cms",
    fieldTitle: "CMS Name",
    icon: () => cms({ width: "80%" }),
  },
  {
    title: "Code Language",
    name: "category_codeLanguage",
    fieldTitle: "Programming Language Name",
    icon: () => code({ size: "1.7rem" }),
  },
  {
    title: "Code Library",
    name: "category_codeLibrary",
    fieldTitle: "Code Library Name",
    icon: () => library({ size: "1.7rem" }),
  },
  {
    title: "CRM",
    name: "category_crm",
    fieldTitle: "CRM Name",
    icon: () => handshake({ size: "1.9rem" }),
  },
  {
    title: "Database",
    name: "category_database",
    fieldTitle: "Database Name",
    icon: database,
  },
  {
    title: "Design",
    name: "category_design",
    fieldTitle: "Design Tool Name",
    icon: () => pen({ size: "1.5rem" }),
  },
  {
    title: "ESP",
    name: "category_esp",
    fieldTitle: "Email Service Provider Name",
    icon: () => envelope({ size: "1.7rem" }),
  },
  {
    title: "General Tool",
    name: "category_tool",
    fieldTitle: "General Tool Name",
    icon: tool,
  },
  {
    title: "Host",
    name: "category_host",
    fieldTitle: "Host Provider Name",
    icon: () => warehouse({ size: "1.4rem" }),
  },
  {
    title: "Testing",
    name: "category_testing",
    fieldTitle: "Testing Tool Name",
    icon: beaker,
  },
];

// For main schema.js
export default categories.map(({ name, title, icon, fieldTitle }) => {
  return {
    name,
    title,
    type: "document",
    icon,
    fields: [
      {
        name: "name",
        title: fieldTitle,
        type: "string",
      },
    ],
  };
});
