const topics = [
  { value: "Summary", title: "Summary" },
  { value: "Features", title: "Features" },
  { value: "Process", title: "Process" },
  { value: "Project Links", title: "Project Links" },
];

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
        list: [...topics],
      },
      readOnly: ({ parent, value }) => {
        return (
          topics.map((t) => t.value).includes(value) &&
          (parent?.text || parent?.subtopic)
        );
      },
    },
    {
      name: "text",
      type: "array",
      title: "Text Area",
      of: [
        {
          type: "block",
          title: "Text Area",
        },
      ],
      hidden: ({ parent }) => {
        return parent?.heading === "Process" || !parent?.heading;
      },
    },
    {
      name: "subtopic",
      type: "array",
      title: "Subtopic",
      of: [
        {
          type: "richText",
          title: "Text Area",
        },
        {
          type: "headingRichText",
          title: "Subheading with Text Area",
        },
      ],
      hidden: ({ parent }) => {
        return parent?.heading !== "Process" || !parent?.heading;
      },
    },
  ],
};
