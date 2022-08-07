export default {
  name: "richText",
  type: "object",
  title: "Rich Text",
  fields: [
    {
      name: "body",
      type: "array",
      title: "Body",
      of: [
        {
          type: "block",
        },
        {
          type: "graphicFigure",
        },
      ],
    },
  ],
};
