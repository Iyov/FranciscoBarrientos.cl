// Configuración de idiomas
const translations = {
    es: {
        "inicio": "Inicio",
        "servicios": "Servicios",
        "sobre-mi": "Sobre Mí",
        "portafolio": "Portafolio",
        "contacto": "Contacto",
        "idioma": "ES",
        "titulo-hero": "Francisco Barrientos<br>Ingeniero de Software y Datos",
        "descripcion-hero": "Especializado en desarrollo de software, análisis BI y marketing digital. Creo soluciones tecnológicas personalizadas para impulsar tu negocio.",
        "boton-contacto": "Contáctame",
        "titulo-servicios": "Mis Servicios",
        "descripcion-servicios": "Ofrezco soluciones integrales para transformar tus ideas en realidad digital.",
        "servicio-1-titulo": "Desarrollo de Software",
        "servicio-1-descripcion": "Creación de aplicaciones web y móviles a medida, utilizando las últimas tecnologías y mejores prácticas de desarrollo.",
        "servicio-2-titulo": "Análisis BI",
        "servicio-2-descripcion": "Transformo datos en insights accionables con dashboards interactivos y reportes automatizados para una mejor toma de decisiones.",
        "servicio-3-titulo": "Marketing Digital",
        "servicio-3-descripcion": "Estrategias digitales integrales para aumentar tu presencia online, generar leads y maximizar el retorno de inversión.",
        "saber-mas": "Saber más →",
        "titulo-sobre-mi": "Sobre Mí",
        "descripcion-sobre-mi-1": "Soy Francisco Barrientos, ingeniero de software y datos con más de 5 años de experiencia en el desarrollo de soluciones tecnológicas innovadoras.",
        "descripcion-sobre-mi-2": "Mi enfoque combina conocimientos técnicos profundos con una comprensión estratégica de los negocios, permitiéndome crear soluciones que no solo funcionan técnicamente, sino que también generan valor real.",
        "titulo-habilidades": "Habilidades Principales",
        "habilidad-1": "Desarrollo Full-Stack (JavaScript, Python, React, Node.js)",
        "habilidad-2": "Análisis de Datos y Business Intelligence (Power BI, Tableau)",
        "habilidad-3": "Marketing Digital y SEO",
        "habilidad-4": "Arquitectura de Software y Bases de Datos",
        "habilidad-5": "Automatización de Procesos",
        "titulo-portafolio": "Portafolio",
        "descripcion-portafolio": "Algunos de mis proyectos más destacados.",
        "proyecto-1-titulo": "Sistema de Gestión Empresarial",
        "proyecto-1-descripcion": "Plataforma integral para la gestión de procesos empresariales con dashboard interactivo.",
        "proyecto-2-titulo": "E-commerce Personalizado",
        "proyecto-2-descripcion": "Tienda online con sistema de recomendaciones basado en machine learning.",
        "proyecto-3-titulo": "Plataforma de Analytics",
        "proyecto-3-descripcion": "Sistema de análisis de datos en tiempo real para toma de decisiones estratégicas.",
        "ver-proyecto": "Ver Proyecto →",
        "titulo-contacto": "Contacto",
        "descripcion-contacto": "¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte.",
        "email": "Email",
        "telefono": "Teléfono",
        "ubicacion": "Ubicación",
        "chile": "Chile",
        "label-nombre": "Nombre",
        "label-email": "Email",
        "label-asunto": "Asunto",
        "label-mensaje": "Mensaje",
        "enviar-mensaje": "Enviar Mensaje",
        "francisco-barrientos": "Francisco Barrientos",
        "eslogan-footer": "Ingeniero de software y datos especializado en crear soluciones tecnológicas que impulsan negocios.",
        "enlaces-rapidos": "Enlaces Rápidos",
        "servicios-footer": "Servicios",
        "conectemos": "Conectemos",
        "derechos-reservados": "Todos los derechos reservados."
    },
    en: {
        "inicio": "Home",
        "servicios": "Services",
        "sobre-mi": "About Me",
        "portafolio": "Portfolio",
        "contacto": "Contact",
        "idioma": "EN",
        "titulo-hero": "Francisco Barrientos<br>Software and Data Engineer",
        "descripcion-hero": "Specialized in software development, BI analysis and digital marketing. I create customized technological solutions to boost your business.",
        "boton-contacto": "Contact Me",
        "titulo-servicios": "My Services",
        "descripcion-servicios": "I offer comprehensive solutions to transform your ideas into digital reality.",
        "servicio-1-titulo": "Software Development",
        "servicio-1-descripcion": "Creation of custom web and mobile applications, using the latest technologies and development best practices.",
        "servicio-2-titulo": "BI Analysis",
        "servicio-2-descripcion": "I transform data into actionable insights with interactive dashboards and automated reports for better decision making.",
        "servicio-3-titulo": "Digital Marketing",
        "servicio-3-descripcion": "Comprehensive digital strategies to increase your online presence, generate leads and maximize return on investment.",
        "saber-mas": "Learn More →",
        "titulo-sobre-mi": "About Me",
        "descripcion-sobre-mi-1": "I'm Francisco Barrientos, a software and data engineer with over 5 years of experience in developing innovative technological solutions.",
        "descripcion-sobre-mi-2": "My approach combines deep technical knowledge with strategic business understanding, allowing me to create solutions that not only work technically but also generate real value.",
        "titulo-habilidades": "Key Skills",
        "habilidad-1": "Full-Stack Development (JavaScript, Python, React, Node.js)",
        "habilidad-2": "Data Analysis and Business Intelligence (Power BI, Tableau)",
        "habilidad-3": "Digital Marketing and SEO",
        "habilidad-4": "Software Architecture and Databases",
        "habilidad-5": "Process Automation",
        "titulo-portafolio": "Portfolio",
        "descripcion-portafolio": "Some of my most outstanding projects.",
        "proyecto-1-titulo": "Business Management System",
        "proyecto-1-descripcion": "Comprehensive platform for business process management with interactive dashboard.",
        "proyecto-2-titulo": "Custom E-commerce",
        "proyecto-2-descripcion": "Online store with machine learning-based recommendation system.",
        "proyecto-3-titulo": "Analytics Platform",
        "proyecto-3-descripcion": "Real-time data analysis system for strategic decision making.",
        "ver-proyecto": "View Project →",
        "titulo-contacto": "Contact",
        "descripcion-contacto": "Have a project in mind? Let's talk about how I can help you.",
        "email": "Email",
        "telefono": "Phone",
        "ubicacion": "Location",
        "chile": "Chile",
        "label-nombre": "Name",
        "label-email": "Email",
        "label-asunto": "Subject",
        "label-mensaje": "Message",
        "enviar-mensaje": "Send Message",
        "francisco-barrientos": "Francisco Barrientos",
        "eslogan-footer": "Software and data engineer specialized in creating technological solutions that drive businesses.",
        "enlaces-rapidos": "Quick Links",
        "servicios-footer": "Services",
        "conectemos": "Let's Connect",
        "derechos-reservados": "All rights reserved."
    }
};

