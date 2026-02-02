import { motion } from 'framer-motion';
import { Car, Bike, Ship, Smartphone, Star, Check, Download } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    name: 'Tuk-Tuk',
    nameSinhala: 'ත්‍රිරෝද රථ',
    icon: Car,
    color: '#f4c430',
    description: 'ශ්‍රී ලංකාවේ වඩාත්ම ජනප්‍රිය ප්‍රවාහන ක්‍රමය',
    features: ['Meter Tuk-Tuks', 'PickMe Tuk', 'Uber Tuk', 'Local experience'],
    price: 'Rs. 50-100 per km',
  },
  {
    name: 'Taxi Services',
    nameSinhala: 'ටැක්සි සේවා',
    icon: Car,
    color: '#3b82f6',
    description: 'විශ්වසනීය ටැක්සි සේවා',
    features: ['Kangaroo Cabs', 'PickMe', 'Uber', 'Airport transfers'],
    price: 'Rs. 100-200 per km',
  },
  {
    name: 'Car Rentals',
    nameSinhala: 'මෝටර් රථ කුලී',
    icon: Car,
    color: '#00c853',
    description: 'ස්වයං ධාවන හෝ රියදුරු සහිත',
    features: ['Self-drive', 'With driver', 'Daily/Weekly', 'All vehicle types'],
    price: 'Rs. 3000+ per day',
  },
  {
    name: 'Bike Rentals',
    nameSinhala: 'මෝටර් සයිකල් කුලී',
    icon: Bike,
    color: '#ff6b35',
    description: 'Scooters සහ motorcycles',
    features: ['Scooters', 'Motorcycles', 'Hourly/Daily', 'Flexible'],
    price: 'Rs. 1000+ per day',
  },
  {
    name: 'Van Services',
    nameSinhala: 'වැන් සේවා',
    icon: Car,
    color: '#9c27b0',
    description: 'කණ්ඩායම් ගමන් සඳහා',
    features: ['Airport transfers', 'Tours', 'Group travel', 'Comfortable'],
    price: 'Rs. 5000+ per day',
  },
  {
    name: 'Boat Services',
    nameSinhala: 'බෝට්ටු සේවා',
    icon: Ship,
    color: '#00bcd4',
    description: 'වෙරළට සහ දූපත් වලට',
    features: ['Ferry services', 'Tourist boats', 'Whale watching', 'Island hopping'],
    price: 'Rs. 500+ per trip',
  },
];

const apps = [
  {
    name: 'PickMe',
    description: 'ශ්‍රී ලංකාවේ #1 ride-hailing යෙදුම',
    features: ['Tuk, Car, Van, Bike', 'Food delivery', 'Cash/Cashless', 'Live tracking'],
    rating: '4.5★',
    downloads: '5M+',
    color: '#f4c430',
  },
  {
    name: 'Uber',
    description: 'ජාත්‍යන්තර ride-hailing සේවාව',
    features: ['Car, Tuk', 'Card payment', 'Global app', 'Reliable'],
    rating: '4.3★',
    downloads: '1B+',
    color: '#000000',
  },
  {
    name: 'Kangaroo Cabs',
    description: 'පාරම්පරික ශ්‍රී ලාංකික ටැක්සි සේවාව',
    features: ['Meter taxis', 'Phone booking', 'Reliable', 'Professional'],
    rating: '4.4★',
    downloads: '100K+',
    color: '#ff6b35',
  },
];

export default function OtherTransport() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-to-b from-gray-900 to-black relative overflow-hidden" ref={ref}>
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm mb-4">
            <Car size={16} />
            වෙනත් ප්‍රවාහන
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            වෙනත් <span className="gradient-text">ප්‍රවාහන සේවා</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            ත්‍රිරෝද රථ, ටැක්සි, කුලී රථ සහ වෙනත් ප්‍රවාහන විකල්ප
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
            src="/tuktuk.jpg"
            alt="Sri Lankan Tuk-Tuk"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              වර්ණවත් ත්‍රිරෝද රථ
            </h3>
            <p className="text-gray-300">කොළඹ නගරයේ ජනප්‍රිය ප්‍රවාහන ක්‍රමය</p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
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
                style={{ backgroundColor: `${service.color}20` }}
              >
                <service.icon size={28} style={{ color: service.color }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{service.name}</h3>
              <p className="text-gold text-sm mb-3">{service.nameSinhala}</p>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <ul className="space-y-1 mb-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                    <Check size={12} style={{ color: service.color }} />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-white/10">
                <span className="text-sm text-gold font-medium">{service.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Apps Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Ride-Hailing <span className="text-gold">Apps</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {apps.map((app, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 opacity-10"
                  style={{ backgroundColor: app.color }}
                />
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${app.color}20` }}
                  >
                    <Smartphone size={28} style={{ color: app.color }} />
                  </div>
                  <div className="flex items-center gap-1 text-gold">
                    <Star size={14} fill="currentColor" />
                    <span className="text-sm font-medium">{app.rating}</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{app.name}</h4>
                <p className="text-gray-400 text-sm mb-4">{app.description}</p>
                <ul className="space-y-2 mb-4">
                  {app.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                      <Check size={14} className="text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Download size={14} />
                  <span>{app.downloads} downloads</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Tips */}
        <motion.div
          className="mt-16 glass-card p-6 md:p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h4 className="text-xl font-bold text-white mb-4">වැදගත් උපදෙස්</h4>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400">
            <div>
              <h5 className="text-gold font-medium mb-2">ත්‍රිරෝද රථ භාවිතයේදී:</h5>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                  <span>ගමන් ආරම්භයේදීම මීටර් පනිවුඩය ක්‍රියාත්මකදැයි පරීක්ෂා කරන්න</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                  <span>මීටර් නැත්නම් මිල පළමුව එකඟවන්න</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                  <span>PickMe හෝ Uber භාවිතය වඩාත් සුදුසුයි</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-gold font-medium mb-2">ටැක්සි භාවිතයේදී:</h5>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                  <span>Kangaroo Cabs වලට 011-2588588 දුරකථනයෙන් කතා කරන්න</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                  <span>ගුවන් තොටුපළට යන විට පෙරදිනම බුක් කරන්න</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                  <span>නාගරික ප්‍රදේශවල PickMe වඩාත් ජනප්‍රියයි</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
