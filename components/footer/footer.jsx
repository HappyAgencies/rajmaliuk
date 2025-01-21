'use client'
import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';
import { Mont } from '../../app/fonts/fonts';

const Footer = (props) => {
  return (
    <div className={styles.footer}>
        <p className={`${Mont.className} ${styles.name}`}>{props.leftText}</p>
        <a className={`${Mont.className} ${styles.button}`} href="#header">{props.rightText}</a>
        <div className={styles.socials}>
            <a href=""><Image src="/assets/imgs/linkedin2.png" width={20} height={20} alt=""/></a>
            <a href=""><Image src="/assets/imgs/twitter2.png" width={16} height={10} alt=""/></a>
        </div>
     
    </div>
  )
}

export default Footer