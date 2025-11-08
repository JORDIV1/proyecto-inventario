# 🧾 Sistema Web de Gestión de Inventarios / Inventory Management System

Este proyecto es un **sistema web de gestión de inventarios** desarrollado con una arquitectura profesional **Node.js + Express + MySQL** en el backend, y **Vite (JavaScript moderno)** en el frontend.

---

## Descripción / Description

🇪🇸  
Permite la administración de productos, categorías y usuarios con roles (Administrador y Usuario), incluyendo autenticación JWT, manejo seguro de cookies y buenas prácticas de seguridad (CORS, Helmet, Hash con Argon2, y tokens de acceso/refresh).

🇬🇧  
This project is a **web-based inventory management system** built with **Node.js + Express + MySQL** on the backend, and **Vite (modern JS)** on the frontend.  
It includes authentication with JWT, secure cookie handling, role-based access control, and security best practices (CORS, Helmet, Argon2 hashing, and refresh/access tokens).

---

## ⚙️ Stack Tecnológico / Tech Stack

| Capa | Tecnología | Descripción |
|------|------------|-------------|
| **Backend** | Node.js, Express | API REST modular con servicios, repositorios y controladores |
| **Base de Datos** | MySQL 8 (InnoDB) | Relaciones con claves foráneas y validaciones |
| **Autenticación** | JWT + Cookies HttpOnly | Tokens de acceso y refresh seguros |
| **Hashing** | Argon2id | Protección de contraseñas con parámetros OWASP |
| **Frontend** | Vite, Vanilla JS, Bootstrap | Interfaz moderna y modular |
| **Seguridad** | Helmet, CORS, Docker | Configuración segura para producción |
| **Infraestructura** | Docker Compose | Backend + Base de datos MySQL en contenedores |

---

## 🚀 Características / Features

- ✅ Registro y login con JWT + Refresh Token  
- ✅ Rutas protegidas según rol (admin/usuario)  
- ✅ CRUD completo de productos, categorías y usuarios  
- ✅ Hash seguro de contraseñas (Argon2id)  
- ✅ Arquitectura en capas: Repository → Service → Controller  
- ✅ Variables de entorno (.env) y Dockerfile listo para despliegue  
- ✅ Validaciones y whitelisting para evitar inyecciones SQL  

---

## 🧩 Estructura del Proyecto / Project Structure
| proyectoInventario/ |
|------|
├── apps/
│ ├── backend/  API REST con Express, Argon2 y JWT
│ └── frontend/ Vite + Bootstrap + JS moderno
└── README.md
## 📦 Estado del Proyecto / Project Status

🟢 Backend: completado y funcional con autenticación JWT y roles  
🟡 Frontend: en desarrollo (Vite + Bootstrap + autenticación)

---

👤 **Autor / Author**

**Jordi Velasco**  
📧 [jordivelasco12345@gmail.com](mailto:jordivelasco12345@gmail.com)  
💼 Desarrollador Fullstack | Node.js | React | MySQL
