# Code218 Landing Page

Landing page moderna y profesional para Code218, empresa de desarrollo de software.

![Code218](assets/images/logo.png)

## 🚀 Características

- ✅ Diseño moderno y responsivo
- ✅ Animaciones suaves con AOS (Animate On Scroll)
- ✅ Metodología BEM para CSS
- ✅ Arquitectura 7-1 para organización de estilos
- ✅ JavaScript vanilla (sin dependencias pesadas)
- ✅ Optimizado para SEO
- ✅ Accesibilidad (ARIA labels, focus states)
- ✅ Compatible con todos los navegadores modernos

## 📁 Estructura del Proyecto

```
Code218LandPage/
├── index.html                 # Página principal
├── assets/
│   ├── css/
│   │   ├── base/              # Reset, variables, tipografía
│   │   ├── components/        # Botones, cards, navbar
│   │   ├── layout/            # Header, footer, sections
│   │   ├── sections/          # Estilos de cada sección
│   │   ├── utils/             # Animaciones y utilidades
│   │   └── main.css           # Archivo principal (importa todo)
│   ├── js/
│   │   └── main.js            # JavaScript principal
│   └── images/                # Imágenes y logos
├── .cursor/rules/             # Reglas del proyecto
└── README.md
```

## 🎨 Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Azul | `#045EBF` | Color primario, CTAs |
| Amarillo | `#FFE706` | Highlights, acentos |
| Rojo | `#ED2E24` | Acentos secundarios |
| Background | `#FAFAFA` | Fondo principal |
| Texto | `#1A1A2E` | Texto principal |

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con Custom Properties
- **JavaScript ES6+** - Interactividad
- **AOS** - Animaciones al scroll
- **Montserrat** - Tipografía principal

## 📦 Instalación

1. Clona o descarga el repositorio
2. Abre `index.html` en tu navegador

```bash
# Si tienes un servidor local (opcional)
npx serve .
```

## 🖼️ Configuración de Imágenes

Para que la página funcione correctamente, coloca los siguientes archivos en `assets/images/`:

- `logo.png` - Logo principal (fondo transparente)
- `logo-white.png` - Logo para fondos oscuros
- `favicon.png` - Favicon del sitio

## 📱 Secciones

1. **Hero** - Presentación principal con estadísticas
2. **Servicios** - 6 cards de servicios ofrecidos
3. **Nosotros** - Información de la empresa
4. **Proyectos** - Portfolio con filtros
5. **Tecnologías** - Stack tecnológico (carrusel)
6. **Testimonios** - Opiniones de clientes
7. **CTA** - Llamada a la acción
8. **Contacto** - Formulario de contacto
9. **Footer** - Enlaces y redes sociales

## ⚙️ Personalización

### Cambiar colores
Edita las variables en `assets/css/base/_variables.css`:

```css
:root {
  --color-primary: #045EBF;
  --color-secondary: #FFE706;
  --color-accent: #ED2E24;
}
```

### Cambiar tipografía
Modifica en `assets/css/base/_typography.css` el import de Google Fonts.

### Añadir proyectos
En `index.html`, duplica un `.project-card` y cambia el contenido.

## 🔧 Mejoras Futuras

- [ ] Conectar formulario con backend
- [ ] Añadir imágenes reales de proyectos
- [ ] Implementar modo oscuro
- [ ] Añadir blog
- [ ] Optimizar imágenes con WebP

## 📄 Licencia

© 2024 Code218. Todos los derechos reservados.

---

Desarrollado con ❤️ por Code218

