# CatAdopt

A responsive React/TypeScript SPA for cat adoption services with appointment booking, multi-page routing, and form validation.

## Tech Stack

- **React 18** with TypeScript
- **React Router** for client-side routing
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **Supabase** (ready for backend integration)

## Features

- Client-side routing with React Router
- Form validation and state management
- Responsive design (mobile-first)
- Type-safe implementation (full TypeScript coverage)
- Code splitting and optimized builds via Vite

## Project Structure

```
src/
├── components/     # Reusable UI components (Header, Footer, Hero, etc.)
├── pages/          # Route components (Home, About, Services, Appointment, Contacts)
├── App.tsx         # Root component with routing config
└── main.tsx        # Entry point
```

## Quick Start

```bash
npm install
npm run dev
```

Available scripts: `dev`, `build`, `lint`, `typecheck`

## Technical Highlights

- **Component Architecture**: Modular, reusable components with separation of concerns
- **State Management**: React hooks (`useState`) for local state and form handling
- **Type Safety**: Full TypeScript coverage with proper type definitions
- **Performance**: Code splitting, optimized dependencies, efficient re-renders
- **Code Quality**: ESLint configuration, comprehensive JSDoc comments
