import React from 'react';
import { Home, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/images/TitaniumRoofing-black.png';
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';
import linkedin from '../assets/images/Vector.png';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt='logo' />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              South Florida’s trusted partner for roof maintenance and replacement since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl tracking-wider mb-6 text-white">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Roof Maintenance Plans</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Roof Replacement</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Emergency Repairs</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Subscription Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl tracking-wider mb-6 text-white">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Miami-Dade Country</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Broward Country</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Palm Beach Country</a></li>
              <li><a href="" className="hover:text-brand-yellow transition-colors">Monroe Country</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl tracking-wider mb-6 text-white">
              Connect
            </h4>
            <ul className="flex gap-4 mb-3">
              <li>
                <img src={facebook} alt='Facebook' />
              </li>
              <li>
                <img src={instagram} alt='Instagram' />
              </li>
              <li>
                <img src={linkedin} alt='Linkedin' />
              </li>
            </ul>
            <p className='text-gray-400'>License #CCC12345567 Fully Insured</p>
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
