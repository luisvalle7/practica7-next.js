# Practica 7 - Fundamentos de Next.js


## Parte 1 - Setup inicial (rama chapter-1)

Empece por lo mas basico: instalar Next.js y crear un proyecto simple.

Lo que hice:
- Instale Next.js usando create-next-app
- Configure lo minimo necesario (sin TypeScript, sin Tailwind, sin muchas complicaciones)
- Simplifique la pagina principal para que sea facil de entender
- Vi que Next.js crea automaticamente las rutas segun los archivos en pages/

Archivos principales: pages/index.js

Lo que aprendi hasta ahora:
- Next.js es un framework que esta basado en React
- Las rutas se crean automaticamente: si creo pages/about.js automaticamente me crea la ruta /about
- Puedo escribir componentes React normales en las paginas
- Hay una carpeta public/ para archivos estaticos
- El archivo package.json tiene todo lo necesario para ejecutar el proyecto

## Como correr esto

Si quieres probar el proyecto:
```bash
git clone https://github.com/luisvalle7/practica7-next.js.git
cd practica7-next.js
npm install
npm run dev
```

Despues abro http://localhost:3000

## Estructura del proyecto

```
practica7-next.js/
├── pages/
│   ├── index.js        - La pagina principal
│   ├── _app.js         - Configuracion global
│   ├── _document.js
│   └── api/
│       └── hello.js
├── public/             - Archivos estaticos (imagenes, etc)
├── styles/             - CSS
└── package.json        - Las dependencias
```

## Lo que viene

En la proxima parte voy a:
- Crear mas paginas
- Aprender a navegar entre paginas
- Ver como funciona el enrutamiento

Despues va a estar mas interesante cuando aprenda sobre SSR, SSG y como hacer componentes interactivos.

Por ahora es solo lo basico para entender como funciona todo.
