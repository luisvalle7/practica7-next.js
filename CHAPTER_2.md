# Capítulo 2: Rutas y navegación

En este capítulo creamos una nueva página `about.js` que se sirve en la ruta `/about`. Usamos el componente `<Link>` de Next.js para navegar entre páginas sin recargar toda la página.

## Conceptos aprendidos

- **Enrutamiento automático**: Cualquier archivo en `pages/` se convierte automáticamente en una ruta.
- **Componente Link**: El componente `<Link>` de Next.js proporciona navegación del lado del cliente, mejorando el rendimiento al evitar recargas completas.
- **Estructura de página**: Cada página es un componente React que exporta por defecto la función del componente.

## Archivos agregados

- `pages/about.js`: Una página simple con información de ejemplo.

## Cambios en `pages/index.js`

Se agregó:
- Importación del componente `Link` de Next.js
- Un elemento de navegación (`<nav>`) con un enlace a la página "/about"

## Próximo paso

En el capítulo 3, implementaremos **SSR (Server-Side Rendering)**, **SSG (Static Site Generation)** e **interactividad con React** usando hooks como `useState`.
