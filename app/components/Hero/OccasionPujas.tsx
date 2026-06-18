import React from 'react';
import styles from './OccasionPujas.module.css';

const occasionPujasData = [
  {
    id: 1,
    title: 'Vana Durga Mantra Jaap Online Booking',
    category: 'Puja Services, Hindi Puja, Occasional Puja, Online Puja',
    image: '/vana-durga.jpg', // अपनी इमेज का पाथ यहाँ डालें
    priceRange: '₹7,100.00 – ₹51,000.00',
    discount: '-35%'
  },
  {
    id: 2,
    title: 'Sat Chandi Paath and Yajna Online',
    category: 'Puja Services, Hindi Puja, Occasional Puja, Path',
    image: '/sat-chandi.jpg', // अपनी इमेज का पाथ यहाँ डालें
    priceRange: '₹75,000.00 – ₹1,51,000.00',
    discount: '-26%'
  },
  {
    id: 3,
    title: 'Gand Mool Nakshatra Puja',
    category: 'Puja Services, Dosh Puja, Hindi Puja, Occasional Puja',
    image: '/gand-mool.jpg', // अपनी इमेज का पाथ यहाँ डालें
    priceRange: '₹7,499.00 – ₹21,000.00',
    discount: '-16%'
  },
  {
    id: 4,
    title: 'Akhand Ramayan Paath Sri Ram Charit Manas',
    category: 'Hindi Puja, Occasional Puja, Path, Puja Services',
    image: '/akhand-ramayan.jpg', // अपनी इमेज का पाथ यहाँ डालें
    priceRange: '₹21,000.00 – ₹32,499.00',
    discount: '-11%'
  }
];

export default function OccasionPujas() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header Block Row */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerLeft}>
            <h2 className={styles.mainTitle}>Special Occasion Puja</h2>
            <p className={styles.subTitle}>
              🎉 Make every special moment divine with customized pujas for your important occasions. 
              🙏 Invite happiness, success, and blessings into your life with rituals tailored just for you.
            </p>
          </div>
          <button className={styles.viewAllBtn}>
            View All Puja <span>→</span>
          </button>
        </div>

        {/* 4-Column Responsive Grid Layout */}
        <div className={styles.grid}>
          {occasionPujasData.map((puja) => (
            <div key={puja.id} className={styles.card}>
              
              {/* Image Container Aspect Box */}
              <div className={styles.imageWrapper}>
                <img src={puja.image} alt={puja.title} className={styles.pujaImage} />
                <span className={styles.discountBadge}>{puja.discount}</span>
                <button className={styles.wishlistBtn} aria-label="Add to wishlist">❤️</button>
              </div>

              {/* Card Details Content */}
              <div className={styles.cardContent}>
                <span className={styles.metaCategory}>{puja.category}</span>
                <h3 className={styles.pujaTitle}>{puja.title}</h3>
                
                {/* Pricing Wrapper */}
                <div className={styles.priceRow}>
                  <span className={styles.currentPrice}>{puja.priceRange}</span>
                </div>

                {/* Main Action Call to Button */}
                <button className={styles.selectBtn}>
                  Select Options
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}