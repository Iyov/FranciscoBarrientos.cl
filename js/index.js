/*
  Archivo de Lógica JavaScript
  Para: index.html
  Autor: Francisco Barrientos
*/

// --- Envolver todo en DOMContentLoaded para asegurar que el DOM esté cargado ---
document.addEventListener('DOMContentLoaded', () => {
  try {
    const docElement = document.documentElement;
    const body = document.body;

  // --- Función para decodificar contactos (protección anti-spam) ---
  function decodeContact() {
    // Email y teléfono codificados en Base64
    const email = atob('ZnJhbmNpc2NvLmJhcnJpZW50b3NAdXNhY2guY2w=');
    const phone = atob('KzU2OTg3NjI5NzY1');
    
    // Actualizar links de email
    document.querySelectorAll('a[data-email]').forEach(link => {
      link.href = `mailto:${email}`;
      if (link.textContent.includes('@') || link.textContent.toLowerCase().includes('email')) {
        const textNode = link.querySelector('p');
        if (textNode) {
          textNode.textContent = email;
        }
      }
    });
    
    // Actualizar links de teléfono
    document.querySelectorAll('a[data-phone]').forEach(link => {
      link.href = `tel:${phone}`;
      const textNode = link.querySelector('p');
      if (textNode && textNode.textContent.includes('+')) {
        textNode.textContent = phone;
      }
    });
  }

  // --- 1. Lógica de Cambio de Tema (Modo Oscuro/Claro) ---
  const themeToggle = document.getElementById('theme-toggle');
  
  function setTheme(theme) {
    if (theme === 'dark') {
      docElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      docElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(defaultTheme);
    
    // Escuchar cambios en las preferencias del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = docElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  // --- 2. Lógica Multilenguaje (ES/EN) ---
  const langToggle = document.getElementById('lang-toggle');
  const translatableElements = document.querySelectorAll('[data-lang-es]');
  
  // Función para actualizar meta tags dinámicamente
  function updateMetaTags(lang) {
    const meta = {
      es: {
        title: 'Francisco Barrientos - Ingeniero de Software y Datos',
        description: 'Portafolio de Francisco Barrientos, Ingeniero de Software y Datos de la USACH. Ofrezco servicios de desarrollo de software, creación web, consultoría en minería y energía en Chile, y marketing digital.',
        ogTitle: 'Francisco Barrientos - Ingeniero de Software y Datos',
        ogDescription: 'Ingeniero de Software y Datos USACH. Desarrollo web, aplicaciones móviles, consultoría en minería y energía en Chile.',
        twitterTitle: 'Francisco Barrientos - Ingeniero de Software y Datos',
        twitterDescription: 'Portafolio de servicios de desarrollo de software, consultoría en minería, energía y marketing digital en Chile.'
      },
      en: {
        title: 'Francisco Barrientos - Software & Data Engineer',
        description: 'Portfolio of Francisco Barrientos, Software and Data Engineer from USACH. I offer software development services, web creation, consulting in mining and energy in Chile, and digital marketing.',
        ogTitle: 'Francisco Barrientos - Software & Data Engineer',
        ogDescription: 'Software and Data Engineer from USACH. Web development, mobile applications, consulting in mining and energy in Chile.',
        twitterTitle: 'Francisco Barrientos - Software & Data Engineer',
        twitterDescription: 'Portfolio of software development services, consulting in mining, energy and digital marketing in Chile.'
      }
    };

    const metaData = meta[lang];
    
    // Actualizar title
    document.title = metaData.title;
    
    // Actualizar meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', metaData.description);
    
    // Actualizar Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', metaData.ogTitle);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', metaData.ogDescription);
    
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', lang === 'es' ? 'es_CL' : 'en_US');
    
    // Actualizar Twitter Card
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', metaData.twitterTitle);
    
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', metaData.twitterDescription);
  }

  // Función para actualizar aria-labels dinámicamente
  function updateAriaLabels(lang) {
    const labels = {
      es: {
        'theme-toggle': 'Cambiar tema',
        'lang-toggle': 'Cambiar idioma',
        'mobile-menu-button': 'Abrir menú',
        'scroll-to-top': 'Volver arriba'
      },
      en: {
        'theme-toggle': 'Toggle theme',
        'lang-toggle': 'Change language',
        'mobile-menu-button': 'Open menu',
        'scroll-to-top': 'Back to top'
      }
    };

    Object.keys(labels[lang]).forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.setAttribute('aria-label', labels[lang][id]);
      }
    });
  }
  
  function setLanguage(lang) {
    docElement.setAttribute('lang', lang);
    localStorage.setItem('language', lang);

    translatableElements.forEach(el => {
      const text = el.getAttribute(`data-lang-${lang}`);
      if (text) {
        // Manejar diferentes tipos de elementos (ej. placeholders, titles)
        if (el.tagName === 'TITLE') {
          el.textContent = text;
        } else if (el.placeholder) {
          el.placeholder = text;
        } else {
          el.innerHTML = text; // Usar innerHTML para respetar <i>, <span>, etc.
        }
      }
    });
    
    // Actualizar meta tags y aria-labels
    updateMetaTags(lang);
    updateAriaLabels(lang);
  }

  function initLanguage() {
    const savedLang = localStorage.getItem('language');
    // Default a 'es' si no hay nada guardado
    const defaultLang = savedLang ? savedLang : 'es';
    setLanguage(defaultLang);
  }

  langToggle.addEventListener('click', () => {
    const currentLang = docElement.getAttribute('lang') || 'es';
    const newLang = currentLang === 'es' ? 'en' : 'es';
    setLanguage(newLang);
  });

  // --- 3. Barra de Progreso de Scroll ---
  const progressBar = document.getElementById('progress-bar');
  
  function updateScrollProgress() {
    const winScroll = body.scrollTop || docElement.scrollTop;
    const height = docElement.scrollHeight - docElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    if (progressBar) {
      progressBar.style.width = scrolled + "%";
    }
  }

  // --- 4. Lógica de "Volver Arriba" (Logo y Botón) ---
  const logoBackToTop = document.getElementById('logo-back-to-top');
  const footerBackToTop = document.getElementById('footer-back-to-top');
  const scrollToTopButton = document.getElementById('scroll-to-top');

  function smoothScrollToTop(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  logoBackToTop.addEventListener('click', smoothScrollToTop);
  footerBackToTop.addEventListener('click', smoothScrollToTop);
  scrollToTopButton.addEventListener('click', smoothScrollToTop);

  function toggleScrollToTopButton() {
    if (docElement.scrollTop > 300) {
      scrollToTopButton.classList.add('show');
    } else {
      scrollToTopButton.classList.remove('show');
    }
  }

  // --- 5. Lógica del Menú Móvil ---
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    // Cambiar ícono de hamburguesa a 'X'
    const icon = mobileMenuButton.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });

  // --- 6. Scroll Suave para Anclas (Navegación) ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      // Prevenir scroll si es solo '#' (como los links del logo)
      if (this.getAttribute('href') === '#') {
        if (!this.id.includes('back-to-top')) {
           e.preventDefault();
        }
        return;
      }
      
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
        
        // Ocultar menú móvil después de hacer clic
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          const icon = mobileMenuButton.querySelector('i');
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      }
    });
  });

  // --- 7. Lógica de Modales (Dialog) del Blog ---
  const openBlogButtons = document.querySelectorAll('.blog-open-button');
  const closeBlogButtons = document.querySelectorAll('.blog-close-button');

  openBlogButtons.forEach(button => {
    button.addEventListener('click', () => {
      const dialogId = button.getAttribute('data-dialog');
      const dialog = document.getElementById(dialogId);
      if (dialog) {
        dialog.showModal();
        body.style.overflow = 'hidden'; // Evitar scroll del fondo
      }
    });
  });

  closeBlogButtons.forEach(button => {
    button.addEventListener('click', () => {
      const dialog = button.closest('dialog');
      if (dialog) {
        dialog.close();
      }
    });
  });

  // Cerrar modales al hacer clic fuera (en el backdrop)
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('click', function(event) {
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        dialog.close();
      }
    });
    
    // Restaurar scroll al cerrar
    dialog.addEventListener('close', () => {
      body.style.overflow = 'auto';
    });
  });

  // --- 8. Actualizar Año del Copyright en Footer ---
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --- Inicializadores ---
  initTheme();
  initLanguage();
  decodeContact(); // Decodificar contactos para protección anti-spam
  
  // --- Event Listeners Globales ---
  window.addEventListener('scroll', () => {
    updateScrollProgress();
    toggleScrollToTopButton();
  });

  } catch (error) {
    console.error('❌ Error al inicializar el sitio:', error);
    // El sitio seguirá funcionando parcialmente incluso con errores
  }
});

// --- Registrar Service Worker ---
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .catch(error => {
        console.error('❌ Error al registrar Service Worker:', error);
      });
  });
}

// --- Handler Global de Errores ---
window.addEventListener('error', (event) => {
  console.error('❌ Error global capturado:', {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    error: event.error
  });
  // Prevenir que el error rompa completamente el sitio
  return false;
});

// --- Handler de Promesas Rechazadas ---
window.addEventListener('unhandledrejection', (event) => {
  console.error('❌ Promise rechazada no manejada:', event.reason);
  // Prevenir que la promesa rechazada rompa el sitio
  event.preventDefault();
});