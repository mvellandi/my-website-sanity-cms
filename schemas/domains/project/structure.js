import { entriesUnique } from "./utilities";

export default {
  name: "projectStructure",
  type: "object",
  title: "Project Structure",
  fields: [
    {
      name: "aspects",
      type: "array",
      title: "Aspects",
      of: [
        {
          type: "projectStructureAspect",
        },
      ],
      validation: (Rule) => [Rule.custom(entriesUnique)],
    },
  ],
};
