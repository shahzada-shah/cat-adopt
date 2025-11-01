/**
 * PageTransition Component
 *
 * A wrapper component that adds smooth fade-in and slide-up animations
 * to page content when it loads. This creates a polished, professional
 * feel as users navigate between pages.
 *
 * HOW IT WORKS:
 * - Wraps any page content in a div with the "animate-fadeIn" CSS class
 * - The animation is defined in your global CSS (index.css)
 * - When the page loads, content fades in smoothly from invisible to visible
 *
 * WHY USE THIS?
 * Without transitions, page changes feel abrupt and jarring. This component:
 * - Makes navigation feel smooth and intentional
 * - Gives users visual feedback that content is loading
 * - Creates a more premium, app-like experience
 * - Helps mask any brief content loading delays
 *
 * USAGE PATTERN:
 * Wrap your entire page component with this:
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The page content to animate
 *
 * @example
 * // In any page component:
 * export const AboutPage = () => {
 *   return (
 *     <PageTransition>
 *       <h1>About Us</h1>
 *       <p>Page content here...</p>
 *     </PageTransition>
 *   );
 * };
 */

/**
 * TypeScript Interface
 *
 * This defines the "shape" of props this component accepts.
 * - children: Any valid React content (JSX, strings, numbers, components, etc.)
 * - React.ReactNode is the broadest type for children - it accepts anything renderable
 *
 * WHY TYPESCRIPT?
 * TypeScript catches errors before runtime by ensuring we pass the right types:
 * - Prevents passing invalid props
 * - Provides autocomplete in your editor
 * - Makes refactoring safer
 * - Serves as documentation for other developers
 */
interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * PageTransition Component Implementation
 *
 * DESTRUCTURING: { children }
 * Instead of writing "props.children", we destructure to get "children" directly.
 * This is equivalent to:
 *   const children = props.children;
 *
 * THE WRAPPER DIV:
 * - className="animate-fadeIn" applies the animation CSS class
 * - {children} renders whatever content was passed to this component
 *
 * CUSTOMIZATION IDEAS FOR LATER:
 * - Add different animation options (slide, zoom, etc.)
 * - Make animation duration configurable
 * - Add different animations for enter/exit
 * - Add loading states or skeleton screens
 */
export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <div className="animate-fadeIn">
      {children}
    </div>
  );
};

/**
 * CSS ANIMATION REFERENCE:
 *
 * The "animate-fadeIn" class should be defined in your index.css:
 *
 * @keyframes fadeIn {
 *   from {
 *     opacity: 0;
 *     transform: translateY(10px);
 *   }
 *   to {
 *     opacity: 1;
 *     transform: translateY(0);
 *   }
 * }
 *
 * .animate-fadeIn {
 *   animation: fadeIn 0.5s ease-out;
 * }
 *
 * WHAT THIS DOES:
 * - Starts invisible (opacity: 0) and slightly below (translateY: 10px)
 * - Animates to visible (opacity: 1) and normal position (translateY: 0)
 * - Takes 0.5 seconds with an ease-out timing function
 * - Ease-out means it starts fast and slows down at the end
 */
