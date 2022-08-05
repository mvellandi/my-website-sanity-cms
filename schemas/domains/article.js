export default {
  name: "article",
  type: "document",
  title: "Article",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "subheading",
      type: "text",
      title: "Subheading",
      rows: 3,
    },
    {
      name: "thumbnail",
      type: "graphicImage",
      title: "Article Thumbnail",
    },
    {
      name: "body",
      type: "richText",
      title: "Body",
    },
  ],
};
