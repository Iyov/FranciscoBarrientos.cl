// Textos traducibles - se pueden editar fácilmente desde aquí
const translations = {
    es: {
        navServices: "Servicios",
        navHobbies: "Hobbies",
        navFaq: "FAQ",
        navContact: "Contacto",
        heroSubtitle2: "Ingeniero de datos y Software",
        heroSubtitle: "Soluciones tecnológicas innovadoras y servicios de TI para transformar tu negocio",
        heroButton: "Contáctame",
        servicesTitle: "Servicios",
        service1Title: "Desarrollo de Software",
        service1Desc: "Creación de aplicaciones y sistemas personalizados para satisfacer las necesidades específicas de tu empresa.",
        service2Title: "Análisis BI",
        service2Desc: "Transformación de datos en insights accionables para la toma de decisiones empresariales inteligentes.",
        service3Title: "Soluciones TI",
        service3Desc: "Servicios integrales de tecnología de la información para optimizar tu infraestructura tecnológica.",
        hobbiesTitle: "Hobbies",
        hobby1Title: "Fútbol",
        hobby1Desc: "Apasionado del fútbol, tanto viendo partidos como jugando con amigos los fines de semana.",
        hobby2Title: "Básquetbol",
        hobby2Desc: "Disfruto del básquetbol por su dinamismo y trabajo en equipo.",
        hobby3Title: "Memes",
        hobby3Desc: "Creación y apreciación de memes como forma de humor y cultura digital.",
        faqTitle: "Preguntas Frecuentes",
        faq1Question: "¿Qué servicios de desarrollo de software ofrecen en Chile?",
        faq1Answer: "Ofrecemos desarrollo de software a medida, aplicaciones web y móviles, integración de sistemas, análisis BI y consultoría tecnológica. Trabajamos con diversas tecnologías según las necesidades de cada proyecto.",
        faq2Question: "¿Cómo es el proceso de desarrollo de software en sus proyectos?",
        faq2Answer: "Nuestro proceso sigue metodologías ágiles, comenzando con un análisis de requerimientos, diseño de arquitectura, desarrollo iterativo, pruebas rigurosas y despliegue. Mantenemos una comunicación constante con nuestros clientes durante todo el proceso.",
        faq3Question: "¿Qué tecnologías utilizan para el análisis de datos e ingeniería de datos?",
        faq3Answer: "Utilizamos un stack moderno que incluye Python, R, SQL, Apache Spark, TensorFlow, Power BI y Tableau. Seleccionamos las herramientas según los requisitos específicos de cada proyecto de análisis de datos.",
        faq4Question: "¿Trabajan con empresas de todos los tamaños en Chile?",
        faq4Answer: "Sí, trabajamos con startups, pymes y grandes empresas. Adaptamos nuestras soluciones según el tamaño y necesidades de cada cliente, ofreciendo servicios escalables y personalizados.",
        faq5Question: "¿Ofrecen soporte y mantenimiento después del desarrollo?",
        faq5Answer: "Sí, ofrecemos planes de soporte post-implementación que incluyen mantenimiento, actualizaciones, monitorización y resolución de incidencias. Nuestro objetivo es asegurar el correcto funcionamiento continuo de las soluciones entregadas.",
        contactTitle: "Contáctame",
        contactEmailTitle: "Email",
        contactWebTitle: "Sitios Web",
        contactSocialTitle: "Redes Sociales",
        contactProjectTitle: "¿Tienes un proyecto?",
        contactProjectDesc: "¡Hablemos sobre cómo puedo ayudarte a hacerlo realidad!",
        contactButton: "Enviar mensaje",
        footerCopyright: "© 2025 Francisco Barrientos. Todos los derechos reservados."
    },
    en: {
        navServices: "Services",
        navHobbies: "Hobbies",
        navFaq: "FAQ",
        navContact: "Contact",
        heroSubtitle2: "Data and Software Engineer",
        heroSubtitle: "Innovative technological solutions and IT services to transform your business",
        heroButton: "Contact Me",
        servicesTitle: "Services",
        service1Title: "Software Development",
        service1Desc: "Creation of custom applications and systems to meet your company's specific needs.",
        service2Title: "BI Analysis",
        service2Desc: "Transforming data into actionable insights for smart business decision making.",
        service3Title: "IT Solutions",
        service3Desc: "Comprehensive information technology services to optimize your technological infrastructure.",
        hobbiesTitle: "Hobbies",
        hobby1Title: "Soccer",
        hobby1Desc: "Passionate about soccer, both watching games and playing with friends on weekends.",
        hobby2Title: "Basketball",
        hobby2Desc: "I enjoy basketball for its dynamism and teamwork.",
        hobby3Title: "Memes",
        hobby3Desc: "Creation and appreciation of memes as a form of humor and digital culture.",
        faqTitle: "Frequently Asked Questions",
        faq1Question: "What software development services do you offer in Chile?",
        faq1Answer: "We offer custom software development, web and mobile applications, system integration, BI analysis, and technology consulting. We work with various technologies according to the needs of each project.",
        faq2Question: "What is the software development process like in your projects?",
        faq2Answer: "Our process follows agile methodologies, starting with requirements analysis, architecture design, iterative development, rigorous testing, and deployment. We maintain constant communication with our clients throughout the process.",
        faq3Question: "What technologies do you use for data analysis and data engineering?",
        faq3Answer: "We use a modern stack that includes Python, R, SQL, Apache Spark, TensorFlow, Power BI, and Tableau. We select tools based on the specific requirements of each data analysis project.",
        faq4Question: "Do you work with companies of all sizes in Chile?",
        faq4Answer: "Yes, we work with startups, SMEs, and large companies. We adapt our solutions according to the size and needs of each client, offering scalable and personalized services.",
        faq5Question: "Do you offer support and maintenance after development?",
        faq5Answer: "Yes, we offer post-implementation support plans that include maintenance, updates, monitoring, and issue resolution. Our goal is to ensure the continued proper functioning of the delivered solutions.",
        contactTitle: "Contact Me",
        contactEmailTitle: "Email",
        contactWebTitle: "Websites",
        contactSocialTitle: "Social Media",
        contactProjectTitle: "Do you have a project?",
        contactProjectDesc: "Let's talk about how I can help you make it happen!",
        contactButton: "Send message",
        footerCopyright: "© 2025 Francisco Barrientos. All rights reserved."
    }
};

