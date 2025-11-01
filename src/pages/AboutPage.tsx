import { Heart, Users, Award, Target } from 'lucide-react';
import { PageTransition } from '../components/ui/PageTransition';

export const AboutPage = () => {
  return (
    <PageTransition>
    <div className="min-h-screen pt-24">
      <div className="bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12 animate-slideUp">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About CatAdopt</h1>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Connecting loving families with their perfect feline companions since 2015
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4 animate-slideUp animate-delay-100">
            <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              CatAdopt was founded by a group of passionate cat lovers who recognized the need for a dedicated
              platform to help cats find their forever homes. What started as a small local initiative has grown
              into a comprehensive adoption service that has successfully placed over 5,000 cats with loving families.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our team works tirelessly to ensure every cat receives proper care, medical attention, and socialization
              while they wait for their perfect match. We believe that every cat deserves a second chance and a
              loving home where they can thrive.
            </p>
          </div>

          <div className="space-y-4 animate-slideUp animate-delay-200">
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              To rescue, rehabilitate, and rehome cats in need while educating the community about responsible
              pet ownership and the joys of cat companionship. We are committed to reducing the number of homeless
              cats through adoption, spay/neuter programs, and community outreach.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              We strive to create lasting bonds between cats and their adoptive families by carefully matching
              personalities, lifestyles, and needs. Our comprehensive adoption process ensures that every placement
              is a success story.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-smooth hover:scale-105 transition-all duration-300 animate-scaleIn animate-delay-100">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3 transform transition-transform duration-300 hover:rotate-12">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">5,000+</h3>
            <p className="text-xs text-gray-600">Successful Adoptions</p>
          </div>

          <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-smooth hover:scale-105 transition-all duration-300 animate-scaleIn animate-delay-200">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3 transform transition-transform duration-300 hover:rotate-12">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">150+</h3>
            <p className="text-xs text-gray-600">Active Volunteers</p>
          </div>

          <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-smooth hover:scale-105 transition-all duration-300 animate-scaleIn animate-delay-300">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3 transform transition-transform duration-300 hover:rotate-12">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">10+</h3>
            <p className="text-xs text-gray-600">Years of Service</p>
          </div>

          <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-smooth hover:scale-105 transition-all duration-300 animate-scaleIn animate-delay-400">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3 transform transition-transform duration-300 hover:rotate-12">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">98%</h3>
            <p className="text-xs text-gray-600">Success Rate</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Compassion</h3>
              <p className="text-gray-600">
                We treat every cat with love, patience, and understanding, recognizing their unique personalities
                and needs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of care and transparency in all our operations and adoption processes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">
                We build strong relationships with adopters, volunteers, and supporters to create a network of cat advocates.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
          <p className="text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you're looking to adopt, volunteer, or support our cause, there are many ways to get involved
            and make a difference in the lives of cats in need.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-2 text-sm bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Adopt a Cat
            </button>
            <button className="px-6 py-2 text-sm border-2 border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Become a Volunteer
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
    </PageTransition>
  );
};
