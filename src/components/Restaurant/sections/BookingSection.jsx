import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { StarIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/solid';

const BookingSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary opacity-5"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-primary opacity-5"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div 
        className="absolute top-40 left-20 w-32 h-32 rounded-full bg-primary opacity-5"
        animate={{ 
          scale: [1, 1.5, 1],
          x: [0, 30, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4">
              {t('restaurant.booking.label', 'Бронирование')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              {t('restaurant.booking.title', 'Забронируйте стол в нашем ресторане')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('restaurant.booking.description', 'Заранее зарезервируйте столик для особого события или просто для гарантированного места в нашем ресторане.')}
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                  <ClockIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-base md:text-base text-lg">{t('restaurant.booking.open_hours', 'Часы работы')}</p>
                  <p className="text-gray-500 text-base md:text-sm">08:00 - 22:00</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                  <PhoneIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-base md:text-base text-lg">{t('restaurant.booking.reservation', 'Резервация')}</p>
                  <p className="text-gray-500 text-base md:text-sm">+66 62 480 5877</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://wa.me/66624805877?text=Здравствуйте!%20Хочу%20забронировать%20столик%20в%20ресторане%20KAIF"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px 35px',
                fontSize: '16px',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '50px',
                transition: 'all 0.3s ease-out',
                position: 'relative',
                overflow: 'hidden',
                minWidth: '220px',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                color: 'white',
                border: '2px solid transparent',
                boxShadow: '0 6px 20px rgba(37, 211, 102, 0.3)',
                willChange: 'transform, box-shadow',
                transform: 'translateZ(0)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px) translateZ(0)';
                e.target.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.5)';
                e.target.style.background = 'linear-gradient(135deg, #128C7E 0%, #25D366 100%)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateZ(0)';
                e.target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.3)';
                e.target.style.background = 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)';
              }}
            >
              <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: '16px', height: '16px', transition: 'transform 0.2s ease' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              {t('restaurant.booking.whatsapp', 'ЗАПИСАТЬСЯ ЧЕРЕЗ WHATSAPP')}
            </a>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Restaurant interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
