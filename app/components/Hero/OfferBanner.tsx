import React from 'react';
import styles from './OfferBanner.module.css';

export default function OfferBanner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerWrapper}>
        <div className={styles.leftContent}>
          <span className={styles.giftIcon}>🎁</span>
          <p className={styles.bannerText}>
            Book Your First Puja & Get <span className={styles.highlight}>5% OFF</span>
          </p>
        </div>
        
        <div className={styles.rightContent}>
          <div className={styles.codeTag}>
            Use Code: <span className={styles.codeText}>WELCOME</span>
          </div>
          <button className={styles.bookNowBtn}>
            Book Now <span className={styles.arrow}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}