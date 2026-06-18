import React from 'react';
import styles from './PopularServices.module.css';

const servicesData = [
  {
    id: 1,
    title: 'Maha Mrityunjay Jaap',
    desc: 'Remove negativity & bring peace and good health.',
    icon: '🔱',
    bgColor: '#F3E8FF',
    iconColor: '#6B21A8',
    btnColor: '#6B21A8'
  },
  {
    id: 2,
    title: 'Rudrabhishek Puja',
    desc: 'Invoke blessings of Lord Shiva for prosperity & protection.',
    icon: '🕉️',
    bgColor: '#FFEDD5',
    iconColor: '#C2410C',
    btnColor: '#C2410C'
  },
  {
    id: 3,
    title: 'Grah Shanti Puja',
    desc: 'Reduce planetary doshas & bring balance in life.',
    icon: '🪷',
    bgColor: '#FCE7F3',
    iconColor: '#BE185D',
    btnColor: '#BE185D'
  },
  {
    id: 4,
    title: 'Satyanarayan Puja',
    desc: 'For happiness, success & overall well-being.',
    icon: '🦚',
    bgColor: '#DCFCE7',
    iconColor: '#15803D',
    btnColor: '#15803D'
  },
  {
    id: 5,
    title: 'Havan & Homam',
    desc: 'Purify environment & invite positivity and peace.',
    icon: '🔥',
    bgColor: '#E0F2FE',
    iconColor: '#0369A1',
    btnColor: '#0369A1'
  }
];

export default function PopularServices() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        
        {/* Section Heading Divider Grid Line */}
        <div className={styles.sectionHeader}>
          <span className={styles.headerLine}></span>
          <div className={styles.headerTitleWrapper}>
            <span className={styles.lotusTop}>🪷</span>
            <h2 className={styles.title}>Our Popular Puja Services</h2>
          </div>
          <span className={styles.headerLine}></span>
        </div>

        {/* 5 Column Grid Layout */}
        <div className={styles.grid}>
          {servicesData.map((service) => (
            <div key={service.id} className={styles.card}>
              <div 
                className={styles.iconWrapper} 
                style={{ backgroundColor: service.bgColor, color: service.iconColor }}
              >
                {service.icon}
              </div>
              
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.desc}</p>
              
              <button 
                className={styles.bookBtn} 
                style={{ color: service.btnColor }}
              >
                Book Now <span className={styles.btnArrow}>→</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}