# 🤝 Guía de Contribución

Gracias por tu interés en contribuir a este proyecto.

---

## 🚀 Proceso de Desarrollo

### 1. Fork y Clone

```bash
# Fork el repositorio en GitHub
# Luego clona tu fork
git clone https://github.com/TU_USUARIO/FranciscoBarrientos.cl.git
cd FranciscoBarrientos.cl
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Crear una Rama

```bash
git checkout -b feature/mi-nueva-funcionalidad
# o
git checkout -b fix/correccion-de-bug
```

### 4. Hacer Cambios

- Edita los archivos necesarios
- Sigue las convenciones de código existentes
- Compila los assets si es necesario:

```bash
npm run build
```

### 5. Probar Localmente

- Abre `index.html` en tu navegador
- Verifica que todo funciona correctamente
- Prueba en modo claro y oscuro
- Prueba en español e inglés
- Verifica responsive design

### 6. Commit

Usa mensajes de commit descriptivos:

```bash
git add .
git commit -m "feat: añadir nueva sección de proyectos"
# o
git commit -m "fix: corregir error en cambio de idioma"
```

**Convención de commits:**
- `feat:` - Nueva funcionalidad
- `fix:` - Corrección de bug
- `docs:` - Cambios en documentación
- `style:` - Cambios de formato (no afectan el código)
- `refactor:` - Refactorización de código
- `perf:` - Mejoras de rendimiento
- `test:` - Añadir o corregir tests
- `chore:` - Cambios en build o herramientas

### 7. Push y Pull Request

```bash
git push origin feature/mi-nueva-funcionalidad
```

Luego crea un Pull Request en GitHub.

---

## 📝 Estándares de Código

### HTML
- Usa indentación de 2 espacios
- Usa comillas dobles para atributos
- Añade atributos `data-lang-es` y `data-lang-en` para textos traducibles
- Usa clases de Tailwind de forma consistente

### CSS
- Usa indentación de 2 espacios
- Sigue la metodología BEM si añades clases personalizadas
- Prefiere clases de Tailwind sobre CSS personalizado

### JavaScript
- Usa indentación de 2 espacios
- Usa `const` y `let`, no `var`
- Usa arrow functions cuando sea apropiado
- Añade comentarios para lógica compleja
- Mantén funciones pequeñas y enfocadas

---

## 🧪 Testing

Antes de hacer un PR, verifica:

- [ ] El sitio carga correctamente
- [ ] No hay errores en la consola del navegador
- [ ] El cambio de tema funciona
- [ ] El cambio de idioma funciona
- [ ] El menú móvil funciona
- [ ] Los links funcionan correctamente
- [ ] Las imágenes cargan correctamente
- [ ] El sitio es responsive (móvil, tablet, desktop)

---

## 📦 Build para Producción

Antes de hacer un PR, ejecuta:

```bash
npm run build
```

Y verifica que los archivos generados funcionan correctamente.

---

## 🐛 Reportar Bugs

Si encuentras un bug, por favor crea un issue con:

1. **Descripción clara** del problema
2. **Pasos para reproducir** el bug
3. **Comportamiento esperado** vs **comportamiento actual**
4. **Screenshots** si es aplicable
5. **Navegador y versión** donde ocurre

---

## 💡 Sugerir Mejoras

Para sugerir nuevas funcionalidades:

1. Crea un issue con la etiqueta `enhancement`
2. Describe claramente la funcionalidad
3. Explica por qué sería útil
4. Si es posible, sugiere una implementación

---

## ❓ Preguntas

Si tienes preguntas, puedes:

1. Crear un issue con la etiqueta `question`
2. Contactar a francisco.barrientos@usach.cl

---

¡Gracias por contribuir! 🎉
