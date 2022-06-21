import { backend, frontend, mobile, magento, salesforce, awsCloud } from "../icons";
import { ROUTE } from "../../routes/routes";
export const developersShort = [
  {
    type: "backend ",
    role: [
      {
        title: "ruby ",
        path: ROUTE.OUTSOURCE,
      },
      {
        title: "python ",
        path: ROUTE.OUTSOURCE,
      },
      {
        title: "PHP ",
        path: ROUTE.OUTSOURCE,
      },
      {
        title: "node.Js ",
        path: ROUTE.OUTSOURCE,
      },
      {
        title: "java ",
        path: ROUTE.OUTSOURCE,
      },
      {
        title: "magento ",
        path: ROUTE.OUTSOURCE,
      },
      {
        title: "golang ",
        path: ROUTE.OUTSOURCE,
      },
    ],
    icon: `${backend}`,
    id: "1",
  },
  {
    type: "frontend ",
    role: [
      {
        title: "react ",
        path: ROUTE.OUTSOURCE,
      },
      {
        title: "angular ",
        path: ROUTE.OUTSOURCE,
      },
      {
        title: "vue.Js ",
        path: ROUTE.OUTSOURCE,
      },
    ],
    icon: `${frontend}`,
    id: "2",
  },
  {
    type: "mobile ",
    role: [
      {
        title: "IOS ",
        path: ROUTE.OUTSOURCE,
      },
      {
        title: "android ",
        path: ROUTE.OUTSOURCE,
      },
      {
        title: "react native",
        path: ROUTE.OUTSOURCE,
      },
    ],
    icon: `${mobile}`,
    id: "3",
  },
  {
    type: "Cloud / AWS",
    role: [
      {
        title: "AWS Engineers",
        path: ROUTE.OUTSOURCE,
      },
    ],
    icon: `${awsCloud}`,
    id: "4",
  },
  {
    type: "Salesforce ",
    role: [
      {
        title: "Salesforce",
        path: ROUTE.OUTSOURCE,
      },
    ],
    icon: `${salesforce}`,
    id: "5",
  },
  {
    type: "Magento",
    role: [
      {
        title: ".Net",
        path: ROUTE.OUTSOURCE,
      },
    ],
    icon: `${magento}`,
    id: "6",
  },
];
