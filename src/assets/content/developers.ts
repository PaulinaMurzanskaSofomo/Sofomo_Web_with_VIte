import { backend, frontend, mobile, magento, salesforce, awsCloud } from "../icons";
import { ROUTE } from "../../routes";

export const developers = [
  {
    type: "backend developers",
    role: [
      {
        title: "ruby developers",
        path: ROUTE.OUTSOURCE,
      },
      {
        title: "python developers",
        path: ROUTE.OUTSOURCE,
      },
      {
        title: "PHP developers",
        path: ROUTE.OUTSOURCE,
      },
      {
        title: "node.Js developers",
        path: ROUTE.OUTSOURCE,
      },
      {
        title: "java developers",
        path: ROUTE.OUTSOURCE,
      },
      {
        title: "magento developers",
        path: ROUTE.OUTSOURCE,
      },
      {
        title: "golang developers",
        path: ROUTE.OUTSOURCE,
      },
    ],
    description: `We support all major backend technologies.`,
    icon: `${backend}`,
    id: "devs-1",
  },
  {
    type: "frontend developers",
    role: [
      {
        title: "react developers",
        path: ROUTE.OUTSOURCE,
      },
      {
        title: "angular developers",
        path: ROUTE.OUTSOURCE,
      },
      {
        title: "vue.Js developers",
        path: ROUTE.OUTSOURCE,
      },
    ],
    description: `We're specialists in React, Angular & Vue.js.`,
    icon: `${frontend}`,
    id: "devs-2",
  },
  {
    type: "mobile developers",
    role: [
      {
        title: "IOS developers",
        path: ROUTE.OUTSOURCE,
      },
      {
        title: "android developers",
        path: ROUTE.OUTSOURCE,
      },
      {
        title: "react native delevopers",
        path: ROUTE.OUTSOURCE,
      },
    ],
    description: `Launching a new app ? Lets's do it! iOS, Android & React Native.`,
    icon: `${mobile}`,
    id: "devs-3",
  },
  {
    type: "AWS Cloud Engineers",
    role: [
      {
        title: "AWS Engineers",
        path: ROUTE.OUTSOURCE,
      },
    ],
    description: `We've done it all from basic to advanced AWS infrastructure.`,
    icon: `${awsCloud}`,
    id: "devs-4",
  },
  {
    type: "Salesforce developers",
    role: [
      {
        title: "Salesforce Developers",
        path: ROUTE.OUTSOURCE,
      },
    ],
    description: `Take advantage of Salesforce, we've got you covered.`,
    icon: `${salesforce}`,
    id: "devs-5",
  },
  {
    type: "Magento",
    role: [
      {
        title: ".Net Developers",
        path: ROUTE.OUTSOURCE,
      },
    ],
    description: `We're experts in .Net framework/Core.`,
    icon: `${magento}`,
    id: "devs-6",
  },
];
