# 🚀 FranciscoBarrientos.cl

<div align="center">

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)

**Sitio web personal de Francisco Barrientos**  
*Ingeniero de Software y Datos - Universidad de Santiago de Chile (USACH)*

[🌐 Ver Sitio](https://franciscobarrientos.cl) | [📋 Documentación](PLAN_DE_MEJORAS.md) | [🚀 Deployment](DEPLOYMENT.md)

</div>

---

## 📋 Descripción

Portafolio profesional moderno y optimizado que muestra servicios de desarrollo de software, consultoría especializada en minería y energía en Chile, y proyectos destacados. Diseñado con enfoque en rendimiento, accesibilidad y SEO.

---

## ✨ Características Principales

### 🎨 Diseño y UX

- **🌓 Modo Claro/Oscuro**
  - Cambio instantáneo entre temas
  - Respeta preferencias del sistema (`prefers-color-scheme`)
  - Sin flash al cargar (Anti-FOUC)
  - Persistencia en localStorage

- **🌍 Multilenguaje (ES/EN)**
  - Cambio dinámico de idioma
  - Traducciones completas de contenido
  - Meta tags traducidos automáticamente
  - Aria-labels traducidos para accesibilidad
  - Hreflang tags para SEO internacional

- **📱 Responsive Design**
  - Mobile-first approach
  - Breakpoints optimizados (sm, md, lg, xl)
  - Menú hamburguesa en móviles
  - Imágenes adaptativas
  - Touch-friendly interactions

- **🎯 Navegación Intuitiva**
  - Scroll suave entre secciones
  - Barra de progreso de scroll
  - Botón "Volver arriba" flotante
  - Skip links para accesibilidad
  - Menú sticky con backdrop blur

### 🔍 SEO y Optimización

- **📊 SEO Avanzado**
  - Meta tags dinámicos (ES/EN)
  - Schema.org structured data (Person, WebSite, Service)
  - Breadcrumbs schema
  - Open Graph tags (Facebook, LinkedIn)
  - Twitter Card tags
  - Canonical URLs
  - Sitemap.xml actualizado
  - Robots.txt configurado

- **🖼️ Optimización de Imágenes**
  - Alt tags descriptivos en todas las imágenes
  - Lazy loading para imágenes fuera del viewport
  - Atributos width/height para prevenir CLS
  - Imágenes semánticas con tags `<img>`

- **🏗️ Estructura Semántica**
  - HTML5 semántico
  - Jerarquía de headings correcta (h1-h5)
  - Landmarks ARIA
  - Roles y atributos accesibles

### ⚡ Rendimiento

- **🚀 Optimizaciones de Carga**
  - TailwindCSS compilado localmente (5.64 KB vs ~500 KB CDN)
  - JavaScript minificado (49% reducción: 10.7 KB → 5.47 KB)
  - Google Fonts optimizado (preconnect, preload, async)
  - Cache headers configurados (1 mes CSS/JS, 1 año imágenes)
  - Compresión GZIP habilitada

- **📦 Assets Optimizados**
  - CSS minificado y purgado (solo clases usadas)
  - JS comprimido con Terser
  - Fuentes con display=swap (sin FOIT)
  - Recursos críticos priorizados

- **⚙️ Métricas de Rendimiento**
  - First Contentful Paint (FCP) optimizado
  - Largest Contentful Paint (LCP) < 2.5s
  - Cumulative Layout Shift (CLS) < 0.1
  - Time to Interactive (TTI) < 3.0s

### ♿ Accesibilidad

- **🎯 WCAG 2.1 AA Compliant**
  - Contraste de colores 4.5:1 (texto normal)
  - Contraste de colores 3:1 (texto grande)
  - Skip links para navegación por teclado
  - Focus visible en todos los elementos interactivos
  - Aria-labels en botones e iconos

- **⌨️ Navegación por Teclado**
  - Tab navigation completa
  - Enter/Space para activar elementos
  - Escape para cerrar modales
  - Focus trap en modales abiertos

- **📢 Lectores de Pantalla**
  - Aria-labels descriptivos
  - Roles ARIA apropiados
  - Live regions para cambios dinámicos
  - Alt text en todas las imágenes

### 🎭 Secciones del Sitio

1. **👤 Quién Soy (About)**
   - Presentación profesional
   - Imagen de perfil con efecto glow
   - CTAs destacados (Contacto, Portafolio)

2. **💼 Servicios**
   - Desarrollo Web
   - Aplicaciones Móviles
   - Soluciones Personalizadas
   - Cards con hover effects

3. **⛏️ Minería**
   - Sistemas de Gestión Minera
   - Monitoreo en Tiempo Real
   - Integración de Datos
   - Enfoque en industria chilena

4. **⚡ Energía**
   - Sistemas de Gestión en Energía
   - Consultoría especializada
   - Integración de Datos (CEN, CNE)
   - Reporting y compliance

5. **🎨 Portafolio**
   - Meir.cl (Energía)
     - CargaExcelCNE (ETL)
     - ExportaExcel (Reporting)
   - DigDev.cl (Minería)
   - RopavejeroRetro.cl (E-commerce)
   - IvetteGonzalez.cl (Servicios)
   - FranciscoBarrientos.cl (Personal)

6. **� Testimonios**
   - Testimonios de clientes
   - Avatares con lazy loading
   - Diseño en grid responsive

7. **📝 Blog**
   - Artículos sobre tecnología
   - Modales con contenido completo
   - Imágenes de preview
   - Temas: Minería, Web Dev, Marketing Digital

8. **❓ FAQ**
   - Preguntas frecuentes
   - Acordeones interactivos
   - Iconos animados (+ / -)

9. **🎮 Hobbies**
   - Música (Nu Metal)
   - Deportes (Fútbol, Básquetbol, Tenis de mesa)
   - Juegos Retro
   - Informática
   - Memes
   - Cards con hover effects

10. **📞 Contacto**
    - Teléfono
    - Email
    - WhatsApp (botón flotante)
    - LinkedIn
    - GitHub
    - Twitter/X
    - Gravatar

### 🛠️ Características Técnicas

- **🎨 TailwindCSS**
  - Utility-first CSS framework
  - Dark mode con clase `dark`
  - Colores personalizados
  - Configuración extendida

- **� JavaScript Vanilla**
  - Sin dependencias externas
  - Código modular y mantenible
  - Event delegation
  - LocalStorage para preferencias

- **🔤 Tipografía**
  - Work Sans (Google Fonts)
  - Pesos: 400, 500, 700, 900
  - Material Symbols Outlined

- **🎯 Iconos**
  - Font Awesome 6.5.1
  - Iconos de marcas (social media)
  - Iconos sólidos y regulares

---

## �️ Tecnologías

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos personalizados
- **TailwindCSS 4.1** - Framework CSS utility-first
- **JavaScript ES6+** - Interactividad moderna

### Build Tools
- **Node.js** - Entorno de ejecución
- **PostCSS** - Procesamiento CSS
- **Autoprefixer** - Prefijos CSS automáticos
- **Terser** - Minificación JavaScript

### Fuentes e Iconos
- **Google Fonts** - Work Sans
- **Font Awesome 6.5.1** - Iconos vectoriales
- **Material Symbols** - Iconos de Google

### SEO y Analytics
- **Schema.org** - Structured data
- **Open Graph** - Social media previews
- **Twitter Cards** - Twitter previews
- **Sitemap XML** - Indexación de búsqueda

---

## 🚀 Desarrollo

### Requisitos Previos

- Node.js 16+ y npm 8+
- Editor de código (VS Code recomendado)
- Git

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Iyov/FranciscoBarrientos.cl.git
cd FranciscoBarrientos.cl

# Instalar dependencias
npm install

# Compilar assets
npm run build
```

### Scripts Disponibles

```bash
# Compilar CSS de Tailwind
npm run build:css

# Minificar JavaScript
npm run build:js

# Compilar todo (CSS + JS)
npm run build

# Desarrollo (compila todo)
npm run dev

# Limpiar archivos compilados
npm run clean
```

### Estructura del Proyecto

```
franciscobarrientos.cl/
├── css/
│   ├── font-awesome_6.5.1_all.min.css  # Iconos
│   ├── index.css                        # Estilos personalizados
│   └── tailwind.css                     # Tailwind compilado ✨
├── js/
│   ├── index.js                         # JavaScript original
│   └── index.min.js                     # JavaScript minificado ✨
├── img/                                 # Imágenes y logos
├── webfonts/                            # Fuentes de Font Awesome
├── src/
│   └── input.css                        # Entrada de Tailwind
├── index.html                           # Página principal
├── build-css.js                         # Script de compilación
├── tailwind.config.js                   # Config Tailwind
├── package.json                         # Dependencias
├── .htaccess                            # Headers Apache
├── _headers                             # Headers Netlify
├── robots.txt                           # SEO
├── sitemap.xml                          # SEO
└── schema.json                          # Schema.org

Documentación:
├── README.md                            # Este archivo
├── PLAN_DE_MEJORAS.md                   # Plan de optimización
├── CHECKLIST.md                         # Checklist de tareas
├── DEPLOYMENT.md                        # Guía de deployment
└── CONTRIBUTING.md                      # Guía de contribución
```

---

## 🏗️ Build para Producción

Antes de subir a producción:

```bash
# Compilar todos los assets
npm run build
```

Esto genera:
- `css/tailwind.css` - CSS optimizado (5.64 KB)
- `js/index.min.js` - JavaScript minificado (5.47 KB)

### Archivos para Producción

**✅ Incluir:**
- `index.html`
- `css/` (todos)
- `js/index.min.js`
- `img/`
- `webfonts/`
- `robots.txt`
- `sitemap.xml`
- `schema.json`
- `CNAME`
- `.htaccess` (Apache)
- `_headers` (Netlify)

**❌ NO incluir:**
- `node_modules/`
- `src/`
- `build-css.js`
- `tailwind.config.js`
- `package*.json`
- `js/index.js` (solo minificado)
- Archivos `.md`
- Archivos `old.*`

---

## 🎨 Personalización

### Colores

Edita `tailwind.config.js`:

```javascript
colors: {
  "primary": "#1193d4",           // Azul principal
  "background-light": "#f6f7f8",  // Fondo claro
  "background-dark": "#101c22",   // Fondo oscuro
}
```

### Fuentes

Cambia en `tailwind.config.js` y `index.html`:

```javascript
fontFamily: {
  "display": ["Work Sans", "sans-serif"]
}
```

### Contenido

Edita `index.html` y añade atributos de traducción:

```html
<p data-lang-es="Texto en español" data-lang-en="Text in English">
  Texto en español
</p>
```

---

## 📊 Optimizaciones Implementadas

### ✅ SEO (5/5 tareas)
- Meta tags dinámicos (ES/EN)
- Schema.org structured data
- Breadcrumbs schema
- Hreflang tags
- Imágenes optimizadas con alt tags
- Lazy loading

### ✅ Accesibilidad (4/4 tareas)
- Skip links
- Aria-labels traducidos
- Contraste WCAG AA (4.5:1)
- Estructura de headings correcta
- Anti-FOUC

### ✅ Rendimiento (4/5 tareas)
- Tailwind CSS local (5.64 KB)
- JavaScript minificado (49% reducción)
- Google Fonts optimizado
- Cache headers configurados
- ⏳ Font Awesome subset (pendiente)

### 📈 Métricas Objetivo

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| Performance | 60-70 | 90-95 | +35% |
| SEO | 85 | 95-100 | +15% |
| Accesibilidad | 75 | 95-100 | +27% |
| Tamaño | 2.6MB | 660KB | -75% |
| Tiempo de carga | 4-5s | 1.5-2s | -60% |

---

## 🔧 Mantenimiento

### Actualizar Estilos

```bash
# 1. Edita src/input.css o css/index.css
# 2. Compila
npm run build:css
# 3. Verifica en el navegador
```

### Actualizar JavaScript

```bash
# 1. Edita js/index.js
# 2. Minifica
npm run build:js
# 3. Verifica en el navegador
```

### Añadir Clases de Tailwind

```bash
# 1. Edita index.html con nuevas clases
# 2. Recompila (Tailwind genera solo las clases usadas)
npm run build:css
```

---

## 📝 Tareas Pendientes

Ver `CHECKLIST.md` para el estado completo.

**Próximas mejoras:**
- [ ] Subset de Font Awesome (requiere cuenta)
- [ ] Conversión de imágenes a WebP
- [ ] Headers de seguridad en servidor
- [ ] Ofuscar email y teléfono
- [ ] Service Worker para PWA
- [ ] Google Analytics

---

## 🤝 Contribuir

¿Quieres contribuir? Lee [CONTRIBUTING.md](CONTRIBUTING.md) para conocer el proceso.

### Quick Start

```bash
# Fork y clona el repo
git clone https://github.com/TU_USUARIO/FranciscoBarrientos.cl.git

# Crea una rama
git checkout -b feature/mi-funcionalidad

# Haz cambios y compila
npm run build

# Commit y push
git commit -m "feat: añadir nueva funcionalidad"
git push origin feature/mi-funcionalidad

# Crea un Pull Request
```

---

## 📄 Licencia

MIT License - © 2026 Francisco Barrientos

Ver [LICENSE](LICENSE) para más detalles.

---

## 📞 Contacto

<div align="center">

**Francisco Barrientos**  
*Ingeniero de Software y Datos - USACH*

[![Email](https://img.shields.io/badge/Email-francisco.barrientos%40usach.cl-red?style=flat-square&logo=gmail)](mailto:francisco.barrientos@usach.cl)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-francisco--barrientos--c-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/francisco-barrientos-c/)
[![GitHub](https://img.shields.io/badge/GitHub-Iyov-black?style=flat-square&logo=github)](https://github.com/Iyov/)
[![Twitter](https://img.shields.io/badge/Twitter-@FcoBarrientosCa-1DA1F2?style=flat-square&logo=twitter)](https://x.com/FcoBarrientosCa/)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-+56987629765-25D366?style=flat-square&logo=whatsapp)](https://wa.me/56987629765)

</div>

---

## 🙏 Agradecimientos

- [TailwindCSS](https://tailwindcss.com/) - Framework CSS
- [Font Awesome](https://fontawesome.com/) - Iconos
- [Google Fonts](https://fonts.google.com/) - Tipografía
- [Kiro AI](https://kiro.ai/) - Asistencia en desarrollo

---

<div align="center">

**⭐ Si te gusta este proyecto, dale una estrella en GitHub ⭐**

Hecho con ❤️ en Chile 🇨🇱

**Última actualización:** 8 de Febrero, 2026

</div>
