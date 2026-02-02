import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Plane, Train, Bus, Car, ChevronDown } from 'lucide-react';

const FloatingParticle = ({ delay, x, y, size, color }: { delay: number; x: string; y: string; size: number; color: string }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      left: x,
      top: y,
      width: size,
      height: size,
      backgroundColor: color,
    }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.3, 0.7, 0.3],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const TransportIcon = ({ icon: Icon, delay, position }: { icon: typeof Plane; delay: number; position: { x: string; y: string } }) => (
  <motion.div
    className="absolute"
    style={{ left: position.x, top: position.y }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 0.15, scale: 1 }}
    transition={{ delay, duration: 0.8 }}
  >
    <motion.div
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <Icon size={80} className="text-gold" strokeWidth={1} />
    </motion.div>
  </motion.div>
);

export default function Hero() {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particles = [
    { delay: 0, x: '10%', y: '20%', size: 8, color: '#f4c430' },
    { delay: 0.5, x: '85%', y: '15%', size: 6, color: '#ff6b35' },
    { delay: 1, x: '70%', y: '70%', size: 10, color: '#2962ff' },
    { delay: 1.5, x: '20%', y: '80%', size: 5, color: '#00c853' },
    { delay: 0.3, x: '50%', y: '30%', size: 7, color: '#f4c430' },
    { delay: 0.8, x: '90%', y: '60%', size: 4, color: '#ff6b35' },
    { delay: 1.2, x: '5%', y: '50%', size: 6, color: '#2962ff' },
    { delay: 0.6, x: '40%', y: '85%', size: 8, color: '#00c853' },
  ];

  const transportIcons = [
    { icon: Plane, delay: 0.3, position: { x: '15%', y: '25%' } },
    { icon: Train, delay: 0.5, position: { x: '80%', y: '20%' } },
    { icon: Bus, delay: 0.7, position: { x: '75%', y: '75%' } },
    { icon: Car, delay: 0.9, position: { x: '10%', y: '70%' } },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-10" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {particles.map((particle, index) => (
          <FloatingParticle key={index} {...particle} />
        ))}
      </div>
      
      {/* Transport Icons */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
        {transportIcons.map((item, index) => (
          <TransportIcon key={index} {...item} />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-gold mb-6">
            🚌 {t('hero.badge')}
          </span>
        </motion.div>
        
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-white">{t('hero.title')}</span>
          <br />
          <span className="gradient-text">{t('hero.titleHighlight')}</span>
        </motion.h1>
        
        <motion.p
          className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#services" className="btn-primary inline-flex items-center justify-center gap-2">
            <Plane size={20} />
            {t('hero.ctaPrimary')}
          </a>
          <a href="#routes" className="btn-secondary inline-flex items-center justify-center gap-2">
            <Train size={20} />
            {t('hero.ctaSecondary')}
          </a>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { value: '2', label: t('hero.stats.airports') },
            { value: '7', label: t('hero.stats.routes') },
            { value: '1000+', label: t('hero.stats.busRoutes') },
            { value: '24/7', label: t('hero.stats.service') },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-4"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#services" className="text-white/50 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}
