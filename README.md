# Lab Management System

A modern web application for managing laboratory resources and experiments, built with React, TypeScript, and Redux.

## 🚀 Features

- User Authentication (Login/Register)
- Laboratory Resource Management
- Real-time Status Updates
- Responsive Design with Glass Effect UI
- TypeScript Support
- State Management with Redux Toolkit
- API Integration with React Query

## 🛠️ Technologies

- React 18
- TypeScript 4.9.5
- Redux Toolkit
- React Router v6
- React Query
- TailwindCSS
- ESLint & Prettier

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/mat1520/lab-management-system.git
cd lab-management-system
```

2. Install dependencies:
```bash
cd frontend
npm install --legacy-peer-deps
```

3. Start the development server:
```bash
npm start
```

## 🔧 Configuration

The project uses the following configuration files:
- `tsconfig.json` for TypeScript settings
- `.eslintrc.json` for code linting
- `tailwind.config.js` for styling utilities

## 🚀 Deployment

This project is configured for deployment on Vercel. The build command is set to:
```bash
npm run build
```

## 🌐 Environment Variables

Create a `.env` file in the frontend directory with:
```
REACT_APP_API_URL=your_api_url_here
```

## 📝 Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── store/         # Redux store configuration
│   ├── styles/        # Global styles and utilities
│   ├── types/         # TypeScript type definitions
│   └── utils/         # Helper functions
├── public/           # Static files
└── package.json      # Project dependencies
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details. 