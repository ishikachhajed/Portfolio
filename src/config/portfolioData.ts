import type { Portfolio, TagColors } from "../types/portfolio";

export const PORTFOLIO_INFO: Portfolio = {
  meta: {
    createdAt: new Date().toISOString(),
    locale: "en-US",
    url: "https://ishikachhajed.github.io/portfolio", // update after deployment
    pdf: "/resume.pdf",
  },
  personal: {
    name: "Ishika Chhajed",
    title: "Software Engineer | Full Stack Developer",
    headline:
      "Java · Spring Boot · React.js · Node.js · MySQL · MongoDB",
    avatar: [
      { url: "./profile.jpg", label: "" },
    ],
    summary:
      "I'm a B.Tech student in Industrial Production Engineering at SGSITS Indore who transitioned into software development through hands-on projects, competitive programming, and continuous learning. I build scalable full-stack applications using Java, Spring Boot, React.js, Node.js, MySQL, and MongoDB, and have solved 500+ DSA problems. I'm passionate about backend engineering, system design, and developing software that solves real-world problems.",
    hero: {
      summary:
        "Hi, I'm Ishika Chhajed.\nI build secure backend systems, scalable web applications, and interactive developer tools. From full-stack social platforms to encrypted secret management systems, I enjoy turning complex ideas into polished software products.",
    },
    contact: {
      email: "ishikachhajed24@gmail.com",
      phone: "+91 74403 67214",
      location: "Indore, Madhya Pradesh, India",
      website: "https://ishikachhajed.github.io/portfolio",
      socials: [
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/ishika-chhajed-203136288/",
          icon: "SiLinkedin",
        },
        {
          label: "GitHub",
          url: "https://github.com/ishikachhajed",
          icon: "SiGithub",
        },
        {
          label: "LeetCode",
          url: "https://leetcode.com/u/ishikachhajed1044/",
          icon: "SiLeetcode",
        },
      ],
    },
  },
  highlights: [
    "Solved 500+ DSA problems across competitive coding platforms",
    "Cleared Round 1 of Hack With Infy 2026",
    "Built secure full-stack apps with Spring Boot, React, Node.js & MongoDB",
  ],
  skills: [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "Java",
          level: 88,
          icon: "SiJava",
          category: "backend",
          years: 2,
          note: "Primary language for DSA",
        },
        {
          name: "TypeScript",
          level: 80,
          icon: "SiTypescript",
          category: "frontend",
          years: 1,
        },
        {
          name: "JavaScript",
          level: 85,
          icon: "SiJavascript",
          category: "frontend",
          years: 2,
        },
        {
          name: "Python",
          level: 72,
          icon: "SiPython",
          category: "other",
          years: 1,
          note: "~6 months hands-on",
        },
        {
          name: "SQL",
          level: 80,
          icon: "SiMysql",
          category: "database",
          years: 1,
        },
      ],
    },
    {
      title: "Frontend",
      skills: [
        {
          name: "React.js",
          level: 85,
          icon: "SiReact",
          category: "frontend",
          years: 2,
          note: "Used in internship & projects",
        },
        {
          name: "Next.js",
          level: 75,
          icon: "SiNextdotjs",
          category: "frontend",
          years: 1,
        },
        {
          name: "HTML5",
          level: 90,
          icon: "SiHtml5",
          category: "frontend",
          years: 2,
        },
        {
          name: "CSS3",
          level: 88,
          icon: "SiCss3",
          category: "frontend",
          years: 2,
        },
        {
          name: "Tailwind CSS",
          level: 80,
          icon: "SiTailwindcss",
          category: "frontend",
          years: 2,
        },
        {
          name: "Bootstrap",
          level: 78,
          icon: "SiBootstrap",
          category: "frontend",
          years: 2,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Spring Boot",
          level: 85,
          icon: "SiSpringboot",
          category: "backend",
          years: 1,
          note: "Used in Envoy project",
        },
        {
          name: "Node.js",
          level: 80,
          icon: "SiNodedotjs",
          category: "backend",
          years: 2,
          note: "Used in ProConnect",
        },
        {
          name: "Express.js",
          level: 78,
          icon: "SiExpress",
          category: "backend",
          years: 2,
        },
        {
          name: "REST APIs",
          level: 85,
          category: "backend",
          years: 2,
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "MySQL",
          level: 82,
          icon: "SiMysql",
          category: "database",
          years: 2,
          note: "Used in Envoy",
        },
        {
          name: "MongoDB",
          level: 80,
          icon: "SiMongodb",
          category: "database",
          years: 2,
          note: "Used in ProConnect",
        },
      ],
    },
    {
      title: "CS Fundamentals",
      skills: [
        {
          name: "Data Structures & Algorithms",
          level: 88,
          category: "other",
          years: 2,
          note: "450+ problems solved",
        },
        {
          name: "OOP",
          level: 88,
          category: "other",
          years: 2,
        },
        {
          name: "System Design",
          level: 72,
          category: "other",
          years: 1,
          note: "~1 month exposure",
        },
        {
          name: "Operating Systems",
          level: 75,
          category: "other",
          years: 2,
        },
        {
          name: "DBMS",
          level: 80,
          category: "database",
          years: 2,
        },
      ],
    },
    {
      title: "Developer Tools",
      skills: [
        {
          name: "Git",
          level: 88,
          icon: "SiGit",
          category: "tooling",
          years: 3,
        },
        {
          name: "GitHub",
          level: 88,
          icon: "SiGithub",
          category: "tooling",
          years: 3,
        },
        {
          name: "Docker",
          level: 65,
          icon: "SiDocker",
          category: "tooling",
          years: 1,
        },
        {
          name: "VS Code",
          level: 90,
          icon: "SiVisualstudiocode",
          category: "tooling",
          years: 3,
        },
      ],
    },
    {
      title: "Data Science",
      skills: [
        {
          name: "NumPy",
          level: 75,
          icon: "SiNumpy",
          category: "data",
          years: 1,
        },
        {
          name: "Pandas",
          level: 75,
          icon: "SiPandas",
          category: "data",
          years: 1,
        },
        {
          name: "Matplotlib",
          level: 70,
          category: "data",
          years: 1,
        },
        {
          name: "Seaborn",
          level: 68,
          category: "data",
          years: 1,
        },
      ],
    },
  ],
  experience: [
    {
      id: "arihant-fullstack-intern",
      title: "Full Stack Developer Intern",
      company: "Arihant Capital Markets Ltd.",
      location: "Remote",
      date: { start: "2026-05", end: "2026-07" },
      summary:
        "Contributed to frontend modules for an MPIN-based authentication system used in financial applications within a brokerage environment.",
      bullets: [
        "Contributed to the development of frontend modules for an MPIN-based authentication system used in financial applications.",
        "Worked with React.js and JavaScript to build responsive and user-friendly interfaces.",
        "Collaborated with development teams to understand application workflows, API integration, and software development practices in a brokerage environment.",
        "Gained hands-on exposure to full-stack application architecture, financial systems, and agile development workflows.",
      ],
      tech: ["React.js", "JavaScript", "REST APIs", "Agile"],
    },
    {
      id: "assemble-frontend-intern",
      title: "Frontend Developer Intern",
      company: "Assemble",
      location: "Remote",
      date: { start: "2025-08", end: "2025-11" },
      summary:
        "Developed scalable and responsive web applications for an esports platform using React.js and JavaScript, serving 1,500+ active user registrations.",
      bullets: [
        "Developed scalable and responsive web applications using React.js and JavaScript for an esports platform supporting 1,500+ user registrations.",
        "Built 15+ reusable components, improving maintainability and accelerating feature delivery.",
        "Collaborated with cross-functional teams to deliver production-ready software with consistent performance across devices.",
        "Optimized frontend performance and mobile responsiveness, reducing bounce rate by 20%.",
      ],
      tech: ["React.js", "JavaScript", "CSS3", "Responsive Design"],
    },
  ],
  projects: [
    {
      id: "envoy",
      title: "Envoy – Secure Environment Variable Vault",
      description:
        "A secure configuration management platform designed to store and manage encrypted application secrets. Features AES-256 encrypted secret storage, JWT authentication and RBAC, 5+ REST APIs, a TypeScript CLI tool for secure environment configuration, and supports 100+ encrypted secrets.",
      tags: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "MySQL",
        "Next.js",
        "TypeScript",
        "Node.js CLI",
        "AES-256",
        "JWT",
      ],
      image:
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXpqYWFhbnBraWt3ZXhvajZsdjg5andyMGZzY2VibGg3bXE0MWxwayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2PuPWxuLV1FGyh03Ja/giphy.gif",
      href: "https://envoy-vault-frontend.vercel.app",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/ishikachhajed/Envoy",
          icon: "SiGithub",
        },
        {
          label: "NPM",
          url: "https://www.npmjs.com/package/envoy-vault-cli",
          icon: "SiNpm",
        },
        {
          label: "Live Demo",
          url: "https://envoy-vault-frontend.vercel.app",
          icon: "FaExternalLinkAlt",
        },
      ],
      isUnderDevelopment: false,
    },
    {
      id: "proconnect",
      title: "ProConnect",
      description:
        "A full-stack social networking platform supporting posts, comments, likes, and profile management. Built with REST API architecture, MongoDB backend, external API integrations, customizable themes, and a responsive user experience.",
      tags: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Full Stack",
      ],
      image:
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGtuYjY1emtsZmNjMXp1czdrdXR5bXE5ZDJheHVvZjY1azZxYnJieiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qzImRjQVb2OUI84mTt/giphy.gif",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/ishikachhajed/ProConnect",
          icon: "SiGithub",
        },
        {
          label: "Live Demo",
          url: "https://pro-connect-topaz.vercel.app",
          icon: "FaExternalLinkAlt",
        },
      ],
      isUnderDevelopment: false,
    },
    {
      id: "algolens",
      title: "AlgoLens",
      description:
        "An interactive DSA visualization platform helping students understand data structures and algorithms through animations and synchronized code execution. Visualizes 10+ DSA concepts with real-time Java code highlighting, speed controls, and animation controls.",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
        "Prism.js",
        "DSA",
        "Visualization",
        "Education",
      ],
      image:
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTFnOGF3d3BodjFvY3NhanY5cnl5bmd4Z243aXB5M3hrOHg3d2tmeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WvzQektcJxs0oDFkHq/giphy.gif",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/ishikachhajed/AlgoLens",
          icon: "SiGithub",
        },
        {
          label: "Live Demo",
          url: "https://ishikachhajed.github.io/AlgoLens",
          icon: "FaExternalLinkAlt",
        },
      ],
      isUnderDevelopment: false,
    },
  ],
  education: [
    {
      degree: "B.Tech in Industrial Production Engineering (Minor: Data Science)",
      school: "Shri G.S. Institute of Technology and Science (SGSITS), Indore",
      date: "2023 – 2027 (Expected)",
    },
  ],

  extras: {
    languages: [{ name: "English", level: "Proficient" }, { name: "Hindi", level: "Native" }],
    interests: ["competitive programming", "system design", "open source"],
    volunteer: [
      {
        id: "campus-contributor-shiksha",
        title: "Campus Contributor",
        company: "Shiksha.com",
        summary:
          "Selected as a Campus Contributor to create authentic college experience content and student-focused insights. Produced engaging video content and reviews that gained strong organic reach among prospective students. Represented SGSITS on a national education platform and received a stipend based on content performance.",
      },
      {
        id: "media-design-alumni-club",
        title: "Media & Design Team Member",
        company: "Alumni Student Club, SGSITS",
        date: { start: "2025-08", end: "2025-11" },
        summary:
          "Designed promotional posters, banners, and social media creatives for alumni and student engagement events. Edited event videos, promotional reels, and highlight compilations. Contributed creative content that increased event visibility and audience engagement.",
      },
      {
        id: "esummit-2024-volunteer",
        title: "Volunteer – E-Summit 2024",
        company: "E-Cell, SGSITS",
        date: "2024",
        summary:
          "Coordinated logistics and team operations for 500+ participants. Managed attendee registration, venue coordination, and participant support. Facilitated networking opportunities between students, startups, and industry professionals.",
      },
    ],
  },
};

