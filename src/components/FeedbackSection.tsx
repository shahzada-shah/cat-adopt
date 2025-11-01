/**
 * FeedbackSection Component
 *
 * Displays customer testimonials in an interactive carousel/slider format.
 * Shows 1 testimonial on mobile, 2 on tablet, and 3 on desktop.
 *
 * KEY FEATURES:
 * - Responsive design (adapts to screen size)
 * - Smooth transitions between testimonials
 * - Intersection Observer for scroll-based animations
 * - Circular navigation (loops from last to first)
 * - Manual navigation via arrows or dots
 * - Prevents rapid clicking with transition locks
 *
 * @component
 */

import { ChevronLeft, ChevronRight, Star, Heart } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

/**
 * Testimonial Type Definition
 *
 * Defines the structure of each testimonial object.
 * Using TypeScript interfaces ensures data consistency and provides autocomplete.
 *
 * @interface Testimonial
 * @property {number} id - Unique identifier for the testimonial
 * @property {string} name - Customer's name
 * @property {number} rating - Star rating (1-5)
 * @property {string} text - The testimonial content/review
 * @property {string} [avatar] - Optional: URL to customer's avatar image
 * @property {string} [adoptionType] - Optional: Type of adoption (e.g., "First-time adopter")
 *
 * The ? makes properties optional, meaning they can be undefined.
 */
interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  avatar?: string;
  adoptionType?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah',
    rating: 5,
    text: 'Adopting Luna from CatAdopt was the best decision ever! The team helped me find the perfect match for my lifestyle. Luna has brought so much joy to my home. The post-adoption support was incredible too!',
    adoptionType: 'First-time adopter',
  },
  {
    id: 2,
    name: 'Michael',
    rating: 5,
    text: 'The adoption process was smooth and stress-free. The counselors really knew their cats and helped me find Oliver, who fit perfectly with my other pets. Professional, caring, and knowledgeable team!',
    adoptionType: 'Multi-cat home',
  },
  {
    id: 3,
    name: 'Jennifer',
    rating: 5,
    text: 'I fostered Whiskers through their foster-to-adopt program and fell in love immediately. The support and guidance made the transition seamless. Could not be happier with my new family member!',
    adoptionType: 'Foster-to-adopt',
  },
  {
    id: 4,
    name: 'David',
    rating: 5,
    text: 'CatAdopt matched me with the perfect senior cat. They provided excellent information about her needs and history. The care education sessions prepared me perfectly. Highly recommend!',
    adoptionType: 'Senior cat adopter',
  },
  {
    id: 5,
    name: 'Emily',
    rating: 5,
    text: 'From meet-and-greet to bringing Mittens home, every step was wonderful. The staff is passionate about their mission and it shows. Thank you for helping me find my purr-fect companion!',
    adoptionType: 'Happy family',
  },
  {
    id: 6,
    name: 'Robert',
    rating: 5,
    text: 'This is my second adoption from CatAdopt and the experience was just as amazing as the first. They truly care about finding the right homes for these cats. Professional and heartwarming service!',
    adoptionType: 'Repeat adopter',
  },
];

