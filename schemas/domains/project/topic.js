export default {
  name: "projectTopic",
  type: "object",
  title: "Project Topic",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
      options: {
        list: [
          { value: "Summary", title: "Summary" },
          { value: "Features", title: "Features" },
          { value: "Process", title: "Process" },
          { value: "Project Links", title: "Project Links" },
        ],
      },
    },
    {
      name: "text",
      type: "array",
      title: "Paragraph(s)",
      of: [
        {
          type: "richText",
          title: "Paragraph(s)",
        },
      ],
      hidden: ({ parent, value }) => {
        return parent?.heading === "Process" || !parent?.heading;
      },
    },
    {
      name: "subtopic",
      type: "array",
      title: "Subtopic",
      of: [
        {
          type: "headingRichText",
          title: "Heading with Paragraph(s)",
        },
        {
          type: "richText",
          title: "Paragraph(s)",
        },
      ],
      hidden: ({ parent, value }) => {
        return parent?.heading !== "Process" || !parent?.heading;
      },
    },
  ],
};
