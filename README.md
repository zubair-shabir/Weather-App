# Weather App

A modern and responsive weather application built with React and TypeScript that provides real-time weather information and forecasts. The app features a beautiful UI with dark mode support and interactive weather visualizations.

## Features

- Real-time weather data display
- Interactive weather charts using Recharts
- Responsive design that works on desktop and mobile
- Dark/Light mode theme support
- Smooth animations and transitions
- Weather forecast visualization
- Modern and clean user interface

## Tech Stack

### Frontend
- **React 19** - Frontend library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **React Query** - Data fetching and caching
- **Recharts** - Weather data visualization
- **Date-fns** - Date manipulation
- **Lucide React** - Icons
- **Sonner** - Toast notifications

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **Vite** - Development server and bundler

## Getting Started

### Prerequisites
- Node.js (LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd weatherapp
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your environment variables
```env
VITE_API_KEY=your_weather_api_key
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:
```bash
npm run build
# or
yarn build
```

To preview the production build:
```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
weatherapp/
├── src/               # Source files
├── public/            # Static assets
├── components.json    # Component configurations
├── vite.config.ts    # Vite configuration
├── tsconfig.json     # TypeScript configuration
└── package.json      # Project dependencies
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

