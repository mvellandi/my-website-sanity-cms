import { entriesProvided, entriesUnique } from "../../utilities";

/*
function buildAspectValues(aspects) {

}
*/

const aspects = [
  { value: "App", title: "App", name: "app" },
  { value: "CMS", title: "CMS", name: "cms" },
  { value: "Code", title: "Code", name: "code" },
  { value: "Libraries", title: "Code Libraries", name: "codeLibrary" },
  { value: "CRM", title: "CRM", name: "crm" },
  { value: "Database", title: "Database", name: "database" },
  { value: "Design", title: "Design", name: "design" },
  { value: "ESP", title: "ESP", name: "esp" },
  { value: "Host", title: "Host", name: "host" },
  { value: "Testing", title: "Testing", name: "testing" },
  { value: "Tools", title: "Tools", name: "tool" },
];

export default {
  name: "projectStructureAspect",
  type: "object",
  title: "Aspect",
  fields: [
    {
      name: "type",
      type: "string",
      title: "Type",
      options: {
        list: [...aspects],
      },
      readOnly: ({ value }) => {
        return value ? true : false;
      },
    },
    {
      name: "app",
      type: "array",
      title: "Values",
      of: [{ type: "reference", to: [{ type: "category_app" }] }],
      // validation: buildEntriesValidationRule([entriesProvided, entriesUnique]),
      validation: (Rule) => [
        Rule.custom(entriesProvided),
        Rule.custom(entriesUnique),
      ],
      hidden: ({ parent, value }) => parent?.type !== "App" && !value,
    },
    {
      name: "cms",
      type: "array",
      title: "Value",
      options: { layout: "tags" },
      of: [{ type: "reference", to: [{ type: "category_cms" }] }],
      hidden: ({ parent, value }) => parent?.type !== "CMS" && !value,
    },
    {
      name: "code",
      type: "array",
      title: "Value",
      options: { layout: "tags" },
      of: [{ type: "reference", to: [{ type: "category_codeLanguage" }] }],
      hidden: ({ parent, value }) => parent?.type !== "Code" && !value,
    },
    {
      name: "codeLibrary",
      type: "array",
      title: "Value",
      options: { layout: "tags" },
      of: [{ type: "reference", to: [{ type: "category_codeLibrary" }] }],
      hidden: ({ parent, value }) => parent?.type !== "Libraries" && !value,
    },
    {
      name: "crm",
      type: "array",
      title: "Value",
      options: { layout: "tags" },
      of: [{ type: "reference", to: [{ type: "category_crm" }] }],
      hidden: ({ parent, value }) => parent?.type !== "CRM" && !value,
    },
    {
      name: "database",
      type: "array",
      title: "Value",
      options: { layout: "tags" },
      of: [{ type: "reference", to: [{ type: "category_database" }] }],
      hidden: ({ parent, value }) => parent?.type !== "Database" && !value,
    },
    {
      name: "design",
      type: "array",
      title: "Value",
      options: { layout: "tags" },
      of: [{ type: "reference", to: [{ type: "category_design" }] }],
      hidden: ({ parent, value }) => parent?.type !== "Design" && !value,
    },
    {
      name: "esp",
      type: "array",
      title: "Value",
      options: { layout: "tags" },
      of: [{ type: "reference", to: [{ type: "category_esp" }] }],
      hidden: ({ parent, value }) => parent?.type !== "ESP" && !value,
    },
    {
      name: "host",
      type: "array",
      title: "Value",
      options: { layout: "tags" },
      of: [{ type: "reference", to: [{ type: "category_host" }] }],
      hidden: ({ parent, value }) => parent?.type !== "Host" && !value,
    },
    {
      name: "testing",
      type: "array",
      title: "Value",
      options: { layout: "tags" },
      of: [{ type: "reference", to: [{ type: "category_testing" }] }],
      hidden: ({ parent, value }) => parent?.type !== "Testing" && !value,
    },
    {
      name: "tool",
      type: "array",
      title: "Value",
      options: { layout: "tags" },
      of: [{ type: "reference", to: [{ type: "category_tool" }] }],
      hidden: ({ parent, value }) => parent?.type !== "Tools" && !value,
    },
  ],
};
