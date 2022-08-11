export default {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "sector",
      type: "string",
      title: "Sector",
    },
    {
      name: "description",
      type: "text",
      title: "Short Description",
      rows: 3,
    },
    {
      name: "logo",
      type: "graphicImage",
      title: "Project Logo",
    },
    {
      name: "completionDate",
      type: "date",
      title: "Completion Date",
      initialValue: new Date().toISOString(),
    },
    {
      name: "summary",
      type: "array",
      title: "Summary",
      required: true,
      of: [{ type: "block" }],
    },
    {
      name: "features",
      type: "array",
      title: "Features",
      required: false,
      of: [{ type: "block" }],
    },
    {
      name: "structure",
      type: "projectStructure",
      title: "Tech / Design Structure",
      required: true,
    },
    {
      name: "process",
      type: "array",
      title: "Process",
      description: "Describe project's development process",
      required: true,
      of: [{ type: "headingRichText" }, { type: "richText" }],
    },
  ],
  orderings: [
    {
      name: "completionDateDesc",
      title: "Newest",
      by: [{ field: "completionDate", direction: "desc" }],
    },
    {
      name: "completionDateAsc",
      title: "Oldest",
      by: [{ field: "completionDate", direction: "asc" }],
    },
  ],
};
