import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Caring for your pets' health is our priority
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              A reliable veterinary clinic with qualified specialists and modern equipment.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="px-8 py-4 bg-gray-300 hover:bg-gray-400 text-gray-900 font-medium rounded-full transition-colors">
                Make an appointment
              </button>

              <a
                href="#consultation"
                className="flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all"
              >
                <span>Free consultation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gray-300 rounded-lg relative overflow-hidden">
              <svg
                className="absolute inset-0 w-full h-full"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
