import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Import media assets
import bankManagementVideo from "@/assets/bank-management-video.mp4";
import bankUserView from "@/assets/bank-user-view.png";
import bankAdminAccess from "@/assets/bank-admin-access.png";
import aspsCover from "@/assets/asps-cover.png";
import aspsHardware1 from "@/assets/asps-hardware-1.jpeg";
import aspsHardware2 from "@/assets/asps-hardware-2.jpeg";
import aspsCircuitDiagramNew from "@/assets/asps-circuit-diagram-new.jpeg";
import aiSearch1 from "@/assets/ai-search-1.png";
import aiSearch2 from "@/assets/ai-search-2.png";
import aiSearch3 from "@/assets/ai-search-3.png";
import aiSearch4 from "@/assets/ai-search-4.png";
import bookstoreManagement from "@/assets/bookstore-management.png";
import bookstoreClassDiagram from "@/assets/bookstore-class-diagram.jpeg";
import autocadDrawing1 from "@/assets/autocad-drawing-1.png";
import autocadDrawing2 from "@/assets/autocad-drawing-2.png";
import autocadDrawing3 from "@/assets/autocad-drawing-3.png";
import autocadDrawing4 from "@/assets/autocad-drawing-4.png";
import excelDashboard1 from "@/assets/excel-dashboard-1.png";
import excelDashboard2 from "@/assets/excel-dashboard-2.png";
import excelDashboard3 from "@/assets/excel-dashboard-3.png";
import powerbiDataTable from "@/assets/powerbi-data-table.png";
import powerbiDataModel from "@/assets/powerbi-data-model.png";
import powerbiDashboard from "@/assets/powerbi-dashboard.png";
import expenseTracker1 from "@/assets/expense-tracker-1.png";
import expenseTracker2 from "@/assets/expense-tracker-2.png";
import expenseTracker3 from "@/assets/expense-tracker-3.png";
import expenseTracker4 from "@/assets/expense-tracker-4.png";

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
    title: "Bookstore Management System – Object-Oriented Programming Course",
    description: "An advanced C# desktop application featuring a custom-engineered dark mode interface. The project utilizes high-level Object-Oriented architecture, implementing a repository pattern for persistent data management while bypassing standard legacy frameworks to deliver a modern, glassmorphism-inspired user experience.",
    skills: ["C#", ".NET 10", "WinForms", "OOP Architecture", "Interface Abstraction", "Inheritance", "Encapsulation", "Enums", "Data Binding", "File Persistence", "GDI+ UI Design", "Win32 Interop"],
    media: [
      { type: "image" as const, src: bookstoreManagement, alt: "Bookstore Management Interface" },
      { type: "image" as const, src: bookstoreClassDiagram, alt: "Class Diagram" },
    ],
    githubUrl: "https://github.com/Mark1amgad/bookstore-management-system-oop/tree/main",
  },
  {
    title: "Automated Smart Parking System (ASPS) – Electrical Measurements & Measuring Instruments Course",
    description: "Hardware-based Automated Smart Parking System using dual Arduino Uno boards to manage entry/exit gates, parking slots, VIP access, and safety alerts with real sensors and actuators. The system uses IR, ultrasonic, RFID, flame, LDR, and buzzer/LCD components to guide drivers, prevent collisions, and support basic safety monitoring.",
    skills: ["Arduino", "Embedded Systems", "IoT", "Sensor Integration", "C/C++", "Real-Time Systems", "Hardware Prototyping", "Serial Communication"],
    media: [
      { type: "image" as const, src: aspsCover, alt: "ASPS Cover" },
      { type: "image" as const, src: aspsHardware1, alt: "Hardware Implementation 1" },
      { type: "image" as const, src: aspsHardware2, alt: "Hardware Implementation 2" },
      { type: "image" as const, src: aspsCircuitDiagramNew, alt: "Circuit Diagram" },
    ],
    externalUrl: "https://easy-park-tech.lovable.app",
    externalLabel: "Live App",
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
    media: [
      { type: "image" as const, src: autocadDrawing1, alt: "Orthographic Projection Drawing" },
      { type: "image" as const, src: autocadDrawing2, alt: "Isometric 3D Drawings" },
      { type: "image" as const, src: autocadDrawing3, alt: "Orthographic with Hatching" },
      { type: "image" as const, src: autocadDrawing4, alt: "Orthographic Projection with Hidden Lines" },
    ],
  },
];

