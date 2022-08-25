import { richText as icon } from "./icons";

export default {
  name: "richText",
  type: "object",
  title: "Rich Text",
  icon: () => icon({ width: "80%" }),
  fields: [
    {
      name: "body",
      type: "array",
      title: "Body",
      of: [
        {
          type: "block",
        },
        {
          type: "graphicFigure",
        },
      ],
    },
  ],
  preview: {
    select: { body: "body" },
    prepare({ body }) {
      return {
        title: body[0]["children"][0]["text"],
        media: () => icon({ width: "80%" }),
      };
    },
  },
};
