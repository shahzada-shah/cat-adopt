import { Stethoscope, Syringe, Scissors, MessageSquare, Clock, Activity, Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  price: string;
  icon: typeof Stethoscope;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: 'Diagnostics and Laboratory Tests',
    description: 'Comprehensive health screening and diagnostic services',
    fullDescription: 'Our state-of-the-art diagnostic center offers a complete range of testing services to ensure accurate diagnosis and effective treatment planning. We use the latest technology to provide quick and reliable results.',
    price: 'from 400 UAH',
    icon: Stethoscope,
    features: [
      'Blood analysis and biochemistry',
      'Ultrasound examinations',
      'Digital X-ray imaging',
      'Urinalysis and fecal tests',
      'Same-day results available',
    ],
  },
  {
    id: 2,
    title: 'Animal Vaccination',
    description: 'Protect your cat with certified vaccines',
    fullDescription: 'Keep your feline friend healthy with our comprehensive vaccination program. We use only certified, high-quality vaccines and maintain detailed health records for every patient.',
    price: 'from 500 UAH',
    icon: Syringe,
    features: [
      'Core and non-core vaccines',
      'Rabies vaccination',
      'FVRCP combination vaccine',
      'Customized vaccination schedules',
      'Digital health passport',
    ],
  },
  {
    id: 3,
    title: 'Surgical Interventions',
    description: 'Safe and professional surgical care',
    fullDescription: 'Our experienced surgical team provides a full range of procedures from routine spaying and neutering to complex emergency surgeries, all performed in our modern operating rooms.',
    price: 'from 1,500 UAH',
    icon: Activity,
    features: [
      'Spaying and neutering',
      'Soft tissue surgery',
      'Emergency procedures',
      'Pain management protocols',
      'Post-operative care included',
    ],
  },
  {
    id: 4,
    title: 'Veterinary Consultation',
    description: 'Expert advice for your cat\'s health',
    fullDescription: 'Schedule a consultation with our experienced veterinarians for health assessments, behavioral advice, nutrition guidance, and answers to all your cat care questions.',
    price: 'from 300 UAH',
    icon: MessageSquare,
    features: [
      'Complete health examination',
      'Behavioral assessment',
      'Nutrition counseling',
      'Preventive care planning',
      'Follow-up recommendations',
    ],
  },
  {
    id: 5,
    title: 'Grooming and Hygiene',
    description: 'Keep your cat looking and feeling great',
    fullDescription: 'Professional grooming services to maintain your cat\'s health and appearance. Our gentle approach ensures a stress-free experience for even the most anxious pets.',
    price: 'from 300 UAH',
    icon: Scissors,
    features: [
      'Professional nail trimming',
      'Coat brushing and detangling',
      'Dental hygiene care',
      'Ear cleaning',
      'Sanitary trimming',
    ],
  },
  {
    id: 6,
    title: '24/7 Monitoring and Care',
    description: 'Round-the-clock professional care',
    fullDescription: 'Our clinic provides comprehensive inpatient care with continuous monitoring by qualified staff. Your cat receives the attention and treatment they need at any hour.',
    price: 'from 700 UAH',
    icon: Clock,
    features: [
      '24-hour veterinary supervision',
      'Post-surgical monitoring',
      'IV fluid therapy',
      'Medication administration',
      'Emergency response ready',
    ],
  },
];

export const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-24">
      <div className="bg-gradient-to-b from-white via-gray-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Comprehensive veterinary care designed specifically for cats. From routine checkups to advanced procedures, we're here for every stage of your cat's life.
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
            <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-sm text-gray-300 mb-6">
              Our veterinary team is here to help you select the right services for your cat's needs. Contact us for a personalized consultation.
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
            <h3 className="text-lg font-bold text-gray-900 mb-2">Certified Professionals</h3>
            <p className="text-xs text-gray-600">
              All our veterinarians are certified and experienced in feline care.
            </p>
          </div>

          <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Activity className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Modern Equipment</h3>
            <p className="text-xs text-gray-600">
              State-of-the-art facilities with the latest veterinary technology.
            </p>
          </div>

          <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Availability</h3>
            <p className="text-xs text-gray-600">
              Emergency services available around the clock for urgent care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
