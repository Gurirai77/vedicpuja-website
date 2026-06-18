'use client';

import React, { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menuName: string) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  return (
    <header className={styles.header}>
      {/* 1. Top Utility Bar (Desktop Only) */}
      <div className={styles.topBar}>
        <div className={styles.topContainer}>
          <div className={styles.phone}>📞 <span> +91-6306518608</span></div>
          <div className={styles.tagline}>Serving Devotion Worldwide – All Types of Puja Services</div>
          <div className={styles.language}>🌐 <span>English</span> ▾</div>
        </div>
      </div>

      {/* 2. Main Header Container */}
      <div className={styles.mainHeader}>
        <div className={styles.mainContainer}>
          
          {/* Left Block: Hamburger + Logo */}
          <div className={styles.leftMeta}>
            <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? '✕' : '☰'}
            </button>
            <div className={styles.logoWrapper}>
              <span className={styles.brandName}>VedicPuja</span>
              <span className={styles.brandTagline}>Divine Seva, Just a Click Away</span>
            </div>
          </div>

          {/* Center Block: Search Bar (Desktop Only) */}
          <div className={styles.searchContainer}>
            <input 
              type="text" 
              placeholder="Search for Puja, Ritual..." 
              className={styles.searchInput} 
            />
            <button className={styles.searchButton}>🔍</button>
          </div>

          {/* Right Block: Actions Items */}
          <div className={styles.actionLinks}>
            <div className={`${styles.actionItem} ${styles.desktopOnly}`}>
              <span className={styles.actionIcon}>👤</span>
              <span className={styles.actionText}>My Account</span>
            </div>
            <div className={`${styles.actionItem} ${styles.desktopOnly}`}>
              <span className={styles.actionIcon}>🎧</span>
              <span className={styles.actionText}>Help</span>
            </div>
            <div className={styles.cartItem}>
              <div className={styles.cartIconWrapper}>
                <span className={styles.actionIcon}>🛍️</span>
                <span className={styles.cartBadge}>0</span>
              </div>
              <span className={styles.actionText}>Checkout</span>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay Backdrop */}
      {isMenuOpen && <div className={styles.drawerOverlay} onClick={() => setIsMenuOpen(false)} />}

      {/* 3. Navigation links System */}
      <nav className={`${styles.navBar} ${isMenuOpen ? styles.navBarOpen : ''}`}>
        <div className={styles.navContainer}>
          <div className={styles.drawerHeader}>
            <span className={styles.drawerTitle}>Menu</span>
            <button className={styles.closeDrawerBtn} onClick={() => setIsMenuOpen(false)}>✕</button>
          </div>
          <ul className={styles.navList}>
            <li><a href="#home" className={styles.activeLink}>Home</a></li>
            <li className={`${styles.hasDropdown} ${activeDropdown === 'puja' ? styles.dropdownActive : ''}`}>
              <a href="#services" onClick={(e) => { e.preventDefault(); toggleDropdown('puja'); }}>
                Puja Services <span>▾</span>
              </a>
              <ul className={styles.subMenu}>
                <li><a href="#popular">Popular Pujas</a></li>
                <li><a href="#dosh">Dosh Nivaaran</a></li>
              </ul>
            </li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
          <div className={styles.cartAmountBtn}>
            🛒 <span className={styles.amount}>₹0.00</span> ▾
          </div>
        </div>
      </nav>
    </header>
  );
}