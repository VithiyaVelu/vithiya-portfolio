export const profile = {
  name: "Vithiya V",
  role: "Software Developer · Computer Science Graduate",
  email: "vvithiya537@gmail.com",
  linkedin: "https://linkedin.com/in/vithiya-velu-306363314",
  github: "https://github.com/VithiyaVelu",
  resume: "/Vithiya_Resume.pdf",
};

export const skills: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["Java", "Python", "C++", "Dart", "SQL", "C#"] },
  { category: "Frameworks", items: ["Django", "Flask", "Spring", "Flutter", "RESTful APIs"] },
  { category: "AI / ML", items: ["XGBoost", "LightGBM", "CatBoost", "Scikit-learn", "Q-Learning"] },
  { category: "Databases", items: ["MySQL", "SQL Server", "SQLite"] },
  { category: "Web & Tools", items: ["HTML", "CSS", "JavaScript", "AJAX", "Git", "Docker"] },
  {
    category: "Core CS",
    items: ["Data Structures & Algorithms", "OOP", "DBMS", "Computer Networks", "Operating Systems"],
  },
];

export const experience = [
  {
    role: "App Developer Intern",
    org: "Cornerstone Engineering Solutions",
    place: "Puducherry",
    dates: "Dec 2025 – Jan 2026",
    points: [
      "Built a Smart Expense Tracker Android app using Flutter and Dart.",
      "Implemented real-time balance tracking, state management, and full CRUD operations.",
    ],
  },
  {
    role: "Data Science & ML Intern",
    org: "HDLC Technologies",
    place: "Chennai",
    dates: "Jun 2025 – Jul 2025",
    points: [
      "Developed a California House Price Prediction model using Linear Regression and Random Forest.",
      "Performed data preprocessing, feature engineering, and model evaluation with Scikit-learn.",
    ],
  },
  {
    role: "Data Science Intern",
    org: "AiQsoftTech",
    place: "Chennai",
    dates: "May 2024 – Jun 2024",
    points: [
      "Worked on a machine learning project predicting the likelihood of railway ticket bookings from historical ticketing data.",
    ],
  },
];

export const projects: {
  title: string;
  badge?: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}[] = [
  {
    title: "Smart Fitness Checker & Multi-Paradigm Intelligent System",
    description:
      "Microservices-based health recommendation dashboard deployed with Docker, combining a Prolog expert system, A*/AO* graph search, Decision Trees, K-Means, and Q-Learning modules.",
    tech: ["Python", "Flask", "Docker", "Scikit-learn", "Prolog", "Q-Learning", "A*/AO*"],
  },
  {
    title: "Industrial Steel Defect Detection & Risk Analysis",
    badge: "Tata Steel AI Hackathon",
    description:
      "End-to-end AI quality-control pipeline using ensemble ML, PCA for dimensionality reduction, ADASYN for class imbalance, and a Streamlit dashboard for defect analytics.",
    tech: ["XGBoost", "LightGBM", "CatBoost", "ADASYN", "PCA", "Streamlit"],
  },
  {
    title: "Django Social Media Analytics Dashboard",
    badge: "Skillrank Hackathon",
    description:
      "Analytics pipeline processing 500,000+ posts with TF-IDF and K-Means clustering, a dual-layer sentiment engine, and a local LLM chat assistant.",
    tech: ["Django", "SQLite", "Scikit-learn", "vaderSentiment", "TextBlob", "GPT4All"],
  },
  {
    title: "Real-Time Farming Support Mobile App",
    description:
      "Native Android app for live crop updates, finance tracking, and disease alerts, built with OOP, multithreading, and REST API integration.",
    tech: ["Java", "Android Studio", "RESTful APIs"],
  },
];

export const certifications = [
  { title: "Machine Learning using Python", by: "NIELIT Calicut (MeitY, Govt. of India)", date: "Feb 2026" },
  { title: "Tata Steel AI Hackathon", by: "Industrial defect detection ML pipeline" },
  { title: "Skillrank Hackathon at PTU", by: "Sentiment engine on 500k+ posts" },
  { title: "Full Stack Development Workshop", by: "Capgemini" },
  { title: "Kubernetes & AI-LLM Workshop", by: "PTU & Nokia" },
  { title: "IoT Applications Workshop", by: "IEI India" },
  { title: "NPTEL: Cognitive Psychology & Wildlife Ecology", by: "NPTEL", date: "2023 – 2025" },
  { title: "Python Training", by: "Bita Academy", date: "2 months" },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
