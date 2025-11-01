/**
 * PageTransition Component
 *
 * A wrapper component that adds smooth fade-in and slide-up animations
 * to page content when it loads. This creates a polished, professional
 * feel as users navigate between pages.
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The page content to animate
 *
 * @example
 * <PageTransition>
 *   <h1>About Us</h1>
 *   <p>Page content here...</p>
 * </PageTransition>
 */

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <div className="animate-fadeIn">
      {children}
    </div>
  );
};
