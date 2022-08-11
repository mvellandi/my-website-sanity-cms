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
      validation: (Rule) =>
        Rule.custom((values, context) => {
          // if there are duplicate entries
          if (values) {
            const uniques = values.map((v) => v._ref);
            if (new Set(uniques).size !== values.length) {
              return "Please remove duplicate entries";
            }
          }
          return true;
        }),
    },
  ],
};