// Configuración inicial
let currentLang = localStorage.getItem('language') || 'es';
let currentTheme = localStorage.getItem('theme') || 'dark';

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    setupScrollProgress();
    setupBackToTop();
    setupFAQ();
});

function initializePage() {
    // Aplicar el idioma guardado
    switchLanguage(currentLang);
    
    // Aplicar el tema guardado
    if (currentTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        document.getElementById('themeToggle').querySelector('i').classList.remove('fa-moon');
        document.getElementById('themeToggle').querySelector('i').classList.add('fa-sun');
    }
    
    // Configurar event listeners
    setupEventListeners();
}

function setupEventListeners() {
    // Toggle mobile navigation
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Language switching functionality
    const languageButtons = document.querySelectorAll('.language-btn');
    
    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            switchLanguage(lang);
            // Guardar preferencia
            localStorage.setItem('language', lang);
        });
    });

    // Theme switching functionality
    const themeToggle = document.getElementById('themeToggle');
    
    themeToggle.addEventListener('click', () => {
        if (document.body.getAttribute('data-theme') === 'light') {
            document.body.removeAttribute('data-theme');
            themeToggle.querySelector('i').classList.remove('fa-sun');
            themeToggle.querySelector('i').classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.setAttribute('data-theme', 'light');
            themeToggle.querySelector('i').classList.remove('fa-moon');
            themeToggle.querySelector('i').classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        }
    });

    // Logo click functionality
    const logo = document.getElementById('logo');
    logo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function switchLanguage(lang) {
    // Actualizar botones de idioma
    document.querySelectorAll('.language-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Mostrar/ocultar elementos según el idioma
    document.querySelectorAll('.lang-es, .lang-en').forEach(element => {
        if (element.classList.contains('lang-' + lang)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
    
    // Actualizar textos
    updateTexts(lang);
    
    currentLang = lang;
}

function updateTexts(lang) {
    // Actualizar todos los textos según el idioma
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.value = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// Función para la barra de progreso de scroll
function setupScrollProgress() {
    window.addEventListener('scroll', function() {
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / (docHeight - winHeight)) * 100;
        document.getElementById('progressBar').style.width = progress + '%';
    });
}

// Función para el botón "Volver arriba"
function setupBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Función para las preguntas frecuentes (acordeón)
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Cerrar otros items abiertos
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Alternar el item actual
            item.classList.toggle('active');
        });
    });
}

// Función para editar textos desde la consola (para desarrollo)
window.editTranslation = function(lang, key, newText) {
    if (translations[lang] && translations[lang][key]) {
        translations[lang][key] = newText;
        if (lang === currentLang) {
            updateTexts(currentLang);
        }
        console.log(`Texto actualizado: ${lang}.${key} = "${newText}"`);
    } else {
        console.error(`Clave de traducción no encontrada: ${lang}.${key}`);
    }
};