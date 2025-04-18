# Sistema de Gestión de Laboratorios - Frontend

Este es el frontend del Sistema de Gestión de Laboratorios, una aplicación web moderna para la gestión eficiente de laboratorios.

## Características

- 🎨 Interfaz moderna y responsiva
- 🔐 Autenticación segura
- 📊 Dashboard interactivo
- 📱 Diseño adaptable a todos los dispositivos
- 🌙 Modo oscuro/claro
- ⚡ Rendimiento optimizado

## Tecnologías

- React 18
- TypeScript 4.9
- Redux Toolkit
- React Query
- Tailwind CSS
- ESLint & Prettier

## Requisitos

- Node.js 18+
- npm 8+

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/lab-management-system.git
cd lab-management-system/frontend
```

2. Instalar dependencias:
```bash
npm install --legacy-peer-deps
```

3. Crear archivo de variables de entorno:
```bash
cp .env.example .env
```

4. Iniciar el servidor de desarrollo:
```bash
npm start
```

## Scripts Disponibles

- `npm start`: Inicia el servidor de desarrollo
- `npm build`: Construye la aplicación para producción
- `npm test`: Ejecuta las pruebas
- `npm lint`: Verifica el código con ESLint
- `npm format`: Formatea el código con Prettier

## Estructura del Proyecto

```
frontend/
├── public/          # Archivos estáticos
├── src/
│   ├── assets/      # Imágenes y recursos
│   ├── components/  # Componentes reutilizables
│   ├── contexts/    # Contextos de React
│   ├── hooks/       # Hooks personalizados
│   ├── pages/       # Páginas de la aplicación
│   ├── store/       # Estado global (Redux)
│   ├── styles/      # Estilos globales
│   ├── types/       # Definiciones de tipos
│   ├── App.tsx      # Componente principal
│   └── index.tsx    # Punto de entrada
├── .env.example     # Ejemplo de variables de entorno
├── package.json     # Dependencias y scripts
└── tsconfig.json    # Configuración de TypeScript
```

## Despliegue

El proyecto está configurado para ser desplegado en Vercel. Para desplegar:

1. Conectar el repositorio a Vercel
2. Configurar las variables de entorno
3. Desplegar automáticamente

## Contribución

1. Fork el repositorio
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles. 