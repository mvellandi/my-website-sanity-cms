import { entriesProvided, entriesUnique } from "./utilities";
import categories from "../../categories";

const aspects = categories.map(({ title }) => {
  return {
    title,
    value: title,
  };
});

const aspectValues = categories.map(({ name, title }) => {
  return {
    name: name.split("category_")[1],
    type: "array",
    title: "Values",
    of: [{ type: "reference", to: [{ type: name }] }],
    validation: (Rule) => [
      Rule.custom(entriesProvided),
      Rule.custom(entriesUnique),
    ],
    hidden: ({ parent, value }) => parent?.aspect !== title && !value,
  };
});

export default {
  name: "projectStructureAspect",
  type: "object",
  title: "Aspect",
  fields: [
    {
      name: "aspect",
      type: "string",
      title: "Aspect",
      options: {
        list: [...aspects],
      },
      readOnly: ({ value }) => {
        return value ? true : false;
      },
    },
    ...aspectValues,
  ],
  preview: {
    select: { aspect: "aspect" },
    prepare({ aspect }) {
      return {
        title: aspect,
        media: categories.find((c) => c.title === aspect)["icon"],
      };
    },
  },
};
