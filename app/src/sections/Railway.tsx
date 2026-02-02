import { motion } from 'framer-motion';
import { Train, Clock, Ticket, Star } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const routes = [
  {
    name: 'Up-Country Line',
    nameSinhala: 'උඩරට මාර්ගය',
    from: 'Colombo',
    to: 'Badulla',
    via: 'Kandy, Nuwara Eliya',
    duration: '8-10 hours',
    price: 'Rs. 300 - 2,000',
    description: 'ලෝකයේ වඩාත්ම scenic දුම්රිය ගමන් වලින් එකකි',
    highlight: true,
  },
  {
    name: 'Coastal Line',
    nameSinhala: 'වෙරළබඩ මාර්ගය',
    from: 'Colombo',
    to: 'Matara',
    via: 'Galle',
    duration: '2-3 hours',
    price: 'Rs. 240 - 1,400',
    description: 'මනෝහර ඉන්දීය සාගර දර්ශන',
    highlight: false,
  },
  {
    name: 'Northern Line',
    nameSinhala: 'උතුරු මාර්ගය',
    from: 'Colombo',
    to: 'Jaffna',
    via: 'Anuradhapura',
    duration: '6-8 hours',
    price: 'Rs. 500 - 2,800',
    description: 'ඓතිහාසික නගර වලට ගමන්',
    highlight: false,
  },
  {
    name: 'Eastern Line',
    nameSinhala: 'නැගෙනහිර මාර්ගය',
    from: 'Colombo',
    to: 'Batticaloa',
    via: 'Polonnaruwa',
    duration: '5-7 hours',
    price: 'Rs. 400 - 3,000',
    description: 'නැගෙනහිර වෙරළට ප්‍රවේශය',
    highlight: false,
  },
];

const specialTrains = [
  {
    name: 'Ella Odyssey',
    description: 'සංචාරක දුම්රිය - විශේෂ ඡායාරූප නැවතුම්',
    schedule: 'බදාදා සහ සෙනසුරාදා',
    features: ['Horsetail Waterfall', 'Nine Arches Bridge', 'Adam\'s Peak View'],
  },
  {
    name: 'Calypso Train',
    description: 'Badulla - Bandarawela roundtrip',
    schedule: 'දිනපතා',
    features: ['5 photo stops', 'Demodara Station', 'Tea plantations'],
  },
  {
    name: 'Night Mail',
    description: 'නිදාගත දුම්රිය - 1st class sleepers',
    schedule: 'රාත්‍රී',
    features: ['2-berth compartments', 'Sleeping cars', 'Buffet car'],
  },
];

const classes = [
  { name: '1st Class', nameSinhala: '1 වන පන්තිය', price: 'ඉහළ', features: ['AC', 'Reserved seats', 'Comfortable'] },
  { name: '2nd Class', nameSinhala: '2 වන පන්තිය', price: 'මධ්‍යම', features: ['Reserved/Unreserved', 'Fan', 'Basic comfort'] },
  { name: '3rd Class', nameSinhala: '3 වන පන්තිය', price: 'අඩු', features: ['Unreserved', 'Local experience', 'Economic'] },
];

export default function Railway() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="routes" className="section-padding bg-gradient-to-b from-black to-gray-900 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 T100,50" stroke="white" fill="none" strokeWidth="0.5" />
          <path d="M0,60 Q25,40 50,60 T100,60" stroke="white" fill="none" strokeWidth="0.5" />
          <path d="M0,40 Q25,20 50,40 T100,40" stroke="white" fill="none" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-4">
            <Train size={16} />
            දුම්රිය සේවා
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            දුම්රිය <span className="gradient-text">සේවා</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            ශ්‍රී ලංකාවේ දුම්රිය මාර්ග 7ක් ක්‍රියාත්මක වේ.
            මෙය ලෝකයේ වඩාත්ම scenic දුම්රිය ගමන් වලින් එකකි.
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          className="relative rounded-3xl overflow-hidden mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/railway.jpg"
            alt="Sri Lankan Train"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Nine Arches Bridge, Ella
            </h3>
            <p className="text-gray-300">ලෝක ප්‍රසිද්ධ දුම්රිය දර්ශනය</p>
          </div>
        </motion.div>

        {/* Routes Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {routes.map((route, index) => (
            <motion.div
              key={index}
              className={`glass-card p-6 group relative overflow-hidden ${route.highlight ? 'border-gold/30' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {route.highlight && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gold/20 text-gold text-xs">
                    <Star size={12} fill="currentColor" />
                    Popular
                  </span>
                </div>
              )}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <Train className="text-green-400" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{route.name}</h3>
                  <p className="text-gold text-sm">{route.nameSinhala}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-3 text-sm">
                <span className="text-white font-medium">{route.from}</span>
                <span className="text-gray-500">→</span>
                <span className="text-white font-medium">{route.to}</span>
              </div>
              
              <p className="text-gray-400 text-sm mb-4">{route.description}</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock size={14} className="text-green-400" />
                  <span>{route.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Ticket size={14} className="text-gold" />
                  <span>{route.price}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <span className="text-xs text-gray-500">via {route.via}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Trains */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            විශේෂ දුම්රිය <span className="text-gold">සේවා</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {specialTrains.map((train, index) => (
              <motion.div
                key={index}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
                  <Star className="text-gold" size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{train.name}</h4>
                <p className="text-gray-400 text-sm mb-4">{train.description}</p>
                <div className="flex items-center gap-2 text-sm text-green-400 mb-3">
                  <Clock size={14} />
                  <span>{train.schedule}</span>
                </div>
                <ul className="space-y-1">
                  {train.features.map((feature, i) => (
                    <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ticket Classes */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            පන්ති <span className="text-gold">වර්ග</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {classes.map((cls, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h4 className="text-lg font-bold text-white mb-1">{cls.name}</h4>
                <p className="text-gold text-sm mb-4">{cls.nameSinhala}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm text-gray-300 mb-4">
                  {cls.price}
                </span>
                <ul className="space-y-2">
                  {cls.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-400">{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a
            href="http://www.railway.gov.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary"
          >
            <Ticket size={18} />
            දුම්රිය කාලසටහන බලන්න
          </a>
        </motion.div>
      </div>
    </section>
  );
}
