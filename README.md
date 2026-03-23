# API de Directorio de Bienes Raíces

API RESTful centralizada para administrar un catálogo de propiedades inmobiliarias. Este proyecto permite listar, buscar, crear, editar y eliminar propiedades utilizando un sistema de persistencia basado en archivos JSON y una arquitectura de capas (MVC+S).

---

## 🚀 Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución de JavaScript.
- **Express.js**: Framework para el manejo de rutas y middleware.
- **ES Modules (ESM)**: Sistema de módulos nativo de JavaScript (`import`/`export`).
- **dotenv**: Gestión de variables de entorno.
- **async/await**: Manejo de peticiones asíncronas.
- **POO (Programación Orientada a Objetos)**: Organización del código mediante clases y entidades.

---

## 📁 Estructura del Proyecto

```text
M6_EVALUACION_MODULAR/
├── index.js                        # Punto de entrada del servidor
├── .env                            # Variables de entorno
├── package.json                    # Dependencias y scripts
└── src/
    ├── app.js                      # Configuración de Express
    ├── config/                     # Configuración de entorno
    ├── controllers/                # Controladores de la API (HTTP Request/Response)
    ├── data/                       # Almacenamiento JSON (persistencia)
    ├── middlewares/                # Middlewares de error y validación
    ├── models/                     # Clases de entidad y acceso a datos
    ├── routes/                     # Definición de rutas
    ├── service/                    # Capa de lógica de negocio
    └── utils/                      # Utilidades (logger, errores, archivos)
```

---

## 🛠️ Instalación y Uso

### 1. Clonar el repositorio e instalar dependencias
```bash
git clone <url-del-repositorio>
cd M6_EVALUACION_MODULAR
npm install
```

### 2. Configurar variables de entorno
Crea un archivo `.env` en la raíz con el siguiente contenido:
```env
PORT=3001
ENVIRONMENT=development
```

### 3. Ejecutar el servidor
- **Modo Desarrollo (con nodemon):**
  ```bash
  npm run dev
  ```
- **Modo Producción:**
  ```bash
  npm start
  ```

---

## 📡 Endpoints de la API

Base URL: `http://localhost:3001/properties`

| Método | Ruta | Descripción | HTTP Status |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Listar todas las propiedades | 200 |
| `GET` | `/:id` | Obtener detalle de una propiedad | 200 / 404 |
| `POST` | `/` | Crear una nueva propiedad | 201 / 400 |
| `PUT` | `/:id` | Actualizar una propiedad existente | 200 / 404 / 400 |
| `DELETE` | `/:id` | Eliminar una propiedad | 200 / 404 |

### Ejemplos de uso

#### Crear Propiedad (POST)
```bash
curl -X POST http://localhost:3001/properties \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Departamento en Santiago Centro",
       "type": "Departamento",
       "price": 85000000,
       "rooms": 2,
       "bathrooms": 1,
       "location": "Santiago Centro"
     }'
```

#### Actualizar Propiedad (PUT)
```bash
curl -X PUT http://localhost:3001/properties/1 \
     -H "Content-Type: application/json" \
     -d '{ "price": 275000000 }'
```

---

## 🛡️ Manejo de Errores

La API implementa una jerarquía de errores personalizados (`AppError`, `NotFoundError`, `BadRequestError`) y un middleware global que garantiza respuestas estandarizadas en formato JSON:

```json
{
  "message": "Mensaje descriptivo del error",
  "statusCode": 404,
  "error": "Not Found"
}
```

---

## 📄 Licencia

ISC License
