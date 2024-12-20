'use client'
import React from 'react';
import { allura } from '../../app/fonts/fonts';
import { Mont } from '../../app/fonts/fonts';
import styles from './stickyBackground.module.css';

const StickyBackground = (props) => {
  return (
    <div className={styles.stickyWrapper}>
      <div className={styles.background}></div>
      <div className={styles.sticky}>
        <p className={`${Mont.className} ${styles.success}`}>
         {props.text}
          <span className={`${allura.className} ${styles.worldwide}`}>{props.specialText}</span>
        </p>
      </div>
    </div>
  )
}

export default StickyBackground;

