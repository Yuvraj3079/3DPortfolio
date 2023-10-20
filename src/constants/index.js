/* eslint-disable no-unused-vars */
import {
  mobile,
  backend,
  creator,
  web,
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
  docker,
  java,
  mysql,
  graphql,
  firebase,
  meta,
  starbucks,
  tesla,
  shopify,
  sdi,
  kognitive,
  blockcube,
  carrent,
  jobit,
  tripguide,
  threejs,
  crown,
  penguins,
  quiz,
  music, bank,covid
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
];

const experiences = [
  {
    title: "Sales Team Lead",
    company_name: "SDI Marketing",
    icon: sdi,
    iconBg: "#383E56",
    date: "Feb 2022 - Present",
    points: [
      "Led the comprehensive onboarding process for 25+ newly hired talents, delivering orientations and training programs, ensuring a solid foundation for their success.",
      "Demonstrated leadership by motivating, developing, coaching, and leading team members, fostering a productive work environment where they reached their potential.",
      "Played a pivotal role in providing support to the sales staff, offering constructive feedback, and assisting in resolving customer issues, increasing sales performance by 20%.",
      "Led a dynamic 15-member team, employing coaching techniques that improved their skills and propelled them toward achieving individual and collective goals, increasing productivity.",
      "Took the helm in developing sales plans and strategies to steer the company toward its objectives, including analyzing market trends and identifying target customers.",
      "Demonstrated a discerning eye during recruitment, conducting interviews for new recruits, providing feedback on strengths, weaknesses, and suitability for the team.",
    ],
  },
  {
    title: "Sales Representative",
    company_name: "Kognitive Marketing",
    icon: kognitive,
    iconBg: "#E6DEDD",
    date: "Sept 2021 - Jan 2022",
    points: [
      "Actively spearheaded the acquisition of 70+ new credit card customers, showcasing a proactive approach to expanding the customer base and contributing to the organization's growth.",
      "Consistently delivered exceptional customer service, enhancing satisfaction, and driving increased sales, bolstering the company's reputation.",
      "Consistently exceeded monthly sales targets by an impressive average of 15 %, positively impacting the company's bottom line and showcasing a strong commitment to sales excellence.",
      "Achieved consistent success through a result-oriented approach, surpassing sales targets, and significantly contributing to the company's growth, establishing me as a top-performing sales professional.",
    ],
  },
  {
    title: "Business Analyst",
    company_name: "Blockcube",
    icon: blockcube,
    iconBg: "#383E56",
    date: "Aug 2018 - Jul 2019",
    points: [
      "Gathered client requirements and skillfully transformed them into comprehensive Business Requirements Documents (BRD), effectively closing the Scope of Work for 3 projects, ensuring clear project roadmaps.",
      "Collaborated closely with the team, providing guidance and clarification to help 13+ team members better understand and execute project requirements, promoting efficient teamwork.",
      "Conducted 2+ client presentations and product demos, actively seeking and collecting valuable feedback to refine and enhance project deliverables, fostering a client-centric approach.",
      "Maintained ongoing client interactions, addressing their day-to-day operational issues, and streamlining operations for improved efficiency and client satisfaction.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Crown Clothing",
    description:
      "eCommerce website using ReactJS, Styled-Components and TailwindCSS for storing product data, creating carts, building checkouts, managing orders, and processing customers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: crown,
    source_code_link: "https://github.com/Yuvraj3079/crwn-clothing",
  },
  {
    name: "Quiz App",
    description:
      "A JavaScript-based Quiz Game web app during college coursework, responsible for design, utilizing an open-source trivia API, featuring High Scores, and employing jQuery for input validation.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://github.com/Yuvraj3079/Quiz-Game",
  },
  {
    name: "Find The Penguins", 
    description:
      "A JavaScript-based web game called'Find The Penguins' for college coursework, featuring dynamic Yeti positioning, real-time user scoring, and interactive sound effects.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: penguins,
    source_code_link: "https://github.com/Yuvraj3079/Find-The-Penguins",
  },
  {
    name: "Music Store Database",
    description:
      "MySQL application for a music store client, facilitating data analysis across various tables, including customers, employees, artists, products, and more.",
    tags: [
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
    
    ],
    image: music,
    source_code_link: "https://github.com/Yuvraj3079/Music-Store-Database",
  },
  {
    name: "Nirayu Bank",
    description:
      "A college group project: designed a website from scratch using HTML, CSS, and JavaScript. Managed team tasks and conducted weekly scrum meetings, while also utilizing Photoshop for wireframe design.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/Yuvraj3079/Bank-Website",
  },
  {
    name: "Interactive COVID Visualizer",
    description:
      "Single page website to give peope some detailed insight on the spread and management of COVID-19. It was also a great tool that furthered my d3.js visualisation skills.",
    tags: [
      {
        name: "d3.js",
        color: "blue-text-gradient",
      },
      
    ],
    image: covid,
    source_code_link: "https://github.com/Yuvraj3079/Interactive-data-visualizations-of-COVID-19-using-D3.js",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
