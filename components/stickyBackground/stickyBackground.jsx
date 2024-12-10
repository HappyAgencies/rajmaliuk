'use client'
import React from 'react';
import { allura } from '../../app/fonts/fonts';
import { Mont } from '../../app/fonts/fonts';
import styles from './stickyBackground.module.css';

const StickyBackground = () => {
  return (
    <div className={styles.stickyWrapper}>
      <div className={styles.background}></div>
      <div className={styles.sticky}>
        <p className={`${Mont.className} ${styles.success}`}>
          Your success is my<br></br> mission, <br className={styles.brMobile}></br> 
          <span className={`${allura.className} ${styles.worldwide}`}>worldwide</span>
        </p>
      </div>
    </div>
  )
}

export default StickyBackground;

