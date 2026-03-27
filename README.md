# 🛒 Carrito Mauri - Apache Web Server

Este proyecto levanta un servidor Apache profesional utilizando **Docker** y **Docker-Compose**. Incluye una página de aterrizaje con un diseño premium y efectos visuales modernos.

## 🚀 Cómo empezar

Para levantar el sistema y ver el resultado, asegúrate de tener Docker instalado y ejecuta el siguiente comando en tu terminal:

```bash
docker-compose up -d
```

## 🌐 Acceso al servidor

Una vez iniciado, el servidor estará disponible en el siguiente enlace:

👉 **[http://localhost:8081](http://localhost:8081)**

---

## 🛠️ Tecnologías utilizadas

- **Servidor**: Apache (httpd:2.4)
- **Despliegue**: Docker & Docker-Compose
- **Frontend**: HTML5, Vanilla CSS (Glassmorphism, Animations)
- **Imagen**: Generada por IA

## 📂 Estructura del Proyecto

- `docker-compose.yml`: Configuración del contenedor y mapeo de puertos.
- `public/`: Directorio raíz de los archivos web.
  - `index.html`: Estructura principal.
  - `style.css`: Estilos visuales optimizados.
  - `hero.png`: Assets visuales.

---

> [!TIP]
> Si deseas detener el servidor, utiliza `docker-compose down`.
