export default {
  name: "site",
  title: "Site Settings",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
    },
    {
      name: "description",
      title: "Meta Description",
      type: "text",
    },
  ],
};
