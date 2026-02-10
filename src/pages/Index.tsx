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
    title: "Bank Management System – Data Structures Course",
    description: "A C# Windows Forms Bank Management System for creating and managing customer accounts with validation and different account types (Regular, Savings, Business). It supports user/admin login, deposits, withdrawals, transfers with limits, VIP status for high-balance accounts, and an admin dashboard with key statistics.",
    skills: ["C#", "Data Structures", "OOP", "Windows Forms", "CRUD", "File Handling", "Linked Lists", "Admin Dashboard", "Validation", "Visual Studio"],
    media: [
      { type: "video" as const, src: bankManagementVideo, alt: "Bank Management System Demo" },
      { type: "image" as const, src: bankUserView, alt: "User View" },
      { type: "image" as const, src: bankAdminAccess, alt: "Admin Access" },
    ],
    githubUrl: "https://github.com/Mark1amgad/bank-management-system-dsa",
  },
  {
    title: "Automated Smart Parking System (ASPS) – Electrical Measurements & Measuring Instruments Course",
    description: "Hardware-based Automated Smart Parking System using dual Arduino Uno boards to manage entry/exit gates, parking slots, VIP access, and safety alerts with real sensors and actuators. The system uses IR, ultrasonic, RFID, flame, LDR, and buzzer/LCD components to guide drivers, prevent collisions, and support basic safety monitoring.",
    skills: ["Arduino", "Embedded Systems", "IoT", "Sensor Integration", "C/C++", "Real-Time Systems", "Hardware Prototyping", "Serial Communication"],
    media: [
      { type: "image" as const, src: aspsCircuitDiagram, alt: "Circuit Diagram" },
      { type: "image" as const, src: aspsRealProject, alt: "Real-life Implementation" },
    ],
    githubUrl: "https://github.com/Mark1amgad/ASPS-Arduino",
  },
  {
    title: "Search Algorithm Simulator – Artificial Intelligence Course",
    description: "A Search Algorithm Simulator web app that visualizes and compares classic graph search algorithms (BFS, DFS, DLS, IDS, UCS, Greedy Best-First) on a sample graph representing password search states. Built with Streamlit, it allows users to select the algorithm, goal node, and depth (for DLS), then displays traversal paths, results, metrics, and a tree-style visualization.",
    skills: ["Python", "Streamlit", "Search Algorithms", "BFS", "DFS", "DLS", "IDS", "UCS", "Greedy Best-First", "Algorithm Visualization"],
    media: [
      { type: "image" as const, src: aiSearch1, alt: "Algorithm Selection" },
      { type: "image" as const, src: aiSearch2, alt: "Algorithm Options" },
      { type: "image" as const, src: aiSearch3, alt: "Search Results" },
      { type: "image" as const, src: aiSearch4, alt: "Tree Graph Visualization" },
    ],
    githubUrl: "https://github.com/Mark1amgad/search-algorithm-simulator",
  },
  {
    title: "AutoCAD Drawings – Engineering Drawing Course",
    description: "Technical engineering drawings created in AutoCAD, including orthographic projections (top, front, and side views with hatching, hidden lines, and proper alignment) and isometric 3D drawings of mechanical components. Demonstrates proficiency in spatial visualization, dimensioning, and CAD standards.",
    skills: ["AutoCAD", "Orthographic Projection", "Isometric Drawing", "Technical Drawing", "Dimensioning", "Hatching", "2D/3D Visualization"],
    media: [],
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
