export default {
  name: "graphicFigure",
  type: "object",
  title: "Figure",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "alt",
      type: "string",
      title: "Alt text",
    },
    {
      name: "caption",
      type: "string",
      title: "Caption text",
    },
  ],
};
