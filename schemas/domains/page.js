import { page as icon } from "../../icons";

export default {
  name: "page",
  type: "document",
  title: "Page",
  icon,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "hero",
      type: "graphicImage",
      title: "Page Image",
    },
    {
      name: "body",
      type: "richText",
      title: "Body",
    },
  ],
};
