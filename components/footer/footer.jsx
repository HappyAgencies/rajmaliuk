'use client'
import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';
import { Mont } from '../../app/fonts/fonts';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <p className={`${Mont.className} ${styles.name}`}>© 2024 Ariel Rajmaliuk</p>
        <div className={styles.socials}>
            <a href=""><Image src="/assets/imgs/linkedin.png" width={20} height={20} alt=""/></a>
            <a href=""><Image src="/assets/imgs/twitter.png" width={13} height={13} alt=""/></a>
        </div>
        <a className={`${Mont.className} ${styles.button}`} href="#header">Back to top</a>
    </div>
  )
}

export default Footer