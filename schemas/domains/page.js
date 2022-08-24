import { IoDocumentTextOutline as icon } from "react-icons/io5";

export default {
  name: "page",
  type: "document",
  title: "Page",
  icon: () => icon({ size: "1.6rem" }),
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
