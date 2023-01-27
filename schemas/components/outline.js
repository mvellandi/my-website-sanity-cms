import { outline as icon } from "./icons";

export default {
  name: "outline",
  title: "Outline with Heading and Rich Text",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "body",
      type: "array",
      title: "Body",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
  preview: {
    select: { heading: "heading", body: "body" },
    prepare({ heading, body }) {
      const subtitle = body
        ? body[0]["children"][0]["text"]
        : "empty body text";
      return {
        title: heading,
        subtitle,
        media: () => icon({ size: "1.6rem" }),
      };
    },
  },
};
