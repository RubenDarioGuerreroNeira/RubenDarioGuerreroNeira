export const portfolioData = {
  name: "Rubén D. Guerrero N.",
  title: "Backend Developer",
  email: "rudargeneira@gmail.com",
  linkedin: "https://www.linkedin.com/in/ruben-d-guerrero-n-9276bb195/",
  github: "https://github.com/RubenDarioGuerreroNeira",
  telegram: "https://t.me/Rubedev",
  about: {
    es: [
      "Soy un desarrollador backend apasionado por la <span class=\"text-primary font-bold\">arquitectura escalable</span>, los <span class=\"text-primary font-bold\">sistemas distribuidos</span> y la <span class=\"text-primary font-bold\">Clean Architecture</span>. Mi filosofía es que escribir código es el medio, pero construir sistemas mantenibles y resilientes es el verdadero arte.",
      "Como <span class=\"text-primary font-bold\">Vendure Core Contributor</span> (el framework e-commerce headless #1 en NestJS), mis aportes impactan a una comunidad global de más de <span class=\"text-primary font-bold\">10,000 desarrolladores</span>. Me especializo en resolver problemas complejos de rendimiento, optimización de consultas SQL y diseño de APIs de alto tráfico.",
      "Mi enfoque combina la robustez del backend tradicional con la innovación de la <span class=\"text-primary font-bold\">IA Generativa</span>, aplicando ingeniería de prompts avanzada para integrar modelos de lenguaje en procesos de negocio críticos."
    ],
    en: [
      "I am a backend developer passionate about <span class=\"text-primary font-bold\">scalable architecture</span>, <span class=\"text-primary font-bold\">distributed systems</span>, and <span class=\"text-primary font-bold\">Clean Architecture</span>. My philosophy is that writing code is the means, but building maintainable and resilient systems is the true art.",
      "As a <span class=\"text-primary font-bold\">Vendure Core Contributor</span> (the #1 headless e-commerce framework in NestJS), my contributions impact a global community of over <span class=\"text-primary font-bold\">10,000 developers</span>. I specialize in solving complex performance issues, SQL query optimization, and high-traffic API design.",
      "My approach combines traditional backend robustness with <span class=\"text-primary font-bold\">Generative AI</span> innovation, applying advanced prompt engineering to integrate language models into critical business processes."
    ]
  },
  experience: [
    {
      company: "Vendure",
      role: {
        es: "Core Contributor",
        en: "Core Contributor"
      },
      period: "2024 - Present",
      description: {
        es: "Optimización de sistemas de alto tráfico y arquitectura de servicios en NestJS.",
        en: "High-traffic system optimization and service architecture in NestJS."
      },
      highlights: {
        es: [
          "**SQL:** Eliminación de consultas N+1 mediante *batch loading* con el operador In (Issue #4387).",
          "**Arquitectura:** Diseño del método `getProductVariantsForCollections` para transacciones eficientes.",
          "**DevOps:** Resolución de conflictos en monorepo (20+ archivos) y estandarización de dependencias.",
          "**Tooling:** Modernización de scripts internos de automatización para entornos Windows."
        ],
        en: [
          "**SQL:** N+1 query elimination via *batch loading* with In operator (Issue #4387).",
          "**Architecture:** Designed `getProductVariantsForCollections` for efficient transactions.",
          "**DevOps:** Monorepo conflict resolution (20+ files) and dependency standardization.",
          "**Tooling:** Modernization of internal automation scripts for Windows environments."
        ]
      }
    }
  ],
  techStack: [
    { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
    { name: "Node.js", icon: "nodedotjs", color: "#339933" },
    { name: "TypeScript", icon: "typescript", color: "#3178C6" },
    { name: "NestJS", icon: "nestjs", color: "#E0234E" },
    { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
    { name: "IA / LLMs", icon: "googlegemini", color: "#8E75B2" },
    { name: "n8n", icon: "n8n", color: "#FF6C37" },
    { name: "Docker", icon: "docker", color: "#2496ED" },
    { name: "Git", icon: "git", color: "#F05033" }
  ],
  projects: [
    {
      id: "ecosistema-ia-colombia",
      title: {
        es: "Salud IA Bot - Colombia 🏥",
        en: "Salud IA Bot - Colombia 🏥"
      },
      description: {
        es: "Bot de salud pública en Telegram que democratiza el acceso a información sanitaria en Colombia. Usa <strong>Meta LLaMA 3.1 70B</strong> vía OpenRouter con arquitectura RAG para responder sobre SIVIGILA, vacunación, salud mental CIE-10 y salud sexual. Genera gráficos dinámicos con QuickChart y localiza centros de salud por geolocalización en Antioquia, Boyacá, Yopal y Cali.",
        en: "Telegram public health bot democratizing access to health information in Colombia. Uses <strong>Meta LLaMA 3.1 70B</strong> via OpenRouter with RAG architecture to answer queries about SIVIGILA, vaccination, CIE-10 mental health, and sexual health. Generates dynamic charts with QuickChart and locates health centers by geolocation in Antioquia, Boyacá, Yopal, and Cali."
      },
      tags: ["NestJS", "Meta LLaMA 3.1", "OpenRouter", "RAG", "Telegram API", "QuickChart", "TypeScript"],
      isFeatured: true,
      icon: "activity",
      github: "https://github.com/RubenDarioGuerreroNeira/Ecosistema-IA-Colombia",
      terminalContent: {
        es: [
          { icon: "brain", text: "**IA con RAG:** LLaMA 3.1 70B + contexto real de SIVIGILA y datos epidemiológicos." },
          { icon: "bar-chart", text: "**Visualización Dinámica:** Gráficos de barras, tortas y líneas vía QuickChart." },
          { icon: "map-pin", text: "**Geolocalización:** Centros de salud cercanos en Antioquia, Boyacá, Yopal y Cali." },
          { icon: "database", text: "**Módulos Especializados:** Salud sexual, mental CIE-10, análisis epidemiológico y ML predictivo." }
        ],
        en: [
          { icon: "brain", text: "**AI with RAG:** LLaMA 3.1 70B + real SIVIGILA and epidemiological data context." },
          { icon: "bar-chart", text: "**Dynamic Visualization:** Bar, pie, and line charts via QuickChart." },
          { icon: "map-pin", text: "**Geolocation:** Nearby health centers in Antioquia, Boyacá, Yopal, and Cali." },
          { icon: "database", text: "**Specialized Modules:** Sexual health, CIE-10 mental health, epidemiological analysis and predictive ML." }
        ]
      }
    },
    {
      id: "vendure-core",
      title: {
        es: "Vendure Core Contribution",
        en: "Vendure Core Contribution"
      },
      description: {
        es: "Optimización del rendimiento del núcleo mediante el diseño de arquitecturas de carga masiva y la resolución de cuellos de botella críticos en el filtrado de datos.",
        en: "Optimized core performance by designing batch loading architectures and resolving critical bottlenecks in data filtering."
      },
      tags: ["TypeORM", "SQL Optimization", "Monorepo", "NestJS"],
      isFeatured: true,
      terminalContent: {
        es: [
          { icon: "database", text: "**SQL Optimization:** Eliminé consultas N+1 (Issue #4387) usando *batch loading*." },
          { icon: "search-plus", text: "**Catalog Optimization:** Reduje carga en DB usando subconsultas `EXISTS`." },
          { icon: "project-diagram", text: "**Architecture:** Implementación de `getProductVariantsForCollections`." }
        ],
        en: [
          { icon: "database", text: "**SQL Optimization:** Eliminated N+1 queries (Issue #4387) using *batch loading*." },
          { icon: "search-plus", text: "**Catalog Optimization:** Reduced DB overhead using `EXISTS` subqueries." },
          { icon: "project-diagram", text: "**Architecture:** Implemented `getProductVariantsForCollections`." }
        ]
      }
    },
    {
      id: "bot-taurino",
      title: {
        es: "Bot Taurino con IA",
        en: "Bullfighting AI Bot"
      },
      description: {
        es: "Chatbot especializado en la **generación de crónicas y resúmenes con tono taurino** mediante Gemini API y NestJS.",
        en: "Specialized chatbot for **generating bullfighting chronicles and summaries** using Gemini API and NestJS."
      },
      tags: ["NestJS", "Gemini AI", "Scraping"],
      icon: "robot"
    },
    {
      id: "ccsc-bot",
      title: {
        es: "CCSC Bot - Centro Clínico Madrid",
        en: "CCSC Bot - Clinical Center Madrid"
      },
      description: {
        es: "Asistente virtual inteligente que centraliza información de 43 especialistas mediante una interfaz conversacional en Telegram.",
        en: "Intelligent virtual assistant centralizing info for 43 specialists via a conversational Telegram interface."
      },
      tags: ["n8n", "Mistral AI", "Web Scraping", "Telegram API"],
      icon: "hospital-alt"
    },
    {
      id: "sustainable-credits",
      title: {
        es: "Sustainable Credits Indexer",
        en: "Sustainable Credits Indexer"
      },
      description: {
        es: "Servicio backend de alto rendimiento que indexa más de 1 millón de eventos off-chain de contratos ERC-1155.",
        en: "High-performance backend service indexing over 1 million off-chain events from ERC-1155 contracts."
      },
      tags: ["NestJS", "PostgreSQL", "Blockchain"],
      icon: "globe-americas"
    },
    {
      id: "medical-api",
      title: {
        es: "Medical Appointments API",
        en: "Medical Appointments API"
      },
      description: {
        es: "API robusta para gestión de clínicas, manejando 3000+ citas mensuales con roles granulares y seguridad avanzada.",
        en: "Robust clinic management API handling 3000+ monthly appointments with granular roles and advanced security."
      },
      tags: ["NestJS", "TypeORM", "Security"],
      icon: "hospital-alt"
    },
    {
      id: "bowling-tournament",
      title: {
        es: "Bowling Tournament Management",
        en: "Bowling Tournament Management"
      },
      description: {
        es: "Plataforma para gestión de torneos de bolos con generación automática de brackets y puntuaciones en tiempo real.",
        en: "Web platform for bowling tournament management with automatic bracket generation and real-time score tracking."
      },
      tags: ["NestJS", "PostgreSQL", "Logic"],
      icon: "robot"
    },
    {
      id: "shopping-cart",
      title: {
        es: "Shopping Cart System",
        en: "Shopping Cart System"
      },
      description: {
        es: "Motor de e-commerce enfocado en la integridad transaccional de carritos y gestión de inventario concurrente.",
        en: "E-commerce engine focused on transactional integrity for carts and concurrent inventory management."
      },
      tags: ["Node.js", "NestJS", "PostgreSQL"],
      icon: "robot"
    },
    {
      id: "amusement-park",
      title: {
        es: "Amusement Park API",
        en: "Amusement Park API"
      },
      description: {
        es: "API RESTful para la administración de parques temáticos, gestionando venta de tickets y accesos.",
        en: "RESTful API for theme park administration, managing ticket sales and attraction access."
      },
      tags: ["NestJS", "TypeORM", "Architecture"],
      icon: "robot"
    },
    {
      id: "medical-bot",
      title: {
        es: "Medical AI Bot (@CitasMedicbot)",
        en: "Medical AI Bot (@CitasMedicbot)"
      },
      description: {
        es: "Interfaz conversacional para pacientes que gestiona citas y genera QRs de emergencia.",
        en: "Patient conversational interface that manages appointments and generates emergency QR codes."
      },
      tags: ["Telegram API", "Generative AI", "Geo & QR"],
      icon: "hospital-alt"
    }
  ]
};
