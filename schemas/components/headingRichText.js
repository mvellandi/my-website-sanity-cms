import { headingRichText as icon } from "./icons";

export default {
  name: "headingRichText",
  title: "Heading with Rich Text",
  type: "object",
  icon: () => icon({ width: "80%" }),
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
      console.log(body);
      const subtitle = body
        ? body[0]["children"][0]["text"]
        : "empty body text";
      return {
        title: heading,
        subtitle,
        media: () => icon({ width: "80%" }),
      };
    },
  },
};
