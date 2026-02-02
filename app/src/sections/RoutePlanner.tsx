import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Search, Plane, Train, Bus, Clock, ArrowRight } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const locations = [
  'කොළඹ (Colombo)',
  'කන්‍යා (Kandy)',
  'ගාල්ල (Galle)',
  'මහනුවර (Matale)',
  'අනුරාධපුර (Anuradhapura)',
  'යාපනය (Jaffna)',
  'ත්‍රිකුණාමලය (Trincomalee)',
  'බදුල්ල (Badulla)',
  'නුවරඑළිය (Nuwara Eliya)',
  'ඇල්ල (Ella)',
];

export default function RoutePlanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (from && to && date) {
      setShowResults(true);
    }
  };

  const results = [
    {
      type: 'bus',
      name: 'බස් රථ',
      duration: '4-5 පැය',
      price: 'Rs. 300 - 800',
      icon: Bus,
      color: 'orange',
    },
    {
      type: 'train',
      name: 'දුම්රිය',
      duration: '3-4 පැය',
      price: 'Rs. 240 - 1,400',
      icon: Train,
      color: 'green',
    },
    {
      type: 'flight',
      name: 'ගුවන් යානය',
      duration: '30 විනාඩි',
      price: 'Rs. 15,000+',
      icon: Plane,
      color: 'blue',
    },
  ];

  return (
    <section className="section-padding bg-black relative overflow-hidden" ref={ref}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-orange/5" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm mb-4">
            <Search size={16} />
            මාර්ග සෙවීම
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            ඔබේ ගමන <span className="gradient-text">සැලසුම් කරන්න</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            පිටත්වීමේ ස්ථානය සහ ගමනාන්තය ඇතුළත් කර වඩාත් සුදුසු ප්‍රවාහන ක්‍රමය සොයන්න
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {/* From */}
              <div className="relative">
                <label className="block text-sm text-gray-400 mb-2">පිටත්වීමේ ස්ථානය</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <select
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-gold focus:outline-none appearance-none"
                  >
                    <option value="" className="bg-gray-900">ස්ථානය තෝරන්න</option>
                    {locations.map((loc, i) => (
                      <option key={i} value={loc} className="bg-gray-900">{loc}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* To */}
              <div className="relative">
                <label className="block text-sm text-gray-400 mb-2">ගමනාන්තය</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <select
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-gold focus:outline-none appearance-none"
                  >
                    <option value="" className="bg-gray-900">ස්ථානය තෝරන්න</option>
                    {locations.map((loc, i) => (
                      <option key={i} value={loc} className="bg-gray-900">{loc}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="relative">
                <label className="block text-sm text-gray-400 mb-2">දිනය</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-gold focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleSearch}
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <Search size={18} />
              සොයන්න
            </button>
          </div>

          {/* Results */}
          {showResults && (
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">ලබා ගත හැකි විකල්ප</h3>
              <div className="space-y-4">
                {results.map((result, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-4 flex items-center justify-between group cursor-pointer hover:border-gold/30"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-${result.color}-500/20 flex items-center justify-center`}>
                        <result.icon className={`text-${result.color}-400`} size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{result.name}</h4>
                        <div className="flex items-center gap-3 text-sm text-gray-400 mt-1">
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {result.duration}
                          </span>
                          <span className="text-gold">{result.price}</span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="text-gray-500 group-hover:text-gold transition-colors" size={20} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { name: 'කාලසටහන', href: 'http://www.railway.gov.lk', icon: Clock },
            { name: 'මිල ගණන්', href: '#', icon: Train },
            { name: 'වෙන් කිරීම', href: '#', icon: Calendar },
            { name: 'සහාය', href: '#', icon: MapPin },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="glass-card p-4 text-center group hover:border-gold/30"
            >
              <link.icon className="mx-auto mb-2 text-gold group-hover:scale-110 transition-transform" size={24} />
              <span className="text-sm text-gray-300">{link.name}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