// ---------- SMALL HELPERS ----------
export const tagColors: TagColors = {
  React: "bg-blue-100 text-blue-800",
  "React.js": "bg-blue-100 text-blue-800",
  CSS: "bg-teal-100 text-teal-800",
  CSS3: "bg-teal-100 text-teal-800",
  Tailwind: "bg-teal-100 text-teal-800",
  "Tailwind CSS": "bg-teal-100 text-teal-800",
  Bootstrap: "bg-purple-100 text-purple-900",
  "Design System": "bg-yellow-100 text-yellow-800",
  Education: "bg-green-100 text-green-800",
  Visualization: "bg-orange-100 text-purple-900",
  DSA: "bg-purple-300 text-purple-900",
  "Node.js CLI": "bg-green-700 text-white",
  "Node.js": "bg-green-600 text-white",
  "Express.js": "bg-gray-700 text-white",
  MongoDB: "bg-green-600 text-white",
  MySQL: "bg-blue-600 text-white",
  Java: "bg-orange-600 text-white",
  "Spring Boot": "bg-green-500 text-white",
  "Spring Security": "bg-green-700 text-white",
  TypeScript: "bg-blue-500 text-white",
  JavaScript: "bg-yellow-400 text-black",
  HTML: "bg-orange-500 text-white",
  "Next.js": "bg-black text-white",
  "Full Stack": "bg-gradient-to-r from-cyan-500 to-blue-600 text-white",
  "REST APIs": "bg-indigo-500 text-white",
  "AES-256": "bg-red-600 text-white",
  JWT: "bg-pink-600 text-white",
  "Prism.js": "bg-violet-600 text-white",
  "Prism.js code": "bg-violet-500 text-white",
  "Live Demo": "bg-cyan-500 text-white",
  "AI & ML": "bg-amber-100 text-amber-900",
  Python: "bg-blue-400 text-white",
  Docker: "bg-sky-500 text-white",
};
