export default {
  name: "graphicImage",
  type: "object",
  title: "image",
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
      title: "Alt Text",
    },
  ],
};
