# Capítulo 3: SSR, SSG e interactividad

En este capítulo implementamos los tres tipos principales de renderizado en Next.js y creamos componentes interactivos con React.

## Conceptos implementados

### 1. SSR (Server-Side Rendering)

**Archivo**: `pages/ssr-example.js`

- Utiliza la función `getServerSideProps()` que se ejecuta en **cada solicitud** en el servidor.
- La página genera HTML dinámico en el servidor y lo envía al cliente.
- **Uso ideal**: Datos que cambian frecuentemente o contenido personalizado por usuario.
- **Ventaja**: Contenido siempre actualizado.
- **Desventaja**: Mayor latencia en cada request.

```javascript
export async function getServerSideProps() {
  // Se ejecuta en cada solicitud
  return {
    props: { time: new Date().toString() }
  };
}
```

### 2. SSG (Static Site Generation)

**Archivo**: `pages/ssg-example.js`

- Utiliza la función `getStaticProps()` que se ejecuta **en tiempo de compilación**.
- Las páginas se pre-generan como HTML estático durante el build.
- **Uso ideal**: Contenido estático que no cambia frecuentemente.
- **Ventaja**: Mejor rendimiento y menor carga del servidor.
- **Desventaja**: Contenido fijo hasta el siguiente build.

```javascript
export async function getStaticProps() {
  // Se ejecuta en compilación (build time)
  return {
    props: { date: new Date().toString() }
  };
}
```

### 3. Interactividad con React

**Archivo**: `pages/counter.js`

- Utiliza el hook `useState()` de React para manejar estado local.
- Se renderiza principalmente en el cliente (CSR - Client-Side Rendering).
- **Uso ideal**: Componentes interactivos, formularios, validaciones locales.
- **Ventaja**: Interacción fluida sin necesidad de comunicar con el servidor.

```javascript
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Cantidad: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}
```

## Resumen de los tres tipos de renderizado

| Tipo | Cuándo se genera | Ventajas | Desventajas |
|------|------------------|----------|-------------|
| **SSR** | Cada request | Contenido dinámico y actualizado | Mayor latencia |
| **SSG** | En compilación | Mejor rendimiento | Contenido estático |
| **CSR** (React state) | En el navegador | Interactividad fluida | Depende del JS del cliente |

## Próximos pasos

Estos capítulos cubren los fundamentos de Next.js. Para proyectos más avanzados, considera:
- Implementar rutas dinámicas (`pages/[id].js`)
- Usar API routes (`pages/api/`)
- Integrar una base de datos
- Usar TypeScript