export const FeedbackSection = () => {
  /**
   * STATE MANAGEMENT
   *
   * React's useState hook allows components to have memory between renders.
   * Each state variable triggers a re-render when updated.
   */

  /**
   * currentIndex: Tracks which testimonial is currently being shown
   * - Starts at 0 (first testimonial)
   * - Changes when user clicks arrows or dots
   * - Wraps around: after last testimonial, goes back to first
   */
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * isTransitioning: Prevents rapid clicking during animations
   * - true: Animation in progress, ignore clicks
   * - false: Ready for next interaction
   * - Automatically resets after 800ms (animation duration)
   *
   * WHY THIS IS NEEDED:
   * Without this lock, users could click the next button 10 times rapidly,
   * queuing up 10 transitions and creating janky, confusing animations.
   */
  const [isTransitioning, setIsTransitioning] = useState(false);

  /**
   * inView: Tracks if this section is visible in the viewport
   * - false: Section is off-screen (above or below current view)
   * - true: Section has entered the viewport
   * - Used to trigger entrance animations when user scrolls to this section
   *
   * This creates a "reveal on scroll" effect commonly seen in modern websites.
   */
  const [inView, setInView] = useState(false);

  /**
   * sectionRef: Reference to the section's DOM element
   * - useRef creates a mutable reference that persists across re-renders
   * - We need this to tell the IntersectionObserver which element to watch
   * - <HTMLDivElement> specifies this ref points to a div element
   * - null is the initial value before the ref is attached
   *
   * REFS VS STATE:
   * - State: Changes trigger re-renders (use for UI updates)
   * - Refs: Changes don't trigger re-renders (use for DOM access)
   */
  const sectionRef = useRef<HTMLDivElement>(null);

  /**
   * INTERSECTION OBSERVER EFFECT
   *
   * This effect sets up viewport visibility detection.
   * When the section scrolls into view, animations are triggered.
   *
   * HOW IT WORKS:
   * 1. Create an IntersectionObserver that watches for visibility
   * 2. When section enters viewport, set inView to true
   * 3. This triggers CSS animations that make content fade/slide in
   * 4. Clean up observer when component unmounts
   */
  useEffect(() => {
    /**
     * Create the observer
     *
     * PARAMETERS:
     * 1. Callback function: Runs when visibility changes
     *    - [entry]: Destructures first element from entries array
     *    - entry.isIntersecting: true when element enters viewport
     *
     * 2. Options object:
     *    - threshold: 0.2 means trigger when 20% of element is visible
     *    - Lower values (0.1) trigger sooner, higher values (0.5) trigger later
     *
     * WHY threshold: 0.2?
     * - Triggers animation before element is fully visible
     * - Creates smooth "reveal as you scroll" effect
     * - Prevents content from suddenly appearing
     */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    /**
     * Start observing the section
     *
     * We check if sectionRef.current exists because:
     * - On first render, the ref might not be attached yet
     * - TypeScript requires this null check for type safety
     */
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    /**
     * Cleanup function
     *
     * This function runs when:
     * - Component unmounts (removed from page)
     * - Effect dependencies change (in this case, never, since deps is [])
     *
     * WHY CLEANUP IS IMPORTANT:
     * - Observers keep running even after component is removed
     * - This causes memory leaks and performance issues
     * - Always disconnect observers when done
     *
     * The return statement in useEffect is specifically for cleanup.
     */
    return () => observer.disconnect();
  }, []);

  /**
   * NAVIGATION HANDLERS
   *
   * These functions handle clicking the previous/next arrow buttons.
   * They implement circular navigation with transition locking.
   */

  /**
   * Handle Previous Button Click
   *
   * Moves to the previous testimonial with wraparound.
   *
   * LOGIC BREAKDOWN:
   * 1. Check if animation is already running (if yes, do nothing)
   * 2. Lock further clicks by setting isTransitioning = true
   * 3. Update index to previous testimonial:
   *    - If at first item (index 0), wrap to last item
   *    - Otherwise, decrease index by 1
   * 4. After 800ms, unlock clicks by setting isTransitioning = false
   *
   * THE MATH:
   * prev === 0 ? testimonials.length - 1 : prev - 1
   * - If currently at index 0, go to last index (length - 1)
   * - Example: If we have 6 items (0-5), go to index 5
   * - Otherwise, simply go back one: prev - 1
   */
  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 800);
  };

  /**
   * Handle Next Button Click
   *
   * Moves to the next testimonial with wraparound.
   *
   * LOGIC BREAKDOWN:
   * Similar to handlePrevious but in the opposite direction.
   *
   * THE MATH:
   * prev >= testimonials.length - 1 ? 0 : prev + 1
   * - If at last index (length - 1), wrap to first index (0)
   * - Example: If at index 5 (last of 6), go to index 0
   * - Otherwise, advance one: prev + 1
   *
   * WHY 800ms TIMEOUT?
   * - Matches the CSS transition duration (800ms)
   * - Ensures animation completes before allowing next click
   * - Prevents overlapping animations that look glitchy
   */
  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 800);
  };

  /**
   * VISIBLE TESTIMONIALS CALCULATION
   *
   * Creates an array of 3 testimonials to display:
   * - Position 1: Current testimonial
   * - Position 2: Next testimonial
   * - Position 3: Testimonial after that
   *
   * On mobile, only position 1 is shown (CSS hides positions 2-3)
   * On tablet, positions 1-2 are shown
   * On desktop, all 3 positions are shown
   *
   * THE MODULO OPERATOR (%):
   * The % operator gives us the remainder after division.
   * We use it to create circular/wraparound behavior.
   *
   * EXAMPLES:
   * If we have 6 testimonials (indices 0-5) and currentIndex is 5:
   * - Position 1: testimonials[5] = 5
   * - Position 2: (5 + 1) % 6 = 6 % 6 = 0 (wraps to start!)
   * - Position 3: (5 + 2) % 6 = 7 % 6 = 1
   *
   * WHY THIS WORKS:
   * - 6 % 6 = 0 (anything divided by itself = remainder 0)
   * - 7 % 6 = 1 (7 ÷ 6 = 1 remainder 1)
   * - This creates seamless looping without if statements
   *
   * If currentIndex is 0:
   * - Position 1: 0
   * - Position 2: 1 % 6 = 1
   * - Position 3: 2 % 6 = 2
   */
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section ref={sectionRef} className="bg-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div
          className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Heart className="w-3 sm:w-4 h-3 sm:h-4" />
            <span>Adoption Stories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Happy Families, Happy Cats
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Read what our adopters have to say about their experience finding their perfect feline companion
          </p>
        </div>

        <div className="relative px-0 sm:px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentIndex}`}
                className={`transform transition-all duration-700 ease-out ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${
                  isTransitioning
                    ? 'opacity-0 scale-90 -translate-x-8'
                    : 'opacity-100 scale-100 translate-x-0'
                } ${
                  index > 0 ? 'hidden md:block' : ''
                }`}
                style={{
                  transitionDelay: isTransitioning ? '0ms' : `${index * 100}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <div className="h-full bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-300 group">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-800 to-gray-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0 transform transition-transform duration-300 group-hover:scale-110">
                      <span className="text-base sm:text-lg font-bold text-white">
                        {testimonial.name[0]}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-0.5 sm:mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs text-gray-500 font-medium">
                        {testimonial.adoptionType}
                      </p>
                    </div>

                    <div className="flex gap-0.5 flex-shrink-0">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 sm:w-4 h-3 sm:h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                    {testimonial.text}
                  </p>

                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-900 transition-colors duration-300">
                      <Heart className="w-3 sm:w-4 h-3 sm:h-4" />
                      <span className="text-xs font-medium">Verified Adoption</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handlePrevious}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 lg:-translate-x-6 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-900 hover:text-white hover:scale-110 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:text-gray-900 border border-gray-200 z-10"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>

          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 lg:translate-x-6 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-900 hover:text-white hover:scale-110 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:text-gray-900 border border-gray-200 z-10"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8 sm:mt-10 md:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 800);
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'w-8 bg-gray-900'
                  : 'w-2 bg-gray-300 hover:bg-gray-500 hover:w-4'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
