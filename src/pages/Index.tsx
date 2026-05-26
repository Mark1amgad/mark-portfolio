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
import bankDemo from "@/assets/bank-demo-new.gif";
import bankAccounts from "@/assets/bank-accounts.png";
import bankAdmin from "@/assets/bank-admin.png";
import bookstoreNew from "@/assets/bookstore-new.png";
import bookstoreManagement from "@/assets/bookstore-management.png";
import bookstoreClassDiagram from "@/assets/bookstore-class-diagram.jpeg";
import promptTestNew from "@/assets/prompt-test-new.png";
import promptTest1 from "@/assets/prompt-test-1.png";
import promptTest2 from "@/assets/prompt-test-2.png";
import promptTest3 from "@/assets/prompt-test-3.png";
import promptTest4 from "@/assets/prompt-test-4.png";
import expenseTracker1 from "@/assets/expense-tracker-1.png";
import expenseTracker2 from "@/assets/expense-tracker-2.png";
import expenseTracker3 from "@/assets/expense-tracker-3.png";
import expenseTracker4 from "@/assets/expense-tracker-4.png";

const otherProjects = [
  {
    title: "Search Algorithm Visualizer",
    description:
      "Built to make graph search algorithms tangible. Compares BFS, DFS, DLS, IDS, UCS, Greedy, and A* on live grid mazes — rendering the frontier, visited set, and reconstructed path frame-by-frame with per-algorithm step and cost metrics.",
    stack: ["Python", "Pygame", "Graph Search", "DSA"],
    githubUrl: "https://github.com/Mark1amgad/search-algorithm-visualizer",
    thumbnail: searchVizDemo,
    media: [
      { type: "image" as const, src: searchVizDemo, alt: "Search visualizer — live algorithm animation" },
      { type: "image" as const, src: searchVizNew, alt: "Search visualizer — BFS path found" },
    ],
  },
  {
    title: "Bank Management System",
    description:
      "C# WinForms banking app built without standard collection classes — core logic runs on custom-implemented linked lists and stacks. Supports multiple account types, inter-account transfers with limits, a VIP access tier, and a separate admin dashboard.",
    stack: ["C#", "WinForms", "DSA", "OOP"],
    githubUrl: "https://github.com/Mark1amgad/bank-management-system-dsa",
    thumbnail: bankDemo,
    media: [
      { type: "image" as const, src: bankDemo, alt: "Bank Management System — live demo" },
      { type: "image" as const, src: bankAccounts, alt: "Manage Accounts screen" },
      { type: "image" as const, src: bankAdmin, alt: "Admin access dashboard" },
    ],
  },
  {
    title: "Bookstore Management System",
    description:
      "C# .NET 10 desktop app structured as a study in software design principles — repository pattern for persistence, interface-driven OOP with clear inheritance hierarchies, and a custom GDI+ dark UI. Clean separation between data, domain, and presentation layers.",
    stack: ["C#", ".NET", "OOP", "GDI+"],
    githubUrl: "https://github.com/Mark1amgad/bookstore-management-system-oop",
    thumbnail: bookstoreNew,
    media: [
      { type: "image" as const, src: bookstoreManagement, alt: "Bookstore Management UI" },
      { type: "image" as const, src: bookstoreClassDiagram, alt: "Bookstore class diagram" },
    ],
  },
  {
    title: "Prompt Understanding Test",
    description:
      "Gradio tool that tests LLM prompt-following ability by scoring semantic similarity between expected and model-generated outputs using sentence-transformers and cosine distance — deployed as a live Hugging Face Space.",
    stack: ["Python", "Gradio", "Hugging Face", "NLP"],
    githubUrl: "https://github.com/Mark1amgad/prompt-understanding-test",
    liveUrl: "https://huggingface.co/spaces/Mark1amgad/prompt-understanding-test",
    liveLabel: "Open on Hugging Face",
    thumbnail: promptTestNew,
    media: [
      { type: "image" as const, src: promptTest1, alt: "Prompt Test screenshot 1" },
      { type: "image" as const, src: promptTest2, alt: "Prompt Test screenshot 2" },
      { type: "image" as const, src: promptTest3, alt: "Prompt Test screenshot 3" },
      { type: "image" as const, src: promptTest4, alt: "Prompt Test screenshot 4" },
    ],
  },
  {
    title: "Weekly Expense Tracker",
    description:
      "Mobile-responsive expense tracker with dual-language (Arabic/English) interface, local persistence, and CSV/JSON export. Fully deployable single-file web app.",
    stack: ["JavaScript", "HTML5", "CSS3", "RTL"],
    githubUrl: "https://github.com/Mark1amgad/expense-tracker",
    liveUrl: "/files/expense-tracker.html",
    liveLabel: "Open app",
    thumbnail: expenseTracker1,
    media: [
      { type: "image" as const, src: expenseTracker1, alt: "Expense Tracker — overview" },
      { type: "image" as const, src: expenseTracker2, alt: "Expense Tracker — add expense" },
      { type: "image" as const, src: expenseTracker3, alt: "Expense Tracker — summary" },
      { type: "image" as const, src: expenseTracker4, alt: "Expense Tracker — export" },
    ],
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