const externalProjects = [
  {
    title: "Prompt Understanding Test – AI Model Evaluation Web App",
    description: "An interactive web application that evaluates how well Large Language Models (LLMs) understand user prompts. Users input a prompt, which is sent to LLMs via Hugging Face, and the app analyzes the response using Sentence Transformers and Cosine Similarity to measure understanding accuracy. Features include response evaluation scores, similarity metrics, formatting checks, and a visual progress bar. Developed as a graduation project for the AI Ambassadors Program (Batch 6).",
    skills: ["Python", "Gradio", "Hugging Face API", "Sentence Transformers", "Cosine Similarity", "LLM Evaluation", "NLP", "AI Model Testing"],
    media: [],
    externalUrl: "https://huggingface.co/spaces/Mark1amgad/prompt-understanding-test",
    externalLabel: "Live App",
  },
  {
    title: "Flash Reservation & Sales Website with Database",
    description: "A lightweight web application built to organize bulk flash drive orders for students. Users select flash drive capacity, enter contact details, and submit requests that are automatically stored in Firebase. Features include a responsive design for all devices and an admin panel for reviewing and exporting orders. The system successfully streamlined order collection and reduced coordination time.",
    skills: ["HTML", "CSS", "JavaScript", "Firebase Hosting", "Firebase Realtime Database", "Responsive Design", "Admin Panel"],
    media: [],
    githubUrl: "https://github.com/Mark1amgad/flashdrive-shop-db",
  },
  {
    title: "Power BI Dashboard for Company Data",
    description: "A comprehensive Power BI analytics solution developed for a retail enterprise to evaluate financial performance across multiple dimensions. Raw sales data was transformed into a star-schema model to track Total Sales, Total Profit, and Profit Margin (2016–2019). The dashboard uses dynamic filtering and category-based distribution analysis to identify high-performing product segments and optimize channel strategy, providing actionable insights into profitability trends.",
    skills: ["Power BI", "DAX", "Data Modeling", "Star Schema", "Power Query", "ETL", "Trend Analysis", "Dashboard Design", "KPI Tracking", "Data Visualization"],
    media: [
      { type: "image" as const, src: powerbiDashboard, alt: "Power BI Dashboard" },
      { type: "image" as const, src: powerbiDataModel, alt: "Data Model Schema" },
      { type: "image" as const, src: powerbiDataTable, alt: "Company Data Table" },
    ],
    externalUrl: "/files/company_profit_dashboard.pbix",
    externalLabel: "Download Project",
  },
  {
    title: "Excel Sales Analytics Dashboard – Data Analysis Project",
    description: "A structured Excel data analysis project applying the full analytical workflow: defining smart business questions, cleaning and validating data (nulls, duplicates, inconsistencies), transforming date and financial fields, and building pivot-driven summary layers. Implemented advanced Excel techniques including Pivot Tables, SUMIFS, calculated fields, percentage-of-total analysis, and slicer-based interactivity to design a dynamic KPI dashboard focused on business decision support.",
    skills: ["Microsoft Excel", "Pivot Tables", "Data Cleaning", "Data Transformation", "KPI Modeling", "SUMIFS", "Calculated Fields", "Percentage Analysis", "Dashboard Design", "Slicers", "Time-Series Analysis", "Business Intelligence"],
    media: [
      { type: "image" as const, src: excelDashboard1, alt: "DataHive Dashboard Cover" },
      { type: "image" as const, src: excelDashboard2, alt: "Product Analysis Dashboard" },
      { type: "image" as const, src: excelDashboard3, alt: "Sales Analytics Dashboard" },
    ],
  },
  {
    title: "Weekly Expense Tracking Website",
    description: "A mobile-responsive Weekly Expense Tracker featuring real-time budget analytics and a dual-language (Arabic/English) interface. The application enables users to manage pocket money through automated daily and weekly totals, remaining balance tracking, and data export options such as CSV and JSON.",
    skills: ["HTML5", "CSS3", "JavaScript", "RTL Layouts", "Local Storage", "JSON", "CSV", "UI/UX Design", "Responsive Design"],
    media: [
      { type: "image" as const, src: expenseTracker1, alt: "Dark Mode - English Interface" },
      { type: "image" as const, src: expenseTracker2, alt: "Dark Mode - Categories & Export" },
      { type: "image" as const, src: expenseTracker3, alt: "Light Mode - Arabic Interface" },
      { type: "image" as const, src: expenseTracker4, alt: "Light Mode - Arabic Export Options" },
    ],
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
