import { entriesUnique } from "./utilities";
import at from "./structureAspects.js";

const aspectTypes = at.map(({ name }) => {
  return { type: name };
});

export default {
  name: "projectStructure",
  type: "object",
  title: "Project Structure",
  fields: [
    {
      name: "aspects",
      type: "array",
      title: "Aspects",
      of: [...aspectTypes],
      validation: (Rule) => [Rule.custom(entriesUnique)],
    },
  ],
};
