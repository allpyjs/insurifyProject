# Insurify Dashboard Clone

A React.js clone of the Insurify.com dashboard built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Responsive Navigation**: Mobile-friendly navigation bar with hamburger menu
- **Hero Section**: Eye-catching hero section with call-to-action
- **Quote Form**: Comprehensive insurance quote form with all necessary fields
- **Footer**: Complete footer with links and company information
- **Modern UI**: Built with Tailwind CSS for a clean, modern design

## Tech Stack

- **React 18**: Latest React features
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser to see the result.

## Project Structure

```
insurify/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx   # Navigation component
│   │   ├── HeroSection.tsx  # Hero section component
│   │   ├── QuoteForm.tsx    # Quote form component
│   │   └── Footer.tsx       # Footer component
│   ├── App.tsx              # Main App component
│   ├── main.tsx             # Entry point
│   ├── index.css            # Global styles
│   └── vite-env.d.ts        # Vite type definitions
├── index.html               # HTML entry point
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.ts
├── vite.config.ts
└── postcss.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Components

### Navigation
Responsive navigation bar with links to different insurance types and login.

### HeroSection
Hero section with main heading and call-to-action text.

### QuoteForm
Comprehensive form for collecting insurance quote information including:
- Personal information (zip code, date of birth, gender, etc.)
- Vehicle information (year, make, model, etc.)
- Address information
- Contact information

### Footer
Footer with links to different sections and legal pages.

## Customization

You can customize the styling by modifying:
- `tailwind.config.ts` - Tailwind configuration
- `src/index.css` - Global CSS styles
- Individual component files for component-specific styles

## License

This project is a clone for educational purposes.

