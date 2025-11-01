import { ChevronLeft, ChevronRight, Star, Heart } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [inView, setInView] = useState(false);
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

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev >= testimonials.length - 3 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section ref={sectionRef} className="bg-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            <span>Adoption Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Happy Families, Happy Cats
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read what our adopters have to say about their experience finding their perfect feline companion
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentIndex}`}
                className={`transform transition-all duration-700 ease-out ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${
                  isTransitioning
                    ? 'opacity-0 scale-90 -translate-x-8'
                    : 'opacity-100 scale-100 translate-x-0'
                }`}
                style={{
                  transitionDelay: isTransitioning ? '0ms' : `${index * 100}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-300 group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0 transform transition-transform duration-300 group-hover:scale-110">
                      <span className="text-lg font-bold text-white">
                        {testimonial.name[0]}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">
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
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {testimonial.text}
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-900 transition-colors duration-300">
                      <Heart className="w-4 h-4" />
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-900 hover:text-white hover:scale-110 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:text-gray-900 border border-gray-200"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-900 hover:text-white hover:scale-110 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:text-gray-900 border border-gray-200"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
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
                  setTimeout(() => setIsTransitioning(false), 800);
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 3) === index
                  ? 'w-8 bg-gray-900'
                  : 'w-2 bg-gray-300 hover:bg-gray-500 hover:w-4'
              }`}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
