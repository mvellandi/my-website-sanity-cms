export const categories = [
  {
    title: "App Framework",
    name: "category_app",
    fieldTitle: "App Framework Name",
  },
  {
    title: "CMS",
    name: "category_cms",
    fieldTitle: "CMS Name",
  },
  {
    title: "Code Language",
    name: "category_codeLanguage",
    fieldTitle: "Programming Language Name",
  },
  {
    title: "Code Library",
    name: "category_codeLibrary",
    fieldTitle: "Code Library Name",
  },
  {
    title: "CRM",
    name: "category_crm",
    fieldTitle: "CRM Name",
  },
  {
    title: "Database",
    name: "category_database",
    fieldTitle: "Database Name",
  },
  {
    title: "Design",
    name: "category_design",
    fieldTitle: "Design Tool Name",
  },
  {
    title: "ESP",
    name: "category_esp",
    fieldTitle: "Email Service Provider Name",
  },
  {
    title: "General Tool",
    name: "category_tool",
    fieldTitle: "General Tool Name",
  },
  {
    title: "Host",
    name: "category_host",
    fieldTitle: "Host Provider Name",
  },
  {
    title: "Testing",
    name: "category_testing",
    fieldTitle: "Testing Tool Name",
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
