import { motion } from 'framer-motion';
import { Plane, MapPin, Clock, Globe } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const airlines = [
  {
    name: 'SriLankan Airlines',
    nameSinhala: 'ශ්‍රී ලන්කන් එයාර්ලයින්ස්',
    description: 'ශ්‍රී ලංකාවේ ජාතික ගුවන් සේවාව',
    logo: 'UL',
    color: '#f4c430',
    routes: 'ආසියාව, යුරෝපය, මධ්‍යම පෙරදිග',
  },
  {
    name: 'FitsAir',
    nameSinhala: 'ෆිට්ස් එයාර්',
    description: 'පෞද්ගලික ගුවන් සේවාව',
    logo: 'Fits',
    color: '#ff6b35',
    routes: 'දේශීය හා කලාපීය ගමන්',
  },
  {
    name: 'Cinnamon Air',
    nameSinhala: 'සිනමන් එයාර්',
    description: 'දේශීය ගුවන් සේවාව',
    logo: 'CA',
    color: '#00c853',
    routes: 'දේශීය ගමන් බලාපොරොත්තු',
  },
];

const airports = [
  {
    name: 'Bandaranaike International Airport',
    nameSinhala: 'බණ්ඩාරනායක ජාත්‍යන්තර ගුවන් තොට',
    code: 'CMB',
    location: 'කටුනායක',
    distance: '35km from Colombo',
  },
  {
    name: 'Mattala Rajapaksa International Airport',
    nameSinhala: 'මත්තල රාජපක්ෂ ජාත්‍යන්තර ගුවන් තොට',
    code: 'HRI',
    location: 'මත්තල',
    distance: 'Hambantota district',
  },
  {
    name: 'Ratmalana Airport',
    nameSinhala: 'රත්මලාන ගුවන් තොට',
    code: 'RML',
    location: 'රත්මලාන',
    distance: '15km from Colombo',
  },
];

export default function Airlines() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-black relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-4">
            <Plane size={16} />
            ගුවන් සේවා
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            ගුවන් යානා <span className="gradient-text">සේවා</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            ශ්‍රී ලංකාවේ ප්‍රධාන ගුවන් තොට වන්නේ කටුනායක බණ්ඩාරනායක ජාත්‍යන්තර ගුවන් තොටයි.
            මෙයින් ලෝකයේ විවිධ ස්ථාන වලට ගමන් කළ හැක.
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
            src="/airlines.jpg"
            alt="SriLankan Airlines"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              SriLankan Airlines
            </h3>
              <p className="text-gray-300">ඔන්වර්ල්ඩ් සංගමයේ සාමාජිකයා - ලෝකයටම ගමන් කරන්න</p>
          </div>
        </motion.div>

        {/* Airlines Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {airlines.map((airline, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-black font-bold text-xl mb-4"
                style={{ backgroundColor: airline.color }}
              >
                {airline.logo}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{airline.name}</h3>
              <p className="text-gold text-sm mb-3">{airline.nameSinhala}</p>
              <p className="text-gray-400 text-sm mb-4">{airline.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Globe size={14} />
                <span>{airline.routes}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Airports Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            ගුවන් තොටුපළ <span className="text-gold">විස්තර</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {airports.map((airport, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 group hover:border-gold/30 transition-colors"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <MapPin className="text-blue-400" size={24} />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-sm font-mono text-gold">
                    {airport.code}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">{airport.name}</h4>
                <p className="text-gold text-sm mb-3">{airport.nameSinhala}</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>{airport.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>{airport.distance}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a
            href="https://www.srilankan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-orange transition-colors"
          >
            <Globe size={18} />
            තවත් විස්තර සඳහා වෙබ් අඩවියට පිවිසෙන්න
          </a>
        </motion.div>
      </div>
    </section>
  );
}
