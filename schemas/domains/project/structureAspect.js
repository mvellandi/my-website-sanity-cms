export default {
  name: "projectStructureAspect",
  type: "object",
  title: "Aspect",
  fields: [
    {
      name: "type",
      type: "string",
      title: "Type",
      options: {
        list: [
          { value: "App", title: "App" },
          { value: "CMS", title: "CMS" },
          { value: "Code", title: "Code" },
          { value: "CRM", title: "CRM" },
          { value: "DB", title: "DB" },
          { value: "Design", title: "Design" },
          { value: "ESP", title: "ESP" },
          { value: "Host", title: "Host" },
          { value: "Libs", title: "Libs" },
          { value: "Testing", title: "Testing" },
          { value: "Tools", title: "Tools" },
        ],
      },
    },
    {
      name: "value",
      type: "string",
      title: "value",
    },
  ],
};
