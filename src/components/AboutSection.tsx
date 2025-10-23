import { Heart, Shield, Users } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface Stat {
  value: string;
  label: string;
  icon: typeof Heart;
  endValue: number;
}

const stats: Stat[] = [
  {
    value: '25',
    label: 'years of experience',
    icon: Shield,
    endValue: 25,
  },
  {
    value: '20+',
    label: 'medical experts',
    icon: Users,
    endValue: 20,
  },
  {
    value: '10 320+',
    label: 'cured animals',
    icon: Heart,
    endValue: 10320,
  },
];

export const AboutSection = () => {
  const [inView, setInView] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setInView(true);
          hasAnimated.current = true;
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    stats.forEach((stat, index) => {
      let current = 0;
      const end = stat.endValue;
      const step = end / steps;

      const timer = setInterval(() => {
        current += step;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, increment);
    });
  };

  const formatCounter = (value: number, index: number) => {
    if (index === 0) return value.toString();
    if (index === 1) return `${value}+`;
    return `${value.toLocaleString()}+`;
  };

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-gray-50 to-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gray-900 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-900 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold tracking-wider uppercase text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm">
                  About Us
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your pets are in good hands
              </h2>
            </div>

            <div className="space-y-5 text-gray-600">
              <p className="text-lg leading-relaxed relative pl-4 border-l-2 border-gray-200">
                Our veterinary clinic is a team of professionals who take care of your
                animals' health with love and attention. We offer modern diagnostics,
                treatment, vaccination, and preventive examinations.
              </p>

              <p className="text-lg leading-relaxed relative pl-4 border-l-2 border-gray-200">
                Choosing us, you get quality medical care and comfort for your pet.
                Entrust your pet's health to those who really care!
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className={`group relative transition-all duration-700 delay-${index * 200} ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors duration-300">
                            <Icon className="w-5 h-5 text-gray-700" />
                          </div>
                        </div>

                        <div className="text-4xl font-bold text-gray-900 mb-2 transition-transform duration-300 group-hover:scale-105">
                          {inView ? formatCounter(counters[index], index) : '0'}
                        </div>

                        <div className="text-xs text-gray-600 leading-tight font-medium uppercase tracking-wide">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-2xl">
                <svg
                  className="absolute inset-0 w-full h-full opacity-20 transition-opacity duration-500 group-hover:opacity-30"
                  viewBox="0 0 400 400"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="400"
                    y2="400"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-gray-400"
                  />
                  <line
                    x1="400"
                    y1="0"
                    x2="0"
                    y2="400"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-gray-400"
                  />
                </svg>

                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-2xl shadow-xl p-6 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <div className="text-center">
                  <Heart className="w-8 h-8 text-gray-900 mx-auto mb-2 fill-gray-900" />
                  <div className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    Trusted Care
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
