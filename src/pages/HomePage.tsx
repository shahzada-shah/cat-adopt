/**
 * HomePage Component
 *
 * The main landing page of the CatAdopt website.
 * This is what users see when they first visit the site (route: "/").
 *
 * PAGE STRUCTURE:
 * This page is composed of multiple section components stacked vertically.
 * Each section serves a specific purpose and can be developed independently.
 *
 * COMPONENT ORDER MATTERS:
 * The order of these components creates a logical user journey:
 * 1. Hero - First impression, call-to-action
 * 2. About - Build trust with mission and stats
 * 3. Team - Show the people behind the organization
 * 4. Feedback - Social proof through testimonials
 * 5. Services - What we offer in detail
 * 6. Appointment - Direct conversion opportunity
 * 7. Blog - Additional content and SEO value
 *
 * WHY FRAGMENT (<>...</>)?
 * React requires components to return a single parent element.
 * Fragments let us group elements without adding extra DOM nodes.
 * Alternative: Could use <div> but that adds unnecessary HTML.
 *
 * @component
 * @returns {JSX.Element} The complete home page
 */

import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { TeamSection } from '../components/TeamSection';
import { FeedbackSection } from '../components/FeedbackSection';
import { ServicesSection } from '../components/ServicesSection';
import { AppointmentSection } from '../components/AppointmentSection';
import { BlogSection } from '../components/BlogSection';

export const HomePage = () => {
  return (
    /**
     * React Fragment
     *
     * The <> and </> is shorthand for <React.Fragment> and </React.Fragment>.
     *
     * WHY USE IT?
     * - Doesn't add extra divs to the DOM (keeps HTML clean)
     * - No styling side effects from wrapper elements
     * - Slightly better performance (fewer DOM nodes)
     *
     * WHEN TO USE DIV INSTEAD?
     * - When you need to apply styles to the container
     * - When you need a ref to the container
     * - When you need to add event listeners to the container
     */
    <>
      {/* Hero Section - First thing visitors see */}
      <Hero />

      {/* About Section - Mission statement and key statistics */}
      <AboutSection />

      {/* Team Section - Meet the people behind CatAdopt */}
      <TeamSection />

      {/* Feedback Section - Customer testimonials and reviews */}
      <FeedbackSection />

      {/* Services Section - Details about what we offer */}
      <ServicesSection />

      {/* Appointment Section - Call to action for scheduling */}
      <AppointmentSection />

      {/* Blog Section - Latest articles and updates */}
      <BlogSection />
    </>
  );
};

/**
 * DEVELOPMENT TIPS:
 *
 * 1. ADDING A NEW SECTION:
 *    - Create component in src/components/
 *    - Import it at the top of this file
 *    - Add it to the return statement in desired position
 *    - Consider the user journey when choosing position
 *
 * 2. REORDERING SECTIONS:
 *    - Simply change the order in the return statement
 *    - Test on mobile - order matters more on small screens
 *    - Consider accessibility - screen readers read top to bottom
 *
 * 3. REMOVING A SECTION:
 *    - Comment it out first to test
 *    - Remove the import if you delete permanently
 *    - Update this comment block
 *
 * 4. CONDITIONAL RENDERING:
 *    - If you need to show/hide sections based on conditions:
 *      {isLoggedIn && <MembersSection />}
 *    - Use ternary for either/or:
 *      {isLoggedIn ? <MemberContent /> : <GuestContent />}
 */
