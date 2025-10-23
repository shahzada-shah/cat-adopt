/**
 * Footer Component
 *
 * Main footer section containing contact information, navigation, and branding.
 * Implements a split layout with contact details on the left and a map placeholder on the right.
 *
 * @component
 * @returns {JSX.Element} Rendered footer section
 *
 * Features:
 * - Contact information display (phone, email, address)
 * - Social media links with hover effects
 * - Main navigation menu
 * - Map placeholder area
 * - Responsive layout (stacks on mobile, side-by-side on desktop)
 * - Copyright information
 * - Smooth hover transitions
 *
 * Architecture:
 * - Self-contained component with no external state dependencies
 * - Uses Lucide React for consistent iconography
 * - Tailwind CSS for styling and responsive design
 * - Follows accessibility best practices (semantic HTML, ARIA labels)
 */

import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  /**
   * Navigation menu items
   * In production, this would be shared from a central navigation config
   */
  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'About us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Online appointment', href: '#appointment' },
    { label: 'Contacts', href: '#contacts' },
    { label: 'Blog', href: '#blog' },
  ];

  /**
   * Social media links
   * Icons and URLs should be configured per deployment
   */
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-white relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-900 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gray-900 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column: Contact information */}
          <div className="space-y-8">
            {/* Logo and tagline */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 border-3 border-white rounded-full" />
                </div>
                <span className="text-2xl font-bold text-gray-900">logoipsum</span>
              </div>
            </div>

            {/* Questions CTA */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Do you still have questions?
              </h3>
              <p className="text-xl font-semibold text-gray-700">Contact us!</p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {/* Phone */}
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-gray-50 rounded-lg border-2 border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <Phone className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm font-medium">+123 456 7890</span>
              </a>

              {/* Email */}
              <a
                href="mailto:johndoe@example.com"
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-gray-50 rounded-lg border-2 border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <Mail className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm font-medium">johndoe@example.com</span>
              </a>

              {/* Address */}
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-gray-50 rounded-lg border-2 border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <MapPin className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm font-medium">123 Main St, City</span>
              </a>
            </div>

            {/* Social media links */}
            <div className="flex items-center gap-3 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 bg-gray-50 hover:bg-gray-900 rounded-full flex items-center justify-center border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 group shadow-md hover:shadow-xl hover:scale-110"
                  >
                    <Icon className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-300" />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-500 pt-4">
              {currentYear} © www.site-josite.com all rights reserved
            </div>
          </div>

          {/* Right column: Navigation menu and map placeholder */}
          <div className="space-y-8">
            {/* Navigation menu */}
            <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-lg font-bold text-gray-900">Menu:</span>
              </div>
              <nav className="grid grid-cols-2 gap-4">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Map placeholder */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 lg:h-80 overflow-hidden relative border-2 border-gray-300 shadow-lg">
              {/* Decorative diagonal lines to match wireframe */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gray-900 origin-top-left rotate-45 translate-x-64" />
                  <div className="absolute top-0 right-0 w-1 h-full bg-gray-900 origin-top-right -rotate-45 -translate-x-64" />
                  <div className="absolute top-1/2 left-1/2 w-1 h-full bg-gray-900 origin-center rotate-45" />
                </div>
              </div>

              {/* Map placeholder text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-600 mx-auto mb-2" />
                  <p className="text-gray-700 font-semibold">Interactive Map</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
