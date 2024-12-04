'use client'
import styles from './header.module.css';
import { allura } from '../app/fonts/fonts.js';
import { Mont } from '../app/fonts/fonts.js';

export default function Header() {
  return (
    <div id='header' className={styles['header-div']}>
      <a href="" className={`${styles.name} ${allura.className}`}>Ariel Rajmaliuk</a>
      <a className={`${styles.consultation} ${Mont.className}`} href="">Schedule a consultation</a>
    </div>
  );
}
