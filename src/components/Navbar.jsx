import React from 'react';
import { Phone, Home } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-black/40 backdrop-blur-sm text-white">
      <div className="flex items-center gap-2">
        {/* Placeholder for Logo Icon */}
        <div className="w-8 h-8 rounded-sm bg-brand-yellow flex items-center justify-center text-brand-dark">
          <Home size={20} strokeWidth={2.5} />
        </div>
        <div className="flex flex-col uppercase font-oswald leading-none">
          <span className="text-xl font-bold tracking-wider">Titanium</span>
          <span className="text-xs tracking-[0.2em] font-medium text-brand-yellow mt-0.5">Roofing</span>
        </div>
      </div>
      
      <div className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase font-sans">
        <a href="#process" className="hover:text-brand-yellow transition-colors">Our Process</a>
        <a href="#services" className="hover:text-brand-yellow transition-colors">Services</a>
        <a href="#faq" className="hover:text-brand-yellow transition-colors">FAQ</a>
      </div>
      
      <div className="hidden md:flex items-center gap-2 font-oswald text-lg">
        <Phone size={18} className="text-brand-yellow" />
        <span className="font-semibold tracking-wide">1-800-ROOFING</span>
      </div>
    </nav>
  );
};

export default Navbar;
