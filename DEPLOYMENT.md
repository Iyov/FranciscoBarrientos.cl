# 🚀 Guía de Despliegue

Instrucciones para desplegar franciscobarrientos.cl en diferentes plataformas.

---

## 📦 Preparación

```bash
# Compilar assets
npm run build

# Verificar archivos generados
ls css/tailwind.css
ls js/index.min.js
```

---

## 🌐 GitHub Pages

### Configuración Inicial

1. Ve a **Settings** > **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **root**
4. Guarda los cambios

### Despliegue

```bash
git add .
git commit -m "Update site"
git push origin main
```

**URL:** `https://tu-usuario.github.io/FranciscoBarrientos.cl/`

### Dominio Personalizado

1. Crea archivo `CNAME` con tu dominio:
   ```
   franciscobarrientos.cl
   ```

2. Configura DNS:
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   CNAME www   tu-usuario.github.io
   ```

---

## 🎯 Netlify

### Opción 1: Desde Git

1. Conecta tu repositorio en [netlify.com](https://netlify.com)
2. Configuración:
   - **Build command:** `npm run build`
   - **Publish directory:** `/`
3. Deploy

### Opción 2: Drag & Drop

1. Compila localmente: `npm run build`
2. Arrastra la carpeta completa a Netlify

### Dominio Personalizado

1. **Site settings** > **Domain management**
2. **Add custom domain**
3. Configura DNS según instrucciones

**Nota:** El archivo `_headers` se aplicará automáticamente.

---

## ▲ Vercel

### Desde CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Desde Dashboard

1. Importa repositorio en [vercel.com](https://vercel.com)
2. Configuración:
   - **Build Command:** `npm run build`
   - **Output Directory:** `/`
3. Deploy

### Dominio Personalizado

1. **Settings** > **Domains**
2. Añade tu dominio
3. Configura DNS según instrucciones

---

## 🖥️ Servidor Apache

### Requisitos
- Apache 2.4+
- mod_rewrite habilitado
- mod_headers habilitado

### Instalación

```bash
# Subir archivos al servidor
scp -r * usuario@servidor:/var/www/html/

# Verificar permisos
chmod -R 755 /var/www/html/
```

### Configuración

El archivo `.htaccess` incluye:
- Headers de seguridad
- Cache headers
- Redirección HTTPS
- Compresión GZIP

### Habilitar módulos

```bash
sudo a2enmod rewrite
sudo a2enmod headers
sudo a2enmod expires
sudo systemctl restart apache2
```

---

## 🐳 Docker

### Dockerfile

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    # Security headers
    add_header X-Frame-Options "DENY";
    add_header X-Content-Type-Options "nosniff";
    add_header X-XSS-Protection "1; mode=block";

    # Cache
    location ~* \.(css|js|jpg|png|webp|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Build y Run

```bash
# Build
docker build -t franciscobarrientos-web .

# Run
docker run -d -p 80:80 franciscobarrientos-web
```

---

## ✅ Verificación Post-Despliegue

### Performance
- [ ] Lighthouse Performance: 90+
- [ ] Tiempo de carga: <2s

### Funcionalidad
- [ ] Cambio de tema funciona
- [ ] Cambio de idioma funciona
- [ ] Menú móvil funciona
- [ ] Modales funcionan
- [ ] Service Worker activo

### SEO
- [ ] Meta tags correctos
- [ ] Sitemap accesible: `/sitemap.xml`
- [ ] Robots accesible: `/robots.txt`

### Seguridad
- [ ] HTTPS activo
- [ ] Headers de seguridad: [securityheaders.com](https://securityheaders.com)
- [ ] Score A o A+

---

## 🔧 Troubleshooting

### CSS/JS no se actualiza
- Incrementa versión en `index.html`: `?v=2026-02-08_X`
- Limpia cache del navegador: Ctrl+Shift+R

### Service Worker no actualiza
- Incrementa `CACHE_NAME` en `sw.js`
- Desregistra SW en DevTools > Application

### Headers no se aplican
- Verifica que `.htaccess` o `_headers` esté en root
- Verifica permisos del archivo
- Revisa logs del servidor

---

## 📞 Soporte

**¿Problemas?** Contacta a francisco.barrientos@usach.cl
