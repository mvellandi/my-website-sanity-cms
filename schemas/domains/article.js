import { RiArticleLine as icon } from "react-icons/ri";

export default {
  name: "article",
  type: "document",
  title: "Article",
  icon: () => icon({ size: "1.6rem" }),
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
