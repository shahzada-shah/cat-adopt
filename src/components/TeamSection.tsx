import { ChevronLeft, ChevronRight, Calendar, Award, Stethoscope } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  appointment: string;
  specialties: string[];
  yearsOfExperience: number;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Andriy Melnyk',
    role: 'veterinary surgeon',
    experience: '7+ years of experience',
    appointment: '700 UAH',
    specialties: ['Surgery', 'Emergency Care', 'Orthopedics'],
    yearsOfExperience: 7,
  },
  {
    name: 'Olena Koval',
    role: 'therapist for cats and dogs',
    experience: '10+ years of experience',
    appointment: '500 UAH',
    specialties: ['General Medicine', 'Preventive Care', 'Diagnostics'],
    yearsOfExperience: 10,
  },
  {
    name: 'Maria Mazur',
    role: 'dermatologist',
    experience: '5+ years of experience',
    appointment: '600 UAH',
    specialties: ['Skin Conditions', 'Allergies', 'Parasitology'],
    yearsOfExperience: 5,
  },
  {
    name: 'Iryna Melnyk',
    role: 'ornithologist',
    experience: '3+ years of experience',
    appointment: '550 UAH',
    specialties: ['Avian Medicine', 'Exotic Pets', 'Nutrition'],
    yearsOfExperience: 3,
  },
];

export const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
              Our Team
            </span>
          </div>
          <h2
            className={`text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Our mission is to provide quality care and health of your pets through
            professionalism, modern methods of treatment and individual approach
          </h2>
        </div>

        <div className="relative px-4 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`transition-all duration-700 delay-${index * 100} ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-gray-900/20 to-gray-900/40 transition-opacity duration-500 ${
                      hoveredCard === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  <svg
                    className="absolute inset-0 w-full h-full opacity-30"
                    viewBox="0 0 300 400"
                    preserveAspectRatio="none"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="300"
                      y2="400"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-gray-400"
                    />
                    <line
                      x1="300"
                      y1="0"
                      x2="0"
                      y2="400"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-gray-400"
                    />
                  </svg>

                  <div
                    className={`absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-500 ${
                      hoveredCard === index
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-4 scale-75'
                    }`}
                  >
                    <Award className="w-5 h-5 text-gray-900" />
                  </div>

                  <div
                    className={`absolute inset-0 p-6 flex flex-col justify-end transition-all duration-500 ${
                      hoveredCard === index ? 'bg-gradient-to-t from-black/80 via-black/50 to-transparent' : 'bg-gradient-to-t from-black/60 to-transparent'
                    }`}
                  >
                    <div
                      className={`transform transition-all duration-500 ${
                        hoveredCard === index ? 'translate-y-0' : 'translate-y-2'
                      }`}
                    >
                      <h3 className="text-white font-bold text-xl mb-1 transition-all duration-300">
                        {member.name}
                      </h3>
                      <p className="text-white/90 text-sm mb-4 font-medium">{member.role}</p>

                      <div
                        className={`space-y-3 transition-all duration-500 ${
                          hoveredCard === index
                            ? 'opacity-100 max-h-48 translate-y-0'
                            : 'opacity-0 max-h-0 translate-y-4'
                        } overflow-hidden`}
                      >
                        <div className="flex items-center gap-2 text-white/90 text-xs">
                          <Stethoscope className="w-4 h-4" />
                          <span>{member.experience}</span>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {member.specialties.map((specialty, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 pt-2 border-t border-white/20">
                          <Calendar className="w-4 h-4 text-white/80" />
                          <span className="text-white/90 text-xs font-semibold">
                            Appointment: {member.appointment}
                          </span>
                        </div>

                        <button className="w-full mt-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold py-2 px-4 rounded-full transition-colors duration-300 text-sm">
                          Book Appointment
                        </button>
                      </div>

                      <div
                        className={`transition-all duration-500 ${
                          hoveredCard === index ? 'opacity-0 max-h-0' : 'opacity-100 max-h-20'
                        }`}
                      >
                        <p className="text-white/80 text-xs mb-1">{member.experience}</p>
                        <p className="text-white/80 text-xs">appointment: {member.appointment}</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 border-2 border-white/0 rounded-2xl transition-all duration-500 ${
                      hoveredCard === index ? 'border-white/30 scale-105' : 'scale-100'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handlePrevious}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-6 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group border-2 border-gray-100"
            aria-label="Previous team member"
          >
            <ChevronLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-6 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group border-2 border-gray-100"
            aria-label="Next team member"
          >
            <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 500);
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-gray-900' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to team member ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
