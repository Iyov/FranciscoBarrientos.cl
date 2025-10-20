/*
  Archivo de Lógica JavaScript
  Para: gemini.html
  Autor: Francisco Barrientos
*/

// --- Envolver todo en DOMContentLoaded para asegurar que el DOM esté cargado ---
document.addEventListener('DOMContentLoaded', () => {

  const docElement = document.documentElement;
  const body = document.body;

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
    // Default a 'dark' si no hay nada guardado
    const defaultTheme = savedTheme ? savedTheme : 'dark';
    setTheme(defaultTheme);
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = docElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  // --- 2. Lógica Multilenguaje (ES/EN) ---
  const langToggle = document.getElementById('lang-toggle');
  const translatableElements = document.querySelectorAll('[data-lang-es]');
  
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
  
  // --- Event Listeners Globales ---
  window.addEventListener('scroll', () => {
    updateScrollProgress();
    toggleScrollToTopButton();
  });

});