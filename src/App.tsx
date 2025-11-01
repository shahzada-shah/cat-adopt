/**
 * App Component - Main Application Entry Point
 *
 * This is the root component of our React application. It sets up:
 * 1. React Router for client-side navigation
 * 2. Layout components (Header, Footer, etc.) that appear on all pages
 * 3. Route definitions that map URLs to page components
 * 4. Scroll behavior when navigating between pages
 *
 * COMPONENT STRUCTURE:
 * - Router wraps everything to enable routing
 * - ScrollToTop ensures smooth scroll to top on route changes
 * - Header appears on all pages
 * - Routes define which component shows for each URL
 * - FooterDivider, Footer, and DeveloperCredits appear on all pages
 *
 * @component
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FooterDivider } from './components/layout/FooterDivider';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { DeveloperCredits } from './components/ui/DeveloperCredits';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { AppointmentPage } from './pages/AppointmentPage';
import { ContactsPage } from './pages/ContactsPage';

function App() {
  return (
    /**
     * Router Component (BrowserRouter)
     *
     * This is the root routing component from React Router.
     * It must wrap all components that need access to routing features.
     *
     * WHY BrowserRouter?
     * - Uses HTML5 history API for clean URLs (no # in URLs)
     * - Provides routing context to all child components
     * - Enables navigation without page reloads
     *
     * ALTERNATIVES:
     * - HashRouter: Uses # in URLs, works better for static hosting
     * - MemoryRouter: Keeps history in memory, useful for testing
     */
    <Router>
      <div className="min-h-screen">
        {/**
         * ScrollToTop Component
         *
         * IMPORTANT: This must be inside <Router> but before <Routes>
         *
         * This utility component automatically scrolls the page to the top
         * whenever the user navigates to a different route. Without this,
         * users would stay at their previous scroll position when changing pages,
         * which creates a confusing experience.
         *
         * PLACEMENT: Must be a direct child of Router to access useLocation
         * RENDERING: Returns null - doesn't add any DOM elements
         * BEHAVIOR: Smooth scrolls to top on every route change
         */}
        <ScrollToTop />

        {/**
         * Header Component
         *
         * This appears on every page since it's outside <Routes>.
         * Components outside <Routes> are "layout" components that persist
         * across all routes.
         *
         * Contains: Logo, navigation menu, language selector
         */}
        <Header />

        {/**
         * Routes Component
         *
         * This is where we define our application's routes.
         * Only ONE of these Route components will render at a time,
         * based on the current URL.
         *
         * HOW IT WORKS:
         * - React Router checks the current URL
         * - Finds the Route with a matching path
         * - Renders only that Route's element
         * - All other Routes are not rendered
         *
         * ROUTE ORDER:
         * Routes are matched in order, but exact matching is default in v6+
         * So order doesn't matter unless using wildcards (*)
         */}
        <Routes>
          {/**
           * Home Route
           * URL: / (the root of the site)
           * Component: HomePage
           * This is typically shown at example.com/
           */}
          <Route path="/" element={<HomePage />} />

          {/**
           * About Route
           * URL: /about
           * Component: AboutPage
           * Shown at example.com/about
           */}
          <Route path="/about" element={<AboutPage />} />

          {/**
           * Services Route
           * URL: /services
           * Component: ServicesPage
           * Shown at example.com/services
           */}
          <Route path="/services" element={<ServicesPage />} />

          {/**
           * Appointment Route
           * URL: /appointment
           * Component: AppointmentPage
           * Shown at example.com/appointment
           */}
          <Route path="/appointment" element={<AppointmentPage />} />

          {/**
           * Contacts Route
           * URL: /contacts
           * Component: ContactsPage
           * Shown at example.com/contacts
           */}
          <Route path="/contacts" element={<ContactsPage />} />

          {/**
           * FUTURE ENHANCEMENT: Add a 404 Not Found Route
           *
           * You can add a catch-all route for pages that don't exist:
           * <Route path="*" element={<NotFoundPage />} />
           *
           * The * wildcard matches any path that wasn't matched above
           */}
        </Routes>

        {/**
         * Layout Components (appear on all pages)
         *
         * These are placed outside <Routes> so they render on every page.
         * They create consistent layout structure across the entire app.
         */}

        {/**
         * FooterDivider Component
         * A decorative divider that separates page content from the footer
         */}
        <FooterDivider />

        {/**
         * Footer Component
         * Contains contact information, navigation links, and social media
         */}
        <Footer />

        {/**
         * DeveloperCredits Component
         * Shows attribution/credits at the bottom of the page
         */}
        <DeveloperCredits />
      </div>
    </Router>
  );
}

/**
 * Export the App component as default
 *
 * This allows main.tsx to import and render our App component.
 * Default exports can be imported with any name, but we conventionally
 * use "App" when importing this component.
 */
export default App;
