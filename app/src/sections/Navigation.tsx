import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Plane, Train, Bus, Car, Menu, X } from 'lucide-react';
import LanguageSelector from '@/components/LanguageSelector';

export default function Navigation() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t('nav.airlines'), href: '#airlines', icon: Plane },
    { name: t('nav.railway'), href: '#railway', icon: Train },
    { name: t('nav.bus'), href: '#bus', icon: Bus },
    { name: t('nav.other'), href: '#other', icon: Car },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-orange flex items-center justify-center">
                <Plane className="text-black" size={20} />
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-bold text-lg leading-tight">{t('nav.brand')}</span>
                <span className="text-gold text-xs block">{t('nav.brandSub')}</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                >
                  <link.icon size={16} />
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <LanguageSelector />

              {/* CTA Button */}
              <a
                href="#routes"
                className="hidden md:block px-5 py-2.5 rounded-full bg-gradient-to-r from-gold to-orange text-black text-sm font-semibold hover:shadow-glow transition-shadow"
              >
                {t('nav.findRoutes')}
              </a>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="text-white" size={20} />
                ) : (
                  <Menu className="text-white" size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              className="absolute top-20 left-4 right-4 bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-white/10 p-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <link.icon size={18} />
                  </div>
                  <span className="font-medium">{link.name}</span>
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10">
                <a
                  href="#routes"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-gold to-orange text-black font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Train size={18} />
                  {t('nav.findRoutes')}
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
