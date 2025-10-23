import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  avatar?: string;
  petType?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Anna',
    rating: 5,
    text: 'This is a wonderful clinic! The doctors are professional, attentive and caring to each patient. My dog received quick help and now feels great. Thank you so much for your care and love for animals!',
    petType: 'Dog owner',
  },
  {
    id: 2,
    name: 'Maria',
    rating: 5,
    text: 'Excellent service and genuine care for our pets. The veterinarians took the time to explain everything and made sure my cat was comfortable throughout the entire visit. Highly recommend!',
    petType: 'Cat owner',
  },
  {
    id: 3,
    name: 'Viktor',
    rating: 5,
    text: 'Professional team with modern equipment. They diagnosed my pet quickly and provided effective treatment. The staff is friendly and knowledgeable. Best veterinary clinic in the area!',
    petType: 'Bird owner',
  },
  {
    id: 4,
    name: 'Olena',
    rating: 5,
    text: 'My rabbit had an emergency and they fit us in immediately. The care and attention to detail was outstanding. Thank you for saving my pet and providing such compassionate service!',
    petType: 'Rabbit owner',
  },
  {
    id: 5,
    name: 'Dmytro',
    rating: 5,
    text: 'Outstanding experience from start to finish. The veterinarians are knowledgeable, caring, and patient. They answered all my questions and provided excellent care for my pets.',
    petType: 'Multiple pets',
  },
  {
    id: 6,
    name: 'Iryna',
    rating: 5,
    text: 'I have been bringing my pets here for years and have always received exceptional care. The entire team is dedicated, professional, and truly loves animals. Could not ask for better!',
    petType: 'Long-time client',
  },
];

export const FeedbackSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev >= testimonials.length - 3 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-gray-50 to-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gray-900 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gray-900 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Feedback from our customers
          </h2>
        </div>

        <div className="relative px-4 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentIndex}-${index}`}
                className={`transition-all duration-700 delay-${index * 100} ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${isTransitioning ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 relative group overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 transform origin-left transition-transform duration-500 ${
                      hoveredCard === index ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />

                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Quote className="w-16 h-16 text-gray-900" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl font-bold text-gray-700">
                          {testimonial.name[0]}
                        </span>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900 mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">
                          {testimonial.petType}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 fill-gray-900 text-gray-900 transition-all duration-300 delay-${i * 50} ${
                            hoveredCard === index ? 'scale-110' : 'scale-100'
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-gray-600 leading-relaxed text-sm relative">
                      {testimonial.text}
                    </p>

                    <div
                      className={`absolute bottom-0 left-0 w-12 h-1 bg-gray-900 rounded-full transition-all duration-500 ${
                        hoveredCard === index ? 'w-full' : 'w-12'
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handlePrevious}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-6 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group border-2 border-gray-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-6 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group border-2 border-gray-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(index * 3);
                  setTimeout(() => setIsTransitioning(false), 500);
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 3) === index
                  ? 'w-8 bg-gray-900'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
