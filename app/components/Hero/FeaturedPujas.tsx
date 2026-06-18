import React from 'react';
import styles from './FeaturedPujas.module.css';

const featuredPujasData = [
  {
    id: 1,
    title: 'Annapurna Puja & Yagna Online Booking',
    category: 'Puja Services, Hindi Puja, Homam And Yajna',
    image: '/about.jpg', // अपनी इमेज पाथ डालें
    priceRange: '₹5,100.00 – ₹51,000.00',
    discount: '-29%',
    isHot: false
  },
  {
    id: 2,
    title: 'Gau Mata Puja Online Booking',
    category: 'Puja Services, Hindi Puja, Online Puja',
    image: '/about.jpg', // अपनी इमेज पाथ डालें
    priceRange: '₹5,100.00',
    originalPrice: '₹11,000.00',
    discount: '-54%',
    isHot: true
  },
  {
    id: 3,
    title: 'Birthday Puja Online Booking',
    category: 'Puja Services, Hindi Puja, Online Puja',
    image: '/about.jpg', // अपनी इमेज पाथ डालें
    priceRange: '₹3,499.00 – ₹15,499.00',
    discount: '-31%',
    isHot: false
  },
  {
    id: 4,
    title: 'Nandi Puja Online Booking',
    category: 'Puja Services, Hindi Puja, Online Puja',
    image: '/about.jpg', // अपनी इमेज पाथ डालें
    priceRange: '₹3,499.00 – ₹51,000.00',
    discount: '-31%',
    isHot: false
  }
];

export default function FeaturedPujas() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Upper Header Row */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerLeft}>
            <h2 className={styles.mainTitle}>Most Popular Puja</h2>
            <p className={styles.subTitle}>
              🙏 Experience divine blessings with powerful Vedic rituals performed by expert pandits. 
              Book your puja online easily and bring peace, prosperity, and positivity into your life.
            </p>
          </div>
          <button className={styles.viewAllBtn}>
            View All Puja <span>→</span>
          </button>
        </div>

        {/* 4-Column Grid Layout */}
        <div className={styles.grid}>
          {featuredPujasData.map((puja) => (
            <div key={puja.id} className={`${styles.card} ${puja.isHot ? styles.hotCard : ''}`}>
              
              {/* Image Box Container */}
              <div className={styles.imageWrapper}>
                <img src={puja.image} alt={puja.title} className={styles.pujaImage} />
                <span className={styles.discountBadge}>{puja.discount}</span>
                <button className={styles.wishlistBtn} aria-label="Add to wishlist">❤️</button>
              </div>

              {/* Content Box */}
              <div className={styles.cardContent}>
                <span className={styles.metaCategory}>{puja.category}</span>
                <h3 className={styles.pujaTitle}>{puja.title}</h3>
                
                {/* Pricing Block */}
                <div className={styles.priceRow}>
                  {puja.originalPrice && (
                    <span className={styles.oldPrice}>{puja.originalPrice}</span>
                  )}
                  <span className={styles.currentPrice}>{puja.priceRange}</span>
                </div>

                {/* Interactive Action Button */}
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