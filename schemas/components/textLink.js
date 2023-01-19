export default {
  name: "textLink",
  type: "object",
  title: "Text Link",
  fields: [
    {
      name: "text",
      type: "string",
      title: "Text",
    },
    {
      name: "url",
      type: "url",
      title: "Web Address",
      validation: (Rule) => Rule.required(),
    },
  ],
};
