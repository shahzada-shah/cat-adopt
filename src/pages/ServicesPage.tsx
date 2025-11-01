import { Heart, Home, UserCheck, MessageSquare, Clock, Sparkles, Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  price: string;
  icon: typeof Heart;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: 'Cat Meet & Greet',
    description: 'Visit and interact with available cats',
    fullDescription: 'Spend quality time with our cats in a comfortable environment. Our adoption counselors will help you find cats that match your lifestyle, personality, and living situation.',
    price: 'Free',
    icon: Heart,
    features: [
      'One-on-one time with cats',
      'Learn about each cat\'s personality',
      'No appointment necessary',
      'Expert guidance from staff',
      'Multiple visit options',
    ],
  },
  {
    id: 2,
    title: 'Adoption Process Assistance',
    description: 'Guided support through adoption',
    fullDescription: 'Our experienced team walks you through every step of the adoption process, from application to bringing your new companion home. We make adoption simple and stress-free.',
    price: 'Free',
    icon: UserCheck,
    features: [
      'Application assistance',
      'Home environment consultation',
      'Reference check coordination',
      'Adoption contract review',
      'Post-adoption follow-up',
    ],
  },
  {
    id: 3,
    title: 'Cat Care Education',
    description: 'Learn how to care for your new cat',
    fullDescription: 'Comprehensive education on cat care, behavior, nutrition, and health. We ensure you\'re fully prepared to provide the best possible home for your new feline friend.',
    price: 'Free',
    icon: Sparkles,
    features: [
      'Nutrition and feeding guidance',
      'Litter training tips',
      'Behavioral understanding',
      'Health maintenance advice',
      'Introduction to multi-pet homes',
    ],
  },
  {
    id: 4,
    title: 'Adoption Counseling',
    description: 'Expert advice for successful adoption',
    fullDescription: 'Schedule a consultation with our adoption counselors to discuss your family, lifestyle, and what you\'re looking for in a cat. We help ensure the perfect match for everyone.',
    price: 'Free',
    icon: MessageSquare,
    features: [
      'Lifestyle assessment',
      'Cat personality matching',
      'Family readiness evaluation',
      'Special needs cat guidance',
      'Long-term planning support',
    ],
  },
  {
    id: 5,
    title: 'Foster-to-Adopt Program',
    description: 'Try fostering before committing',
    fullDescription: 'Our foster-to-adopt program allows you to bring a cat home on a trial basis. This gives both you and the cat time to adjust and ensure it\'s the right fit.',
    price: 'Free',
    icon: Home,
    features: [
      'Trial period at home',
      'All supplies provided',
      'Support during transition',
      'Option to adopt or return',
      'Perfect for first-time owners',
    ],
  },
  {
    id: 6,
    title: 'Post-Adoption Support',
    description: '30-day support after adoption',
    fullDescription: 'We provide ongoing support for 30 days after adoption to help with any questions or concerns. Our team is here to ensure a smooth transition for you and your new cat.',
    price: 'Free',
    icon: Clock,
    features: [
      '24/7 helpline access',
      'Behavior consultation',
      'Health question support',
      'Integration assistance',
      'Return policy if needed',
    ],
  },
];

export const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-24">
      <div className="bg-gradient-to-b from-white via-gray-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 animate-slideUp">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Adoption Services</h1>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              From your first visit to welcoming your new cat home, we provide comprehensive support throughout the entire adoption journey. All our services are completely free.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-6 mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            const isSelected = selectedService === service.id;

            return (
              <div
                key={service.id}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setSelectedService(isSelected ? null : service.id)}
                >
                  <div className="flex items-start gap-6">
                    <div className="shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h2 className="text-xl font-bold text-gray-900">{service.title}</h2>
                        <span className="text-lg font-bold text-gray-900 whitespace-nowrap ml-4">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{service.description}</p>

                      <button className="flex items-center gap-2 text-sm text-gray-900 font-medium hover:gap-3 transition-all">
                        <span>{isSelected ? 'Show less' : 'Learn more'}</span>
                        <ArrowRight className={`w-5 h-5 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                      </button>
                    </div>
                  </div>
                </div>

                {isSelected && (
                  <div className="px-6 pb-6 pt-4 border-t border-gray-100 bg-white">
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                      {service.fullDescription}
                    </p>

                    <h3 className="text-base font-bold text-gray-900 mb-3">What's Included:</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-0.5">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <button className="px-6 py-2 text-sm bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                        Book This Service
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Adopt?</h2>
            <p className="text-sm text-gray-300 mb-6">
              Our adoption team is here to help you find your perfect feline companion. Contact us to schedule a meet and greet with our available cats.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button className="px-6 py-2 text-sm bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="px-6 py-2 text-sm border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors">
                Call Us
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Check className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Adoption Team</h3>
            <p className="text-xs text-gray-600">
              Our counselors are trained in cat behavior and adoption best practices.
            </p>
          </div>

          <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Activity className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Clean, Safe Facility</h3>
            <p className="text-xs text-gray-600">
              Comfortable environments where cats thrive while awaiting adoption.
            </p>
          </div>

          <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Lifetime Support</h3>
            <p className="text-xs text-gray-600">
              We're here for you and your cat long after adoption day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
