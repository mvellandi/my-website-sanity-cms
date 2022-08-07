// domains
import app from "./app";
import cms from "./cms";
import codeLanguage from "./codeLanguage";
import codeLibrary from "./codeLibrary";
import crm from "./crm";
import db from "./db";
import design from "./design";
import esp from "./esp";
import generalTool from "./generalTool";
import host from "./host";
import testing from "./testing";

export default [
  app,
  cms,
  codeLanguage,
  codeLibrary,
  crm,
  db,
  design,
  esp,
  generalTool,
  host,
  testing,
];

export const displayCategories = [
  {
    title: "App Framework",
    name: "category_app",
  },
  {
    title: "CMS",
    name: "category_cms",
  },
  {
    title: "Code Language",
    name: "category_codeLanguage",
  },
  {
    title: "Code Library",
    name: "category_codeLibrary",
  },
  {
    title: "CRM",
    name: "category_crm",
  },
  {
    title: "Database",
    name: "category_database",
  },
  {
    title: "Design",
    name: "category_design",
  },
  {
    title: "ESP",
    name: "category_esp",
  },
  {
    title: "General Tool",
    name: "category_generalTool",
  },
  {
    title: "Host",
    name: "category_host",
  },
  {
    title: "Testing",
    name: "category_testing",
  },
];
