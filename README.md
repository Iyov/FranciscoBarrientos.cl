# Francisco Barrientos - Portfolio

[![Website](https://img.shields.io/website?url=https%3A%2F%2Ffranciscobarrientos.cl)](https://franciscobarrientos.cl)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Portfolio profesional de Francisco Barrientos, Ingeniero de Software y Datos de la USACH.

🌐 **[franciscobarrientos.cl](https://franciscobarrientos.cl)**

---

## 🚀 Características

### Funcionalidad
- **Multilenguaje** (ES/EN) con traducción dinámica de meta tags
- **Modo oscuro/claro** con detección automática de preferencias del sistema
- **Diseño responsive** optimizado para móviles, tablets y desktop
- **Service Worker** para funcionamiento offline y carga instantánea
- **Navegación suave** con scroll animado y menú móvil
- **Modales de blog** con contenido detallado de proyectos
- **Protección anti-spam** con ofuscación de contactos en Base64

### Optimización
- **Performance:** 90+ en Lighthouse
- **SEO:** Meta tags dinámicos, breadcrumbs schema, hreflang
- **Accesibilidad:** WCAG AA, skip links, aria-labels traducidos
- **Seguridad:** Headers CSP, HSTS, X-Frame-Options (Score A+)
- **Cache:** Headers optimizados para assets estáticos

---

## 🛠️ Tecnologías

- **HTML5** semántico con Schema.org
- **Tailwind CSS 3.4.1** compilado localmente
- **JavaScript** vanilla (sin frameworks)
- **Font Awesome 6.5.1** para iconografía
- **Service Worker** para PWA
- **Git** para control de versiones

---

## 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/Iyov/FranciscoBarrientos.cl.git
cd FranciscoBarrientos.cl

# Instalar dependencias
npm install

# Desarrollo (watch mode)
npm run dev

# Compilar para producción
npm run build
```

---

## 🔧 Scripts Disponibles

```bash
npm run dev          # Modo desarrollo con watch
npm run build        # Compilar CSS y JS
npm run build:css    # Compilar solo Tailwind CSS
npm run build:js     # Minificar solo JavaScript
```

---

## 📁 Estructura

```
franciscobarrientos.cl/
├── index.html              # Página principal
├── css/
│   ├── tailwind.css        # Tailwind compilado
│   ├── index.css           # Estilos personalizados
│   └── font-awesome_*.css  # Iconos
├── js/
│   ├── index.js            # JavaScript principal
│   └── index.min.js        # JavaScript minificado
├── img/                    # Imágenes y logos
├── sw.js                   # Service Worker
├── .htaccess               # Headers Apache
├── _headers                # Headers Netlify
└── sitemap.xml             # Sitemap SEO
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

## ✅ Tareas Completadas

- [x] Meta tags dinámicos (ES/EN)
- [x] Optimización de imágenes con lazy loading
- [x] Estructura de headings semántica
- [x] Breadcrumbs schema (JSON-LD)
- [x] Hreflang para idiomas alternativos
- [x] Anti-FOUC con detección de tema
- [x] Mejora de contraste (WCAG AA)
- [x] Skip links para navegación por teclado
- [x] Aria-labels traducidos
- [x] Tailwind CSS local (sin CDN)
- [x] Google Fonts optimizado
- [x] JavaScript minificado
- [x] Cache headers (Apache/Netlify)
- [x] Security headers (CSP, HSTS, etc.)
- [x] Ofuscación de email/teléfono
- [x] Manejo de errores en JavaScript
- [x] Service Worker para PWA
- [x] Robots meta tag

### Pendiente
- [ ] Subset de Font Awesome (requiere cuenta)

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
