/**
 * Loader Component
 *
 * An elegant loading screen with the CatAdopt logo.
 * Features smooth fade-in/fade-out animations.
 *
 * @component
 * @returns {JSX.Element} Animated loader with logo
 */

import { Cat } from 'lucide-react';
import { useEffect, useState } from 'react';

interface LoaderProps {
  onLoadComplete?: () => void;
}

export const Loader = ({ onLoadComplete }: LoaderProps) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Minimum loading time for smooth experience
    const minLoadTime = 1500;
    
    const timer = setTimeout(() => {
      setIsExiting(true);
      // Wait for exit animation before completing
      setTimeout(() => {
        onLoadComplete?.();
      }, 600);
    }, minLoadTime);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 transition-opacity duration-500 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo */}
        <div
          className={`relative transition-all duration-700 ${
            isExiting ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
          }`}
        >
          {/* Outer ring animation */}
          <div className="absolute -inset-4 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 rounded-full blur-xl opacity-30 animate-pulse" />
          
          {/* Logo container */}
          <div className="relative w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
            <Cat className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Brand name */}
        <div
          className={`flex flex-col items-center transition-all duration-700 delay-100 ${
            isExiting ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
          }`}
        >
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            CatAdopt
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Finding forever homes
          </p>
        </div>

        {/* Loading animation */}
        <div
          className={`flex gap-2 transition-opacity duration-500 ${
            isExiting ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="w-2 h-2 bg-gray-900 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-gray-900 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-gray-900 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};

