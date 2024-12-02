'use client'
import React from 'react';
import Image from 'next/image';
import { Mont } from '../../app/fonts/fonts';
import { allura } from '../../app/fonts/fonts';
import styles from './hero.module.css';

export const Hero = () => {
  return (
    <div className={styles.heroTwoColumns}>
        <div className ={styles.left_colum_father}>
          <div className ={styles.heroText}>
        <h1 className={`${styles.heroQuote} ${Mont.className}`}>“Empowering Your Business Through Expert Consultancy”</h1>
        
        </div>
        <div className ={styles.heroParagraph}>
            <p className={`${styles.ariel} ${allura.className}`}>Ariel Rajmaliuk</p>
            <p className={`${styles.heroSubtitle} ${Mont.className}`}>CEO @happyagancies & Fractional <span className={styles.cto}>CTO/CMO</span></p>
        </div>
        <div className={styles.partners}>
            <Image src="/assets/imgs/upwork.png" width={122} height={43} alt=""/>
            <Image src="/assets/imgs/clutch.png" width={100} height={25} alt=""/>
            <Image src="/assets/imgs/hubSpot.png" width={110} height={38} alt="" />
            <Image src="/assets/imgs/googlePartner.png" width={83} height={34} alt="" />
            <Image src="/assets/imgs/make.png" width={159} height={19} alt="" />
        </div>
        <div className = {styles.scrollContainer}>
          <p>
            Scroll
          </p>
          <div className = {styles.line}></div>
        </div>
        </div>
        <div className ={styles.imageFather}>
            <Image src="/assets/imgs/man.png" width={709} height={877} alt=""/>
        </div>


    </div>
  )
}
