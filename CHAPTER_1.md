# Capítulo 1: Configuración del proyecto Next.js

En este capítulo instalamos Next.js con `create-next-app`. Next.js genera automáticamente rutas a partir de la carpeta `pages/`. En la página inicial (`/`) mostramos un mensaje de bienvenida. 

Aprendimos que **Next.js es un framework React** para aplicaciones web que soporta renderizado estático y dinámico:
- **Rutas automáticas**: Cualquier archivo `.js` dentro de `pages/` se convierte automáticamente en una ruta accesible.
- **Rendimiento mejorado**: Next.js optimiza la carga de páginas con diferentes estrategias de renderizado.
- **Estructura del proyecto**: Carpetas como `pages/` (rutas), `public/` (archivos estáticos) y `styles/` (estilos).

## Comandos utilizados

```bash
npx create-next-app@latest .
# Respuestas recomendadas:
# - TypeScript: No
# - ESLint: Yes
# - Tailwind CSS: No
# - src/: No
# - App Router: No
# - Import alias: No
```

## Página principal simplificada

El archivo `pages/index.js` muestra un mensaje simple de bienvenida sin dependencias complejas.

## Próximo paso

En el capítulo 2, crearemos nuevas páginas y aprenderemos sobre navegación con el componente `<Link>`.
