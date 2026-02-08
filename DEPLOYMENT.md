# 🚀 Guía de Deployment

Esta guía explica cómo desplegar el sitio en diferentes plataformas.

---

## 📦 Preparación

Antes de desplegar, asegúrate de compilar los assets:

```bash
npm run build
```

Esto generará:
- `css/tailwind.css` - CSS optimizado
- `js/index.min.js` - JavaScript minificado

---

## 🌐 GitHub Pages

### Opción 1: Desde la rama main

1. Ve a Settings > Pages en tu repositorio
2. Selecciona "Deploy from a branch"
3. Selecciona la rama `main` y carpeta `/ (root)`
4. Guarda los cambios
5. El sitio estará disponible en `https://TU_USUARIO.github.io/FranciscoBarrientos.cl/`

### Opción 2: Con dominio personalizado

1. Añade un archivo `CNAME` con tu dominio:
   ```
   franciscobarrientos.cl
   ```
2. Configura los DNS de tu dominio:
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   CNAME www   TU_USUARIO.github.io
   ```
3. Espera a que los DNS se propaguen (puede tomar hasta 24 horas)

---

## 🎯 Netlify

### Deploy automático desde Git

1. Crea una cuenta en [Netlify](https://netlify.com)
2. Click en "Add new site" > "Import an existing project"
3. Conecta tu repositorio de GitHub
4. Configura el build:
   - **Build command:** `npm run build`
   - **Publish directory:** `.` (raíz)
5. Click en "Deploy site"

### Configuración adicional

El archivo `_headers` ya está configurado con:
- Cache headers optimizados
- Compresión automática

### Dominio personalizado

1. Ve a Site settings > Domain management
2. Click en "Add custom domain"
3. Sigue las instrucciones para configurar los DNS

---

## ⚡ Vercel

### Deploy desde Git

1. Crea una cuenta en [Vercel](https://vercel.com)
2. Click en "New Project"
3. Importa tu repositorio de GitHub
4. Configura el proyecto:
   - **Framework Preset:** Other
   - **Build Command:** `npm run build`
   - **Output Directory:** `.` (raíz)
5. Click en "Deploy"

### Configuración de headers

Crea un archivo `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/css/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=2592000, immutable"
        }
      ]
    },
    {
      "source": "/js/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=2592000, immutable"
        }
      ]
    },
    {
      "source": "/img/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## 🔧 Servidor Apache (cPanel, etc.)

### 1. Compilar assets

```bash
npm run build
```

### 2. Subir archivos

Sube los siguientes archivos/carpetas vía FTP o File Manager:

**Incluir:**
- `index.html`
- `css/` (completo)
- `js/index.min.js`
- `img/` (completo)
- `webfonts/` (completo)
- `robots.txt`
- `sitemap.xml`
- `schema.json`
- `CNAME`
- `.htaccess`

**NO subir:**
- `node_modules/`
- `src/`
- `build-css.js`
- `tailwind.config.js`
- `package.json`
- `package-lock.json`
- `js/index.js` (solo la versión minificada)
- Archivos `.md`
- Archivos `old.*`

### 3. Verificar .htaccess

El archivo `.htaccess` ya incluye:
- Cache headers
- Compresión GZIP
- Redirecciones HTTPS (si aplica)

---

## 🐳 Docker (Opcional)

Si quieres usar Docker, crea un `Dockerfile`:

```dockerfile
FROM nginx:alpine

# Copiar archivos del sitio
COPY index.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/index.min.js /usr/share/nginx/html/js/
COPY img/ /usr/share/nginx/html/img/
COPY webfonts/ /usr/share/nginx/html/webfonts/
COPY robots.txt /usr/share/nginx/html/
COPY sitemap.xml /usr/share/nginx/html/
COPY schema.json /usr/share/nginx/html/

# Configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
```

Y un `nginx.conf`:

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    # Compresión
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;

    # Cache headers
    location ~* \.(css|js)$ {
        expires 1M;
        add_header Cache-Control "public, immutable";
    }

    location ~* \.(jpg|jpeg|png|gif|ico|webp|woff|woff2|ttf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Build y run:

```bash
docker build -t franciscobarrientos-web .
docker run -p 8080:80 franciscobarrientos-web
```

---

## ✅ Verificación Post-Deployment

Después de desplegar, verifica:

- [ ] El sitio carga correctamente
- [ ] No hay errores en la consola
- [ ] El cambio de tema funciona
- [ ] El cambio de idioma funciona
- [ ] Todas las imágenes cargan
- [ ] Los links funcionan
- [ ] El sitio es responsive
- [ ] Los headers de cache están activos (usa https://redbot.org/)
- [ ] El sitio tiene HTTPS activo
- [ ] El sitemap.xml es accesible
- [ ] El robots.txt es accesible

---

## 🔍 Herramientas de Testing

- **Lighthouse:** Chrome DevTools > Lighthouse
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **GTmetrix:** https://gtmetrix.com/
- **WebPageTest:** https://www.webpagetest.org/
- **Security Headers:** https://securityheaders.com/
- **SSL Test:** https://www.ssllabs.com/ssltest/

---

## 📊 Monitoreo

Considera añadir:

- **Google Analytics** - Para estadísticas de tráfico
- **Google Search Console** - Para monitoreo de SEO
- **Uptime monitoring** - Para verificar disponibilidad (UptimeRobot, Pingdom)

---

**Última actualización:** 8 de Febrero, 2026
