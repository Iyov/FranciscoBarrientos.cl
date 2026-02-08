# Francisco Barrientos - Portfolio

[![Website](https://img.shields.io/website?url=https%3A%2F%2Ffranciscobarrientos.cl)](https://franciscobarrientos.cl)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-2.0.0-green.svg)](package.json)

Portfolio profesional de Francisco Barrientos, Ingeniero de Software y Datos de la USACH.

🌐 **[franciscobarrientos.cl](https://franciscobarrientos.cl)**

---

## 🚀 Características

### Funcionalidad
- **Multilenguaje** (ES/EN) con traducción dinámica de meta tags y contenido
- **Modo oscuro/claro** con detección automática de preferencias del sistema
- **Diseño responsive** optimizado para móviles, tablets y desktop
- **Service Worker** para funcionamiento offline y carga instantánea
- **PWA** (Progressive Web App) con cache inteligente
- **Navegación suave** con scroll animado y menú móvil
- **Modales de blog** con contenido detallado de proyectos
- **Protección anti-spam** con ofuscación de contactos en Base64
- **Año dinámico** en footer actualizado automáticamente

### Optimización
- **Performance:** 90+ en Lighthouse (Desktop)
- **SEO:** 95+ con meta tags dinámicos, breadcrumbs schema, hreflang
- **Accesibilidad:** 95+ WCAG AA, skip links, aria-labels traducidos
- **Seguridad:** Score A+ con headers CSP, HSTS, X-Frame-Options
- **Tamaño:** ~660KB (-75% vs versión anterior)
- **Tiempo de carga:** 1.5-2s (-60% vs versión anterior)

---

## 🛠️ Tecnologías

- **HTML5** semántico con Schema.org
- **Tailwind CSS 3.4.1** compilado localmente (sin CDN)
- **JavaScript** vanilla (sin frameworks)
- **Font Awesome 6.5.1** para iconografía
- **Service Worker** para PWA y cache
- **PostCSS** y **Autoprefixer** para CSS
- **Terser** para minificación de JavaScript

---

## 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/Iyov/FranciscoBarrientos.cl.git
cd FranciscoBarrientos.cl

# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Compilar para producción
npm run build
```

---

## 🔧 Scripts Disponibles

```bash
npm run dev          # Compilar CSS y JS
npm run build        # Compilar CSS y JS para producción
npm run build:css    # Compilar solo Tailwind CSS
npm run build:js     # Minificar solo JavaScript
```

---

## 📁 Estructura

```
franciscobarrientos.cl/
├── index.html              # Página principal
├── css/
│   ├── tailwind.css        # Tailwind compilado (27.53 KB)
│   ├── index.css           # Estilos personalizados
│   └── font-awesome_*.css  # Iconos
├── js/
│   ├── index.js            # JavaScript principal
│   └── index.min.js        # JavaScript minificado (5.92 KB)
├── img/                    # Imágenes y logos
├── sw.js                   # Service Worker (v1.0.2)
├── .htaccess               # Headers Apache
├── _headers                # Headers Netlify
├── sitemap.xml             # Sitemap SEO
└── robots.txt              # Robots SEO
```

---

## 🎨 Personalización

### Colores
Edita `tailwind.config.js`:
```javascript
colors: {
  "primary": "#1193d4",
  "background-light": "#f6f7f8",
  "background-dark": "#101c22",
}
```

### Contenido
Edita `index.html` y actualiza los atributos `data-lang-es` y `data-lang-en`.

### Recompilar
```bash
npm run build
```

---

## 🚀 Despliegue

### GitHub Pages
```bash
git add .
git commit -m "Update site"
git push origin main
```

### Netlify
Conecta el repositorio y configura:
- **Build command:** `npm run build`
- **Publish directory:** `/`

### Vercel
```bash
vercel --prod
```

---

## 📊 Métricas de Rendimiento

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| Performance | 60-70 | 90+ | +35% |
| SEO | 85 | 95+ | +12% |
| Accesibilidad | 75 | 95+ | +27% |
| Seguridad | F | A+ | +100% |
| Tamaño | 2.6MB | ~660KB | -75% |
| Tiempo de carga | 4-5s | 1.5-2s | -60% |

---

## ✅ Implementaciones Completadas

### SEO y Búsquedas (5/5)
- [x] Meta tags dinámicos (ES/EN)
- [x] Optimización de imágenes (alt, lazy loading, width/height)
- [x] Estructura de headings semántica (h1-h5)
- [x] Breadcrumbs schema (JSON-LD)
- [x] Hreflang para idiomas alternativos

### Cambios Visuales (4/4)
- [x] Anti-FOUC con detección de tema del sistema
- [x] Mejora de contraste (WCAG AA 4.5:1)
- [x] Skip links para navegación por teclado
- [x] Aria-labels traducidos dinámicamente

### Rendimiento (4/5)
- [x] Tailwind CSS local compilado (27.53 KB)
- [x] Google Fonts optimizado (preconnect, preload)
- [ ] ⏳ Subset de Font Awesome (requiere cuenta)
- [x] JavaScript minificado (5.92 KB, 49% reducción)
- [x] Cache headers (Apache/Netlify)

### Seguridad (2/2)
- [x] Security headers (CSP, HSTS, X-Frame-Options, etc.)
- [x] Ofuscación de email/teléfono (Base64)

### Otros (3/3)
- [x] Manejo de errores en JavaScript
- [x] Robots meta tag
- [x] Service Worker para PWA

### Optimizaciones Adicionales
- [x] Eliminación de console.log en producción
- [x] Año dinámico en footer
- [x] Compatibilidad con Windows (scripts npm)

---

## 🎯 Pendiente (Opcional)

- [ ] **Font Awesome Subset** - Crear kit personalizado en fontawesome.com con solo los ~20 iconos usados para ahorrar ~130KB adicionales

---

## 📄 Licencia

MIT License - Ver [LICENSE](LICENSE) para más detalles.

---

## 👤 Autor

**Francisco Barrientos**
- 🌐 [franciscobarrientos.cl](https://franciscobarrientos.cl)
- 💼 [LinkedIn](https://www.linkedin.com/in/francisco-barrientos-ingeniero/)
- 📧 francisco.barrientos@usach.cl
- 📱 +56 9 8762 9765

---

**Versión:** 2.0.0  
**Última actualización:** Febrero 2026  
**Estado:** ✅ Producción (18/19 tareas completadas - 95%)
