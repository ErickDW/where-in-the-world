<h1 align="center">Where in the world?</h1>
<p align="center">
  <a href="https://nextjs.org/" target="blank"><img src="https://nextjs.org/static/blog/next-13/twitter-card.png" width="500" alt="Next   js Logo" /></a>
</p>

<p align="center">
  Explora el mundo con "Where in the World", un proyecto de ejemplo que demuestra cómo consumir una API externa. Este proyecto te permite ver información parcial sobre cada país en la página principal y acceder a detalles adicionales al hacer clic en los elementos de cada país individual.
</p>

## Arquitectura Propuesta

El proyecto sigue una arquitectura limpia con el objetivo de mantener una separación clara de las responsabilidades y facilitar el mantenimiento y escalabilidad. A continuación se detallan las capas y componentes clave de la arquitectura:

### Capa de Presentación (UI)

- Se utiliza el framework de CSS `Tailwind CSS` para componer el diseño de la página.
- La librería `NextUI` se emplea para estilizar componentes funcionales como botones, inputs, dropdowns, etc., adaptados al estilo del proyecto.

### Capa de Componentes

- La carpeta `components` alberga componentes globales que pueden ser reutilizados en todo el proyecto.
- En algunas páginas, los componentes específicos se encuentran en carpetas separadas. Los componentes que aceptan props tienen archivos `.props` para describir los datos de entrada necesarios.

### Capa de Páginas y Rutas

- La carpeta `app` contiene las páginas y rutas del proyecto.
- Algunas páginas tienen sus propios componentes internos y manejan la lógica de presentación.

### Capa de Datos

- Se implementa una API propia en el frontend para consumir los microservicios del backend.
- La carpeta `utils` contiene funciones generales que son utilizadas en todo el proyecto, con la condición de que sean útiles para al menos dos páginas.
- Dentro de la carpeta `utils` también se encuentran las carpetas `mocks` e `interfaces`.

### Capa de Temas y Personalización

- La carpeta `themes` contiene archivos de CSS personalizados para los temas claro y oscuro, permitiendo cambios visuales según la preferencia del usuario.

### Configuración y Gestión

- El archivo `.env` se proporciona para gestionar las variables de entorno.
- La carpeta `routes` contiene un archivo `routes` que mapea los nombres y las rutas del proyecto.

## Cómo se Resolvió el Reto

1. **Arquitectura Limpia:** Se implementó una arquitectura que separa las responsabilidades en capas, mejorando la modularidad y mantenibilidad.
2. **Microservicios y API Propia:** Se estableció una API en el frontend para comunicarse con los microservicios del backend.
3. **Reutilización de Componentes:** Se diseñaron componentes reutilizables siguiendo principios SOLID.
4. **Estilos Personalizados:** Se utilizó `Tailwind CSS` y `NextUI` para lograr estilos coherentes y modernos.
5. **Organización Eficiente:** La estructura de carpetas se diseñó para una navegación intuitiva.
6. **Gestión de Temas:** Se proporcionaron estilos personalizados para temas claro y oscuro.
7. **Utilidades y Funciones Generales:** Las funciones generales se centralizaron en la carpeta `utils`.
8. **Gestión de Rutas Futuras:** Se preparó un esquema de rutas para un posible crecimiento del proyecto.

## Instalación

```bash
npm install
# or
npm i
```
## Comenzando

Primero, ejecuta el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

Puedes comenzar a editar la página modificando `app/page.tsx`. La página se actualiza automáticamente mientras editas el archivo.

## Aprende Más

Para obtener más información sobre Next.js, consulta los siguientes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - aprende acerca de las características y la API de Next.js.
- [Learn Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js.

Puedes revisar [the Next.js GitHub repository](https://github.com/vercel/next.js/) - ¡tus comentarios y contribuciones son bienvenidos!

## Implementar en Vercel

La forma más sencilla de implementar tu aplicación Next.js es utilizando la [Plataforma de Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Consulta nuestra [documentación de implementación de Next.js](https://nextjs.org/docs/deployment) para más detalles.