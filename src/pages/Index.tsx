import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const universityProjects = [
  {
    title: "Engineering Drawing – AutoCAD",
    description: "Created detailed orthographic and isometric drawings including top/front/side views, hatching techniques, and hidden line representations using AutoCAD.",
    skills: ["AutoCAD", "Technical Drawing", "Orthographic Projection", "Isometric Views"],
  },
  {
    title: "OOP Library Management System",
    description: "Built a comprehensive library management system implementing Enums, Interfaces, Inheritance, and Polymorphism with full CRUD operations on text files.",
    skills: ["OOP", "C#", "Interfaces", "Inheritance", "File I/O"],
  },
  {
    title: "Automated Smart Parking System",
    description: "Developed a dual-Arduino system with sensors and actuators for intelligent parking management and VIP access control.",
    skills: ["Arduino", "IoT", "Sensors", "Embedded Systems", "C++"],
  },
  {
    title: "Bank Management System",
    description: "Created a full CRUD banking system with secure login and comprehensive account management functionality using C# in VS Code.",
    skills: ["C#", "Data Structures", "CRUD", "VS Code", "File Management"],
  },
  {
    title: "AI Search Algorithm Simulator",
    description: "Implemented and visualized BFS, DFS, DLS, UCS, IDS, and Greedy search algorithms in Python for AI course project.",
    skills: ["Python", "AI", "Search Algorithms", "BFS", "DFS", "Data Visualization"],
  },
];

const externalProjects = [
  {
    title: "Flash Reservation & Sales Website",
    description: "Developed a student booking system with database integration for reservations and sales management.",
    skills: ["Web Development", "Database", "Booking System", "Full Stack"],
  },
  {
    title: "Weekly Expense Tracking Website",
    description: "Created an intuitive expense tracking web application for personal finance management with data visualization.",
    skills: ["JavaScript", "Web Development", "Data Visualization", "UI/UX"],
  },
  {
    title: "Freelancing Projects",
    description: "Completed multiple freelancing gigs including web development, data analysis, and automation tasks for various clients.",
    skills: ["Freelancing", "Client Communication", "Web Dev", "Data Analysis"],
  },
  {
    title: "Excel Dashboard – Data Analysis",
    description: "Built comprehensive Excel dashboards covering the full data analysis lifecycle with KPIs and actionable insights.",
    skills: ["Excel", "Data Analysis", "KPIs", "Dashboard Design", "Visualization"],
  },
  {
    title: "Power BI Company Dashboard",
    description: "Designed and developed interactive Power BI dashboards for company data visualization and business intelligence.",
    skills: ["Power BI", "Data Visualization", "Business Intelligence", "DAX"],
  },
  {
    title: "Prompt Understanding Test – AI Web App",
    description: "Built a web application using Hugging Face, Gradio, and Python to evaluate LLM response understanding and quality.",
    skills: ["Python", "Hugging Face", "Gradio", "LLM", "AI Evaluation"],
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
      
      <Footer />
    </main>
  );
};

export default Index;
