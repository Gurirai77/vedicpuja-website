"use client";

import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const carouselData = [
  {
    image: '/hero-puja-thali.jpg', 
    muhuratName: 'Abhijit Muhurat',
    muhuratTime: '11:48 AM – 12:35 PM'
  },
  {
    image: '/hero-puja-2.jpg', 
    muhuratName: 'Amrit Kaal',
    muhuratTime: '04:15 PM – 05:50 PM'
  },
  {
    image: '/hero-puja-3.jpg', 
    muhuratName: 'Vijay Muhurat',
    muhuratTime: '02:30 PM – 03:18 PM'
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        
        {/* Left Content Column */}
        <div className={styles.leftCol}>
          <div className={styles.trustBadge}>
            <span className={styles.starIcon}>⭐</span> Trusted by Devotees Worldwide
          </div>
          
          <h1 className={styles.mainHeading}>
            Experience Divine Blessings <br />
            from <span className={styles.highlightText}>Anywhere in the World</span>
          </h1>
          
          <p className={styles.subHeading}>
            Book authentic pujas and rituals performed by experienced pandits with complete faith and devotion on <strong>Online Vedic Puja</strong>.
          </p>
          
          {/* Features Row */}
          <div className={styles.featuresRow}>
            <div className={styles.featureItem}>
              <div className={styles.iconWrapper} style={{ backgroundColor: '#EFEFFF', color: '#4F46E5' }}>
                🛡️
              </div>
              <div>
                <strong>100% Secure</strong>
                <p>Safe & Trusted Payments</p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.iconWrapper} style={{ backgroundColor: '#FFF7ED', color: '#EA580C' }}>
                🎥
              </div>
              <div>
                <strong>Live Puja</strong>
                <p>Watch Puja Live from Anywhere</p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.iconWrapper} style={{ backgroundColor: '#FDF2F8', color: '#DB2777' }}>
                🏅
              </div>
              <div>
                <strong>Experienced Pandits</strong>
                <p>Verified & Vedic Experts</p>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>
              Book a Puja Now <span className={styles.arrow}>→</span>
            </button>
            <button className={styles.secondaryBtn}>
              View All Services <span className={styles.gridIcon}>⚃</span>
            </button>
          </div>
        </div>

        {/* Right Media Column with Carousel */}
        <div className={styles.rightCol}>
          <div className={styles.imageWrapper}>
            {carouselData.map((slide, index) => (
              <div 
                key={index} 
                className={`${styles.slide} ${index === currentIndex ? styles.activeSlide : ''}`}
              >
                <img 
                  src={slide.image} 
                  alt={`Puja Setup ${index + 1}`} 
                  className={styles.heroImage} 
                />
              </div>
            ))}
            
            {/* Slider Navigation */}
            <div className={styles.carouselControls}>
              <button onClick={handlePrev} className={styles.navBtn}>‹</button>
              <button onClick={handleNext} className={styles.navBtn}>›</button>
            </div>
          </div>
          
          {/* Floating Auspicious Time Card */}
          <div className={styles.muhuratCard}>
            <div className={styles.cardHeader}>
              <span className={styles.lotusIcon}>🪷</span>
              <div>
                <span className={styles.cardTag}>Today's Auspicious</span>
                <strong className={styles.cardTitle}>Time</strong>
              </div>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.muhuratName}>{carouselData[currentIndex].muhuratName}</p>
              <p className={styles.muhuratTime}>{carouselData[currentIndex].muhuratTime}</p>
            </div>
            <a href="#more-muhurats" className={styles.cardLink}>
              View More Muhurats <span>→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}