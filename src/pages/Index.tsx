import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Import media assets
import bankManagementVideo from "@/assets/bank-management-video.mp4";
import bankUserView from "@/assets/bank-user-view.png";
import bankAdminAccess from "@/assets/bank-admin-access.png";
import aspsCircuitDiagram from "@/assets/asps-circuit-diagram.png";
import aspsRealProject from "@/assets/asps-real-project.jpeg";
import aiSearch1 from "@/assets/ai-search-1.png";
import aiSearch2 from "@/assets/ai-search-2.png";
import aiSearch3 from "@/assets/ai-search-3.png";
import aiSearch4 from "@/assets/ai-search-4.png";

const universityProjects = [
  {
    title: "Data Structures – Bank Management System",
    description: "Created a full CRUD banking system with secure login and comprehensive account management functionality using C# in Visual Studio.",
    skills: ["C#", "Data Structures", "CRUD", "Visual Studio", "File Management"],
    media: [
      { type: "video" as const, src: bankManagementVideo, alt: "Bank Management System Demo" },
      { type: "image" as const, src: bankUserView, alt: "User View" },
      { type: "image" as const, src: bankAdminAccess, alt: "Admin Access" },
    ],
    githubUrl: "https://github.com/Mark1amgad/Bank-Management-System",
  },
  {
    title: "Electrical Measurements – Automated Smart Parking System (ASPS)",
    description: "Developed a dual-Arduino system with sensors and actuators for intelligent parking management and VIP access control.",
    skills: ["Arduino", "IoT", "Sensors", "Embedded Systems", "C++"],
    media: [
      { type: "image" as const, src: aspsCircuitDiagram, alt: "Circuit Diagram" },
      { type: "image" as const, src: aspsRealProject, alt: "Real-life Implementation" },
    ],
    githubUrl: "https://github.com/Mark1amgad/ASPS-Automated-Smart-Parking-System",
  },
  {
    title: "Artificial Intelligence – Search Algorithm Simulator",
    description: "Implemented and visualized BFS, DFS, DLS, UCS, IDS, and Greedy search algorithms in Python for AI course project.",
    skills: ["Python", "AI", "Search Algorithms", "BFS", "DFS", "Data Visualization"],
    media: [
      { type: "image" as const, src: aiSearch1, alt: "Algorithm Selection" },
      { type: "image" as const, src: aiSearch2, alt: "Algorithm Options" },
      { type: "image" as const, src: aiSearch3, alt: "Search Results" },
      { type: "image" as const, src: aiSearch4, alt: "Tree Graph Visualization" },
    ],
    githubUrl: "https://github.com/Mark1amgad/AI-Search-Algorithm-Simulator",
  },
  {
    title: "Engineering Drawing – AutoCAD",
    description: "Created detailed orthographic and isometric drawings including top/front/side views, hatching techniques, and hidden line representations using AutoCAD.",
    skills: ["AutoCAD", "Technical Drawing", "Orthographic Projection", "Isometric Views"],
    media: [],
    // No GitHub for AutoCAD drawings
  },
  {
    title: "Object-Oriented Programming – Library Management System",
    description: "Built a comprehensive library management system implementing Enums, Interfaces, Inheritance, and Polymorphism with full CRUD operations on text files.",
    skills: ["OOP", "C#", "Interfaces", "Inheritance", "File I/O"],
    media: [],
    githubUrl: "https://github.com/Mark1amgad/Library-Management-System",
  },
];

const externalProjects = [
  {
    title: "Prompt Understanding Test – AI Model Evaluation Web App",
    description: "Built a web application using Hugging Face, Gradio, and Python to evaluate LLM response understanding and quality.",
    skills: ["Python", "Hugging Face", "Gradio", "LLM", "AI Evaluation"],
    media: [],
    githubUrl: "https://github.com/Mark1amgad/Prompt-Understanding-Test",
  },
  {
    title: "Flash Reservation & Sales Website with Database",
    description: "Developed a student booking system with database integration for reservations and sales management.",
    skills: ["Web Development", "Database", "Booking System", "Full Stack"],
    media: [],
    githubUrl: "https://github.com/Mark1amgad/Flash-Reservation-Website",
  },
  {
    title: "Power BI Dashboard for Company Data",
    description: "Designed and developed interactive Power BI dashboards for company data visualization and business intelligence.",
    skills: ["Power BI", "Data Visualization", "Business Intelligence", "DAX"],
    media: [],
    // No GitHub for Power BI
  },
  {
    title: "Excel Dashboard – Data Analysis Lifecycle with KPIs & Insights",
    description: "Built comprehensive Excel dashboards covering the full data analysis lifecycle with KPIs and actionable insights.",
    skills: ["Excel", "Data Analysis", "KPIs", "Dashboard Design", "Visualization"],
    media: [],
    // No GitHub for Excel
  },
  {
    title: "Weekly Expense Tracking Website",
    description: "Created an intuitive expense tracking web application for personal finance management with data visualization.",
    skills: ["JavaScript", "Web Development", "Data Visualization", "UI/UX"],
    media: [],
    githubUrl: "https://github.com/Mark1amgad/Weekly-Expense-Tracker",
  },
  {
    title: "Multiple Freelancing Gigs",
    description: "Completed multiple freelancing gigs including web development, data analysis, and automation tasks for various clients.",
    skills: ["Freelancing", "Client Communication", "Web Dev", "Data Analysis"],
    media: [],
    // No GitHub for freelancing gigs
  },
];

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <Hero />
      
      <ProjectsSection
        id="university-projects"
        title="University Projects"
        subtitle="Academic projects showcasing my technical skills and learning journey in AI Engineering."
        projects={universityProjects}
      />
      
      <ProjectsSection
        id="external-projects"
        title="External Projects"
        subtitle="Professional and personal projects demonstrating real-world problem-solving abilities."
        projects={externalProjects}
      />
      
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
