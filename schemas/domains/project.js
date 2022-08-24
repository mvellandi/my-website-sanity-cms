import { project as icon } from "../../icons";

export default {
  name: "project",
  type: "document",
  title: "Project",
  icon,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "sector",
      type: "string",
      title: "Sector",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      title: "Short Description",
      rows: 3,
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "summary",
      type: "array",
      title: "Summary",
      validation: (Rule) => Rule.required(),
      of: [{ type: "block" }],
    },
    {
      name: "features",
      type: "array",
      title: "Features",
      of: [{ type: "block" }],
    },
    {
      name: "structure",
      type: "projectStructure",
      title: "Tech / Design Structure",
    },
    {
      name: "process",
      type: "array",
      title: "Process",
      description: "Describe project's development process",
      validation: (Rule) => Rule.required(),
      of: [
        { type: "headingRichText", title: "Subheading and Text" },
        { type: "richText", title: "Text" },
      ],
    },
    {
      name: "media",
      type: "array",
      title: "Media",
      description: "Screenshot project images",
      of: [{ type: "graphicFigure" }],
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
