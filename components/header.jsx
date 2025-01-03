import React from 'react';
import styles from './header.module.css';
import { Mont, allura } from '../app/fonts/fonts.js';

export default function Header() {
  const handleScrollToDemo = (event) => {
    event.preventDefault();  // Prevent default anchor behavior
    const demoElement = document.getElementById('book-a-demo');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id='header' className={styles['header-div']}>
      <a href="" className={`${styles.name} ${allura.className}`}>Ariel Rajmaliuk</a>
      <p className={`${Mont.className} ${styles.position}`} >CEO @happyagencies & Fractional <span className={styles.positionSpan}>CTO/CMO</span></p>
      <a className={`${styles.consultation} ${Mont.className}`} href="#book-a-demo" onClick={handleScrollToDemo}>Schedule a consultation</a>
    </div>
  );
}
