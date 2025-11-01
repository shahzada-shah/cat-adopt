import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
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
            className={`relative transition-all duration-1000 mt-8 lg:mt-0 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl sm:rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4 sm:p-8">
                  <div className="w-20 h-20 sm:w-32 sm:h-32 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-pulse-gentle">
                    <Heart className="w-10 h-10 sm:w-16 sm:h-16 text-white" />
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                    Over 5,000 Cats
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    Successfully adopted into loving homes
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
