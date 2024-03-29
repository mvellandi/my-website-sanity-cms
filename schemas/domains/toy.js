import { MdOutlineToys as icon } from "react-icons/md";

export default {
  name: "toy",
  type: "document",
  title: "Toy",
  icon: () => icon({ size: "1.7rem" }),
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
      name: "coverImage",
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
