import React from 'react';
import styles from './DoshNivaaranPujas.module.css';

const doshPujasData = [
  {
    id: 1,
    title: 'Grahan Yog Shanti Puja',
    category: 'Puja Services, Dosh Puja, Hindi Puja, Online Puja',
    image: '/images.jpg', // अपनी इमेज का पाथ यहाँ डालें
    priceRange: '₹9,100.00 – ₹51,000.00',
    discount: '-28%'
  },
  {
    id: 2,
    title: 'Kali Puja & Yagna Online Booking',
    category: 'Puja Services, Dosh Puja, Hindi Puja, Online Puja',
    image: '/images.jpg', // अपनी इमेज का पाथ यहाँ डालें
    priceRange: '₹3,100.00 – ₹51,000.00',
    discount: '-56%'
  },
  {
    id: 3,
    title: 'Vastu Shanti Puja & Havan Booking',
    category: 'Puja Services, Dosh Puja, Hindi Puja, Online Puja',
    image: '/images.jpg', // अपनी इमेज का पाथ यहाँ डालें
    priceRange: '₹5,100.00 – ₹21,000.00',
    discount: '-35%'
  },
  {
    id: 4,
    title: 'Pregnancy Problems Puja',
    category: 'Puja Services, Dosh Puja, Hindi Puja, Online Puja',
    image: '/images.jpg', // अपनी इमेज का पाथ यहाँ डालें
    priceRange: '₹9,100.00',
    originalPrice: '₹15,000.00',
    discount: '-39%'
  }
];

export default function DoshNivaaranPujas() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header Row Content */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerLeft}>
            <h2 className={styles.mainTitle}>Dosh Nivaaran Puja</h2>
            <p className={styles.subTitle}>
              Remove negative energies, Grah Dosh & life obstacles with powerful Vedic rituals 🔱 
              Invite happiness, success and positivity into your life with expert pandit guidance 🌸
            </p>
          </div>
          <button className={styles.viewAllBtn}>
            View All Puja <span>→</span>
          </button>
        </div>

        {/* 4-Column Responsive Grid Layout */}
        <div className={styles.grid}>
          {doshPujasData.map((puja) => (
            <div key={puja.id} className={styles.card}>
              
              {/* Product Card Square Image wrapper */}
              <div className={styles.imageWrapper}>
                <img src={puja.image} alt={puja.title} className={styles.pujaImage} />
                <span className={styles.discountBadge}>{puja.discount}</span>
                <button className={styles.wishlistBtn} aria-label="Add to wishlist">❤️</button>
              </div>

              {/* Text Context Meta Data */}
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

                {/* Primary Core Option CTA Button */}
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