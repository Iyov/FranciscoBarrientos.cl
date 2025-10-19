// Language translations
const translations = {
  es: {
    // Menu
    "menu.about": "Quién Soy",
    "menu.services": "Servicios",
    "menu.mining": "Minería",
    "menu.energy": "Energía",
    "menu.portfolio": "Portafolio",
    "menu.testimonials": "Testimonios",
    "menu.blog": "Blog",
    "menu.faq": "FAQ",
    "menu.hobbies": "Hobbies",
    "menu.contact": "Contacto",
    
    // About
    "about.description": "Ingeniero de Software y Datos de la USACH, entregando soluciones innovadoras en desarrollo de software, creación web, consultoría en minería y energía en Chile, y marketing digital.",
    "about.contact": "Contáctame",
    "about.portfolio": "Ver Portafolio",
    
    // Services
    "services.title": "Servicios",
    "services.subtitle": "Soluciones a la medida de tus necesidades.",
    "services.web": "Desarrollo Web",
    "services.web.description": "Creación de sitios web modernos y responsivos, adaptados a tus necesidades específicas. Desde páginas estáticas hasta aplicaciones web complejas.",
    "services.mobile": "Aplicaciones Móviles",
    "services.mobile.description": "Desarrollo de aplicaciones móviles nativas e híbridas para iOS y Android, enfocadas en la experiencia del usuario y el rendimiento.",
    "services.custom": "Soluciones Personalizadas",
    "services.custom.description": "Diseño y desarrollo de soluciones de software a medida para optimizar tus procesos y alcanzar tus objetivos empresariales.",
    "services.more": "Más información",
    
    // Mining
    "mining.title": "Software para la Minería",
    "mining.subtitle": "Soluciones tecnológicas diseñadas para optimizar la eficiencia, seguridad y rentabilidad de sus operaciones mineras en Chile.",
    "mining.management": "Sistemas de Gestión Minera",
    "mining.management.description": "Optimiza tus operaciones mineras con sistemas de gestión adaptados al contexto chileno. Mejora la eficiencia y reduce costos.",
    "mining.monitoring": "Monitoreo en Tiempo Real",
    "mining.monitoring.description": "Supervisa tus procesos en tiempo real para una toma de decisiones ágil y efectiva. Adaptado a las condiciones de la minería en Chile.",
    "mining.integration": "Integración de Datos",
    "mining.integration.description": "Integra tus datos para una visión completa de tus operaciones. Facilita el análisis y la optimización en el sector minero chileno.",
    "mining.contact": "Contáctame para una Consulta",
    
    // Energy
    "energy.title": "Software para la Energía",
    "energy.subtitle": "Soluciones tecnológicas para el sector energético en Chile.",
    "energy.management": "Sistemas de Gestión en Energía",
    "energy.management.description": "Optimización de procesos energéticos para empresas chilenas, reduciendo costos y mejorando la eficiencia.",
    "energy.consulting": "Consultoría",
    "energy.consulting.description": "Asesoramiento experto en estrategias energéticas adaptadas al mercado chileno, maximizando el rendimiento.",
    "energy.data": "Integración de Datos y Reporting",
    "energy.data.description": "Soluciones para la integración de datos de CEN, CNE y otros actores del sector energético chileno, facilitando el cumplimiento y la toma de decisiones.",
    
    // Portfolio
    "portfolio.title": "Portafolio",
    "portfolio.subtitle": "Una selección de mis proyectos recientes.",
    "portfolio.meir": "Empresa de Consultores de Energía, desarrollo de software para la industria de Energía en Chile, análisis BI, recopilación y despliegue de datos.",
    "portfolio.digdev": "Empresa de desarrollo de software para la industria minera en Chile con más de 10 años de experiencia, análisis BI, recopilación y despliegue de datos.",
    "portfolio.ropavejero": "Tienda de Video Juegos Retro: Venta de juegos, consolas, accesorios y coleccionables retro, friki y geek.",
    "portfolio.ivette": "Empresa de Servicios de Masoterapia y venta de Jabones Artesanales.",
    "portfolio.francisco": "Mi sitio web personal, mostrando mi portafolio, servicios y detalles de contacto.",
    "portfolio.website": "Sitio Web",
    "portfolio.github": "Ver en GitHub",
    "portfolio.featured": "Proyectos Destacados (Meir.cl)",
    "portfolio.cargaexcel": "Proyecto ETL que carga de manera automática los Excel de CNE a una BD.",
    "portfolio.exportaexcel": "Proyecto de Exportación a Excel para generar el detalle de Reliquidación de una Empresa Generadora de Energía en Chile.",
    
    // Testimonials
    "testimonials.title": "Testimonios de Clientes",
    "testimonials.subtitle": "Descubre por qué nuestros clientes confían en nosotros para sus proyectos más desafiantes.",
    "testimonials.manager": "Project Manager",
    "testimonials.ceo": "CEO, Mining Corp",
    "testimonials.developer": "Lead Developer",
    "testimonials.isabella": "\"La experiencia de Francisco en desarrollo de software e ingeniería de datos ha sido invaluable para nuestro proyecto. Sus soluciones innovadoras y su atención al detalle han mejorado significativamente nuestra eficiencia operativa. Recomendamos ampliamente sus servicios.\"",
    "testimonials.carlos": "\"Trabajar con Francisco ha sido un punto de inflexión para nuestra empresa. Su profundo conocimiento de los sectores de minería y energía en Chile, combinado con sus habilidades de marketing digital, nos ha ayudado a alcanzar nuevos mercados y lograr un crecimiento sostenible.\"",
    "testimonials.sofia": "\"Francisco es un verdadero profesional. Su capacidad para comprender nuestras necesidades y ofrecer soluciones a medida en creación web y desarrollo de software es excepcional. Su compromiso con la calidad y la satisfacción del cliente es evidente en cada proyecto. Estamos agradecidos.\"",
    
    // Blog
    "blog.title": "Blog",
    "blog.subtitle": "Insights sobre tecnología, industria y marketing.",
    "blog.mining.title": "El Futuro de la Minería en Chile: Un Enfoque Basado en Datos",
    "blog.mining.description": "Explora cómo la ciencia de datos está revolucionando la industria minera en Chile, mejorando la eficiencia y sostenibilidad.",
    "blog.mining.content1": "La industria minera en Chile está experimentando una transformación digital significativa, impulsada por la necesidad de mejorar la eficiencia operativa y la sostenibilidad ambiental. Los datos se han convertido en un activo crucial para las empresas mineras que buscan optimizar sus procesos y tomar decisiones informadas.",
    "blog.mining.content2": "La implementación de sistemas de gestión minera basados en datos permite a las empresas monitorear en tiempo real sus operaciones, identificar áreas de mejora y predecir posibles fallos antes de que ocurran. Esto no solo aumenta la productividad, sino que también mejora la seguridad de los trabajadores y reduce el impacto ambiental.",
    "blog.mining.content3": "En Francisco Barrientos, nos especializamos en desarrollar soluciones de software personalizadas para el sector minero, aprovechando tecnologías como la inteligencia artificial, el aprendizaje automático y el análisis de datos para crear sistemas que se adaptan a las necesidades específicas de cada cliente.",
    "blog.web.title": "Tendencias en Desarrollo Web 2024: Perspectiva de un Desarrollador",
    "blog.web.description": "Mantente actualizado con las últimas tendencias en desarrollo web, incluyendo frameworks, herramientas y mejores prácticas para aplicaciones web modernas.",
    "blog.web.content1": "El desarrollo web continúa evolucionando a un ritmo acelerado, con nuevas tecnologías y enfoques que surgen constantemente. En 2024, vemos una consolidación de tendencias como las aplicaciones web progresivas (PWA), el desarrollo con frameworks como React y Vue.js, y un enfoque renovado en la accesibilidad y el rendimiento.",
    "blog.web.content2": "Las PWA han ganado popularidad debido a su capacidad para ofrecer una experiencia similar a la de una aplicación nativa, con la ventaja de no requerir instalación desde una tienda de aplicaciones. Esto es especialmente valioso para empresas que buscan llegar a una audiencia más amplia sin la barrera de la descarga.",
    "blog.web.content3": "Además, la accesibilidad web se ha convertido en una prioridad, no solo por consideraciones éticas, sino también por requisitos legales en muchos países. Desarrollar sitios web que sean utilizables por personas con discapacidades no solo es lo correcto, sino que también mejora la experiencia para todos los usuarios.",
    "blog.marketing.title": "Estrategias de Marketing Digital para el Sector Energético",
    "blog.marketing.description": "Descubre estrategias efectivas de marketing digital adaptadas al sector energético, centrándose en el compromiso del cliente y la visibilidad de la marca.",
    "blog.marketing.content1": "El sector energético enfrenta desafíos únicos en el ámbito del marketing digital. A diferencia de otros sectores, las empresas energéticas deben comunicar conceptos técnicos complejos de manera accesible, al mismo tiempo que construyen confianza y credibilidad con su audiencia.",
    "blog.marketing.content2": "Una estrategia efectiva para el sector energético incluye la creación de contenido educativo que explique los beneficios de diferentes fuentes de energía, las innovaciones tecnológicas en el sector y las prácticas sostenibles. Este contenido no solo informa, sino que también posiciona a la empresa como un líder de pensamiento en su campo.",
    "blog.marketing.content3": "Además, el marketing basado en datos es especialmente relevante para el sector energético. Al analizar el comportamiento del consumidor y las tendencias del mercado, las empresas pueden desarrollar campañas más efectivas y personalizadas que resuenen con su audiencia objetivo.",
    "blog.read": "Leer Más",
    
    // FAQ
    "faq.title": "Preguntas y Respuestas",
    "faq.subtitle": "Encuentra respuestas a las preguntas más comunes sobre mis servicios.",
    "faq.services.question": "¿Qué servicios ofreces?",
    "faq.services.answer": "Ofrezco una gama de servicios que incluyen desarrollo de software, creación de sitios web, consultoría en minería y energía en Chile, y marketing digital.",
    "faq.experience.question": "¿Cuál es tu experiencia en los sectores de minería y energía?",
    "faq.experience.answer": "Poseo una sólida experiencia en la optimización de procesos y aplicación de tecnologías innovadoras para los desafíos específicos de los sectores de minería y energía en Chile.",
    "faq.marketing.question": "¿Proporcionas servicios de marketing digital?",
    "faq.marketing.answer": "Sí, ofrezco estrategias de marketing digital personalizadas, desde SEO y SEM hasta gestión de redes sociales, para potenciar la presencia online de tu negocio.",
    "faq.custom.question": "¿Puedes desarrollar soluciones de software a medida?",
    "faq.custom.answer": "Absolutamente. Me especializo en el desarrollo de software a medida, creando soluciones robustas y escalables que se adaptan perfectamente a las necesidades de tu empresa.",
    "faq.contact.question": "¿Cómo puedo contactarte para una consulta?",
    "faq.contact.answer": "Puedes contactarme a través del formulario de contacto en mi sitio web o enviándome un correo electrónico directamente. Estaré encantado de agendar una consulta para discutir tu proyecto.",
    
    // Hobbies
    "hobbies.title": "Mis Hobbies e Intereses",
    "hobbies.music": "Música",
    "hobbies.music.description": "Nu Metal y rock/metal en general.",
    "hobbies.sports": "Deportes",
    "hobbies.sports.description": "Disfruto del Fútbol, Básquetbol y Tenis de mesa.",
    "hobbies.games": "Video Juegos Retro",
    "hobbies.games.description": "Un viaje profundo a los clásicos de la historia de los videojuegos.",
    "hobbies.informatics": "Informática",
    "hobbies.informatics.description": "Apasionado por la cultura geek/nerd y la tecnología.",
    "hobbies.memes": "Memes",
    "hobbies.memes.description": "Conocedor del humor y la cultura de internet.",
    "hobbies.consulting": "Consultoría",
    "hobbies.consulting.description": "Experiencia en los sectores de minería y energía en Chile.",
    
    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "Ponte en contacto conmigo a través de cualquiera de los siguientes canales.",
    "contact.phone": "Teléfono",
    "contact.email": "Email",
    "contact.whatsapp": "WhatsApp",
    "contact.send": "Enviar Mensaje",
    "contact.profile": "Ver Perfil",
    
    // Footer
    "footer.description": "Ingeniero de Software y Datos de la USACH, especializado en desarrollo de software, consultoría en minería y energía, y marketing digital.",
    "footer.services": "Servicios",
    "footer.industries": "Industrias",
    "footer.quicklinks": "Enlaces Rápidos",
    "footer.rights": "Todos los derechos reservados.",
    
    // WhatsApp
    "whatsapp.tooltip": "Comunícate con nosotros"
  },
  en: {
    // Menu
    "menu.about": "About Me",
    "menu.services": "Services",
    "menu.mining": "Mining",
    "menu.energy": "Energy",
    "menu.portfolio": "Portfolio",
    "menu.testimonials": "Testimonials",
    "menu.blog": "Blog",
    "menu.faq": "FAQ",
    "menu.hobbies": "Hobbies",
    "menu.contact": "Contact",
    
    // About
    "about.description": "Software and Data Engineer from USACH, delivering innovative solutions in software development, web creation, mining and energy consulting in Chile, and digital marketing.",
    "about.contact": "Contact Me",
    "about.portfolio": "View Portfolio",
    
    // Services
    "services.title": "Services",
    "services.subtitle": "Solutions tailored to your needs.",
    "services.web": "Web Development",
    "services.web.description": "Creation of modern and responsive websites, adapted to your specific needs. From static pages to complex web applications.",
    "services.mobile": "Mobile Applications",
    "services.mobile.description": "Development of native and hybrid mobile applications for iOS and Android, focused on user experience and performance.",
    "services.custom": "Custom Solutions",
    "services.custom.description": "Design and development of custom software solutions to optimize your processes and achieve your business goals.",
    "services.more": "Learn More",
    
    // Mining
    "mining.title": "Software for Mining",
    "mining.subtitle": "Technological solutions designed to optimize the efficiency, safety and profitability of your mining operations in Chile.",
    "mining.management": "Mining Management Systems",
    "mining.management.description": "Optimize your mining operations with management systems adapted to the Chilean context. Improve efficiency and reduce costs.",
    "mining.monitoring": "Real-time Monitoring",
    "mining.monitoring.description": "Monitor your processes in real time for agile and effective decision making. Adapted to mining conditions in Chile.",
    "mining.integration": "Data Integration",
    "mining.integration.description": "Integrate your data for a complete view of your operations. Facilitates analysis and optimization in the Chilean mining sector.",
    "mining.contact": "Contact Me for a Consultation",
    
    // Energy
    "energy.title": "Software for Energy",
    "energy.subtitle": "Technological solutions for the energy sector in Chile.",
    "energy.management": "Energy Management Systems",
    "energy.management.description": "Optimization of energy processes for Chilean companies, reducing costs and improving efficiency.",
    "energy.consulting": "Consulting",
    "energy.consulting.description": "Expert advice on energy strategies adapted to the Chilean market, maximizing performance.",
    "energy.data": "Data Integration and Reporting",
    "energy.data.description": "Solutions for integrating data from CEN, CNE and other players in the Chilean energy sector, facilitating compliance and decision making.",
    
    // Portfolio
    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "A selection of my recent projects.",
    "portfolio.meir": "Energy Consulting Company, software development for the Energy industry in Chile, BI analysis, data collection and deployment.",
    "portfolio.digdev": "Software development company for the mining industry in Chile with over 10 years of experience, BI analysis, data collection and deployment.",
    "portfolio.ropavejero": "Retro Video Games Store: Sale of games, consoles, accessories and retro, geek and nerd collectibles.",
    "portfolio.ivette": "Massotherapy Services Company and sale of Artisan Soaps.",
    "portfolio.francisco": "My personal website, showing my portfolio, services and contact details.",
    "portfolio.website": "Website",
    "portfolio.github": "View on GitHub",
    "portfolio.featured": "Featured Projects (Meir.cl)",
    "portfolio.cargaexcel": "ETL project that automatically loads CNE Excel files to a database.",
    "portfolio.exportaexcel": "Excel Export project to generate the Reliquidation detail of an Energy Generating Company in Chile.",
    
    // Testimonials
    "testimonials.title": "Client Testimonials",
    "testimonials.subtitle": "Discover why our clients trust us for their most challenging projects.",
    "testimonials.manager": "Project Manager",
    "testimonials.ceo": "CEO, Mining Corp",
    "testimonials.developer": "Lead Developer",
    "testimonials.isabella": "\"Francisco's experience in software development and data engineering has been invaluable to our project. His innovative solutions and attention to detail have significantly improved our operational efficiency. We highly recommend his services.\"",
    "testimonials.carlos": "\"Working with Francisco has been a turning point for our company. His deep knowledge of the mining and energy sectors in Chile, combined with his digital marketing skills, has helped us reach new markets and achieve sustainable growth.\"",
    "testimonials.sofia": "\"Francisco is a true professional. His ability to understand our needs and deliver tailored solutions in web creation and software development is exceptional. His commitment to quality and customer satisfaction is evident in every project. We are grateful.\"",
    
    // Blog
    "blog.title": "Blog",
    "blog.subtitle": "Insights on technology, industry and marketing.",
    "blog.mining.title": "The Future of Mining in Chile: A Data-Driven Approach",
    "blog.mining.description": "Explore how data science is revolutionizing the mining industry in Chile, improving efficiency and sustainability.",
    "blog.mining.content1": "The mining industry in Chile is undergoing a significant digital transformation, driven by the need to improve operational efficiency and environmental sustainability. Data has become a crucial asset for mining companies seeking to optimize their processes and make informed decisions.",
    "blog.mining.content2": "The implementation of data-based mining management systems allows companies to monitor their operations in real time, identify areas for improvement and predict potential failures before they occur. This not only increases productivity, but also improves worker safety and reduces environmental impact.",
    "blog.mining.content3": "At Francisco Barrientos, we specialize in developing custom software solutions for the mining sector, leveraging technologies such as artificial intelligence, machine learning and data analysis to create systems that adapt to the specific needs of each client.",
    "blog.web.title": "Web Development Trends 2024: A Developer's Perspective",
    "blog.web.description": "Stay updated with the latest trends in web development, including frameworks, tools and best practices for modern web applications.",
    "blog.web.content1": "Web development continues to evolve at a rapid pace, with new technologies and approaches constantly emerging. In 2024, we see a consolidation of trends such as progressive web applications (PWA), development with frameworks like React and Vue.js, and a renewed focus on accessibility and performance.",
    "blog.web.content2": "PWAs have gained popularity due to their ability to offer an experience similar to a native application, with the advantage of not requiring installation from an app store. This is especially valuable for businesses looking to reach a wider audience without the download barrier.",
    "blog.web.content3": "Additionally, web accessibility has become a priority, not only for ethical considerations, but also for legal requirements in many countries. Developing websites that are usable by people with disabilities is not only the right thing to do, but also improves the experience for all users.",
    "blog.marketing.title": "Digital Marketing Strategies for the Energy Sector",
    "blog.marketing.description": "Discover effective digital marketing strategies tailored to the energy sector, focusing on customer engagement and brand visibility.",
    "blog.marketing.content1": "The energy sector faces unique challenges in the realm of digital marketing. Unlike other sectors, energy companies must communicate complex technical concepts in an accessible way, while building trust and credibility with their audience.",
    "blog.marketing.content2": "An effective strategy for the energy sector includes creating educational content that explains the benefits of different energy sources, technological innovations in the sector and sustainable practices. This content not only informs, but also positions the company as a thought leader in its field.",
    "blog.marketing.content3": "Additionally, data-driven marketing is especially relevant for the energy sector. By analyzing consumer behavior and market trends, companies can develop more effective and personalized campaigns that resonate with their target audience.",
    "blog.read": "Read More",
    
    // FAQ
    "faq.title": "Questions and Answers",
    "faq.subtitle": "Find answers to the most common questions about my services.",
    "faq.services.question": "What services do you offer?",
    "faq.services.answer": "I offer a range of services including software development, website creation, mining and energy consulting in Chile, and digital marketing.",
    "faq.experience.question": "What is your experience in the mining and energy sectors?",
    "faq.experience.answer": "I have solid experience in process optimization and application of innovative technologies for the specific challenges of the mining and energy sectors in Chile.",
    "faq.marketing.question": "Do you provide digital marketing services?",
    "faq.marketing.answer": "Yes, I offer customized digital marketing strategies, from SEO and SEM to social media management, to boost your business's online presence.",
    "faq.custom.question": "Can you develop custom software solutions?",
    "faq.custom.answer": "Absolutely. I specialize in custom software development, creating robust and scalable solutions that perfectly adapt to your company's needs.",
    "faq.contact.question": "How can I contact you for a consultation?",
    "faq.contact.answer": "You can contact me through the contact form on my website or by sending me an email directly. I'll be happy to schedule a consultation to discuss your project.",
    
    // Hobbies
    "hobbies.title": "My Hobbies and Interests",
    "hobbies.music": "Music",
    "hobbies.music.description": "Nu Metal and rock/metal in general.",
    "hobbies.sports": "Sports",
    "hobbies.sports.description": "I enjoy Soccer, Basketball and Table Tennis.",
    "hobbies.games": "Retro Video Games",
    "hobbies.games.description": "A deep dive into the classics of video game history.",
    "hobbies.informatics": "Informatics",
    "hobbies.informatics.description": "Passionate about geek/nerd culture and technology.",
    "hobbies.memes": "Memes",
    "hobbies.memes.description": "Connoisseur of internet humor and culture.",
    "hobbies.consulting": "Consulting",
    "hobbies.consulting.description": "Experience in the mining and energy sectors in Chile.",
    
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Get in touch with me through any of the following channels.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.whatsapp": "WhatsApp",
    "contact.send": "Send Message",
    "contact.profile": "View Profile",
    
    // Footer
    "footer.description": "Software and Data Engineer from USACH, specialized in software development, mining and energy consulting, and digital marketing.",
    "footer.services": "Services",
    "footer.industries": "Industries",
    "footer.quicklinks": "Quick Links",
    "footer.rights": "All rights reserved.",
    
    // WhatsApp
    "whatsapp.tooltip": "Contact us"
  }
};

