import { article as icon } from "../../icons";

export default {
  name: "article",
  type: "document",
  title: "Article",
  icon,
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
