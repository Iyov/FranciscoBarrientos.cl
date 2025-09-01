// Toggle mobile navigation
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Language switching functionality - CORREGIDO
const languageButtons = document.querySelectorAll('.language-btn');
let currentLang = 'es'; // Idioma por defecto

function switchLanguage(lang) {
    // Actualizar botones de idioma
    languageButtons.forEach(btn => {
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
    
    currentLang = lang;
}

languageButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        switchLanguage(lang);
    });
});

// Theme switching functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'light') {
        document.body.removeAttribute('data-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        document.body.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
});