/**
 * ScrollToTop Component
 *
 * This component handles automatic smooth scrolling to the top of the page
 * whenever the user navigates to a different route.
 *
 * WHY THIS IS NEEDED:
 * By default, React Router preserves scroll position when navigating between
 * pages. This means if you scroll down on Page A, then navigate to Page B,
 * Page B will start at the same scroll position as Page A. This creates a
 * poor user experience because users expect to start at the top of each new page.
 *
 * HOW IT WORKS:
 * 1. Uses React Router's useLocation hook to detect route changes
 * 2. Uses React's useEffect hook to run code when the route changes
 * 3. Scrolls the window to the top smoothly whenever the location changes
 *
 * IMPLEMENTATION NOTES:
 * - This component doesn't render any visible UI (returns null)
 * - It only exists to provide the scroll behavior side effect
 * - Must be placed inside a Router component to access useLocation
 *
 * @component
 * @returns {null} This component doesn't render anything visible
 *
 * @example
 * // In App.tsx, place inside <Router> but outside <Routes>
 * <Router>
 *   <ScrollToTop />
 *   <Routes>
 *     <Route path="/" element={<HomePage />} />
 *   </Routes>
 * </Router>
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  /**
   * useLocation Hook
   *
   * This hook comes from React Router and returns the current location object.
   * The location object contains information about the current URL, including:
   * - pathname: The path of the URL (e.g., "/about", "/services")
   * - search: The query string (e.g., "?id=123")
   * - hash: The URL hash (e.g., "#section")
   * - state: Any state passed during navigation
   *
   * Whenever the user navigates to a different route, this location object
   * changes, which triggers our useEffect below.
   */
  const location = useLocation();

  /**
   * useEffect Hook
   *
   * This hook runs side effects in React components. Side effects are actions
   * that affect something outside the component, like:
   * - Making API calls
   * - Updating the document title
   * - Scrolling the window (like we're doing here)
   *
   * DEPENDENCY ARRAY [location.pathname]:
   * The second argument to useEffect is the "dependency array".
   * - It tells React when to re-run this effect
   * - We include location.pathname so the effect runs whenever the route changes
   * - pathname is the part of the URL after the domain (e.g., "/about")
   *
   * WHY NOT USE [location]?
   * We use location.pathname specifically because:
   * - It only triggers on actual route changes
   * - Other location properties (like state) might change without a route change
   * - This prevents unnecessary scroll operations
   */
  useEffect(() => {
    /**
     * window.scrollTo()
     *
     * This is a native browser API that scrolls the window to a specific position.
     *
     * PARAMETERS:
     * - top: The Y-axis coordinate to scroll to (0 = top of the page)
     * - left: The X-axis coordinate to scroll to (0 = far left)
     * - behavior: How the scroll should happen
     *   - 'smooth': Animated smooth scrolling
     *   - 'auto': Instant jump (no animation)
     *   - 'instant': Same as auto
     *
     * WHY 'smooth'?
     * Smooth scrolling provides better UX by:
     * - Giving users visual feedback that something is happening
     * - Preventing disorientation from sudden jumps
     * - Making the app feel more polished and professional
     *
     * BROWSER SUPPORT:
     * The 'smooth' behavior is supported in all modern browsers.
     * In older browsers, it falls back to instant scrolling automatically.
     */
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    /**
     * ALTERNATIVE APPROACHES:
     *
     * 1. Instant scroll (no animation):
     *    window.scrollTo(0, 0);
     *
     * 2. Using scrollIntoView on a specific element:
     *    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
     *
     * 3. Using requestAnimationFrame for custom animation:
     *    const scrollToTop = () => {
     *      const c = document.documentElement.scrollTop || document.body.scrollTop;
     *      if (c > 0) {
     *        window.requestAnimationFrame(scrollToTop);
     *        window.scrollTo(0, c - c / 8);
     *      }
     *    };
     *    scrollToTop();
     */
  }, [location.pathname]);

  /**
   * Return null
   *
   * This component doesn't need to render anything to the DOM.
   * It's a "utility component" that only provides behavior, not UI.
   *
   * Returning null is perfectly valid in React and tells React:
   * "This component exists, but don't render anything for it"
   *
   * The component still runs its hooks (useLocation, useEffect) even though
   * it doesn't render anything visible.
   */
  return null;
};

/**
 * TESTING TIPS FOR JUNIOR DEVELOPERS:
 *
 * To verify this component is working:
 * 1. Go to any page and scroll down significantly
 * 2. Click a navigation link to go to a different page
 * 3. You should see a smooth scroll animation back to the top
 * 4. The new page should load with the viewport at the top
 *
 * COMMON ISSUES AND SOLUTIONS:
 *
 * Issue: Scroll doesn't work at all
 * Solution: Make sure ScrollToTop is inside <Router> but outside <Routes>
 *
 * Issue: Scroll is instant, not smooth
 * Solution: Check browser support, or try adding CSS: html { scroll-behavior: smooth; }
 *
 * Issue: Scroll happens but page content isn't loaded yet
 * Solution: This is expected with code-splitting. Consider adding a loading state.
 *
 * Issue: Scroll works but breaks anchor links (#section)
 * Solution: Add a check to skip scrolling when location.hash exists:
 *   if (!location.hash) { window.scrollTo({...}) }
 */
