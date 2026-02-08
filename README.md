# Francisco Barrientos - Portfolio

[![Website](https://img.shields.io/website?url=https%3A%2F%2Ffranciscobarrientos.cl)](https://franciscobarrientos.cl)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-2.0.0-green.svg)](package.json)

Portfolio profesional de Francisco Barrientos, Ingeniero de Software y Datos de la USACH.

🌐 **[franciscobarrientos.cl](https://franciscobarrientos.cl)**

---

## 🚀 Características

- **Multilenguaje** (ES/EN) con traducción dinámica
- **Modo oscuro/claro** con detección automática del sistema
- **Diseño responsive** optimizado para todos los dispositivos
- **PWA** con Service Worker para funcionamiento offline
- **SEO optimizado** con meta tags dinámicos y Schema.org
- **Accesibilidad WCAG AA** con skip links y aria-labels
- **Seguridad A+** con headers CSP, HSTS y protección anti-spam

---

## 📊 Métricas

| Métrica | Score |
|---------|-------|
| Performance | 90+ |
| SEO | 95+ |
| Accesibilidad | 95+ |
| Seguridad | A+ |

---

## 📁 Estructura del Proyecto

```
franciscobarrientos.cl/
├── index.html                      # Página principal del sitio
├── old.html                        # Versión anterior del sitio (histórico)
│
├── css/                            # Estilos (Tailwind, personalizados, Font Awesome)
├── js/                             # JavaScript y configuración
│   ├── index.js                    # JavaScript principal
│   ├── index.min.js                # JavaScript minificado (5.92 KB)
│   ├── old.js                      # JavaScript de versión anterior
│   ├── build-css.js                # Script de compilación CSS
│   └── tailwind.config.js          # Configuración de Tailwind
│
├── img/                            # Imágenes y logos
├── webfonts/                       # Fuentes de Font Awesome
├── src/                            # Archivos fuente para compilación
│
├── sw.js                           # Service Worker para PWA (v1.0.2)
├── robots.txt                      # Configuración para crawlers
├── sitemap.xml                     # Mapa del sitio para SEO
├── CNAME                           # Dominio personalizado
│
├── .htaccess                       # Headers y configuración Apache
├── _headers                        # Headers para Netlify
│
├── package.json                    # Dependencias y scripts npm
│
├── .gitignore                      # Archivos ignorados por Git
├── .gitattributes                  # Configuración de Git
├── .editorconfig                   # Configuración del editor
├── .npmignore                      # Archivos ignorados por npm
├── .env.example                    # Variables de entorno ejemplo
│
├── README.md                       # Este archivo
├── CONTRIBUTING.md                 # Guía de contribución
└── LICENSE                         # Licencia MIT
```

---

## 🛠️ Tecnologías

- HTML5 semántico
- Tailwind CSS 3.4.1
- JavaScript vanilla
- Font Awesome 6.5.1
- Service Worker (PWA)

---

## 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/Iyov/FranciscoBarrientos.cl.git
cd FranciscoBarrientos.cl

# Instalar dependencias
npm install

# Compilar para producción
npm run build
```

---

## 🔧 Scripts

```bash
npm run build        # Compilar CSS y JS
npm run build:css    # Compilar solo CSS
npm run build:js     # Minificar solo JS
npm run dev          # Compilar todo
```

---

## 🚀 Despliegue

### GitHub Pages
```bash
git push origin main
```

### Netlify
- Build command: `npm run build`
- Publish directory: `/`

### Vercel
```bash
vercel --prod
```

---

## 📄 Licencia

MIT License - Ver [LICENSE](LICENSE)

---

## 👤 Autor

**Francisco Barrientos**
- 🌐 [franciscobarrientos.cl](https://franciscobarrientos.cl)
- 💼 [LinkedIn](https://www.linkedin.com/in/francisco-barrientos-ingeniero/)
- 📧 francisco.barrientos@usach.cl

---

**Versión:** 2.0.0 | **Última actualización:** Febrero 2026
