export default {
  name: "projectStructure",
  type: "object",
  title: "Project Structure",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      initialValue: "Tech / Design",
      readOnly: true,
    },
    {
      name: "aspects",
      type: "array",
      title: "Aspects",
      of: [
        {
          type: "projectStructureAspect",
        },
      ],
    },
  ],
};
