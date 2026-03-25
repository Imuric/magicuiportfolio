import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Prathamesh Patil",
  initials: "PP",
  url: "https://resume.imuric.com",
  location: "Banglore, IN",
  locationLink: "https://www.google.com/maps/place/banglore",
  description:
    "Product Desinger",
  summary:
    "A Strategic Product Designer and systems thinker who architects scalable, developer-friendly design solutions. My unique background combining an [M.Des in Human-Computer Interaction](/#) with a [B.Tech in Computer Science and Engineering](/#) allows me to act as the critical bridge between executive-level strategy, user advocacy (UX), and developer experience (DX). I specialize in owning the design for complex, multi-tenant B2B and Fintech platforms, from foundational research to C-level stakeholder presentations.",
  avatarUrl: "Profile Photo.jpg",
  skills: [
    { name: "User Research"},
    { name: "Interaction Design"},
    { name: "Design Systems (Atomic Design)"},
    { name: "Wireframing"},
    { name: "Prototyping"},
    { name: "Agile Methodologies"},
    { name: "Design Thinking"},
    { name: "Branding"},
    { name: "Accessibility (WCAG)"},
  ],

  tools: [
  "Figma",
  "Adobe Creative Suite",
  "GitHub",
  "Framer",
  "Webflow",
  
  "Spline (3D)",
  "Notion",
  "Miro",
  "Tailwind CSS",
  "Mantine UI",
  "shadcnui",
  "Magic UI",
],


  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://imuric.com/blog", icon: NotebookIcon, label: "Writing" },
  ],
  contact: {
    email: "me@imuric.com",
    tel: "+918485847584",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/imuric",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/imuric",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/prathamesh3221",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:me@imuric.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Roxiler Systems",
      href: "https://roxiler.com",
      badges: [],
      location: "Pune, IN",
      title: "UI UX Designer",
      logoUrl: "roxiler.svg",
      start: "Aug 2025",
      end: "Present",
      description:`
         - Architected an advanced, 3-level variable-based design system in Figma. This system enables 18+ themes (light/dark modes, 9 color variations) to be generated from a single-screen design, driving massive gains in design consistency and development efficiency. 
         - Standardized the design-to-dev handoff process by creating a 40-page, single-source-of-truth Figma structure, significantly improving clarity and collaboration for researchers, developers, and QAs. 
         - Led the end-to-end, sole design for the core B2B Fintech lead-exchange platform. Owned the entire process from research and workflow mapping to prototyping and implementation. 
         - Served as the key design partner for C-level leadership (CTO, CDO) and Tech Leads, translating business goals into functional design, defending decisions based on user research, and navigating complex technical constraints. 
         - Owned the full UX research lifecycle for new features, conducting heuristic evaluations, competitive analysis (5-10 competitors), and validating designs with developers and testers. 
         - Designed a complex, multi-tenant platform accommodating distinct user roles (Admins, Buyers, and Affiliates), ensuring a seamless and intuitive experience for each.
  `,
    },
    {
      company: "AdroApex Multiservices",
      badges: [],
      href: "https://adroapex.com",
      location: "Kolhapur, IN",
      title: "Visual Design Intern",
      logoUrl: "adroapex.svg",
      start: "Jan 2025",
      end: "Jun 2025",
      description:`
          - Pitched and executed an innovative dual-navigation strategy (by 'Brand' vs. by 'Application') for a B2B e-commerce client ('DSP Equipments').
          - This new IA resulted in a significant, client-reported increase in sales within three months of launch and received direct praise for its ease of use.
          - Gained immediate buy-in from senior leadership by presenting a clear, value-driven case for the user-centric design approach.
          - Defined the core visual language and created mini-brand guidelines to establish a cohesive brand identity for the client.
        `,
    },
    {
      company: "Exontric System",
      href: "https://exontric.com/",
      badges: [],
      location: "Kolhapur, IN",
      title: "UI Design Intern",
      logoUrl: "exontric.svg",
      start: "Jan 2023",
      end: "May 2023",
      description:`
          - Led the from-scratch design for the 'Ashwamit Constructions' website, developing a new information architecture to align with user needs.
          - Created detailed user flow diagrams and wireframes for multiple client websites.
          `,
    },

  ],
  education: [
    {
      school: "Savitribai Phule Pune University, Pune",
      href: "https://beta.unipune.ac.in",
      degree: "Master of Design - Human-Computer Interaction",
      logoUrl: "sppu.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "Sanjay Ghodawat University, Kolhapur",
      href: "https://sanjayghodawatuniversity.ac.in",
      degree: "Bachelor's Degree of Computer Science and Engineering",
      logoUrl: "sgu.svg",
      start: "2019",
      end: "2023",
    },

  ],
} as const;