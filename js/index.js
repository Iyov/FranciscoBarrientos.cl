// Configuración de idiomas
const translations = {
  es: {
    // Menú
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
    
    // Sección Quién Soy
    "about.description": "Ingeniero de Software y Datos de la USACH, entregando soluciones innovadoras en desarrollo de software, creación web, consultoría en minería y energía en Chile, y marketing digital.",
    "about.contact": "Contáctame",
    "about.portfolio": "Ver Portafolio",
    
    // Sección Servicios
    "services.title": "Servicios",
    "services.subtitle": "Soluciones a la medida de tus necesidades.",
    "services.web": "Desarrollo Web",
    "services.web_desc": "Creación de sitios web modernos y responsivos, adaptados a tus necesidades específicas. Desde páginas estáticas hasta aplicaciones web complejas.",
    "services.mobile": "Aplicaciones Móviles",
    "services.mobile_desc": "Desarrollo de aplicaciones móviles nativas e híbridas para iOS y Android, enfocadas en la experiencia del usuario y el rendimiento.",
    "services.custom": "Soluciones Personalizadas",
    "services.custom_desc": "Diseño y desarrollo de soluciones de software a medida para optimizar tus procesos y alcanzar tus objetivos empresariales.",
    "services.more": "Más información",
    
    // Sección Minería
    "mining.title": "Software a la Medida para la Minería Chilena",
    "mining.subtitle": "Soluciones tecnológicas diseñadas para optimizar la eficiencia, seguridad y rentabilidad de sus operaciones mineras en Chile.",
    "mining.management": "Sistemas de Gestión Minera",
    "mining.management_desc": "Optimiza tus operaciones mineras con sistemas de gestión adaptados al contexto chileno. Mejora la eficiencia y reduce costos.",
    "mining.monitoring": "Monitoreo en Tiempo Real",
    "mining.monitoring_desc": "Supervisa tus procesos en tiempo real para una toma de decisiones ágil y efectiva. Adaptado a las condiciones de la minería en Chile.",
    "mining.integration": "Integración de Datos",
    "mining.integration_desc": "Integra tus datos para una visión completa de tus operaciones. Facilita el análisis y la optimización en el sector minero chileno.",
    "mining.contact": "Contáctame para una Consulta",
    
    // Sección Energía
    "energy.title": "Software para la Energía",
    "energy.subtitle": "Soluciones tecnológicas para el sector energético en Chile.",
    "energy.management": "Sistemas de Gestión en Energía",
    "energy.management_desc": "Optimización de procesos energéticos para empresas chilenas, reduciendo costos y mejorando la eficiencia.",
    "energy.consulting": "Consultoría",
    "energy.consulting_desc": "Asesoramiento experto en estrategias energéticas adaptadas al mercado chileno, maximizando el rendimiento.",
    "energy.integration": "Integración de Datos y Reporting",
    "energy.integration_desc": "Soluciones para la integración de datos de CEN, CNE y otros actores del sector energético chileno, facilitando el cumplimiento y la toma de decisiones.",
    "energy.more": "Saber más",
    
    // Sección Portafolio
    "portfolio.title": "Portafolio",
    "portfolio.subtitle": "Una selección de mis proyectos recientes.",
    "portfolio.meir_desc": "Empresa de Consultores de Energía, desarrollo de software para la industria de Energía en Chile, análisis BI, recopilación y despliegue de datos.",
    "portfolio.digdev_desc": "Empresa de desarrollo de software para la industria minera en Chile con más de 10 años de experiencia, análisis BI, recopilación y despliegue de datos.",
    "portfolio.ropavejero_desc": "Tienda de Video Juegos Retro: Venta de juegos, consolas, accesorios y coleccionables retro, friki y geek.",
    "portfolio.ivette_desc": "Empresa de Servicios de Masoterapia y venta de Jabones Artesanales.",
    "portfolio.francisco_desc": "Mi sitio web personal, mostrando mi portafolio, servicios y detalles de contacto.",
    "portfolio.website": "Sitio Web",
    "portfolio.featured": "Proyectos Destacados (Meir.cl)",
    "portfolio.carga_desc": "Una herramienta para cargar eficientemente datos de Excel en los sistemas de la CNE.",
    "portfolio.exporta_desc": "Una utilidad para exportar datos a formato Excel, simplificando el análisis de datos.",
    "portfolio.github": "Ver en GitHub",
    
    // Sección Testimonios
    "testimonials.title": "Testimonios de Clientes",
    "testimonials.subtitle": "Descubre por qué nuestros clientes confían en nosotros para sus proyectos más desafiantes.",
    "testimonials.rossi_role": "Project Manager",
    "testimonials.rossi_text": "\"La experiencia de Francisco en desarrollo de software e ingeniería de datos ha sido invaluable para nuestro proyecto. Sus soluciones innovadoras y su atención al detalle han mejorado significativamente nuestra eficiencia operativa. Recomendamos ampliamente sus servicios.\"",
    "testimonials.ramirez_role": "CEO, Mining Corp",
    "testimonials.ramirez_text": "\"Trabajar con Francisco ha sido un punto de inflexión para nuestra empresa. Su profundo conocimiento de los sectores de minería y energía en Chile, combinado con sus habilidades de marketing digital, nos ha ayudado a alcanzar nuevos mercados y lograr un crecimiento sostenible.\"",
    "testimonials.vargas_role": "Lead Developer",
    "testimonials.vargas_text": "\"Francisco es un verdadero profesional. Su capacidad para comprender nuestras necesidades y ofrecer soluciones a medida en creación web y desarrollo de software es excepcional. Su compromiso con la calidad y la satisfacción del cliente es evidente en cada proyecto. Estamos agradecidos.\"",
    
    // Sección Blog
    "blog.title": "Blog",
    "blog.subtitle": "Insights sobre tecnología, industria y marketing.",
    "blog.mining_title": "El Futuro de la Minería en Chile: Un Enfoque Basado en Datos",
    "blog.mining_desc": "Explora cómo la ciencia de datos está revolucionando la industria minera en Chile, mejorando la eficiencia y sostenibilidad.",
    "blog.webdev_title": "Tendencias en Desarrollo Web 2024: Perspectiva de un Desarrollador",
    "blog.webdev_desc": "Mantente actualizado con las últimas tendencias en desarrollo web, incluyendo frameworks, herramientas y mejores prácticas para aplicaciones web modernas.",
    "blog.marketing_title": "Estrategias de Marketing Digital para el Sector Energético",
    "blog.marketing_desc": "Descubre estrategias efectivas de marketing digital adaptadas al sector energético, centrándose en el compromiso del cliente y la visibilidad de marca.",
    "blog.read_more": "Leer Más",
    "blog.mining_content": "La industria minera en Chile está experimentando una transformación digital significativa, impulsada por la ciencia de datos y la analítica avanzada. En este artículo, exploramos cómo las empresas mineras pueden aprovechar estas tecnologías para mejorar la eficiencia operativa, reducir costos y aumentar la sostenibilidad.",
    "blog.mining_content2": "Desde la optimización de procesos de extracción hasta la predicción de fallas en equipos críticos, la ciencia de datos está revolucionando la forma en que operan las minas en Chile. A través de casos de estudio y ejemplos prácticos, mostramos cómo estas tecnologías están creando valor real para las empresas del sector.",
    "blog.webdev_content": "El desarrollo web continúa evolucionando a un ritmo acelerado, con nuevas tecnologías y mejores prácticas emergiendo constantemente. En este artículo, analizamos las tendencias más importantes que están dando forma al desarrollo web en 2024 y cómo pueden beneficiar a tu negocio.",
    "blog.webdev_content2": "Desde frameworks como React y Vue.js hasta arquitecturas serverless y aplicaciones web progresivas (PWA), exploramos las herramientas y técnicas que están definiendo el futuro del desarrollo web. También discutimos cómo estas tendencias pueden mejorar la experiencia del usuario y el rendimiento de tus aplicaciones web.",
    "blog.marketing_content": "El sector energético enfrenta desafíos únicos en el ámbito del marketing digital, desde la complejidad técnica de sus servicios hasta la necesidad de comunicar conceptos abstractos de manera efectiva. En este artículo, presentamos estrategias de marketing digital específicamente diseñadas para empresas del sector energético.",
    "blog.marketing_content2": "A través de casos de éxito y mejores prácticas, mostramos cómo las empresas energéticas pueden utilizar el marketing de contenidos, las redes sociales y las estrategias de SEO para aumentar su visibilidad, generar leads de calidad y construir relaciones sólidas con sus clientes en el competitivo mercado energético chileno.",
    
    // Sección FAQ
    "faq.title": "Preguntas y Respuestas",
    "faq.subtitle": "Encuentra respuestas a las preguntas más comunes sobre mis servicios.",
    "faq.q1": "¿Qué servicios ofreces?",
    "faq.a1": "Ofrezco una gama de servicios que incluyen desarrollo de software, creación de sitios web, consultoría en minería y energía en Chile, y marketing digital.",
    "faq.q2": "¿Cuál es tu experiencia en los sectores de minería y energía?",
    "faq.a2": "Poseo una sólida experiencia en la optimización de procesos y aplicación de tecnologías innovadoras para los desafíos específicos de los sectores de minería y energía en Chile.",
    "faq.q3": "¿Proporcionas servicios de marketing digital?",
    "faq.a3": "Sí, ofrezco estrategias de marketing digital personalizadas, desde SEO y SEM hasta gestión de redes sociales, para potenciar la presencia online de tu negocio.",
    "faq.q4": "¿Puedes desarrollar soluciones de software a medida?",
    "faq.a4": "Absolutamente. Me especializo en el desarrollo de software a medida, creando soluciones robustas y escalables que se adaptan perfectamente a las necesidades de tu empresa.",
    "faq.q5": "¿Cómo puedo contactarte para una consulta?",
    "faq.a5": "Puedes contactarme a través del formulario de contacto en mi sitio web o enviándome un correo electrónico directamente. Estaré encantado de agendar una consulta para discutir tu proyecto.",
    
    // Sección Hobbies
    "hobbies.title": "Mis Hobbies e Intereses",
    "hobbies.music": "Música",
    "hobbies.music_desc": "Nu Metal y entusiasta del rock/metal en general.",
    "hobbies.sports": "Deportes",
    "hobbies.sports_desc": "Disfruto del Fútbol, Básquetbol y Tenis de mesa.",
    "hobbies.games": "Video Juegos Retro",
    "hobbies.games_desc": "Una inmersión profunda en los clásicos de la historia de los videojuegos.",
    "hobbies.informatics": "Informática",
    "hobbies.informatics_desc": "Apasionado por la cultura geek/nerd y la tecnología.",
    "hobbies.memes": "Memes",
    "hobbies.memes_desc": "Conocedor del humor y la cultura de internet.",
    "hobbies.consulting": "Consultoría",
    "hobbies.consulting_desc": "Experiencia en los sectores de minería y energía en Chile.",
    
    // Sección Contacto
    "contact.title": "Contacto",
    "contact.subtitle": "Ponte en contacto conmigo a través de cualquiera de los siguientes canales.",
    "contact.phone": "Teléfono",
    "contact.email": "Email",
    "contact.whatsapp": "WhatsApp",
    "contact.send_message": "Enviar Mensaje",
    "contact.view_profile": "Ver Perfil",
    
    // Footer
    "footer.description": "Ingeniero de Software y Datos USACH. Desarrollo web, aplicaciones móviles, consultoría en minería y energía en Chile.",
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
    
    // About Section
    "about.description": "Software and Data Engineer from USACH, delivering innovative solutions in software development, web creation, mining and energy consulting in Chile, and digital marketing.",
    "about.contact": "Contact Me",
    "about.portfolio": "View Portfolio",
    
    // Services Section
    "services.title": "Services",
    "services.subtitle": "Solutions tailored to your needs.",
    "services.web": "Web Development",
    "services.web_desc": "Creation of modern and responsive websites, adapted to your specific needs. From static pages to complex web applications.",
    "services.mobile": "Mobile Applications",
    "services.mobile_desc": "Development of native and hybrid mobile applications for iOS and Android, focused on user experience and performance.",
    "services.custom": "Custom Solutions",
    "services.custom_desc": "Design and development of custom software solutions to optimize your processes and achieve your business goals.",
    "services.more": "Learn More",
    
    // Mining Section
    "mining.title": "Custom Software for Chilean Mining",
    "mining.subtitle": "Technological solutions designed to optimize the efficiency, safety and profitability of your mining operations in Chile.",
    "mining.management": "Mining Management Systems",
    "mining.management_desc": "Optimize your mining operations with management systems adapted to the Chilean context. Improve efficiency and reduce costs.",
    "mining.monitoring": "Real-Time Monitoring",
    "mining.monitoring_desc": "Monitor your processes in real time for agile and effective decision making. Adapted to mining conditions in Chile.",
    "mining.integration": "Data Integration",
    "mining.integration_desc": "Integrate your data for a complete view of your operations. Facilitate analysis and optimization in the Chilean mining sector.",
    "mining.contact": "Contact Me for a Consultation",
    
    // Energy Section
    "energy.title": "Software for Energy",
    "energy.subtitle": "Technological solutions for the energy sector in Chile.",
    "energy.management": "Energy Management Systems",
    "energy.management_desc": "Optimization of energy processes for Chilean companies, reducing costs and improving efficiency.",
    "energy.consulting": "Consulting",
    "energy.consulting_desc": "Expert advice on energy strategies adapted to the Chilean market, maximizing performance.",
    "energy.integration": "Data Integration and Reporting",
    "energy.integration_desc": "Solutions for the integration of data from CEN, CNE and other actors in the Chilean energy sector, facilitating compliance and decision making.",
    "energy.more": "Learn More",
    
    // Portfolio Section
    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "A selection of my recent projects.",
    "portfolio.meir_desc": "Energy Consulting Company, software development for the Energy industry in Chile, BI analysis, data collection and deployment.",
    "portfolio.digdev_desc": "Software development company for the mining industry in Chile with over 10 years of experience, BI analysis, data collection and deployment.",
    "portfolio.ropavejero_desc": "Retro Video Game Store: Sale of retro, geek and nerd games, consoles, accessories and collectibles.",
    "portfolio.ivette_desc": "Massotherapy Services Company and sale of Artisan Soaps.",
    "portfolio.francisco_desc": "My personal website, showcasing my portfolio, services and contact details.",
    "portfolio.website": "Website",
    "portfolio.featured": "Featured Projects (Meir.cl)",
    "portfolio.carga_desc": "A tool to efficiently load Excel data into CNE systems.",
    "portfolio.exporta_desc": "A utility to export data to Excel format, simplifying data analysis.",
    "portfolio.github": "View on GitHub",
    
    // Testimonials Section
    "testimonials.title": "Client Testimonials",
    "testimonials.subtitle": "Discover why our clients trust us for their most challenging projects.",
    "testimonials.rossi_role": "Project Manager",
    "testimonials.rossi_text": "\"Francisco's experience in software development and data engineering has been invaluable to our project. His innovative solutions and attention to detail have significantly improved our operational efficiency. We highly recommend his services.\"",
    "testimonials.ramirez_role": "CEO, Mining Corp",
    "testimonials.ramirez_text": "\"Working with Francisco has been a turning point for our company. His deep knowledge of the mining and energy sectors in Chile, combined with his digital marketing skills, has helped us reach new markets and achieve sustainable growth.\"",
    "testimonials.vargas_role": "Lead Developer",
    "testimonials.vargas_text": "\"Francisco is a true professional. His ability to understand our needs and deliver tailored solutions in web creation and software development is exceptional. His commitment to quality and customer satisfaction is evident in every project. We are grateful.\"",
    
    // Blog Section
    "blog.title": "Blog",
    "blog.subtitle": "Insights on technology, industry and marketing.",
    "blog.mining_title": "The Future of Mining in Chile: A Data-Driven Approach",
    "blog.mining_desc": "Explore how data science is revolutionizing the mining industry in Chile, improving efficiency and sustainability.",
    "blog.webdev_title": "Web Development Trends 2024: A Developer's Perspective",
    "blog.webdev_desc": "Stay updated with the latest trends in web development, including frameworks, tools and best practices for modern web applications.",
    "blog.marketing_title": "Digital Marketing Strategies for the Energy Sector",
    "blog.marketing_desc": "Discover effective digital marketing strategies tailored to the energy sector, focusing on customer engagement and brand visibility.",
    "blog.read_more": "Read More",
    "blog.mining_content": "The mining industry in Chile is undergoing a significant digital transformation, driven by data science and advanced analytics. In this article, we explore how mining companies can leverage these technologies to improve operational efficiency, reduce costs and increase sustainability.",
    "blog.mining_content2": "From optimizing extraction processes to predicting failures in critical equipment, data science is revolutionizing the way mines operate in Chile. Through case studies and practical examples, we show how these technologies are creating real value for companies in the sector.",
    "blog.webdev_content": "Web development continues to evolve at a rapid pace, with new technologies and best practices constantly emerging. In this article, we analyze the most important trends shaping web development in 2024 and how they can benefit your business.",
    "blog.webdev_content2": "From frameworks like React and Vue.js to serverless architectures and progressive web applications (PWA), we explore the tools and techniques that are defining the future of web development. We also discuss how these trends can improve user experience and the performance of your web applications.",
    "blog.marketing_content": "The energy sector faces unique challenges in the field of digital marketing, from the technical complexity of its services to the need to communicate abstract concepts effectively. In this article, we present digital marketing strategies specifically designed for companies in the energy sector.",
    "blog.marketing_content2": "Through success stories and best practices, we show how energy companies can use content marketing, social media and SEO strategies to increase their visibility, generate quality leads and build strong relationships with their customers in the competitive Chilean energy market.",
    
    // FAQ Section
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Find answers to the most common questions about my services.",
    "faq.q1": "What services do you offer?",
    "faq.a1": "I offer a range of services including software development, website creation, mining and energy consulting in Chile, and digital marketing.",
    "faq.q2": "What is your experience in the mining and energy sectors?",
    "faq.a2": "I have solid experience in process optimization and application of innovative technologies for the specific challenges of the mining and energy sectors in Chile.",
    "faq.q3": "Do you provide digital marketing services?",
    "faq.a3": "Yes, I offer customized digital marketing strategies, from SEO and SEM to social media management, to boost your business's online presence.",
    "faq.q4": "Can you develop custom software solutions?",
    "faq.a4": "Absolutely. I specialize in custom software development, creating robust and scalable solutions that perfectly fit your company's needs.",
    "faq.q5": "How can I contact you for a consultation?",
    "faq.a5": "You can contact me through the contact form on my website or by sending me an email directly. I'll be happy to schedule a consultation to discuss your project.",
    
    // Hobbies Section
    "hobbies.title": "My Hobbies & Interests",
    "hobbies.music": "Music",
    "hobbies.music_desc": "Nu Metal and rock/metal enthusiast in general.",
    "hobbies.sports": "Sports",
    "hobbies.sports_desc": "I enjoy Soccer, Basketball and Table Tennis.",
    "hobbies.games": "Retro Video Games",
    "hobbies.games_desc": "A deep dive into the classics of video game history.",
    "hobbies.informatics": "Informatics",
    "hobbies.informatics_desc": "Passionate about geek/nerd culture and technology.",
    "hobbies.memes": "Memes",
    "hobbies.memes_desc": "Connoisseur of internet humor and culture.",
    "hobbies.consulting": "Consulting",
    "hobbies.consulting_desc": "Experience in the mining and energy sectors in Chile.",
    
    // Contact Section
    "contact.title": "Contact",
    "contact.subtitle": "Get in touch with me through any of the following channels.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.whatsapp": "WhatsApp",
    "contact.send_message": "Send Message",
    "contact.view_profile": "View Profile",
    
    // Footer
    "footer.description": "USACH Software and Data Engineer. Web development, mobile applications, mining and energy consulting in Chile.",
    "footer.rights": "All rights reserved.",
    
    // WhatsApp
    "whatsapp.tooltip": "Get in touch with us"
  }
};

