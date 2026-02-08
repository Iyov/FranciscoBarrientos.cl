# 🤝 Guía de Contribución

Gracias por tu interés en contribuir.

---

## 🚀 Inicio Rápido

```bash
# Fork y clonar
git clone https://github.com/tu-usuario/FranciscoBarrientos.cl.git
cd FranciscoBarrientos.cl

# Instalar dependencias
npm install

# Compilar
npm run build
```

---

## 📝 Proceso

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Desarrolla y prueba
4. Compila: `npm run build`
5. Commit: `git commit -m "feat: descripción"`
6. Push: `git push origin feature/nueva-funcionalidad`
7. Abre un Pull Request

---

## 🎨 Estándares

### HTML
- HTML5 semántico
- Atributos `data-lang-es` y `data-lang-en` para textos
- Atributo `alt` en todas las imágenes

### CSS
- Usar clases de Tailwind
- CSS personalizado en `css/index.css`
- Recompilar: `npm run build:css`

### JavaScript
- JavaScript vanilla
- Comentarios en español
- Minificar: `npm run build:js`

---

## 🔧 Commits

Usar [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: nueva funcionalidad
fix: corrección de bug
docs: cambios en documentación
style: formato
refactor: refactorización
perf: mejoras de rendimiento
```

---

## ✅ Checklist

- [ ] Código funciona
- [ ] CSS y JS compilados
- [ ] Sin errores en consola
- [ ] Probado en modo claro/oscuro
- [ ] Probado en español/inglés
- [ ] Probado en móvil/desktop

---

## 📄 Licencia

Al contribuir, aceptas la licencia MIT.

---

**¿Preguntas?** francisco.barrientos@usach.cl
