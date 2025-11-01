/**
 * Hero Component
 *
 * The main landing section featuring the CatAdopt hero image and call-to-action.
 * Implements smooth animations, hover effects, and responsive design.
 *
 * @component
 * @returns {JSX.Element} Rendered hero section
 *
 * Features:
 * - Responsive layout for mobile, tablet, and desktop
 * - Smooth fade-in animations on mount
 * - Interactive image hover effect with darkened overlay
 * - Call-to-action buttons for adoption browsing
 */

import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-[90vh] sm:min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div
              className={`inline-flex items-center gap-2 bg-gray-900 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <Heart className="w-3 sm:w-4 h-3 sm:h-4" />
              <span>Find Your Perfect Companion</span>
            </div>

            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '400ms' }}
            >
              Give a Cat a Forever Home
            </h1>

            <p
              className={`text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '600ms' }}
            >
              Discover loving cats waiting for their new family. Every adoption saves a life and brings joy to your home.
            </p>

            <div
              className={`flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '800ms' }}
            >
              <Link
                to="/services"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 hover:bg-gray-700 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg text-center text-sm sm:text-base"
              >
                Browse Available Cats
              </Link>

              <Link
                to="/about"
                className="flex items-center justify-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all duration-300 group py-3 sm:py-0 text-sm sm:text-base"
              >
                <span>Learn About Adoption</span>
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 mt-6 sm:mt-8 lg:mt-0 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div 
              className="group aspect-square rounded-xl sm:rounded-2xl lg:rounded-3xl relative overflow-hidden shadow-xl sm:shadow-2xl bg-gray-200 cursor-pointer transition-all duration-300 touch-manipulation"
              style={{
                backgroundImage: `url(${import.meta.env.BASE_URL}cat_01.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 flex items-center justify-center transition-all duration-500 ease-out">
                <div className="text-center p-4 sm:p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-100">
                  <p className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                    Over 5,000 Cats
                  </p>
                  <p className="text-sm sm:text-base text-white">
                    Successfully adopted into loving homes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
