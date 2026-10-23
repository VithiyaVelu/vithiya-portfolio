export const profile = {
  name: "Vithiya V",
  firstName: "Vithiya",
  role: "Software Developer",
  tagline: "Software · AI/ML · Mobile",
  location: "Marakkanam, Tamil Nadu, India",
  phone: "+91 83444 55990",
  email: "vvithiya537@gmail.com",
  linkedin: "https://linkedin.com/in/vithiya-velu-306363314",
  github: "https://github.com/VithiyaVelu",
  resume: "/Vithiya_Resume.pdf",
};

export const skills: { category: string; note: string; items: string[] }[] = [
  { category: "Languages", note: "the words I think in", items: ["Java", "Python", "C++", "Dart", "SQL", "C#"] },
  { category: "Frameworks", note: "how things get built", items: ["Django", "Flask", "Spring", "Flutter", "RESTful APIs"] },
  { category: "AI / ML", note: "where the fun is", items: ["XGBoost", "LightGBM", "CatBoost", "Scikit-learn", "Q-Learning"] },
  { category: "Databases", note: "where truth lives", items: ["MySQL", "SQL Server", "SQLite"] },
  { category: "Web & Tools", note: "the everyday kit", items: ["HTML", "CSS", "JavaScript", "AJAX", "Git", "Docker"] },
  { category: "Core CS", note: "the foundations", items: ["Data Structures & Algorithms", "OOP", "DBMS", "Computer Networks", "Operating Systems"] },
];

export const experience = [
  {
    role: "App Developer Intern",
    org: "Cornerstone Engineering Solutions",
    place: "Puducherry",
    dates: "Dec 2025 — Jan 2026",
    summary:
      "Built a Smart Expense Tracker for Android in Flutter & Dart — real-time balance tracking, proper state management, and full CRUD, shipped end to end.",
  },
  {
    role: "Data Science & ML Intern",
    org: "HDLC Technologies",
    place: "Chennai",
    dates: "Jun — Jul 2025",
    summary:
      "Engineered a California house-price prediction model with Linear Regression and Random Forest — preprocessing, feature engineering and metric validation in Scikit-learn.",
  },
  {
    role: "Data Science Intern",
    org: "AiQsoftTech",
    place: "Chennai",
    dates: "May — Jun 2024",
    summary:
      "Predicted the likelihood of railway ticket bookings from historical ticketing data — my first taste of real, messy production data.",
  },
];

export const projects: {
  title: string;
  badge?: string;
  description: string;
  tech: string[];
  github?: string;
}[] = [
  {
    title: "Smart Fitness Checker & Multi-Paradigm Intelligent System",
    description:
      "A microservices health-recommendation dashboard deployed with Docker. Five AI paradigms in one system: a Prolog expert system, A*/AO* graph search, Decision Trees, K-Means and Q-Learning.",
    tech: ["Python", "Flask", "Docker", "Prolog", "Q-Learning", "A*/AO*"],
  },
  {
    title: "Industrial Steel Defect Detection & Risk Analysis",
    badge: "Tata Steel AI Hackathon",
    description:
      "An end-to-end AI quality-control pipeline: ensemble ML with PCA for dimensionality reduction and ADASYN for class imbalance, surfaced through a Streamlit dashboard for live defect analytics.",
    tech: ["XGBoost", "LightGBM", "CatBoost", "ADASYN", "PCA", "Streamlit"],
  },
  {
    title: "Django Social Media Analytics Dashboard",
    badge: "Skillrank Hackathon · PTU",
    description:
      "A high-volume analytics pipeline chewing through 500,000+ posts — TF-IDF and K-Means clustering, a dual-layer sentiment engine, and a local LLM chat assistant running on orca-mini-3b.",
    tech: ["Django", "SQLite", "Scikit-learn", "vaderSentiment", "TextBlob", "GPT4All"],
  },
  {
    title: "Real-Time Farming Support Mobile App",
    description:
      "A native Android app for farmers: live crop updates, finance tracking and disease alerts, built with careful OOP, multithreading and custom REST API integration.",
    tech: ["Java", "Android Studio", "RESTful APIs"],
  },
  {
    title: "Online Electricity Management System",
    description:
      "A web app for electricity bill payments, feedback and complaint tracking — with separate user and admin sides, MySQL for storage, and JSP, Servlets and AJAX keeping everything dynamic.",
    tech: ["JSP", "Servlets", "MySQL", "JavaScript", "AJAX"],
  },
  {
    title: "Library Management System",
    description:
      "A database-backed system for managing books, members and issue/return records — full CRUD, proper relationships, and DBMS done right: primary keys, foreign keys and normalization.",
    tech: ["SQL", "DBMS", "MySQL"],
  },
  {
    title: "Quiz App",
    description:
      "A Windows-based quiz app in C# and .NET — OOP and event-driven programming, instant results for players, and an admin side to manage questions and scores via SQL Server.",
    tech: ["C#", ".NET Framework", "SQL Server"],
  },
];

export const education = [
  {
    title: "B.Tech — Computer Science & Engineering",
    org: "Puducherry Technological University",
    dates: "2022 — 2026",
    result: "CGPA 8.3 / 10",
  },
  {
    title: "Higher Secondary (HSC)",
    org: "The Study School, Kalapet",
    dates: "2022",
    result: "68%",
  },
  {
    title: "Secondary (SSLC)",
    org: "The Study School, Kalapet",
    dates: "2020",
    result: "82.5%",
  },
];

export const certifications = [
  { title: "Machine Learning using Python", by: "NIELIT Calicut — MeitY, Govt. of India", date: "Feb 2026" },
  { title: "Tata Steel AI Hackathon", by: "Production-ready ML defect-detection pipeline" },
  { title: "Skillrank Hackathon, PTU", by: "Sentiment engine over 500k+ data nodes" },
  { title: "Full Stack Development Workshop", by: "Capgemini" },
  { title: "Kubernetes & AI-LLM Workshop", by: "PTU × Nokia" },
  { title: "IoT Applications Workshop", by: "IEI India" },
  { title: "NPTEL — Cognitive Psychology & Wildlife Ecology", by: "NPTEL", date: "2023 — 2025" },
  { title: "Python Training", by: "Bita Academy", date: "2 months" },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Toolbox" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Honours" },
  { id: "contact", label: "Contact" },
];
