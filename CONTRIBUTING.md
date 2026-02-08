# 🤝 Guía de Contribución

Gracias por tu interés en contribuir a este proyecto.

---

## 🚀 Inicio Rápido

```bash
# Fork y clonar
git clone https://github.com/tu-usuario/FranciscoBarrientos.cl.git
cd FranciscoBarrientos.cl

# Instalar dependencias
npm install

# Desarrollo
npm run dev
```

---

## 📝 Proceso de Contribución

1. **Fork** el repositorio
2. **Crea** una rama: `git checkout -b feature/nueva-funcionalidad`
3. **Desarrolla** y prueba tus cambios
4. **Compila:** `npm run build`
5. **Commit:** `git commit -m "feat: descripción del cambio"`
6. **Push:** `git push origin feature/nueva-funcionalidad`
7. **Abre** un Pull Request

---

## 🎨 Estándares de Código

### HTML
- Usar HTML5 semántico
- Incluir atributos `data-lang-es` y `data-lang-en` para textos traducibles
- Añadir `alt` a todas las imágenes

### CSS
- Usar clases de Tailwind cuando sea posible
- CSS personalizado en `css/index.css`
- Recompilar: `npm run build:css`

### JavaScript
- JavaScript vanilla (sin frameworks)
- Comentarios claros en español
- Minificar después de cambios: `npm run build:js`

---

## 🔧 Estructura de Commits

Usar [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: nueva funcionalidad
fix: corrección de bug
docs: cambios en documentación
style: formato, espacios, etc.
refactor: refactorización de código
perf: mejoras de rendimiento
test: añadir tests
chore: tareas de mantenimiento
```

---

## ✅ Checklist Pre-Commit

- [ ] Código funciona correctamente
- [ ] CSS y JS compilados (`npm run build`)
- [ ] Sin errores en consola del navegador
- [ ] Probado en modo claro y oscuro
- [ ] Probado en español e inglés
- [ ] Probado en móvil y desktop
- [ ] Lighthouse Performance: 90+

---

## 🐛 Reportar Bugs

Incluye en tu reporte:
- Descripción clara del problema
- Pasos para reproducir
- Comportamiento esperado vs actual
- Screenshots si aplica
- Navegador y versión

---

## 💡 Sugerir Mejoras

- Describe la mejora propuesta
- Explica el beneficio
- Incluye ejemplos si es posible

---

## 📄 Licencia

Al contribuir, aceptas que tus contribuciones se licencien bajo MIT License.

---

**¿Preguntas?** Abre un issue o contacta a francisco.barrientos@usach.cl
