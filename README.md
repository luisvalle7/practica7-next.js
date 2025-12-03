# Practica 7 - Fundamentos de Next.js

## Que hice

Basicamente cree un proyecto con Next.js para entender como funciona todo. Lo que mas me interesaba era ver como Next.js maneja las rutas automaticamente y las diferentes formas de renderizar contenido.

## Las tres partes

### Parte 1 - Setup inicial (rama chapter-1)

Al principio instale Next.js usando create-next-app y configure todo lo basico. Modifique la pagina inicial para que sea mas simple y pueda ver bien como funciona.

Lo que hice:
- Cree el proyecto con create-next-app
- Simplifique la pagina index.js para que tenga solo lo esencial
- Entendi como Next.js genera las rutas automaticamente

Archivos importantes: pages/index.js

### Parte 2 - Rutas y navegacion (rama chapter-2)

Aqui agregue una segunda pagina y aprendi a navegar entre ellas sin recargar toda la pagina. El componente Link de Next.js es bastante util para esto.

Lo que hice:
- Cree la pagina about.js
- Agregue un Link en la pagina principal para ir a about
- Vi como funciona la navegacion del lado del cliente

Archivos importantes: pages/about.js, pages/index.js con Link

### Parte 3 - Diferentes formas de renderizar (rama chapter-3)

Esta es la parte mas interesante. Aprendi que Next.js puede renderizar de diferentes formas y cada una sirve para casos distintos.

Lo que implementé:

**SSR (getServerSideProps)** - Archivo: pages/ssr-example.js
- Esto genera la pagina en el servidor cada vez que alguien la pide
- Buen para contenido que cambia seguido o cosas personalizadas por usuario
- Aprendi como usar la funcion getServerSideProps

**SSG (getStaticProps)** - Archivo: pages/ssg-example.js
- Esto genera la pagina una sola vez cuando compilas el proyecto
- Es mas rapido para el usuario porque la pagina ya esta lista
- Buen para cosas que no cambian, como un blog

**Interactividad con React** - Archivo: pages/counter.js
- Hice un contador simple que sube cuando clickeas un boton
- Use el hook useState para manejar el estado
- Esto se renderiza en el navegador, no en el servidor

## Como ejecutar esto

Necesitas:
- Node.js instalado
- npm o yarn

Pasos:
```bash
git clone https://github.com/luisvalle7/practica7-next.js.git
cd practica7-next.js
npm install
npm run dev
```

Despues abri http://localhost:3000 en el navegador

## Lo que aprendi

- Como Next.js maneja las rutas automaticamente (basado en la carpeta pages/)
- Diferencia entre SSR y SSG y cuando usar cada uno
- Como usar el componente Link para navegacion eficiente
- Como manejar estado con React hooks (useState)
- A trabajar con ramas en Git
- Como getServerSideProps y getStaticProps funcionan en Next.js

## Estructura

```
practica7-next.js/
├── pages/
│   ├── index.js              - Pagina principal
│   ├── about.js              - Pagina de ejemplo
│   ├── ssr-example.js        - Renderizado en servidor
│   ├── ssg-example.js        - Generacion estatica
│   ├── counter.js            - Componente interactivo
│   ├── _app.js
│   ├── _document.js
│   └── api/
│       └── hello.js
├── public/                    - Archivos estaticos
├── styles/                    - CSS
└── package.json
```

## Las ramas

El proyecto esta dividido en tres ramas:
- main: Rama principal, basicamente vacia
- chapter-1: Proyecto inicial con pagina de inicio
- chapter-2: Agregue la pagina about y navegacion
- chapter-3: Las diferentes formas de renderizar (SSR, SSG, componente interactivo)

Cada rama contiene el codigo anterior mas lo nuevo de esa parte.

## Notas
- Usamos Pages Router, no el App Router que es mas nuevo
- No use TypeScript para simplificar
- Tampoco use Tailwind, solo CSS basico
- ESLint esta configurado para atrapar errores

Eso basicamente es todo lo que hice. Fue interesante ver como Next.js funciona y como maneja todo esto de las rutas y el renderizado.
