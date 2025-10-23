/**
 * DeveloperCredits Component
 *
 * An interactive component displaying development team credits with expandable details.
 * Features smooth animations, hover effects, and professional presentation of developer information.
 *
 * @component
 * @returns {JSX.Element} Rendered developer credits section
 *
 * Features:
 * - Clickable/hoverable company name that reveals developer details
 * - Smooth expand/collapse animation with height transitions
 * - Individual developer cards with role information
 * - Professional gradient background
 * - Accessible keyboard navigation
 * - Smooth state transitions
 *
 * State Management:
 * - Uses React useState for expansion toggle
 * - Implements proper event handlers for user interaction
 *
 * Architecture:
 * - Self-contained component with internal state
 * - Uses Lucide React for consistent iconography
 * - Tailwind CSS for styling, animations, and responsive design
 * - Follows accessibility best practices
 *
 * Design Philosophy:
 * - Subtle but professional presence
 * - Doesn't overshadow main content
 * - Provides clear attribution while maintaining design cohesion
 * - Interactive elements provide visual feedback
 *
 * @example
 * ```tsx
 * <DeveloperCredits />
 * ```
 */

import { Code2, Palette, ChevronDown } from 'lucide-react';
import { useState } from 'react';

/**
 * Developer information structure
 */
interface Developer {
  name: string;
  role: string;
  icon: typeof Code2;
}

/**
 * Team members configuration
 * Centralized data for easy updates and maintenance
 */
const developers: Developer[] = [
  {
    name: 'Shahzada Shah',
    role: 'Lead Senior Developer',
    icon: Code2,
  },
  {
    name: 'Jimmy Carrera',
    role: 'Lead Designer',
    icon: Palette,
  },
];

export const DeveloperCredits = () => {
  /**
   * Expansion state for developer details
   * @default false - Collapsed by default for minimal intrusion
   */
  const [isExpanded, setIsExpanded] = useState(false);

  /**
   * Toggle expansion state
   * Handles both click and keyboard events for accessibility
   */
  const toggleExpansion = () => {
    setIsExpanded((prev) => !prev);
  };

  /**
   * Handle keyboard navigation
   * Ensures component is accessible via keyboard
   */
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleExpansion();
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden border-t border-gray-200">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-gray-900 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gray-900 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main credits container */}
        <div className="py-4">
          {/* Company name - clickable trigger */}
          <button
            onClick={toggleExpansion}
            onKeyPress={handleKeyPress}
            className="w-full text-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded-lg transition-all duration-300"
            aria-expanded={isExpanded}
            aria-label="Toggle developer credits"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-xs md:text-sm font-semibold tracking-wide uppercase text-gray-500 group-hover:text-gray-900 transition-colors duration-300">
                Developed by Kazi Digital Studio
              </span>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 group-hover:text-gray-900 transition-all duration-300 ${
                  isExpanded ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </div>
          </button>

          {/* Expandable developer details */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
            }`}
          >
            {/* Developer cards grid */}
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {developers.map((developer, index) => {
                const Icon = developer.icon;
                return (
                  <div
                    key={developer.name}
                    className={`transition-all duration-700 delay-${
                      index * 100
                    } ${
                      isExpanded
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <div className="bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all duration-300 group">
                      {/* Developer info layout */}
                      <div className="flex items-start gap-3">
                        {/* Icon container */}
                        <div className="shrink-0">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300">
                            <Icon className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-300" />
                          </div>
                        </div>

                        {/* Text content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-bold text-gray-900 mb-0.5 truncate">
                            {developer.name}
                          </h3>
                          <p className="text-xs text-gray-600 font-medium">
                            {developer.role}
                          </p>
                        </div>
                      </div>

                      {/* Decorative bottom border */}
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <div className="h-0.5 w-8 bg-gradient-to-r from-gray-900 to-transparent rounded-full group-hover:w-full transition-all duration-500" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Optional: Team description or additional info */}
            <div className="text-center mt-4">
              <p className="text-xs text-gray-500 leading-relaxed max-w-xl mx-auto">
                Crafted with precision and care by our dedicated team of professionals.
                We specialize in creating elegant, performant web solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
