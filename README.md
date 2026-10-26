# Code218 Landing Page

Landing page de Code218. Funciona como **punto de entrada único a los tres productos**:
la API de Facturación Electrónica SRI, MicroMarket y la fábrica de software a medida.

Cada producto tiene su propia sección ancla y su propio CTA de WhatsApp con mensaje
pre-rellenado distinto, de modo que al recibir el mensaje se sabe por qué puerta entró el
prospecto. El formulario de contacto incluye además un campo "¿Sobre qué quieres hablar?"
que viaja en el mensaje de WhatsApp.

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

| # | Sección | Ancla | Para quién |
|---|---------|-------|------------|
| 1 | Hero | `#inicio` | Todos — posicionamiento común: "software que factura solo" |
| 2 | Soluciones (3 puertas) | `#soluciones` | Derivador: manda a cada visitante a su producto |
| 3 | API de Facturación SRI | `#facturacion` | SaaS, POS, agencias, ERPs |
| 4 | MicroMarket | `#micromarket` | Restaurantes y comercios que venden por WhatsApp |
| 5 | Fábrica de software | `#fabrica` | Empresas con un proceso propio |
| 6 | Cómo trabajamos | `#nosotros` | Prospectos de ticket alto |
| 7 | Nuestro trabajo | `#casos` | Prueba social (clientes sin nombrar) |
| 8 | Tecnologías | — | Stack real: Java, Spring Boot, PostgreSQL, React, Redis, Docker |
| 9 | CTA + Contacto | `#contacto` | Cierre |

### Pendientes de contenido

- **Testimonios**: la sección se retiró porque los que había eran de clientes ficticios.
  Vuelve a entrar cuando haya citas reales con nombre y autorización.
- **Casos**: los proyectos se describen sin nombrar al cliente. Al obtener permiso, se
  pueden nombrar y añadir capturas reales.
- **Métricas del hero**: se reemplazaron los contadores inventados (150 proyectos,
  50 clientes, 5 años) por tres sellos verificables. Si hay cifras reales que publicar,
  van ahí.

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

