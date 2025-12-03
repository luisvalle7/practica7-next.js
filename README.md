# Practica 7 - Fundamentos de Next.js

Esta es mi tarea sobre Next.js. La estoy haciendo en partes para aprender mejor como funciona todo.

## Que hice hasta ahora

Empece instalando Next.js y creando un proyecto basico. Ahora estoy en la segunda parte donde agregue mas paginas y aprendi como navegar entre ellas sin recargar todo.

## Parte 1 - Lo basico (rama chapter-1)

Primero instale Next.js con create-next-app. Configure todo lo minimo necesario y simplifique la pagina inicial para que sea facil de entender.

Aprendi:
- Como crear un proyecto Next.js
- Como las rutas se crean automaticamente de acuerdo a los archivos en la carpeta pages/
- Lo basico de como funciona un componente React

### Parte 2 - Rutas y navegacion (rama actual chapter-2)

Ahora agregue una segunda pagina y me entere de como funciona la navegacion. Lo mas interesante fue el componente Link de Next.js que permite navegar sin recargar toda la pagina.

Lo que hice:
- Cree un archivo about.js en pages/
- Agregue un Link en la pagina principal para poder ir a la pagina about
- Vi como el componente Link es mas eficiente que un link normal

Archivos nuevos: pages/about.js
Archivos modificados: pages/index.js (agregue el Link)

Lo que aprendi:
- Como crear multiples paginas en Next.js
- Que el componente Link de Next.js hace navegacion del lado del cliente
- Como usar la propiedad href en Link para ir a otras paginas
- Que los links normales recargan la pagina pero Link no

## Como probar esto

Si queres ver esto funcionando:
```bash
git clone https://github.com/luisvalle7/practica7-next.js.git
cd practica7-next.js
npm install
npm run dev
```

Abri http://localhost:3000 y ve los links funcionando.

## Las ramas del proyecto

El proyecto esta dividido en ramas:
- main: Rama principal, basicamente vacia al principio
- chapter-1: El primer setup con Next.js
- chapter-2: Aqui estamos, con paginas multiples y navegacion
- chapter-3: Voy a hacer la parte mas complicada con SSR, SSG y componentes interactivos

## Estructura de carpetas

```
practica7-next.js/
├── pages/
│   ├── index.js         - Pagina principal
│   ├── about.js         - Segunda pagina (nueva)
│   ├── _app.js
│   ├── _document.js
│   └── api/
│       └── hello.js
├── public/              - Imagenes y archivos estaticos
├── styles/              - CSS
└── package.json
```

## Lo que sigue

En la proxima parte voy a aprender:
- SSR (Server-Side Rendering) con getServerSideProps
- SSG (Static Site Generation) con getStaticProps
- Como hacer componentes interactivos con React hooks como useState

Eso es todo por ahora.
