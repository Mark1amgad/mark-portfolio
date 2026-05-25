import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import OtherProjects from "@/components/OtherProjects";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import searchVizNew from "@/assets/search-viz-new.png";
import searchVizDemo from "@/assets/search-viz-demo.gif";

const otherProjects = [
  {
    title: "Search Algorithm Visualizer",
    description:
      "Interactive visualizer comparing BFS, DFS, DLS, IDS, UCS, Greedy, and A* on grid mazes. Renders frontier, visited set, and reconstructed path in real time with per-algorithm metrics.",
    stack: ["Python", "Pygame", "Graph Search", "DSA"],
    githubUrl: "https://github.com/Mark1amgad/search-algorithm-visualizer",
    thumbnail: searchVizNew,
    media: [
      { type: "image" as const, src: searchVizNew, alt: "Search visualizer — BFS path found" },
      { type: "image" as const, src: searchVizDemo, alt: "Search visualizer animation" },
    ],
  },
  {
    title: "Bank Management System",
    description:
      "C# Windows Forms banking system with account types, transfers with limits, VIP logic, and an admin dashboard — built around custom data structures.",
    stack: ["C#", "WinForms", "DSA", "OOP"],
    githubUrl: "https://github.com/Mark1amgad/bank-management-system-dsa",
  },
  {
    title: "DecodeLabs Internship Portfolio",
    description:
      "Collection of data analytics deliverables produced during my DecodeLabs internship — cleaning, EDA, and Pandas-driven reporting notebooks.",
    stack: ["Python", "Pandas", "NumPy", "EDA"],
    githubUrl: "https://github.com/Mark1amgad/DecodeLabs-Internship",
  },
  {
    title: "Bookstore Management System",
    description:
      "C# .NET 10 desktop app with custom dark UI, repository pattern persistence, and clean OOP architecture with interfaces and inheritance.",
    stack: ["C#", ".NET", "OOP", "GDI+"],
    githubUrl: "https://github.com/Mark1amgad/bookstore-management-system-oop/tree/main",
  },
  {
    title: "Prompt Understanding Test",
    description:
      "Gradio app evaluating LLM prompt understanding via Hugging Face inference, sentence transformers, and cosine similarity scoring.",
    stack: ["Python", "Gradio", "Hugging Face", "NLP"],
    githubUrl: "https://github.com/Mark1amgad/prompt-understanding-test/tree/main",
  },
  {
    title: "Weekly Expense Tracker",
    description:
      "Mobile-responsive expense tracker with dual-language (Arabic/English) interface, local persistence, and CSV/JSON export.",
    stack: ["JavaScript", "HTML5", "CSS3", "RTL"],
    githubUrl: "https://github.com/Mark1amgad/expense-tracker/tree/main",
  },
];

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <FeaturedProjects />
      <OtherProjects projects={otherProjects} />
      <ExperienceSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
