import { Send, Calendar, User, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export const AppointmentSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-gray-50 to-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-900 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-900 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 lg:p-16 shadow-2xl border border-gray-200 transition-all duration-1000 ${
            inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div
              className={`transition-all duration-1000 delay-200 ${
                inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
                <Calendar className="w-4 h-4 text-gray-700" />
                <span className="text-sm font-semibold tracking-wider uppercase text-gray-500">
                  Book Now
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Take care of your pet's health - make an appointment!
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Fill out the form and our specialists will contact you to help you choose a convenient time for your visit or to provide advice on any questions.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Quick response</h3>
                    <p className="text-sm text-gray-600">
                      We'll get back to you within 30 minutes during business hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Flexible scheduling</h3>
                    <p className="text-sm text-gray-600">
                      Choose a time that works best for you and your pet
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Professional advice</h3>
                    <p className="text-sm text-gray-600">
                      Get expert guidance tailored to your pet's needs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-400 ${
                inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 transition-opacity duration-500 ${
                    isSubmitted ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Thank you!
                    </h3>
                    <p className="text-gray-600">
                      Your appointment request has been received. We'll contact you shortly!
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className={`space-y-6 ${isSubmitted ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      First and last name
                    </label>
                    <div className="relative group">
                      <div
                        className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                          focusedField === 'name' ? 'text-gray-900' : 'text-gray-400'
                        }`}
                      >
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter your full name"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-gray-900 focus:bg-white transition-all duration-300 outline-none text-gray-900 placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Phone
                    </label>
                    <div className="relative group">
                      <div
                        className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                          focusedField === 'phone' ? 'text-gray-900' : 'text-gray-400'
                        }`}
                      >
                        <Phone className="w-5 h-5" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="+380 XX XXX XX XX"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-gray-900 focus:bg-white transition-all duration-300 outline-none text-gray-900 placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Your request
                    </label>
                    <div className="relative group">
                      <div
                        className={`absolute left-4 top-4 transition-colors duration-300 ${
                          focusedField === 'message' ? 'text-gray-900' : 'text-gray-400'
                        }`}
                      >
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Tell us about your pet and reason for visit..."
                        rows={4}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-gray-900 focus:bg-white transition-all duration-300 outline-none text-gray-900 placeholder-gray-400 resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-4 px-6 rounded-xl font-bold hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group"
                  >
                    <span>Send</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    By submitting an application, you agree to our privacy policy
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
