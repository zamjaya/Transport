import { motion } from 'framer-motion';
import { Bus, MapPin, Clock, Users, Star, Zap, Wind } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const busTypes = [
  {
    name: 'SLTB Buses',
    nameSinhala: 'රජයේ බස්',
    color: '#dc2626',
    description: 'ශ්‍රී ලංකා ප්‍රවාහන මණ්ඩලයේ බස් රථ',
    features: ['අඩු මිල', 'විශාල ජාලය', 'නිතිපතා සේවාව'],
    icon: Bus,
  },
  {
    name: 'Private Buses',
    nameSinhala: 'පුද්ගලික බස්',
    color: '#ffffff',
    description: 'වේගවත් පුද්ගලික බස් සේවා',
    features: ['වේගවත්', 'නිතර ධාවනය', 'සීමිත නැවතුම්'],
    icon: Zap,
  },
  {
    name: 'Semi-Luxury',
    nameSinhala: 'අර්ධ සුඛෝපභෝගී',
    color: '#3b82f6',
    description: 'පරිසර පාලක සහිත බස්',
    features: ['AC', 'වේගවත්', 'ආරාමදායක'],
    icon: Wind,
  },
  {
    name: 'Luxury Buses',
    nameSinhala: 'සුඛෝපභෝගී බස්',
    color: '#f4c430',
    description: 'පූර්ණ සුඛෝපභෝගී සේවාව',
    features: ['Full AC', 'Tinted Windows', 'Reclining Seats'],
    icon: Star,
  },
];

const majorRoutes = [
  { from: 'කොළඹ', to: 'කන්‍යා', time: '3-4 hours', price: 'Rs. 200-500' },
  { from: 'කොළඹ', to: 'ගාල්ල', time: '2-3 hours', price: 'Rs. 300-800' },
  { from: 'කොළඹ', to: 'මහනුවර', time: '3-4 hours', price: 'Rs. 250-600' },
  { from: 'කොළඹ', to: 'අනුරාධපුර', time: '5-6 hours', price: 'Rs. 400-1000' },
  { from: 'කොළඹ', to: 'යාපනය', time: '8-10 hours', price: 'Rs. 800-2000' },
  { from: 'කොළඹ', to: 'ත්‍රිකුණාමලය', time: '6-7 hours', price: 'Rs. 500-1200' },
];

const terminals = [
  {
    name: 'Colombo Fort Bus Stand',
    nameSinhala: 'කොළඹ කොටුව බස් නැවතුම',
    location: 'කොළඹ කොටුව',
    routes: 'දුර බස් මාර්ග',
  },
  {
    name: 'Pettah Bus Stand',
    nameSinhala: 'පේට්ටහ බස් නැවතුම',
    location: 'පේට්ටහ',
    routes: 'අභ්‍යන්තර හා දුර බස්',
  },
  {
    name: 'Maharagama Bus Stand',
    nameSinhala: 'මහරගම බස් නැවතුම',
    location: 'මහරගම',
    routes: 'අභ්‍යන්තර බස්',
  },
];

export default function BusServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-black relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm mb-4">
            <Bus size={16} />
            බස් රථ සේවා
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            බස් රථ <span className="gradient-text">සේවා</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            ශ්‍රී ලංකාවේ වඩාත්ම ජනප්‍රිය ප්‍රවාහන ක්‍රමය බස් රථ සේවාවයි.
            SLTB සහ පුද්ගලික බස් සේවා රාශියක් තෝරා ගත හැක.
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
            src="/bus.jpg"
            alt="Sri Lankan Bus"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              වර්ණවත් ශ්‍රී ලාංකික බස් රථ
            </h3>
            <p className="text-gray-300">වෙරළබඩ මාර්ගයේ ගමන් කරන ප්‍රසිද්ධ බස් රථ</p>
          </div>
        </motion.div>

        {/* Bus Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {busTypes.map((type, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${type.color}20` }}
              >
                <type.icon size={28} style={{ color: type.color }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{type.name}</h3>
              <p className="text-gold text-sm mb-3">{type.nameSinhala}</p>
              <p className="text-gray-400 text-sm mb-4">{type.description}</p>
              <ul className="space-y-1">
                {type.features.map((feature, i) => (
                  <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: type.color }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Popular Routes */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            ජනප්‍රිය <span className="text-gold">මාර්ග</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {majorRoutes.map((route, index) => (
              <motion.div
                key={index}
                className="glass-card p-4 flex items-center justify-between group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <Bus className="text-orange-400" size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-white font-medium">{route.from}</span>
                      <span className="text-gray-500">→</span>
                      <span className="text-white font-medium">{route.to}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {route.time}
                      </span>
                      <span className="text-gold">{route.price}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bus Terminals */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            ප්‍රධාන බස් <span className="text-gold">නැවතුම්</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {terminals.map((terminal, index) => (
              <motion.div
                key={index}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                  <MapPin className="text-orange-400" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">{terminal.name}</h4>
                <p className="text-gold text-sm mb-3">{terminal.nameSinhala}</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>{terminal.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bus size={14} />
                    <span>{terminal.routes}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tips */}
        <motion.div
          className="mt-16 glass-card p-6 md:p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Users size={20} className="text-gold" />
            උපදෙස්
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                <span>උදෑසන 7-9 සහ සවස 4.30-8 දක්වා තදබදයක් ඇත - මග හරින්න</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                <span>අධික තදබදයේදී ඔබේ දේපළ ප්‍රවේශමෙන් තබා ගන්න</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                <span>Express බස් රථ රතු අකුරින් සලකුණු කර ඇත</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                <span>ගමන් මුදල කොන්දොස්තරවරයාට ගෙවන්න</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
