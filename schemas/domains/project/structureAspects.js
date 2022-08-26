import { entriesUnique } from "./utilities";
import categories from "../../categories";

// For the preview, we're statically looking up references that may not exist in the array
// since it's not possible to see how many values there are. There shouldn't be more than 6, so that's a
// hard limit set. If some are undefined, we'll filter out before displaying
export default categories.map(({ name, title }) => {
  return {
    name: `projectStructure_${name.split("category_")[1]}`,
    title,
    type: "object",
    fields: [
      {
        name: "values",
        type: "array",
        title: "Values",
        of: [{ type: "reference", to: [{ type: name }] }],
        validation: (Rule) => [Rule.required(), Rule.custom(entriesUnique)],
      },
    ],
    preview: {
      select: {
        v1: "values.0.name",
        v2: "values.1.name",
        v3: "values.2.name",
        v4: "values.3.name",
        v5: "values.4.name",
        v6: "values.5.name",
      },
      prepare({ v1, v2, v3, v4, v5, v6 }) {
        const subtitle = [v1, v2, v3, v4, v5, v6]
          .filter((v) => v || false)
          .join(", ");
        return {
          title,
          subtitle,
          media: categories.find((c) => c.name === name)["icon"],
        };
      },
    },
  };
});
