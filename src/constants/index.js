import {
  mobile,
  backend,
  creator,
  web,
  webflow,
  next,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  indie,
  jobit,
  tripguide,
  threejs,
  taskpro,
  filmoteka,
  nike,
  podcast,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Responsive Design",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "webflow",
    icon: webflow,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Affnotech Lviv",
    icon: reactjs,
    iconBg: "#383E56",
    date: "March 2022 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "KPI Creatives LLC",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Sept 2023 - Present",
    points: [
      "Front-End Development: Utilized HTML, CSS, and JavaScript frameworks (such as React, Next) to create responsive and user-friendly interfaces.",
      "Collaborated with designers to translate UI/UX wireframes into functional and appealing interactive applications.",
      "Back-End Development:Developed server-side logic using language  Node.js.",
      "Managed database using  NoSQL (MongoDB),implemented RESTful APIs to facilitate communication between the front-end and back-end systems.",
    ],
  },
];

const projects = [
  {
    name: "Indie Video Editors",
    description:
      "Web aplication that has a payment system and its own file upload system, helps clients create professional content together with video editors.The code is in a private repository, due to NDA policy, but you can contact me and i will tell you how i did this work.",
    site: "https://indiev.org",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
    ],
    image: indie,
    source_code_link: "https://github.com/Kostiantyn1303/creative-indiev",
  },
  {
    name: "Nike",
    description:
      "Nike is a sleek and modern layout is crafted to provide you with an immersive browsing experience.Dive into the world of style and innovation, and find the perfect pair that matches your lifestyle.",
    site: "https://nike-store-85c7.onrender.com",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://github.com/Kostiantyn1303/nike-store",
  },
  {
    name: "Task pro",
    description:
      "TaskPro is a widely used project management tool that utilizes boards, lists, and cards to help individuals and teams organize their work and collaborate effectively.A great application for self-organization and for team projects.",
    site: "https://serhiirepinskyi.github.io/project-future777-frontend/welcome",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "mongo db",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: taskpro,
    source_code_link:
      "https://github.com/Kostiantyn1303/project-future777-frontend",
  },
  {
    name: "Filmoteka",
    description:
      "Filmoteka is a user-friendly application dedicated to helping people discover and enjoy great films based on their preferences and interests. With a sleek and intuitive interface, the app makes the movie-watching experience enjoyable and tailored to individual tastes.",
    site: "https://serhiirepinskyi.github.io/filmoteka-team-project/",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: filmoteka,
    source_code_link:
      "https://github.com/Kostiantyn1303/filmoteka-team-project",
  },
  {
    name: "Start Podcast",
    description:
      "The landing page for Start Podcast is designed to effectively promote and sell our comprehensive podcast video service. This page aims to attract visitors, inform them about the service's capabilities, and convert them into customers.",
    site: "#",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "webflow",
        color: "pink-text-gradient",
      },
    ],
    image: podcast,
    source_code_link: "https://www.start-podcast.com",
  },
];

export { services, technologies, experiences, projects };
