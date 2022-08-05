export default {
  name: "projectSection",
  type: "object",
  title: "Project Section",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
      options: {
        list: [
          { value: "Summary", title: "Summary" },
          { value: "Features", title: "Features" },
          { value: "Process", title: "Process" },
          { value: "Project Links", title: "Project Links" },
        ],
      },
    },
    {
      name: "text",
      type: "array",
      title: "Text",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
