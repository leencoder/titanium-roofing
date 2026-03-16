import React from 'react';
import { Home, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-sm bg-brand-yellow flex items-center justify-center text-brand-dark">
                <Home size={20} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col uppercase font-oswald leading-none">
                <span className="text-xl font-bold tracking-wider">Titanium</span>
                <span className="text-xs tracking-[0.2em] font-medium text-brand-yellow mt-0.5">Roofing</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Protecting homes and businesses with top-tier roofing maintenance. Built on trust, quality, and a commitment to keeping your roof in peak condition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-oswald font-bold text-lg uppercase tracking-wider mb-6 text-white border-l-2 border-brand-yellow pl-3">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#benefits" className="hover:text-brand-yellow transition-colors">Benefits</a></li>
              <li><a href="#process" className="hover:text-brand-yellow transition-colors">Our Process</a></li>
              <li><a href="#pricing" className="hover:text-brand-yellow transition-colors">Pricing Plans</a></li>
              <li><a href="#faq" className="hover:text-brand-yellow transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-oswald font-bold text-lg uppercase tracking-wider mb-6 text-white border-l-2 border-brand-yellow pl-3">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-brand-yellow transition-colors">Residential Maintenance</a></li>
              <li><a href="#services" className="hover:text-brand-yellow transition-colors">Commercial Maintenance</a></li>
              <li><a href="#services" className="hover:text-brand-yellow transition-colors">Gutter Cleaning</a></li>
              <li><a href="#services" className="hover:text-brand-yellow transition-colors">Emergency Repairs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-oswald font-bold text-lg uppercase tracking-wider mb-6 text-white border-l-2 border-brand-yellow pl-3">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-yellow shrink-0 mt-0.5" />
                <span>123 Roofing Lane, Suite 100<br/>Cityville, ST 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-yellow shrink-0" />
                <span>1-800-ROOFING</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-yellow shrink-0" />
                <span>info@titaniumroofing.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Titanium Roofing. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