// DOM Elements
const progressBar = document.getElementById('progress-bar');
const backToTopButton = document.getElementById('back-to-top-button');
const backToTopLogo = document.getElementById('back-to-top');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const blogLinks = document.querySelectorAll('.blog-link');
const blogDialogs = document.querySelectorAll('.blog-dialog');
const dialogCloseButtons = document.querySelectorAll('.dialog-close');

// Current settings
let currentLanguage = 'es';
let currentTheme = 'dark';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Load saved settings
  loadSettings();
  
  // Initialize event listeners
  initEventListeners();
  
  // Apply current language
  applyLanguage(currentLanguage);
  
  // Apply current theme
  applyTheme(currentTheme);
});

// Load settings from localStorage
function loadSettings() {
  const savedLanguage = localStorage.getItem('language');
  const savedTheme = localStorage.getItem('theme');
  
  if (savedLanguage) {
    currentLanguage = savedLanguage;
  }
  
  if (savedTheme) {
    currentTheme = savedTheme;
  }
}

// Save settings to localStorage
function saveSettings() {
  localStorage.setItem('language', currentLanguage);
  localStorage.setItem('theme', currentTheme);
}

// Initialize event listeners
function initEventListeners() {
  // Scroll progress bar
  window.addEventListener('scroll', updateProgressBar);
  
  // Back to top buttons
  backToTopButton.addEventListener('click', scrollToTop);
  backToTopLogo.addEventListener('click', scrollToTop);
  
  // Mobile menu toggle
  mobileMenuButton.addEventListener('click', toggleMobileMenu);
  
  // Theme toggle
  themeToggle.addEventListener('click', toggleTheme);
  
  // Language toggle
  langToggle.addEventListener('click', toggleLanguage);
  
  // Blog dialog handlers
  blogLinks.forEach(link => {
    link.addEventListener('click', function() {
      const blogId = this.getAttribute('data-blog');
      openBlogDialog(blogId);
    });
  });
  
  // Dialog close buttons
  dialogCloseButtons.forEach(button => {
    button.addEventListener('click', function() {
      const dialog = this.closest('dialog');
      dialog.close();
    });
  });
  
  // Close dialogs when clicking outside
  blogDialogs.forEach(dialog => {
    dialog.addEventListener('click', function(e) {
      if (e.target === this) {
        this.close();
      }
    });
  });
  
  // Close mobile menu when clicking on a link
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
    });
  });
}

// Update scroll progress bar
function updateProgressBar() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  progressBar.style.width = scrolled + '%';
  
  // Show/hide back to top button
  if (winScroll > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
}

// Scroll to top of page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Toggle mobile menu
function toggleMobileMenu() {
  mobileMenu.classList.toggle('active');
}

// Toggle theme (light/dark)
function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(currentTheme);
  saveSettings();
}

// Apply theme to page
function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

// Toggle language (ES/EN)
function toggleLanguage() {
  currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
  applyLanguage(currentLanguage);
  saveSettings();
}

// Apply language to page
function applyLanguage(lang) {
  const elements = document.querySelectorAll('[data-key]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

// Open blog dialog
function openBlogDialog(blogId) {
  const dialog = document.getElementById(`${blogId}-dialog`);
  if (dialog) {
    dialog.showModal();
  }
}