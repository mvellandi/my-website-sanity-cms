export default {
  name: "projectMedia",
  type: "object",
  title: "Project Media",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      initialValue: "Media",
      readOnly: true,
    },
    {
      name: "media",
      type: "array",
      title: "Media",
      of: [
        {
          type: "graphicFigure",
        },
      ],
    },
  ],
};
