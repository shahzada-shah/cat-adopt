/**
 * Main Entry Point - Application Bootstrap
 *
 * This is the first JavaScript file that runs when your app loads.
 * It connects your React app to the HTML DOM.
 *
 * KEY CONCEPTS:
 * 1. StrictMode: React's development tool that helps catch bugs
 * 2. createRoot: Modern React 18+ way to render apps
 * 3. DOM mounting: Attaching React to an HTML element
 *
 * EXECUTION FLOW:
 * 1. HTML loads and creates a <div id="root"></div>
 * 2. This file finds that div
 * 3. React "mounts" the App component inside it
 * 4. The entire app starts rendering
 *
 * @module main
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

/**
 * Mount the React application to the DOM
 *
 * WHAT'S HAPPENING:
 * 1. document.getElementById('root') - finds the HTML element with id="root"
 * 2. ! - TypeScript operator that says "I'm sure this exists"
 * 3. createRoot() - creates a React root (React 18+ API)
 * 4. .render() - starts rendering React components
 *
 * STRICTMODE:
 * - Only runs in development (automatically removed in production builds)
 * - Helps identify potential problems by:
 *   * Detecting unsafe lifecycles
 *   * Warning about deprecated APIs
 *   * Running effects twice to catch bugs
 *   * Highlighting potential issues
 *
 * WHY THE EXCLAMATION MARK?
 * The ! tells TypeScript "I guarantee this element exists"
 * Without it, TypeScript would complain because getElementById might return null
 * This is safe because index.html always has a <div id="root"></div>
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
