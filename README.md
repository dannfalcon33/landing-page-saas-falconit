# Falcon IT - MVP Landing Page & Service Management

Este repositorio contiene el **Mínimo Producto Viable (MVP)** de Falcon IT, una solución integral de soporte y mantenimiento tecnológico para sectores especializados.

## ✨ Definición del MVP

El objetivo de este MVP es proporcionar una presencia digital de alto impacto y una infraestructura funcional para la captura de leads y gestión inicial del servicio.

### Características Principales

- **Diseño Premium "Mirror Noir"**: Estética oscura minimalista con esferas gradientes flotantes y efectos de brillo metálico.
- **Arquitectura Multi-página**: Implementación de `react-router-dom` con rutas dedicadas para:
  - **Home**: Landing page de alta conversión.
  - **Nosotros**: Definición del modelo de negocio preventivo.
  - **Planes**: Desglose detallado de niveles de soporte.
  - **Servicios**: Workflow detallado del servicio de excelencia.
- **Backend & Base de Datos Local**:
  - **Servidor**: Express.js para gestión de API.
  - **Base de Datos**: SQLite (`better-sqlite3`) para persistencia local de datos.
  - **Captura de Leads**: Endpoint `/api/leads` para almacenar solicitudes de contacto.

## 🛠️ Stack Tecnológico

- **Frontend**: React 19, Vite, Tailwind CSS (v4), Framer Motion (Motion).
- **Iconografía**: Lucide React.
- **Routing**: React Router DOM v7.
- **Backend**: Node.js, Express.
- **DB**: SQLite.

## 🚀 Cómo Ejecutar

### Requisitos Previos

- Node.js (v18+)

### Pasos

1.  **Instalar dependencias**:

    ```bash
    npm install
    ```

2.  **Iniciar el Frontend**:

    ```bash
    npm run dev
    ```

3.  **Iniciar el Backend (Proceso separado)**:
    ```bash
    npm run server
    ```

El servidor de API estará disponible en `http://localhost:4000` y la base de datos `database.sqlite` se creará automáticamente en la raíz del proyecto.

---

_Desarrollado con enfoque en conversión y excelencia tecnológica._
