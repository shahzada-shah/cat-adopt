import { Phone, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-sm animate-slideDown">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
              <div className="w-6 h-6 border-2 border-white rounded-full relative">
                <div className="absolute inset-0 border-t-2 border-white rotate-45 transition-transform duration-500 group-hover:rotate-[405deg]"></div>
              </div>
            </div>
            <span className="text-lg font-semibold text-gray-900 transition-all duration-300 group-hover:text-gray-700">CatAdopt</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium relative transition-all duration-300 hover:text-gray-900 hover:-translate-y-0.5 ${
                isHome ? 'text-gray-900' : 'text-gray-700'
              }`}
            >
              Home
              {isHome && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900 rounded-full animate-scaleIn"></span>
              )}
            </Link>
            <Link
              to="/about"
              className={`text-sm relative transition-all duration-300 hover:text-gray-900 hover:-translate-y-0.5 ${
                location.pathname === '/about' ? 'text-gray-900 font-medium' : 'text-gray-700'
              }`}
            >
              About us
              {location.pathname === '/about' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900 rounded-full animate-scaleIn"></span>
              )}
            </Link>
            <Link
              to="/services"
              className={`text-sm relative transition-all duration-300 hover:text-gray-900 hover:-translate-y-0.5 ${
                location.pathname === '/services' ? 'text-gray-900 font-medium' : 'text-gray-700'
              }`}
            >
              Services
              {location.pathname === '/services' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900 rounded-full animate-scaleIn"></span>
              )}
            </Link>
            <Link
              to="/appointment"
              className={`text-sm relative transition-all duration-300 hover:text-gray-900 hover:-translate-y-0.5 ${
                location.pathname === '/appointment' ? 'text-gray-900 font-medium' : 'text-gray-700'
              }`}
            >
              Online appointment
              {location.pathname === '/appointment' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900 rounded-full animate-scaleIn"></span>
              )}
            </Link>
            <Link
              to="/contacts"
              className={`text-sm relative transition-all duration-300 hover:text-gray-900 hover:-translate-y-0.5 ${
                location.pathname === '/contacts' ? 'text-gray-900 font-medium' : 'text-gray-700'
              }`}
            >
              Contacts
              {location.pathname === '/contacts' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900 rounded-full animate-scaleIn"></span>
              )}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className="hidden lg:flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105 group"
            >
              <Phone className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
              <span className="text-xs font-medium">+123 456 7890</span>
            </a>

            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full transition-all duration-300 hover:border-gray-900 hover:bg-gray-50 hover:shadow-md group">
              <span className="text-sm font-medium">EN</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
