import {
  stack,
  handshake,
  library,
  cms,
  code,
  database,
  pen,
  envelope,
  tool,
  warehouse,
  beaker,
} from "../../icons";

export const categories = [
  {
    title: "App Framework",
    name: "category_app",
    fieldTitle: "App Framework Name",
    icon: stack,
  },
  {
    title: "CMS",
    name: "category_cms",
    fieldTitle: "CMS Name",
    icon: cms,
  },
  {
    title: "Code Language",
    name: "category_codeLanguage",
    fieldTitle: "Programming Language Name",
    icon: code,
  },
  {
    title: "Code Library",
    name: "category_codeLibrary",
    fieldTitle: "Code Library Name",
    icon: library,
  },
  {
    title: "CRM",
    name: "category_crm",
    fieldTitle: "CRM Name",
    icon: handshake,
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
    icon: pen,
  },
  {
    title: "ESP",
    name: "category_esp",
    fieldTitle: "Email Service Provider Name",
    icon: envelope,
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
    icon: warehouse,
  },
  {
    title: "Testing",
    name: "category_testing",
    fieldTitle: "Testing Tool Name",
    icon: beaker,
  },
];

// create categories
export default categories.map((cat) => {
  return {
    name: cat.name,
    title: cat.title,
    type: "document",
    fields: [
      {
        name: "name",
        title: cat.fieldTitle,
        type: "string",
      },
    ],
  };
});
