# 🎮 Página Web de Juegos RTS

Una página web dedicada a los juegos de estrategia en tiempo real (RTS) con paneles plegables interactivos y un banner impresionante.

## 📁 Archivos

- `rts-games.html` - Página principal con el contenido y estructura
- `styles/rts-games.css` - Estilos CSS para el diseño y animaciones
- `scripts/rts-games.js` - JavaScript para la funcionalidad de los paneles plegables

## 🚀 Cómo Usar

1. **Ejecutar el servidor:**
   ```bash
   docker-compose up
   ```

2. **Acceder a la página:**
   Abre tu navegador y ve a: `http://localhost:8081/rts-games.html`

## 🎯 Características

### Banner Principal
- **Cubre toda la pantalla** con diseño responsive
- Gradiente dinámico con efecto parallax
- Estadísticas destacadas (50+ juegos, desde 1990s)
- Animación de brillo en el título

### Paneles Plegables (Acordeón)
- **6 juegos clásicos incluidos:**
  - ⚔️ Warcraft II: Tides of Darkness (1995)
  - 🪖 Commandos: Behind Enemy Lines (1998)
  - 🏛️ Age of Empires (1997)
  - 🚀 StarCraft (1998)
  - 🤖 Total Annihilation (1997)
  - 💥 Command & Conquer (1995)

- **Información detallada por juego:**
  - Imágenes representativas
  - Descripción completa
  - Características principales
  - Ratings y puntuaciones
  - Información específica (razas, comandos, civilizaciones)

### Funcionalidades Interactivas
- **Paneles expandibles/colapsables**
- Animaciones suaves
- Diseño responsive para móviles
- Accesibilidad con navegación por teclado
- Efectos hover y transiciones

### Diseño Moderno
- **Paleta de colores RTS:** Azules oscuros, rojos estratégicos
- Tipografía moderna y legible
- Sombras y efectos de profundidad
- Scrollbar personalizado
- Animaciones de entrada escalonadas

## 🎨 Personalización

### Agregar Más Juegos
Para agregar un nuevo juego al acordeón, copia la estructura de un panel existente y modifica:

```html
<div class="accordion-item">
    <button class="accordion-header" data-game="nuevo-juego">
        <div class="game-icon">🎯</div>
        <div class="game-info">
            <h3>Nombre del Juego</h3>
            <span class="game-year">Año</span>
        </div>
        <div class="accordion-arrow">▼</div>
    </button>
    <div class="accordion-content">
        <!-- Contenido del juego -->
    </div>
</div>
```

### Modificar Colores
Los colores principales están definidos en las variables CSS:

```css
:root {
    --primary-color: #1a1a2e;    /* Azul muy oscuro */
    --secondary-color: #16213e;  /* Azul oscuro */
    --accent-color: #0f3460;     /* Azul medio */
    --text-light: #e94560;       /* Rojo estratégico */
}
```

## 📱 Responsive Design

- **Desktop:** Diseño completo con grid de 2 columnas en detalles
- **Tablet:** Ajustes en espaciado y tamaños de fuente
- **Móvil:** Paneles apilados, navegación simplificada

## ♿ Accesibilidad

- Navegación por teclado completa
- Contraste de colores adecuado
- Texto alternativo en imágenes
- Respetar preferencias de movimiento reducido

## 🔧 Tecnologías Usadas

- **HTML5** - Estructura semántica
- **CSS3** - Animaciones, Grid, Flexbox
- **JavaScript ES6** - Interactividad
- **Google Fonts** - Tipografía moderna

## 🎮 Juegos Incluidos

Cada panel contiene información detallada sobre juegos icónicos del género RTS que definieron la industria de los videojuegos.

¡Disfruta explorando los clásicos que hicieron historia en el mundo de la estrategia en tiempo real! 🚀