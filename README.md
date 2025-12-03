# Práctica 7: Fundamentos de Next.js

Este repositorio contiene una guía completa paso a paso para aprender los fundamentos de **Next.js**, un framework de React para construcción de aplicaciones web modernas. La práctica se divide en **3 capítulos** progresivos, cada uno en su propia rama de Git.

## 📋 Estructura del Proyecto

El proyecto está organizado en ramas de Git, donde cada rama representa un capítulo de la práctica:

```
main (rama principal)
├── chapter-1: Configuración inicial de Next.js
├── chapter-2: Rutas y navegación
└── chapter-3: SSR, SSG e interactividad
```

## 📚 Capítulos

### Capítulo 1: Configuración del proyecto Next.js
**Rama**: `chapter-1`

En este capítulo aprendemos:
- Crear un proyecto Next.js usando `create-next-app`
- Estructura básica del proyecto (carpetas `pages/`, `public/`, `styles/`)
- Rutas automáticas basadas en la estructura de carpetas
- Renderizado de una página inicial simple

**Archivos principales**: `pages/index.js`

[Ver detalles del Capítulo 1](CHAPTER_1.md)

---

### Capítulo 2: Rutas y navegación
**Rama**: `chapter-2`

En este capítulo aprendemos:
- Crear múltiples páginas (archivo `about.js`)
- Enrutamiento automático en Next.js
- Usar el componente `<Link>` para navegación sin recargas
- Navegar entre páginas de forma eficiente

**Archivos principales**: `pages/index.js`, `pages/about.js`

[Ver detalles del Capítulo 2](CHAPTER_2.md)

---

### Capítulo 3: SSR, SSG e interactividad
**Rama**: `chapter-3`

En este capítulo implementamos:
- **SSR (Server-Side Rendering)**: Renderizado en servidor para contenido dinámico (`pages/ssr-example.js`)
- **SSG (Static Site Generation)**: Generación estática en compilación (`pages/ssg-example.js`)
- **CSR (Client-Side Rendering)**: Interactividad con React hooks (`pages/counter.js`)

**Archivos principales**: 
- `pages/ssr-example.js` - Renderizado en servidor
- `pages/ssg-example.js` - Generación estática
- `pages/counter.js` - Componente interactivo

[Ver detalles del Capítulo 3](CHAPTER_3.md)

---

## 🚀 Cómo ejecutar el proyecto

### Requisitos previos

- Node.js (versión 18.0 o superior)
- npm o yarn
- Git

### Instalación y ejecución

1. **Clonar el repositorio**:
```bash
git clone https://github.com/luisvalle7/practica7-next.js.git
cd practica7-next.js
```

2. **Cambiar a una rama específica** (opcional):
```bash
# Ver todas las ramas
git branch -a

# Cambiar a la rama que deseas (ejemplo: chapter-1)
git checkout chapter-1
```

3. **Instalar dependencias**:
```bash
npm install
```

4. **Ejecutar el servidor de desarrollo**:
```bash
npm run dev
```

5. **Abrir en el navegador**:
```
http://localhost:3000
```

### Compilación para producción

```bash
npm run build
npm run start
```

---

## 📖 Conceptos clave aprendidos

### 1. Rutas automáticas
Cualquier archivo `.js` en la carpeta `pages/` se convierte automáticamente en una ruta:
- `pages/index.js` → `/`
- `pages/about.js` → `/about`
- `pages/ssr-example.js` → `/ssr-example`

### 2. Renderizado híbrido

| Tipo | Función | Cuándo | Caso de uso |
|------|---------|--------|------------|
| **SSR** | `getServerSideProps()` | Cada request | Datos dinámicos, personalizados |
| **SSG** | `getStaticProps()` | En compilación | Contenido estático, blogs |
| **CSR** | `useState()` en componentes | En el cliente | Interactividad, UI dinámica |

### 3. Componente Link
Permite navegación del lado del cliente sin recargas completas:
```jsx
import Link from 'next/link';

<Link href="/about">
  <a>Ir a Acerca de</a>
</Link>
```

### 4. React Hooks
Ejemplo con `useState`:
```jsx
import { useState } from 'react';

const [count, setCount] = useState(0);
```

---

## 📁 Estructura del directorio actual

```
practica7-next.js/
├── pages/
│   ├── index.js           # Página inicial
│   ├── about.js           # Página Acerca de
│   ├── ssr-example.js     # Ejemplo de SSR
│   ├── ssg-example.js     # Ejemplo de SSG
│   ├── counter.js         # Componente interactivo
│   ├── _app.js            # App wrapper
│   ├── _document.js       # HTML document
│   └── api/
│       └── hello.js       # Ruta API de ejemplo
├── public/                # Archivos estáticos
├── styles/                # CSS modules
├── package.json           # Dependencias
├── next.config.mjs        # Configuración de Next.js
├── CHAPTER_1.md           # Documentación Capítulo 1
├── CHAPTER_2.md           # Documentación Capítulo 2
├── CHAPTER_3.md           # Documentación Capítulo 3
└── README.md              # Este archivo
```

---

## 🔗 Recursos útiles

- [Documentación oficial de Next.js](https://nextjs.org/docs)
- [Documentación de React](https://react.dev)
- [W3Schools - React Hooks](https://www.w3schools.com/react/react_hooks.asp)
- [Next.js Learn - Interactive Tutorial](https://nextjs.org/learn-pages-router)

---

## 💡 Notas de la práctica

- Cada rama (chapter-1, chapter-2, chapter-3) contiene el código del capítulo respectivo
- Los archivos `CHAPTER_1.md`, `CHAPTER_2.md` y `CHAPTER_3.md` contienen explicaciones detalladas de cada etapa
- El proyecto usa **Pages Router** (tradicional) en lugar de App Router (experimental)
- CSS básico sin frameworks como Tailwind para mantener la simplicidad
- TypeScript está deshabilitado para enfocarse en los conceptos fundamentales

---

## 🎯 Objetivos de aprendizaje

Al completar esta práctica, deberías:

✅ Entender la estructura básica de Next.js  
✅ Crear múltiples páginas y rutas  
✅ Navegar entre páginas eficientemente  
✅ Diferenciar entre SSR, SSG y CSR  
✅ Usar props y datos en componentes  
✅ Crear componentes interactivos con React  
✅ Trabajar con Git y ramas  
✅ Documentar tu código y cambios  

---

## 📝 Licencia

Este proyecto es de propósito educativo como parte de la práctica de Fundamentos de Next.js.

---

**Autor**: Luis Valle  
**Fecha**: Diciembre 2025  
**Repositorio**: https://github.com/luisvalle7/practica7-next.js
