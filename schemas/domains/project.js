import { FaProjectDiagram as icon } from "react-icons/fa";
import SlugInput from "sanity-plugin-prefixed-slug";

export default {
  name: "project",
  type: "document",
  title: "Project",
  icon: () => icon({ size: "1.5rem" }),
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      inputComponent: SlugInput,
      options: {
        source: "name",
        urlPrefix: "https://localhost:3000/projects/",
        // Use isUnique/maxLength just like you would w/ the regular slug field
        // isUnique: MyCustomIsUniqueFunction,
        slugify: (input) =>
          input
            .toLowerCase()
            //Remove spaces
            .replace(/\s+/g, "-")
            //Remove special characters
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
      },
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
      name: "coverImage",
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
      name: "links",
      type: "array",
      title: "Project Links",
      description: "Links to project's website, GitHub, etc.",
      of: [{ type: "textLink" }],
    },
    {
      name: "media",
      type: "array",
      title: "Media",
      description: "Screenshot project images",
      of: [{ type: "graphicFigure" }],
    },
    {
      name: "process",
      type: "array",
      title: "Process",
      description: "Describe project's development process",
      validation: (Rule) => Rule.required(),
      of: [
        { type: "richText", title: "'Process' Heading and Text" },
        { type: "headingRichText", title: "Custom Heading and Text" },
        { type: "outline", title: "Outline" },
      ],
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
