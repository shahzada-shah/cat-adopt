import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Facebook, Instagram, Youtube } from 'lucide-react';
import { useState } from 'react';
import { PageTransition } from '../components/PageTransition';

export const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+123 456 7890',
      subdetails: '24/7 Emergency Line',
      link: 'tel:+1234567890',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'johndoe@example.com',
      subdetails: 'We reply within 24 hours',
      link: 'mailto:johndoe@example.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: '123 Main St, City',
      subdetails: 'State, 12345',
      link: 'https://maps.google.com',
    },
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Emergency Only' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
  ];

  return (
    <PageTransition>
    <div className="min-h-screen pt-24">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm mb-4">
              <MessageSquare className="w-4 h-4" />
              <span className="text-xs font-semibold tracking-wider uppercase">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              Have questions? We're here to help. Reach out to us through any of the channels below, and our team will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.title}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-sm text-gray-900 font-medium mb-1">{method.details}</p>
                <p className="text-sm text-gray-600">{method.subdetails}</p>
              </a>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-sm text-gray-600 mb-6">
              Fill out the form below and we'll get back to you within 24 hours. For urgent matters, please call us directly.
            </p>

            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto animate-bounce">
                    <MessageSquare className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-gray-600">
                    Thank you for contacting us. We'll respond to your inquiry as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="John Doe"
                        required
                        autoComplete="off"
                        className="w-full px-4 py-2 text-sm bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-gray-900 focus:bg-white transition-all duration-300 outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="+123 456 7890"
                        required
                        autoComplete="off"
                        className="w-full px-4 py-2 text-sm bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-gray-900 focus:bg-white transition-all duration-300 outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="your@email.com"
                      required
                      autoComplete="off"
                      className="w-full px-4 py-2 text-sm bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-gray-900 focus:bg-white transition-all duration-300 outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 text-sm bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-gray-900 focus:bg-white transition-all duration-300 outline-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="appointment">Appointment Question</option>
                      <option value="adoption">Adoption Process</option>
                      <option value="services">Services Information</option>
                      <option value="emergency">Emergency</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-gray-900 focus:bg-white transition-all duration-300 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-3 px-6 text-sm rounded-xl font-bold hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Working Hours</h3>
              </div>
              <div className="space-y-3">
                {workingHours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-gray-300 last:border-0">
                    <span className="text-sm font-semibold text-gray-900">{schedule.day}</span>
                    <span className="text-xs text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
              <p className="text-sm text-gray-600 mb-4">
                Stay connected with us on social media for updates, tips, and adorable cat photos!
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`w-12 h-12 bg-gray-100 ${social.color} rounded-lg flex items-center justify-center transition-all duration-300 group shadow-md hover:shadow-xl hover:scale-110`}
                    >
                      <Icon className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">Emergency?</h3>
              <p className="text-sm text-gray-300 mb-4">
                For urgent cases that require immediate attention, please call our emergency line available 24/7.
              </p>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-2 text-sm rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Emergency Line</span>
              </a>
            </div>

            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-48 overflow-hidden relative border-2 border-gray-300 shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-gray-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-700 font-semibold">Interactive Map</p>
                  <p className="text-xs text-gray-600 mt-1">123 Main St, City</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Clinic</h2>
            <p className="text-sm text-gray-600 mb-6">
              We're conveniently located and welcome walk-ins during business hours. However, we recommend booking an appointment to ensure minimal wait time and personalized attention for your cat.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="/appointment"
                className="px-6 py-2 text-sm bg-gray-900 text-white rounded-full font-medium hover:bg-gray-700 transition-colors"
              >
                Book Appointment
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-sm border-2 border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </PageTransition>
  );
};
