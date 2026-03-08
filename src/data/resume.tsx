import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jerico Ibañez",
  initials: "JI",
  url: "https://jericoibanez.dev",
  location: "Manila, PH",
  locationLink: "https://www.google.com/maps/place/manila",
  description:
    "Full‑stack developer and automation engineer focused on scalable web systems and workflow automation. Full Stack Developer at Optrizo.",
  summary:
    "Full‑stack developer experienced in building and operating production web applications with TypeScript, React, Node.js, and PostgreSQL. I have contributed to platforms used by thousands, building authentication systems, backend APIs, and operational dashboards. Comfortable across the stack — from database design and backend logic to frontend implementation.",
  avatarUrl: "/avatar/me-light.png",
  avatarWidth: 150,
  avatarHeight: 150,
  coreSkills: [
    "Leadership",
    "Analytical Thinking",
    "Problem-Solving",
    "Communication",
    "Collaboration",
    "Design Thinking",
    "Adaptability",
    "Innovation",
    "Versatility",
    "Critical Thinking",
    "Time Management",
    "Attention to Detail",
    "Continuous Learning",
    "Team Building",
  ],
  skills: [
    {
      category: "Core Technologies",
      skills: ["TypeScript", "JavaScript", "Node.js", "React", "Next.js", "REST API Development"],
    },
    {
      category: "Backend Development",
      skills: ["Authentication & Authorization (JWT, NextAuth)", "Ruby on Rails", "Firebase Cloud Functions", "Python"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "Firebase Firestore", "Supabase"],
    },
    {
      category: "Tools & Workflow",
      skills: ["Git", "GitHub", "Agile/Scrum", "VS Code", "Vercel", "Firebase Hosting"],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "jericoibanez0326@gmail.com",
    tel: "+639123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Gujetamaa",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "linkedin.com/in/jerico-ibanez/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/optrizo",
        icon: Icons.facebook,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Optrizo Digital Solutions",
      href: "https://optrizo.com",
      badges: ["Founder"],
      location: "Remote",
      title: "Full-Stack Developer",
      start: "Mar 2025",
      end: "Oct 2025",
      description:
        "Co‑founded a student-led startup delivering digital solutions to SMEs. Built a real‑time queueing system with React, Supabase, and Twilio; integrated Pancake CRM and Busybee SMS; and implemented Make.com automations. Led full‑stack architecture, API design, and analytics automation across multiple client engagements.",
    },
    {
      company: "Digiteer Software Studio",
      href: "#",
      badges: ["Intern"],
      location: "Remote",
      title: "Software Engineer (Intern)",
      start: "Sept 2024",
      end: "Dec 2024",
      description:
        "Worked across backend and frontend to build and improve internal and client-facing applications. Resolved UI and API issues, implemented feature-supporting endpoints, and partnered with senior engineers on debugging and delivery.",
    },
  ],
  education: [
    {
      school: "De La Salle University - Manila",
      href: "https://www.dlsu.edu.ph",
      degree: "Bachelor of Science in Information Technology, Minor in Psychology",
      logoUrl: "/education/DLSU-LOGO.png",
      start: "Aug 2020",
      end: "Feb 2026",
      achievements: [],
      relevantElectives: [
        "Advanced Web Development",
        "Systems Integration",
        "Mobile App Development",
        "Data Mining & AI Principles",
        "Applied Data Analytics",
      ],
    },
  ],
  certifications: [
    {
      title: "DFIR Foundations and Techniques Course",
      href: "#",
      dates: "Jul 2025",
      description: "Blue Cape Security",
    },
    {
      title: "Airtable Builder Certification",
      href: "#",
      dates: "Feb 2025",
      description: "Airtable · Expires Mar 2027",
    },
    {
      title: "AWS Academy Cloud Foundations",
      href: "https://aws.amazon.com/training/awsacademy/",
      dates: "Apr 2024",
      description: "AWS Academy",
    },
  ],
  projects: [
    {
      title: "NexSkill Learning Portal",
      href: "#",
      dates: "Dec 2025 - Jan 2026",
      active: true,
      description:
        "Developed a prototype learning platform supporting structured courses, progress tracking, and student engagement. Designed role-based application structure, interactive learning experiences, AI-assisted recommendations, community and coaching features, and certificate issuance/verification flows.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      links: [
        {
          type: "Website",
          href: "https://nexskill-cms.vercel.app/login",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://image.thum.io/get/maxAge/12/width/700/https://nexskill-cms.vercel.app/login",
      video: "",
    },
    {
      title: "Barangay Fairview E-Governance Portal",
      href: "#",
      dates: "Sept 2024 - Nov 2025",
      active: true,
      description:
        "Built a full‑stack e‑governance platform for managing resident records, document requests, and incident reports for thousands of residents. Designed backend APIs and schemas, implemented role‑based authentication, and delivered dashboards and reporting tools with React and TypeScript.",
      technologies: ["React", "TypeScript", "Node.js", "JavaScript", "PostgreSQL", "REST APIs"],
      links: [
        {
          type: "Website",
          href: "https://capstone-project-six-livid.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://image.thum.io/get/maxAge/12/width/700/https://capstone-project-six-livid.vercel.app",
      video: "",
    },
    {
      title: "Hakum Auto Care Services Platform",
      href: "https://www.hakumautocare.com/",
      dates: "Mar 2025 – Oct 2025",
      active: true,
      description:
        "Maintained frontend and backend features for booking, scheduling, and customer workflows. Implemented APIs and backend logic, refined UI components, ran functional and API tests, and resolved 30+ cross‑stack issues. Delivered UI/UX and SEO improvements to boost engagement.",
      technologies: ["React", "TypeScript", "Supabase", "BusyBee", "Supabase", "Airtable"],
      links: [
        {
          type: "Website",
          href: "https://www.hakumautocare.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://image.thum.io/get/width/1200/crop/675/noanimate/https://www.hakumautocare.com/",
      video: "",
    },
    {
      title: "Mayor Javi Benitez Public Information Website",
      href: "#",
      dates: "Sept 2024 – Dec 2024",
      active: true,
      description:
        "Designed and delivered an end‑to‑end module for a public communication platform serving thousands of constituents. Implemented APIs for announcements, integrated frontend components, automated distribution via web UI, SMS, and email, and enforced data validation and consistency.",
      technologies: ["React", "TypeScript", "Ruby on Rails", "PostgreSQL"],
      links: [],
      image: "/projects/javi.png",
      video: "",
    },
  ],
  optrizoProjects: [
    {
      title: "Hakum Auto Care - Queueing System",
      tags: ["Automation", "CRM", "Real-time", "SMS Integration"],
      description:
        "Real‑time queueing management system with SMS notifications built using React, TypeScript, Supabase, and Twilio to streamline customer flow.",
      technologies: ["React", "TypeScript", "Supabase", "Twilio"],
      dates: "2025-2026",
      image: "",
    },
    {
      title: "Airtable Automation Workflows",
      tags: ["Automation", "API Integration", "Supabase", "Make.com"],
      description:
        "Custom automation workflows connecting Airtable to external services for billing automation, inventory management, and customer synchronization.",
      technologies: ["Airtable", "Make.com", "Supabase", "REST APIs"],
      dates: "2025",
      image: "",
    },
    {
      title: "Pancake PH Partner Integrations",
      tags: ["API Integration", "CRM", "Automation", "React"],
      description:
        "Developed integrations for Pancake CRM and automated workflows for client onboarding, tagging, and customer communications.",
      technologies: ["React", "Pancake API", "Make.com", "Supabase"],
      dates: "2025",
      image: "",
    },
  ],
} as const;