// Configuración inicial
document.addEventListener('DOMContentLoaded', function() {
    // Establecer año actual
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Cargar idioma guardado o usar español por defecto
    const savedLang = localStorage.getItem('language') || 'es';
    changeLanguage(savedLang);
    
    // Configurar eventos
    setupEventListeners();
});

// Configurar event listeners
function setupEventListeners() {
    // Toggle del menú móvil
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Toggle del tema
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', toggleTheme);
    
    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Selector de idioma
    const languageBtn = document.querySelector('.language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');
    
    languageBtn.addEventListener('click', function() {
        languageDropdown.classList.toggle('show');
    });
    
    // Cambiar idioma
    document.querySelectorAll('.language-dropdown button').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            languageDropdown.classList.remove('show');
        });
    });
    
    // Cerrar dropdown al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!languageBtn.contains(e.target)) {
            languageDropdown.classList.remove('show');
        }
    });
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Cerrar menú móvil si está abierto
                navMenu.classList.remove('active');
                
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Manejo del formulario de contacto
    const contactForm = document.getElementById('form-contacto');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Aquí iría la lógica para enviar el formulario
            let nombre = document.getElementById('nombre').value;
            let email = document.getElementById('email').value;
            let asunto = document.getElementById('asunto').value;
            let mensaje = document.getElementById('mensaje').value;
            let alerta = "Formulario no implementado aún.\nNombre:  " + nombre + "\nEmail: " + email + "\nAsunto: " + asunto + "\nMensaje: " + mensaje;
            alert(alerta);
            
            // Limpiar formulario
            contactForm.reset();
        });
    }
}

// Cambiar idioma
function changeLanguage(lang) {
    // Actualizar elementos con atributo data-lang
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Actualizar botón de idioma
    const languageBtnText = document.querySelector('.language-btn span');
    if (languageBtnText) {
        languageBtnText.textContent = lang.toUpperCase();
    }
    
    // Guardar preferencia
    localStorage.setItem('language', lang);
    
    // Actualizar atributo lang del HTML
    document.documentElement.setAttribute('lang', lang);
}

// Cambiar tema
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

// Actualizar icono del tema
function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-toggle i');
    if (themeIcon) {
        themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}