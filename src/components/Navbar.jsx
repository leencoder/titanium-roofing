import React from 'react';
import logo from '../assets/images/TitaniumRoofing-black.png';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-black/40 backdrop-blur-sm text-white">
      <div className="flex items-center gap-2">
        <img src={logo} alt='logo' />
      </div>
      
      <div className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase font-sans">
        <a href="#how-it-works" className="hover:text-brand-yellow transition-colors">How It Works</a>
        <a href="#pricing" className="hover:text-brand-yellow transition-colors">Pricing</a>
        <a href="#reviews" className="hover:text-brand-yellow transition-colors">Reviews</a>
        <a href="#faq" className="hover:text-brand-yellow transition-colors">FAQ</a>
      </div>
    </nav>
  );
};

export default Navbar;
