export default {
  name: "projectStructure",
  type: "object",
  title: "Project Structure",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
      options: {
        list: [{ value: "Tech / Design", title: "Tech / Design" }],
      },
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