// Estado de la aplicación
const appState = {
  currentLang: localStorage.getItem('language') || 'es',
  currentTheme: localStorage.getItem('theme') || 'dark'
};

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  // Aplicar tema guardado
  applyTheme(appState.currentTheme);
  
  // Aplicar idioma guardado
  applyLanguage(appState.currentLang);
  
  // Configurar event listeners
  setupEventListeners();
  
  // Configurar scroll
  setupScrollEffects();
  
  // Configurar diálogos de blog
  setupBlogDialogs();
}

// Aplicar tema
function applyTheme(theme) {
  document.documentElement.className = theme;
  document.body.className = theme;
  
  const themeIcon = document.getElementById('theme-toggle').querySelector('i');
  if (theme === 'dark') {
    themeIcon.className = 'fas fa-moon';
  } else {
    themeIcon.className = 'fas fa-sun';
  }
  
  localStorage.setItem('theme', theme);
}

// Aplicar idioma
function applyLanguage(lang) {
  appState.currentLang = lang;
  document.documentElement.lang = lang;
  
  // Actualizar todos los elementos con data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
  
  localStorage.setItem('language', lang);
}

// Configurar event listeners
function setupEventListeners() {
  // Toggle de tema
  document.getElementById('theme-toggle').addEventListener('click', function() {
    const newTheme = appState.currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });
  
  // Toggle de idioma
  document.getElementById('lang-toggle').addEventListener('click', function() {
    const newLang = appState.currentLang === 'es' ? 'en' : 'es';
    applyLanguage(newLang);
  });
  
  // Menú móvil
  document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('active');
  });
  
  // Cerrar menú móvil al hacer clic en un enlace
  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      document.getElementById('mobile-menu').classList.remove('active');
    });
  });
  
  // Botón volver arriba
  document.getElementById('back-to-top-btn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Logo volver arriba
  document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Configurar efectos de scroll
function setupScrollEffects() {
  // Barra de progreso
  window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progress-bar').style.width = scrolled + '%';
    
    // Mostrar/ocultar botón volver arriba
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (winScroll > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
    
    // Cambiar header al hacer scroll
    const header = document.querySelector('.header');
    if (winScroll > 100) {
      header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
      header.style.boxShadow = 'var(--shadow)';
    }
  });
}

// Configurar diálogos de blog
function setupBlogDialogs() {
  const blogLinks = document.querySelectorAll('.blog-link');
  const dialogs = {
    mining: document.getElementById('mining-dialog'),
    webdev: document.getElementById('webdev-dialog'),
    marketing: document.getElementById('marketing-dialog')
  };
  
  blogLinks.forEach(link => {
    link.addEventListener('click', function() {
      const blogId = this.getAttribute('data-blog');
      if (dialogs[blogId]) {
        dialogs[blogId].showModal();
      }
    });
  });
  
  // Cerrar diálogos
  const closeButtons = document.querySelectorAll('.dialog-close');
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const dialog = this.closest('dialog');
      dialog.close();
    });
  });
  
  // Cerrar diálogo al hacer clic fuera
  const blogDialogs = document.querySelectorAll('.blog-dialog');
  blogDialogs.forEach(dialog => {
    dialog.addEventListener('click', function(e) {
      const dialogDimensions = this.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        this.close();
      }
    });
  });
}