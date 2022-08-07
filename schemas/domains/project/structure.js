export default {
  name: "projectStructure",
  type: "object",
  title: "Project Structure",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
      initialValue: "Tech / Design",
      readOnly: true,
    },
    {
      name: "body",
      type: "array",
      title: "Body",
      of: [
        {
          type: "projectStructureAspect",
        },
      ],
    },
  ],
};
