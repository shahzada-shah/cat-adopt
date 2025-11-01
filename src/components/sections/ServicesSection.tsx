import { Stethoscope, Syringe, Scissors, MessageSquare, Clock, Activity, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: typeof Stethoscope;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Diagnostics and laboratory tests',
    description: 'Analyzes, ultrasound and X-rays',
    price: 'from $11',
    icon: Stethoscope,
  },
  {
    id: 2,
    title: 'Animal vaccination',
    description: 'Scheduled vaccination using certified drugs',
    price: 'from $13',
    icon: Syringe,
  },
  {
    id: 3,
    title: 'Surgical interventions',
    description: 'Spaying, neutering, emergency and planned surgeries',
    price: 'from $40',
    icon: Activity,
  },
  {
    id: 4,
    title: 'Veterinary consultation',
    description: 'Initial review and consultation with recommendations on various issues',
    price: 'from $8',
    icon: MessageSquare,
  },
  {
    id: 5,
    title: 'Grooming and hygiene',
    description: 'Teeth brushing, nail clipping, and coat processing',
    price: 'from $8',
    icon: Scissors,
  },
  {
    id: 6,
    title: 'Round-the-clock monitoring and care in the clinic',
    description: 'Inpatient and postoperative care',
    price: 'from $18',
    icon: Clock,
  },
];

export const ServicesSection = () => {
  const [inView, setInView] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section ref={sectionRef} className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gray-900 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div
          className={`mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-500 bg-gray-50 px-4 py-2 rounded-full shadow-sm">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Services and prices
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`transition-all duration-700 delay-${index * 100} ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="group bg-gradient-to-br from-gray-50 to-gray-100 hover:from-white hover:to-gray-50 rounded-2xl p-8 transition-all duration-500 border border-gray-200 hover:border-gray-300 shadow-md hover:shadow-xl relative overflow-hidden h-full">
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-900/5 to-transparent rounded-bl-full transition-all duration-500 ${
                      hoveredService === service.id ? 'scale-150 opacity-100' : 'scale-100 opacity-0'
                    }`}
                  />

                  <div className="relative z-10 flex items-start gap-6 h-full">
                    <div className="shrink-0">
                      <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="w-8 h-8 text-gray-900" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 group-hover:border-gray-300 transition-colors duration-300">
                        <span className="text-lg font-bold text-gray-900">
                          {service.price}
                        </span>
                        <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-all duration-300 group-hover:scale-110">
                          <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
