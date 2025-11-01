import { Code2, Palette, ChevronUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface Developer {
  name: string;
  role: string;
  icon: typeof Code2;
}

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
  const [isExpanded, setIsExpanded] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsExpanded(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden border-t border-gray-200">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-gray-900 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gray-900 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="py-4"
        >
          <div className="flex items-center justify-center gap-3">
            <ChevronUp
              className={`w-4 h-4 text-gray-400 transition-all duration-500 ${
                isExpanded ? 'rotate-180 text-gray-900' : 'rotate-0'
              }`}
            />

            <div className="text-center">
              <span className="text-xs md:text-sm font-semibold tracking-wide uppercase text-gray-500 hover:text-gray-900 transition-colors duration-300 cursor-default">
                Developed by Kazi Digital Studio
              </span>
            </div>

            <ChevronUp
              className={`w-4 h-4 text-gray-400 transition-all duration-500 ${
                isExpanded ? 'rotate-180 text-gray-900' : 'rotate-0'
              }`}
            />
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {developers.map((developer, index) => {
                const Icon = developer.icon;
                return (
                  <div
                    key={developer.name}
                    className={`transition-all duration-700 ${
                      isExpanded
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{
                      transitionDelay: isExpanded ? `${index * 100}ms` : '0ms'
                    }}
                  >
                    <div className="bg-white rounded-lg p-4 border-2 border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-start gap-3">
                        <div className="shrink-0">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300">
                            <Icon className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-300" />
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-bold text-gray-900 mb-0.5 truncate">
                            {developer.name}
                          </h3>
                          <p className="text-xs text-gray-600 font-medium">
                            {developer.role}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <div className="h-0.5 w-8 bg-gradient-to-r from-gray-900 to-transparent rounded-full group-hover:w-full transition-all duration-500" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

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
