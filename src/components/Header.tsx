import { Phone, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded-full relative">
                <div className="absolute inset-0 border-t-2 border-white rotate-45"></div>
              </div>
            </div>
            <span className="text-lg font-semibold text-gray-900">CatAdopt</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium hover:text-gray-600 transition-colors ${
                isHome ? 'text-gray-900' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm hover:text-gray-900 transition-colors ${
                location.pathname === '/about' ? 'text-gray-900 font-medium' : 'text-gray-700'
              }`}
            >
              About us
            </Link>
            <Link
              to="/services"
              className={`text-sm hover:text-gray-900 transition-colors ${
                location.pathname === '/services' ? 'text-gray-900 font-medium' : 'text-gray-700'
              }`}
            >
              Services
            </Link>
            <Link
              to="/appointment"
              className={`text-sm hover:text-gray-900 transition-colors ${
                location.pathname === '/appointment' ? 'text-gray-900 font-medium' : 'text-gray-700'
              }`}
            >
              Online appointment
            </Link>
            <Link
              to="/contacts"
              className={`text-sm hover:text-gray-900 transition-colors ${
                location.pathname === '/contacts' ? 'text-gray-900 font-medium' : 'text-gray-700'
              }`}
            >
              Contacts
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className="hidden lg:flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-xs font-medium">+123 456 7890</span>
            </a>

            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:border-gray-400 transition-colors">
              <span className="text-sm font-medium">EN</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
