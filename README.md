# Sistema de Gestión de Laboratorios

Sistema web para la gestión y reserva de laboratorios desarrollado con React, TypeScript y Redux.

## Tecnologías Utilizadas

- React 18
- TypeScript 4.9.5
- Redux Toolkit
- React Router DOM
- TailwindCSS
- React Query
- Jest (para testing)

## Características

- Autenticación de usuarios
- Gestión de laboratorios
- Sistema de reservas
- Interfaz moderna y responsive
- Modo claro/oscuro
- Efectos visuales modernos

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/mat1520/lab-management-system.git
```

2. Instalar dependencias:
```bash
cd frontend
npm install --legacy-peer-deps
```

3. Iniciar el servidor de desarrollo:
```bash
npm start
```

## Estructura del Proyecto

```
frontend/
  ├── src/
  │   ├── components/     # Componentes reutilizables
  │   ├── pages/         # Páginas de la aplicación
  │   ├── store/         # Configuración de Redux y slices
  │   ├── styles/        # Estilos globales y utilidades
  │   └── types/         # Definiciones de tipos TypeScript
  ├── public/           # Archivos estáticos
  └── package.json      # Dependencias y scripts
```

## Scripts Disponibles

- `npm start`: Inicia el servidor de desarrollo
- `npm build`: Construye la aplicación para producción
- `npm test`: Ejecuta los tests
- `npm run eject`: Expone la configuración de Create React App

## Despliegue

El proyecto está configurado para ser desplegado en Vercel. La rama principal (`main`) se despliega automáticamente cuando se realizan cambios.

## Licencia

MIT 