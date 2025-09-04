// Textos traducibles - se pueden editar fácilmente desde aquí
const translations = {
    es: {
        navServices: "Servicios",
        navHobbies: "Hobbies",
        navContact: "Contacto",
        heroTitle: "Ingeniero de datos y Software",
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
        contactTitle: "Contáctame",
        contactEmailTitle: "Email",
        contactWebTitle: "Sitios Web",
        contactSocialTitle: "Redes Sociales",
        contactProjectTitle: "¿Tienes un proyecto?",
        contactProjectDesc: "¡Hablemos sobre cómo puedo ayudarte a hacerlo realidad!",
        contactButton: "Enviar mensaje",
        footerCopyright: "© 2023 Francisco Barrientos. Todos los derechos reservados."
    },
    en: {
        navServices: "Services",
        navHobbies: "Hobbies",
        navContact: "Contact",
        heroTitle: "Data and Software Engineer",
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
        contactTitle: "Contact Me",
        contactEmailTitle: "Email",
        contactWebTitle: "Websites",
        contactSocialTitle: "Social Media",
        contactProjectTitle: "Do you have a project?",
        contactProjectDesc: "Let's talk about how I can help you make it happen!",
        contactButton: "Send message",
        footerCopyright: "© 2023 Francisco Barrientos. All rights reserved."
    }
};

// Configuración inicial
let currentLang = localStorage.getItem('language') || 'es';
let currentTheme = localStorage.getItem('theme') || 'dark';

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
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