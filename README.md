# React + Vite
# Star-Lord E-COMMERCE

Este es un proyecto de e-commerce desarrollado con **React**/**Vite** y varias tecnologías modernas, integrando autenticación, pasarela de pago y administración de productos desde **Firebase**.

## Tecnologías utilizadas

### Frontend

- **React**: ^18.3.1 - Biblioteca principal para la construcción de interfaces de usuario.
- **React DOM**: ^18.3.1 - Complemento de React para renderizar en el DOM.
- **React Router DOM**: ^6.4.0 - Para gestionar la navegación y rutas del sitio.
- **Bootstrap**: ^5.3.0 - Framework CSS para diseño y componentes responsivos.
- **React Bootstrap Icons**: ^1.9.1 - Íconos de Bootstrap en componentes de React.
- **Sass Embedded**: ^1.0.0 - Para estilizar la aplicación utilizando SCSS.
- **React Google Recaptcha**: ^2.1.0 - Implementación de Google Recaptcha para la validación de formularios.

### Backend y Servicios

- **Firebase**: ^9.17.0 - Para el almacenamiento de productos y autenticación.
- **EmailJS**: ^3.6.2 - Para enviar correos electrónicos directamente desde el cliente.

### Herramientas de Desarrollo

- **Vite**: ^5.4.8 - Bundler de desarrollo rápido.
- **@vitejs/plugin-react**: ^4.3.2 - Plugin para integrar React con Vite.
- **ESLint**: ^9.11.1 - Para asegurar calidad y consistencia en el código.
- **ESLint Plugins**:
  - **eslint-plugin-react**: ^7.37.0
  - **eslint-plugin-react-hooks**: ^5.1.0-rc.0
  - **eslint-plugin-react-refresh**: ^0.4.12
- **Globals**: ^15.9.0 - Módulo para reconocer variables globales en ESLint.
- **@types/react**: ^18.3.10 - Tipos de TypeScript para React.
- **@types/react-dom**: ^18.3.0 - Tipos de TypeScript para React DOM.

## Instalación

Clona el repositorio e instala las dependencias:

(```bash
git clone <url-del-repositorio>
cd <nombre-del-proyecto>
npm install)

## Ejecución
(```bash
npm run dev)
El proyecto se abrirá en http://localhost:3000.

## Construcción

Para construir el proyecto para producción:

(```bash
npm run build)
Esto generará una carpeta dist con los archivos optimizados.

## Licencia

Este proyecto está bajo la licencia MIT. © Todos los derechos reservados por Mateo Mainero.


## Sobre La App

## Barra de Navegación
La aplicación incorpora una barra de navegación dinámica que incluye el logotipo de Star-Lord, un menú desplegable para seleccionar categorías de productos y un ícono de carrito de compras que se activa al añadir un producto. Por defecto, la página muestra todos los productos disponibles, y los usuarios pueden volver a esta vista principal en cualquier momento haciendo clic en el logotipo de la marca.

## Agregar Productos al Carrito
En la página de detalle de cada producto, los usuarios pueden seleccionar la cantidad deseada y hacer clic en el botón "Agregar al carrito". Al hacerlo, el botón cambia automáticamente a "Terminar mi compra", redirigiendo al usuario a la sección de revisión del carrito. Alternativamente, se puede acceder a esta sección haciendo clic en el ícono del carrito en la barra de navegación. Los usuarios pueden seguir añadiendo más productos antes de proceder al checkout.

## Estado del Carrito
En la vista del carrito, los usuarios pueden visualizar los productos seleccionados, junto con los subtotales y el total a pagar. Desde esta sección, es posible ajustar las cantidades de cada producto o eliminar ítems del carrito. Además, se incluye un botón para vaciar el carrito por completo. Para continuar con la compra, se debe hacer clic en "Continuar", que llevará al formulario final.

## Checkout
En la sección de checkout, el comprador debe completar un formulario con su nombre, número de teléfono y dirección de correo electrónico. Al hacer clic en "Crear orden", se genera el pedido, el cual se envía al cliente por correo electrónico junto con un número de referencia. El vendedor también almacena el pedido en Firebase y lo envía mediante EmailJS. Además, el stock del producto se actualiza automáticamente en la página.



Alumno: Mateo Mainero
Profesor: Luis Gonzalez
Tutor: Federico Currao
