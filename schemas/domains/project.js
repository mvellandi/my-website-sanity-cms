import sectionTemplate from "./project/sectionTemplate";

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
    },
    {
      name: "sections",
      type: "array",
      title: "Sections",
      // initialValue: sectionTemplate,
      of: [
        {
          type: "projectTopic",
        },
        {
          type: "projectStructure",
        },
        {
          type: "projectMedia",
        },
      ],
      validation: (Rule) => Rule.unique(),
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
