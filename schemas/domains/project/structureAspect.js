import { entriesProvided, entriesUnique } from "./utilities";

export const aspectTypes = [
  { value: "App", title: "App", name: "app" },
  { value: "CMS", title: "CMS", name: "cms" },
  { value: "Code", title: "Code", name: "codeLanguage" },
  { value: "Libraries", title: "Code Libraries", name: "codeLibrary" },
  { value: "CRM", title: "CRM", name: "crm" },
  { value: "Database", title: "Database", name: "database" },
  { value: "Design", title: "Design", name: "design" },
  { value: "ESP", title: "ESP", name: "esp" },
  { value: "Host", title: "Host", name: "host" },
  { value: "Testing", title: "Testing", name: "testing" },
  { value: "Tools", title: "Tools", name: "tool" },
];

const aspectValues = aspectTypes.map((a) => {
  return {
    name: a.name,
    type: "array",
    title: "Values",
    of: [{ type: "reference", to: [{ type: `category_${a.name}` }] }],
    validation: (Rule) => [
      Rule.custom(entriesProvided),
      Rule.custom(entriesUnique),
    ],
    hidden: ({ parent, value }) => parent?.type !== a.value && !value,
  };
});

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
        list: [...aspectTypes],
      },
      readOnly: ({ value }) => {
        return value ? true : false;
      },
    },
    ...aspectValues,
  ],
};
