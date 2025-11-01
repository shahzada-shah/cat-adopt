/**
 * TeamSection Component
 *
 * Displays veterinary team members with interactive cards showing specialties and pricing.
 * Features carousel functionality, hover animations, and appointment booking interface.
 *
 * @component
 * @returns {JSX.Element} Rendered team section
 *
 * Features:
 * - Responsive grid layout (1/2/4 columns based on viewport)
 * - Interactive hover effects with darkened overlay
 * - Smooth card animations and transitions
 * - Navigation buttons and progress indicators
 * - Intersection Observer for scroll-triggered animations
 * - Touch-optimized for mobile devices
 *
 * Architecture:
 * - State management for carousel position and hover states
 * - Intersection Observer API for performance
 * - Responsive image backgrounds with fallback colors
 */

import { ChevronLeft, ChevronRight, Calendar, Award, Stethoscope } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

/**
 * Team member data structure
 */
interface TeamMember {
  name: string;
  role: string;
  experience: string;
  appointment: string;
  specialties: string[];
  yearsOfExperience: number;
  image: string;
}

/**
 * Static team members data
 * In production, this would be fetched from an API or CMS
 */
const teamMembers: TeamMember[] = [
  {
    name: 'Andriy Melnyk',
    role: 'veterinary surgeon',
    experience: '7+ years of experience',
    appointment: '$18',
    specialties: ['Surgery', 'Emergency Care', 'Orthopedics'],
    yearsOfExperience: 7,
    image: `${import.meta.env.BASE_URL}doc_01.png`,
  },
  {
    name: 'Olena Koval',
    role: 'therapist for cats and dogs',
    experience: '10+ years of experience',
    appointment: '$13',
    specialties: ['General Medicine', 'Preventive Care', 'Diagnostics'],
    yearsOfExperience: 10,
    image: `${import.meta.env.BASE_URL}doc_02.png`,
  },
  {
    name: 'Maria Mazur',
    role: 'dermatologist',
    experience: '5+ years of experience',
    appointment: '$16',
    specialties: ['Skin Conditions', 'Allergies', 'Parasitology'],
    yearsOfExperience: 5,
    image: `${import.meta.env.BASE_URL}doc_03.png`,
  },
  {
    name: 'Iryna Melnyk',
    role: 'ornithologist',
    experience: '3+ years of experience',
    appointment: '$14',
    specialties: ['Avian Medicine', 'Exotic Pets', 'Nutrition'],
    yearsOfExperience: 3,
    image: `${import.meta.env.BASE_URL}doc_04.png`,
  },
];

export const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  /**
   * Setup Intersection Observer for scroll-triggered animations
   */
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

  /**
   * Navigate to previous team member
   * Includes transition animation and boundary handling
   */
  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  /**
   * Navigate to next team member
   * Includes transition animation and boundary handling
   */
  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-gray-500 bg-gray-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              Our Team
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Our mission is to provide quality care and health of your pets through
            professionalism, modern methods of treatment and individual approach
          </h2>
        </div>

        <div className="relative px-2 sm:px-4 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`transition-all duration-700 delay-${index * 100} ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-200 touch-manipulation"
                  style={{
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div
                    className={`absolute inset-0 bg-black/50 transition-all duration-500 ease-out ${
                      hoveredCard === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  <div
                    className={`absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg transition-all duration-500 ${
                      hoveredCard === index
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-4 scale-75'
                    }`}
                  >
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" />
                  </div>

                  <div
                    className={`absolute inset-0 p-4 sm:p-6 flex flex-col justify-end transition-all duration-500 ${
                      hoveredCard === index ? 'bg-gradient-to-t from-black/80 via-black/50 to-transparent' : 'bg-gradient-to-t from-black/60 to-transparent'
                    }`}
                  >
                    <div
                      className={`transform transition-all duration-500 ${
                        hoveredCard === index ? 'translate-y-0' : 'translate-y-2'
                      }`}
                    >
                      <h3 className="text-white font-bold text-lg sm:text-xl mb-1 transition-all duration-300">
                        {member.name}
                      </h3>
                      <p className="text-white/90 text-xs sm:text-sm mb-3 sm:mb-4 font-medium">{member.role}</p>

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

                        <button className="w-full mt-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold py-2 px-3 sm:px-4 rounded-full transition-colors duration-300 text-xs sm:text-sm">
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
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-6 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-xl items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group border-2 border-gray-100"
            aria-label="Previous team member"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-6 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-xl items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group border-2 border-gray-100"
            aria-label="Next team member"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        <div className="flex justify-center gap-1.5 sm:gap-2 mt-8 sm:mt-12">
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
