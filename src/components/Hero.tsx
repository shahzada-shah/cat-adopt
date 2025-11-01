import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div
              className={`inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <Heart className="w-4 h-4" />
              <span>Find Your Perfect Companion</span>
            </div>

            <h1
              className={`text-5xl lg:text-6xl font-bold text-gray-900 leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '400ms' }}
            >
              Give a Cat a Forever Home
            </h1>

            <p
              className={`text-lg text-gray-700 leading-relaxed max-w-lg transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '600ms' }}
            >
              Discover loving cats waiting for their new family. Every adoption saves a life and brings joy to your home.
            </p>

            <div
              className={`flex flex-wrap items-center gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '800ms' }}
            >
              <Link
                to="/services"
                className="px-8 py-4 bg-gray-900 hover:bg-gray-700 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Browse Available Cats
              </Link>

              <Link
                to="/about"
                className="flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all duration-300 group"
              >
                <span>Learn About Adoption</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gentle">
                    <Heart className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-2">
                    Over 5,000 Cats
                  </p>
                  <p className="text-gray-600">
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
