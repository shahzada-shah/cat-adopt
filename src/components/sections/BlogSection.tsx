/**
 * BlogSection Component
 *
 * A sophisticated carousel component displaying veterinary care articles and tips.
 * Features smooth horizontal scrolling, responsive design, and interactive hover states.
 *
 * @component
 * @returns {JSX.Element} Rendered blog carousel section
 *
 * Features:
 * - Horizontal scroll carousel with navigation buttons
 * - Responsive card grid (adapts to viewport size)
 * - Smooth scroll behavior with snap points
 * - Intersection Observer for scroll-triggered animations
 * - Progress indicator dots
 * - "All articles" CTA button
 *
 * Architecture:
 * - Uses React hooks (useState, useEffect, useRef) for state management
 * - Implements scroll snap CSS for smooth card alignment
 * - Lucide React icons for consistent iconography
 * - Tailwind CSS for styling and animations
 */

import { ChevronLeft, ChevronRight, BookOpen, Heart, AlertCircle, Apple } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

/**
 * Article data structure
 */
interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: typeof BookOpen;
  imageUrl?: string;
}

/**
 * Static article data
 * In production, this would be fetched from an API or CMS
 */
const articles: Article[] = [
  {
    id: 1,
    title: 'Protection from heat, cold and ticks',
    description: 'Seasonal threats to animals are not a myth. Here you will find simple and effective tips on how to protect your pet at any time of the year.',
    category: 'Seasonal Care',
    icon: Heart,
    imageUrl: '/ad_01.png',
  },
  {
    id: 2,
    title: '7 signals of pet illness',
    description: 'Learn what changes in behavior or appearance may indicate health problems. A timely visit to the veterinarian saves lives.',
    category: 'Health Alerts',
    icon: AlertCircle,
    imageUrl: '/ad_02.png',
  },
  {
    id: 3,
    title: 'What to give and what not to give',
    description: 'A quick guide to nutrition: which foods improve the health of your ponytail and which are strictly forbidden.',
    category: 'Nutrition',
    icon: Apple,
    imageUrl: '/ad_03.png',
  },
  {
    id: 4,
    title: 'Tail language: understanding your pet',
    description: 'The tail, ears, and eyes of your pet communicate volumes. Learn to read these signs for a better understanding.',
    category: 'Behavior',
    icon: Heart,
    imageUrl: '/ad_04.png',
  },
  {
    id: 5,
    title: 'Essential vaccinations for puppies',
    description: 'A comprehensive guide to the vaccination schedule and why each shot matters for your puppy\'s long-term health.',
    category: 'Prevention',
    icon: AlertCircle,
    imageUrl: '/ad_05.png',
  },
  {
    id: 6,
    title: 'Senior pet care essentials',
    description: 'As pets age, their needs change. Discover how to provide the best care for your aging companion.',
    category: 'Senior Care',
    icon: Heart,
    imageUrl: '/ad_06.png',
  },
];

export const BlogSection = () => {
  const [inView, setInView] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  /**
   * Intersection Observer setup for scroll-triggered animations
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /**
   * Handle scroll position for progress indicators
   */
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const position = scrollLeft / (scrollWidth - clientWidth);
      setScrollPosition(position);
    }
  };

  /**
   * Smooth scroll to previous set of articles
   */
  const scrollPrevious = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.article-card')?.clientWidth || 0;
      scrollContainerRef.current.scrollBy({
        left: -(cardWidth + 24),
        behavior: 'smooth',
      });
    }
  };

  /**
   * Smooth scroll to next set of articles
   */
  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.article-card')?.clientWidth || 0;
      scrollContainerRef.current.scrollBy({
        left: cardWidth + 24,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section ref={sectionRef} className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gray-900 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div
          className={`mb-12 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <div>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
                <BookOpen className="w-4 h-4 text-gray-700" />
                <span className="text-sm font-semibold tracking-wider uppercase text-gray-500">
                  Resources
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Care with love: Tail tips and secrets
              </h2>
            </div>

            {/* All articles CTA button */}
            <button className="group bg-white hover:bg-gray-900 text-gray-900 hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-900">
              All articles
            </button>
          </div>
        </div>

        {/* Carousel container */}
        <div className="relative">
          {/* Scroll container with snap points */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {articles.map((article, index) => {
              const Icon = article.icon;
              return (
                <div
                  key={article.id}
                  className={`article-card min-w-[320px] md:min-w-[380px] snap-start transition-all duration-700 delay-${
                    index * 100
                  } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  onMouseEnter={() => setHoveredCard(article.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 group">
                    {/* Image or placeholder with icon */}
                    <div 
                      className="relative h-64 bg-gray-200 overflow-hidden"
                      style={
                        article.imageUrl
                          ? {
                              backgroundImage: `url(${article.imageUrl})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                            }
                          : {
                              background: 'linear-gradient(to bottom right, rgb(243, 244, 246), rgb(229, 231, 235))',
                            }
                      }
                    >
                      {!article.imageUrl && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className={`w-24 h-24 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500 ${
                              hoveredCard === article.id ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                            }`}
                          >
                            <Icon className="w-12 h-12 text-gray-900" />
                          </div>
                        </div>
                      )}

                      {!article.imageUrl && (
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-0 left-0 w-full h-full">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gray-900 origin-top-left rotate-45 translate-x-32" />
                            <div className="absolute top-0 right-0 w-1 h-full bg-gray-900 origin-top-right -rotate-45 -translate-x-32" />
                          </div>
                        </div>
                      )}

                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-bold tracking-wider uppercase bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-gray-900 shadow-md">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Content area */}
                    <div className="p-6 bg-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300 leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {article.description}
                      </p>

                      {/* Read more indicator */}
                      <div className="mt-4 flex items-center gap-2 text-gray-900 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        <span>Read more</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={scrollPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 group border-2 border-gray-100 z-10"
            aria-label="Previous articles"
          >
            <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 group border-2 border-gray-100 z-10"
            aria-label="Next articles"
          >
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Progress indicator dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.max(1, articles.length - 2) }).map((_, index) => {
            const dotPosition = index / Math.max(1, articles.length - 3);
            const isActive =
              scrollPosition >= dotPosition - 0.2 && scrollPosition <= dotPosition + 0.2;

            return (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive ? 'w-8 bg-gray-900' : 'w-2 bg-gray-300'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
