# 3D Portfolio

A modern 3D personal portfolio website built with React, Vite, Three.js, React Three Fiber, Tailwind CSS, and Framer Motion.

This project showcases my skills, projects, work experience, and contact information through an interactive and visually engaging portfolio interface. It includes 3D models, animated sections, reusable React components, responsive layouts, and an EmailJS-powered contact form.

## Live Demo

https://yuvrajsingh-ys.netlify.app/

## Project Overview

The 3D Portfolio is a personal developer portfolio designed to present technical skills, project work, and professional experience in a more interactive way than a traditional static website.

The application uses React for component-based development, Three.js and React Three Fiber for 3D rendering, Framer Motion for animations, and Tailwind CSS for responsive styling.

The portfolio includes:

* Hero section with animated typewriter text
* Interactive 3D desktop model
* About section
* Work experience timeline
* Technology skills section with 3D icons
* Project showcase cards
* Contact form using EmailJS
* Animated star background
* Responsive design for desktop and mobile screens

## Tech Stack

* React.js
* Vite
* JavaScript
* HTML5
* CSS3
* Tailwind CSS
* Three.js
* React Three Fiber
* React Three Drei
* Framer Motion
* EmailJS
* React Router DOM
* React Simple Typewriter
* React Vertical Timeline
* React Parallax Tilt
* Git
* GitHub

## Repository Structure

```text
3DPortfolio
├── public
│   ├── logo.svg
│   └── vite.svg
├── src
│   ├── assets
│   │   ├── company
│   │   ├── tech
│   │   └── project/images/assets
│   ├── components
│   │   ├── canvas
│   │   │   ├── Ball.jsx
│   │   │   ├── Computers.jsx
│   │   │   ├── Earth.jsx
│   │   │   ├── Stars.jsx
│   │   │   └── index.js
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── Tech.jsx
│   │   ├── Works.jsx
│   │   └── index.js
│   ├── constants
│   │   └── index.js
│   ├── hoc
│   │   ├── SectionWrapper.jsx
│   │   └── index.js
│   ├── utils
│   │   └── motion.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── styles.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Key Features

### 1. Interactive 3D Hero Section

The hero section includes an animated introduction with typewriter text and a 3D desktop model rendered using Three.js, React Three Fiber, and Drei.

The 3D canvas uses:

* `Canvas` from React Three Fiber
* `OrbitControls`
* `useGLTF`
* `Suspense`
* Responsive scaling for mobile screens
* Lighting setup using hemisphere, point, and spot lights

### 2. Section-Based React Architecture

The project is organized into reusable sections such as:

* Navbar
* Hero
* About
* Experience
* Tech
* Works
* Contact
* Footer

Each section is separated into its own React component, making the project easier to maintain and update.

### 3. Work Experience Timeline

The experience section uses `react-vertical-timeline-component` to display professional experience in a structured vertical timeline format.

Experience data is stored in the constants file, making it easier to update content without changing component logic.

### 4. Technology Skills with 3D Icons

The technology section displays tools and technologies using 3D ball-style icons.

Technologies included in the project include:

* Java
* HTML5
* CSS3
* JavaScript
* ReactJS
* Tailwind CSS
* Three.js
* Git
* Firebase
* MySQL
* GraphQL

### 5. Project Showcase

The project section displays portfolio projects using reusable project cards. Each project card includes:

* Project image
* Project title
* Short description
* GitHub source code link
* Hover and animation effects

Projects included in the portfolio include:

* Crown Clothing
* Quiz App
* Music Store Database
* Other selected frontend/software projects

### 6. Contact Form with EmailJS

The contact section includes a functional contact form built with React state management and EmailJS.

The form collects:

* Name
* Email
* Message

When submitted, the form sends the message using EmailJS and shows success or error alerts based on the result.

### 7. Animations and Motion Effects

The project uses Framer Motion for smooth transitions and animations between sections.

Animation utilities are stored in:

```text
src/utils/motion.js
```

This helps keep animation logic reusable and organized.

### 8. Responsive Design

The layout is designed to work across desktop and mobile screens using Tailwind CSS responsive classes.

The 3D desktop model also adjusts based on screen size using `window.matchMedia`.

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Yuvraj3079/3DPortfolio.git
```

### 2. Navigate to the Project Folder

```bash
cd 3DPortfolio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The project should run locally on:

```text
http://localhost:5173
```

## Available Scripts

### Start Development Server

```bash
npm run dev
```

Runs the app in development mode using Vite.

### Build for Production

```bash
npm run build
```

Creates an optimized production build.

### Preview Production Build

```bash
npm run preview
```

Previews the production build locally.

### Run Linting

```bash
npm run lint
```

Runs ESLint to check code quality and unused directives.

## Main Dependencies

```json
{
  "@emailjs/browser": "^3.11.0",
  "@react-three/drei": "^9.88.0",
  "@react-three/fiber": "^8.14.5",
  "framer-motion": "^10.16.4",
  "maath": "^0.10.4",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-parallax-tilt": "^1.7.170",
  "react-router-dom": "^6.16.0",
  "react-simple-typewriter": "^5.0.1",
  "react-vertical-timeline-component": "^3.6.0",
  "three": "^0.149.0"
}
```

## What I Learned

Through this project, I practiced:

* Building a modern React application using Vite
* Creating reusable React components
* Structuring a frontend project with clean folders and constants
* Working with Three.js and React Three Fiber
* Loading and displaying 3D models using Drei
* Creating responsive layouts using Tailwind CSS
* Adding animations with Framer Motion
* Building project cards and timeline-based UI sections
* Managing form state in React
* Integrating EmailJS for contact form functionality
* Deploying a frontend portfolio website
* Using Git and GitHub for version control

## Future Improvements

* Add detailed project case studies with screenshots and live demo links
* Improve accessibility and keyboard navigation
* Add SEO metadata for better discoverability
* Optimize 3D assets for faster loading
* Add dark/light mode support
* Add automated deployment workflow
* Improve contact form validation and error handling
* Update work experience and project data dynamically from a CMS or JSON file

**Homepage visuals**

![portfolio](https://github.com/Yuvraj3079/3DPortfolio/assets/20551371/d206dfcc-be3e-45fc-ba1a-623c17c31176)
