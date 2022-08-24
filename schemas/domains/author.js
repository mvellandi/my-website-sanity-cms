import { person as icon } from "../../icons";

export default {
  name: "author",
  type: "document",
  title: "Author",
  icon,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "bio_short",
      type: "text",
      title: "Short Bio",
      rows: 3,
    },
    {
      name: "bio_full",
      type: "richText",
      title: "Full Bio",
    },
    {
      name: "image",
      type: "graphicImage",
      title: "Portrait Photo",
    },
  ],
};
