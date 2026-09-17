/**
 * Portfolio Data Configuration for Sachin Kumar
 * Software Engineer | Full Stack Developer | Generative AI
 * Sourced directly from Official Resume & GitHub
 */

export const portfolioData = {
  // Personal & Hero Info
  personal: {
    name: "Sachin Kumar",
    preferredName: "Sachin",
    title: "Software Engineer | Full Stack Developer | Generative AI",
    badge: "Final-year B.Tech CSE (CPI 9.3) • Open to Opportunities",
    tagline: "Final-year B.Tech Computer Science student (CPI 9.3) driven by a strong passion for architecting intelligent, AI-powered platforms. Combining core Java & DSA problem solving with modern full-stack engineering, LangChain, and RAG to build scalable, high-impact software.",
    bio: [
      "I am a final-year B.Tech Computer Science student at Chhatrapati Shahu Ji Maharaj University, Kanpur, maintaining an exceptional 9.3 CPI.",
      "While my technical foundation is deeply anchored in Java, Data Structures & Algorithms (having solved 600+ problems), my core passion lies in building modern, AI-powered platforms. Rather than basic wrappers, I specialize in combining robust full-stack architecture with Generative AI—leveraging LangChain orchestration, Retrieval-Augmented Generation (RAG), and vector search to build practical, context-aware intelligence into applications.",
      "From multi-tenant incident command systems with Llama 3.2 diagnostics to legal analysis assistants, I focus on turning cutting-edge Gen AI capabilities into secure, reliable, and high-performance production systems."
    ],
    location: "Kanpur, Uttar Pradesh",
    timezone: "IST (UTC+5:30)",
    experienceYears: "Final Year (2023–2027)",
    education: "B.Tech in CSE — Chhatrapati Shahu Ji Maharaj University (CPI: 9.3)",
    cpi: "9.3",
    problemsSolved: "600+",
    projectsCompleted: "5+",
    resumeUrl: "#", // Drop your resume.pdf into the /public folder and set to "/resume.pdf"
    avatarUrl: "/sachin.jpg",
  },

  // Direct Social & Contact Links (Frontend-Only Contact)
  contact: {
    email: "s85319748@gmail.com",
    emailSubject: "Inquiry from your portfolio",
    emailBody: "Hi Sachin,\n\nI reviewed your portfolio and resume, and would love to connect regarding...",
    github: "https://github.com/SachinPachahara",
    githubUsername: "@SachinPachahara",
    linkedin: "https://www.linkedin.com/in/sachinpachahara-34a458311",
    linkedinUsername: "Sachin Kumar",
    leetcode: "https://leetcode.com/u/Sachin_Pachahara/",
    leetcodeUsername: "Sachin_Pachahara",
    availabilityStatus: "Open for Software Engineer & Full-Stack / GenAI Roles",
    responseTime: "Usually responds within 12-24 hours",
  },

  // Compact Core Computer Science Subjects (from Resume)
  coreCS: [
    { label: "DSA", full: "Data Structures & Algorithms" },
    { label: "OOPs", full: "Object-Oriented Programming" },
    { label: "DBMS", full: "Database Management Systems" },
    { label: "Operating Systems", full: "Operating Systems (OS)" },
    { label: "Computer Networks", full: "Computer Networks (CN)" },
    { label: "REST APIs", full: "RESTful API Architecture" },
    { label: "JWT Auth", full: "JWT Authentication & Security" },
  ],

  // Technical Skills strictly matching Resume
  skills: [
    {
      category: "Programming Languages",
      description: "Core problem solving, algorithms, and application logic",
      items: [
        { name: "Java", level: "Primary (DSA)" },
        { name: "C", level: "Core" },
        { name: "JavaScript", level: "Advanced" },
        { name: "Python", level: "Proficient" },
        { name: "SQL", level: "Advanced" },
      ],
    },
    {
      category: "Frontend Development",
      description: "Crafting modern, reactive, and responsive interfaces",
      items: [
        { name: "React.js", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3", level: "Advanced" },
      ],
    },
    {
      category: "Backend & APIs",
      description: "Building resilient REST APIs, server logic, and auth guards",
      items: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "REST APIs", level: "Advanced" },
        { name: "JWT Authentication", level: "Advanced" },
      ],
    },
    {
      category: "Databases",
      description: "Data modeling, schema design, and persistence",
      items: [
        { name: "MongoDB", level: "Advanced" },
        { name: "MySQL", level: "Advanced" },
        { name: "JDBC", level: "Intermediate" },
      ],
    },
    {
      category: "Generative AI (Learning & Practical)",
      description: "Exploring and applying intelligent LLM pipelines and prompt patterns",
      items: [
        { name: "Generative AI Fundamentals", level: "Proficient" },
        { name: "Prompt Engineering", level: "Advanced" },
        { name: "LangChain", level: "Learning & Applied" },
        { name: "RAG Architecture", level: "Applied" },
        { name: "Vector Search", level: "Applied" },
      ],
    },
    {
      category: "Tools & Environments",
      description: "Daily developer workflows, testing, and deployment",
      items: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "VS Code", level: "Primary IDE" },
        { name: "Postman", level: "API Testing" },
        { name: "MongoDB Compass", level: "Advanced" },
        { name: "Vercel", level: "Deployment" },
        { name: "Render", level: "Deployment" },
      ],
    },
  ],

  // Featured Projects (RCA Platform, LexSahayak AI, SmartBank)
  projects: [
    {
      id: 1,
      title: "Root Cause Analysis (RCA) Platform",
      tagline: "AI-powered multi-tenant Incident Command Center with Hugging Face Llama 3.2 & RAG for automated failure diagnostics.",
      description: "Built an enterprise AI-powered SaaS platform for real-time incident reporting, automated root-cause analysis, and post-mortem generation. Engineered a RAG pipeline utilizing Hugging Face's Llama-3.2 augmented with past incident memory and golden RCA templates from MongoDB, complete with multi-tenant database isolation, live war rooms, and executive MTTR telemetry.",
      challengesSolved: "Implemented dual AI diagnostic pipeline (Hugging Face Llama-3.2 RAG + offline heuristic fallback), multi-tenant compound indexing in MongoDB, collaborative 5-Whys causation chains, and role-based access control.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Hugging Face (Llama 3.2)", "RAG", "Tailwind CSS", "Redux Toolkit"],
      demoUrl: "https://rca-platform-frontend.vercel.app",
      githubUrl: "https://github.com/SachinPachahara/rca_platform",
      featured: true,
      category: "Full Stack & AI",
    },
    {
      id: 2,
      title: "LexSahayak AI — Legal Documentation Assistant",
      tagline: "AI-powered legal documentation assistant based on Large Language Models and Retrieval-Augmented Generation.",
      description: "A production-grade MERN + LangChain application treating legal workflows as a complete lifecycle: drafting, private RAG context retrieval, source-grounded contract chat, automated risk analysis, and state-wise Indian statutory stamp duty computations.",
      challengesSolved: "Engineered private RAG retrieval with access-control scopes before LLM assembly, integrated Hugging Face / OpenAI inference, digital E-signature canvas with tamper-evident audit codes, and bilingual Hindi legal summaries.",
      techStack: ["React.js", "LangChain", "Node.js", "Express.js", "MongoDB", "RAG", "Tailwind CSS", "Vercel"],
      demoUrl: "https://lexsahayak-ai.vercel.app",
      githubUrl: "https://github.com/SachinPachahara/lexsahayak-ai",
      featured: true,
      category: "Full Stack & AI",
    },
    {
      id: 3,
      title: "SmartBank — Banking Management System",
      tagline: "Banking management application supporting deposits, withdrawals, and transaction history.",
      description: "Developed a banking management application supporting deposits, withdrawals, and transaction history. Implemented secure authentication, input validation, and exception handling while applying core OOP principles with JDBC and MySQL.",
      challengesSolved: "Applied strict OOP principles, double-entry ledger bookkeeping, and atomic database transaction isolation to ensure data consistency.",
      techStack: ["Java", "JDBC", "MySQL", "React.js", "Node.js", "MongoDB (MERN Simulation)"],
      demoUrl: "https://smartbank-sigma.vercel.app",
      githubUrl: "https://github.com/SachinPachahara/smartbank",
      featured: true,
      category: "Full Stack",
    },
  ],

  // What I Value as an Engineer (Anchored by DSA & Academics)
  values: [
    {
      title: "Strong Problem Solving (600+ DSA)",
      description: "Solving 600+ algorithmic problems has forged a deep intuition for time and space complexity, optimal data structures, and edge-case testing.",
      icon: "Code2",
    },
    {
      title: "Academic & Technical Rigor",
      description: "Maintaining a 9.3 CPI in Computer Science while actively shipping real-world projects reflects strong discipline, self-drive, and fast learning.",
      icon: "Sparkles",
    },
    {
      title: "Clean & Modular Architecture",
      description: "From secure JWT authentication and role-based access control to clean separation of concerns, I build code that is easy to read, test, and scale.",
      icon: "HeartHandshake",
    },
    {
      title: "Curiosity for Emerging AI",
      description: "Constantly expanding beyond traditional full-stack by learning Generative AI fundamentals, prompt engineering, and LangChain orchestration.",
      icon: "Users",
    },
  ],

  // Live Status & Focus
  currently: {
    education: "B.Tech CSE @ CSJMU Kanpur (CPI: 9.3)",
    dsaStatus: "600+ Problems Solved (LeetCode)",
    learning: "LangChain orchestration & Multi-agent AI patterns",
    dailyGoal: "Daily DSA in Java (LeetCode & Problem Solving) 🎯",
  }
};
