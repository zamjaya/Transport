// Footer component
import { Plane, Train, Bus, Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const quickLinks = [
  { name: 'ගුවන් සේවා', href: '#airlines' },
  { name: 'දුම්රිය සේවා', href: '#railway' },
  { name: 'බස් රථ සේවා', href: '#bus' },
  { name: 'වෙනත් සේවා', href: '#other' },
];

const resources = [
  { name: 'කාලසටහන', href: 'http://www.railway.gov.lk' },
  { name: 'මිල ගණන්', href: '#' },
  { name: 'වෙන් කිරීම', href: '#' },
  { name: 'නිතර අසන ප්‍රශ්න', href: '#' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Youtube', icon: Youtube, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-orange flex items-center justify-center">
                <Plane className="text-black" size={24} />
              </div>
              <div>
                <span className="text-white font-bold text-xl block">SL Transport</span>
                <span className="text-gold text-sm">ශ්‍රී ලංකා ප්‍රවාහන</span>
              </div>
            </a>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              ශ්‍රී ලංකාවේ ප්‍රවාහන සේවාවන් පිළිබඳ සම්පූර්ණ තොරතුරු එකම ස්ථානයකින්.
              ගුවන්, දුම්රිය, බස් රථ සහ වෙනත් සියලුම ප්‍රවාහන තොරතුරු.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-gold hover:bg-white/10 transition-all"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">ඉක්මන් සබැඳි</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6">සම්පත්</h4>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">සම්බන්ධතා</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold mt-0.5" size={18} />
                <span className="text-gray-400 text-sm">
                  ශ්‍රී ලංකා ප්‍රවාහන මණ්ඩලය,<br />
                  කොළඹ 10, ශ්‍රී ලංකාව
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold" size={18} />
                <span className="text-gray-400 text-sm">+94 11 2588 588</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold" size={18} />
                <span className="text-gray-400 text-sm">info@transport.lk</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Transport Icons Bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 text-gray-500">
              <Plane size={24} />
              <span className="text-sm">ගුවන්</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500">
              <Train size={24} />
              <span className="text-sm">දුම්රිය</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500">
              <Bus size={24} />
              <span className="text-sm">බස්</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500">
              <Car size={24} />
              <span className="text-sm">වෙනත්</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2025 Sri Lanka Transport Services. සියලුම හිමිකම් ඇවිරිණි.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-gold transition-colors">
                ප්‍රතිපත්ති
              </a>
              <a href="#" className="text-gray-500 hover:text-gold transition-colors">
                නියම
              </a>
              <a href="#" className="text-gray-500 hover:text-gold transition-colors">
                රහස්‍යතා ප්‍රතිපත්තිය
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
