export default {
  name: "toy",
  type: "document",
  title: "Toy",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "description",
      type: "text",
      title: "Short Description",
      rows: 3,
    },
    {
      name: "thumbnail",
      type: "graphicImage",
      title: "Toy Thumbnail",
    },
    {
      name: "url",
      type: "url",
      title: "URL",
    },
  ],
};
