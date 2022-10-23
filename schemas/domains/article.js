import { RiArticleLine as icon } from "react-icons/ri";
import SlugInput from "sanity-plugin-prefixed-slug";

export default {
  name: "article",
  type: "document",
  title: "Article",
  icon: () => icon({ size: "1.6rem" }),
  fields: [
    {
      name: "headline",
      type: "string",
      title: "Headline",
    },
    {
      name: "subheading",
      type: "text",
      title: "Subheading",
      rows: 3,
    },
    {
      name: "slug",
      type: "slug",
      inputComponent: SlugInput,
      options: {
        source: "headline",
        urlPrefix: "https://localhost:3000/articles/",
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
      name: "thumb",
      type: "graphicImage",
      title: "Article Thumbnail",
    },
    {
      name: "body",
      type: "richText",
      title: "Body",
    },
  ],
};
