# CERCATI

## Plataforma Digital para Emprendedores Locales

CERCATI es una plataforma web diseñada para conectar emprendedores y compradores de Chimbote, Nuevo Chimbote, Coishco y Santa, promoviendo el comercio local y fortaleciendo el ecosistema emprendedor de la comunidad.

---

## Objetivo del Proyecto

Crear una plataforma digital moderna, intuitiva y responsiva que permita:

* Registrar emprendimientos locales.
* Publicar productos y servicios.
* Facilitar el contacto entre compradores y emprendedores.
* Promover el consumo local.
* Brindar recursos educativos mediante la sección **"Impulsa tu Negocio"**.
* Fortalecer la economía local mediante herramientas digitales accesibles.

---

## Estado Actual del Proyecto

### Avance Aproximado

**50% del proyecto total**

Actualmente se encuentran desarrolladas las siguientes interfaces y funcionalidades:

---

## Landing Page

Archivo: `index.html`

### Características

* Diseño moderno con degradado azul.
* Logo oficial de CERCATI.
* Estadísticas de la plataforma.
* Botón de inicio de sesión.
* Botón de registro.
* Acceso como visitante.
* Diseño totalmente responsivo.
* Adaptación para dispositivos móviles y escritorio.

---

## Inicio de Sesión

Archivo: `pages/login.html`

### Características

* Inicio de sesión mediante correo electrónico.
* Campo de contraseña.
* Opción "Recordarme".
* Recuperación de contraseña.
* Inicio de sesión con Google (visual).
* Validaciones básicas mediante JavaScript.
* Diseño moderno y responsivo.

---

## Selección de Tipo de Registro

Archivo: `pages/registro.html`

### Características

* Registro como comprador.
* Registro como emprendedor.
* Descripción de beneficios para cada tipo de usuario.
* Navegación hacia formularios específicos de registro.
* Diseño consistente con la identidad visual del proyecto.

---

## Registro de Comprador

Archivo: `pages/registro-comprador.html`

### Características

* Formulario con validaciones en tiempo real.
* Foto de perfil con opción de subir imagen.
* Indicador de fuerza de contraseña.
* Mostrar/Ocultar contraseña.
* Validación de términos y condiciones.
* Mensajes de éxito y error.
* Opción de registro con Google (visual).
* Diseño responsivo.

---

## Registro de Emprendedor

Archivo: `pages/registro_emprendedor.html`

### Características

* Registro completo de emprendimientos.
* Validación de campos obligatorios.
* Foto de perfil del negocio.
* Indicador de fuerza de contraseña.
* Selección de categoría.
* Selección de distrito.
* Información de contacto.
* Diseño responsivo.

---

## Página Principal (Dashboard)

Archivo: `index.html`

### Características Planificadas

* Barra de navegación completa.
* Hero section con buscador.
* Categorías de productos y servicios.
* Negocios destacados.
* Productos populares.
* Historias de emprendedores.
* Métodos de pago.
* Mapa interactivo.
* CTA para registrar negocios.

---

## Mapa Interactivo

### Características

* Leaflet + OpenStreetMap.
* Marcadores de emprendimientos.
* Filtro por distrito.
* Información detallada de negocios.
* Zoom y navegación interactiva.

---

## Tecnologías Utilizadas

* HTML5
* CSS3
* JavaScript Vanilla
* Font Awesome
* Google Fonts (Poppins)
* Leaflet
* OpenStreetMap

---

## Estructura del Proyecto (Por el momento)

```text
CERCATI/
│
├── README.md
├── index.html
│
├── pages/
│   ├── login.html
│   ├── registro_index.html
│   ├── registro_comprador.html
│   ├── registro_emprendedor.html
│   └── dashboard.html
│
├── assets/
│   ├── css/
│   │   ├── dashboard.css
│   │   ├── login.css
│   │   ├── registro_comprador.css
│   │   ├── registro_emprendedor.css
│   │   ├── registro_index.css
│   │   └── styles_index.css
│   │   
│   │
│   ├── js/
│   │   ├── dashboard.js
│   │   ├── login.js
│   │   ├── registro_comprador.js
│   │   └── registro_emprendedor.js
│   │
│   ├── img/
│   │
│   └── icons/
│
└── data/

```

---

## Instalación

No requiere instalación.

### Ejecutar localmente

1. Descargar o clonar el proyecto.
2. Abrir la carpeta `CERCATI`.
3. Abrir el archivo:

```text
index.html
```

en cualquier navegador moderno.

---

## Flujo Actual de Navegación

```text
index.html
│
├── login.html
│
└── registro.html
      │
      ├── registro_comprador.html
      │
      └── registro_emprendedor.html
```

---

## Identidad Visual

### Colores Principales

* Azul Principal: #2563EB
* Celeste: #60A5FA
* Blanco: #FFFFFF
* Naranja: #FF7A00

### Estilo

* Profesional
* Moderno
* Intuitivo
* Responsivo
* Enfocado en emprendedores locales

---

## Funcionalidades Pendientes

* Catálogo de productos.
* Favoritos.
* Carrito de compras.
* Perfil de usuario.
* Configuración.
* Panel del emprendedor.
* Reseñas y calificaciones.
* Sistema de búsqueda avanzada.
* Impulsa tu Negocio.
* Contacto y Ayuda.

---

## Proximamente...

Funcionalidades futuras:

* Backend con Laravel.
* Base de datos MySQL.
* Sistema de autenticación real.
* Integración con Yape.
* Integración con Plin.
* Chat entre compradores y emprendedores.
* Geolocalización en tiempo real.
* Notificaciones.
* Dashboard avanzado.
* Aplicación móvil Android.

---

## Autores

Proyecto académico desarrollado para la plataforma CERCATI.

### Lema

**"Emprende, compra y vende más cerca de ti."**
