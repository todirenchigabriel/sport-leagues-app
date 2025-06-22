# Sport Leagues App

A modern React application for browsing and exploring sports leagues from around the world. Built with TypeScript, Vite, and Chakra UI, this app provides an intuitive interface to search, filter, and view detailed information about various sports leagues.

## Features

- 🔍 **Search functionality** - Find leagues by name
- 🏀 **Sport filtering** - Filter leagues by sport type
- 📱 **Responsive design** - Works seamlessly on desktop and mobile
- 🎨 **Modern UI** - Clean, accessible interface built with Chakra UI
- ⚡ **Fast performance** - Powered by Vite and React Query for optimal loading

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety and developer experience
- **Vite** - Fast build tool and development server
- **Chakra UI** - Component library for consistent styling
- **TanStack Router** - Type-safe routing
- **TanStack Query** - Data fetching and caching
- **Yarn** - Package manager

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (version 18 or higher)
- Yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sport-leagues-app
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `yarn dev` - Start the development server
- `yarn build` - Build the application for production
- `yarn preview` - Preview the production build locally
- `yarn lint` - Run ESLint to check for code issues

## Usage

1. **Browse Leagues**: View all available sports leagues on the main page
2. **Search**: Use the search bar to find specific leagues by name
3. **Filter**: Use the sport dropdown to filter leagues by sport type
4. **View Details**: Click on any league card to view detailed information

## Development

The application follows modern React patterns and best practices:

- Type-safe routing with TanStack Router
- Efficient data fetching with React Query
- Responsive design with Chakra UI components
- Clean component architecture
- TypeScript for enhanced developer experience

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── routes/        # Route definitions
└── main.tsx       # Application entry point
```
