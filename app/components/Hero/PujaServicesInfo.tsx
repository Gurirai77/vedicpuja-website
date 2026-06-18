import React from 'react';
import styles from './PujaServicesInfo.module.css';

export default function PujaServicesInfo() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Column: Fixed/Sticky Title Section */}
        <div className={styles.leftColumn}>
          <span className={styles.topTag}>Vedic Wisdom</span>
          <h2 className={styles.mainHeading}>Online Puja Booking Services</h2>
          <p className={styles.mainDesc}>
            <strong className={styles.brandText}>onlinevedicpuja.com/</strong> is a trusted platform where devotees can book authentic Vedic puja services online from anywhere in the world. Our mission is to make sacred rituals accessible, simple, and spiritually meaningful.
          </p>
          <p className={styles.subDesc}>
            All puja, yajna, and homa rituals are performed by experienced <strong>Vedic priests</strong> following traditional procedures and spiritual discipline. We ensure devotion, authenticity, and proper Sankalp for every ritual. ✨
          </p>
        </div>

        {/* Right Column: Luxury Info Cards Grid */}
        <div className={styles.rightColumn}>
          
          {/* Card 1 */}
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}>🌍</span>
              <h3>GLOBAL ONLINE PUJA EXPERIENCE</h3>
            </div>
            <p>
              No matter where you live, you can participate in divine rituals from India through <strong>live streaming</strong>. This allows devotees to stay connected with tradition and spirituality without travel.
            </p>
            <p className={styles.lightText}>Our secure online booking system makes scheduling puja services easy and reliable for families worldwide. 🌟</p>
          </div>

          {/* Card 2 */}
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}>🪔</span>
              <h3>OUR PUJA SERVICES</h3>
            </div>
            <p>
              We offer a wide range of spiritual services for peace, prosperity, and protection, including <span className={styles.linkText}>Rudrabhishek Puja</span>, <span className={styles.linkText}>Mahamrityunjay Mantra Jaap</span>, <span className={styles.linkText}>Navgrah Shanti Puja</span>, <span className={styles.linkText}>Durga Saptashati Path</span>, <span className={styles.linkText}>Kali Puja</span>, and Graha Shanti rituals.
            </p>
            <p className={styles.lightText}>Special puja services for health, career, family harmony, and planetary dosha remedies are performed with proper Vedic Vidhi and devotion. 🙏</p>
          </div>

          {/* Card 3 */}
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}>⭐</span>
              <h3>WHY CHOOSE VedicPuja</h3>
            </div>
            <p>
              We focus on authenticity, transparency, and spiritual trust in every service we provide. Devotees receive guided support from booking to puja completion.
            </p>
            <p className={styles.lightText}>Our platform connects tradition with technology so devotees can experience sacred rituals with comfort and confidence. 🔔</p>
          </div>

          {/* Card 4 */}
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}>🔔</span>
              <h3>BOOK YOUR PUJA TODAY</h3>
            </div>
            <p>
              Invite divine blessings into your life through authentic <strong>Vedic rituals</strong> performed in India. Experience spiritual peace and positive energy from the comfort of your home.
            </p>
            <div className={styles.footerHighlight}>
              <strong>onlinevedicpuja.com</strong> makes <span className={styles.purpleText}>online puja</span> booking simple, secure, and spiritually fulfilling. 🕉️
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}