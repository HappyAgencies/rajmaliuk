'use client';

import React from 'react';
import Image from 'next/image';
import { Mont, allura } from '../../app/fonts/fonts';
import styles from './hero.module.css';
import stylesCarousel from './carousel.module.css';
import CarouselHero from './heroCarousel';
import Header from '../header';

export const Hero = () => {
  return (
    <div className={styles.mobileBg}>        
          <Header/>
      <div className={styles.heroTwoColumns}>
        <div className={styles.left_colum_father}>
          <div className={styles.heroText}>
            <h1 className={`${styles.heroQuote} ${Mont.className}`}>
              “Empowering Your Business Through Expert Consultancy”
            </h1>
            <a className={`${Mont.className} ${styles.appointment}`} href="#">
              Schedule an Appointment
            </a>
          </div>
          <div className={styles.heroParagraph}>
            <p className={`${styles.ariel} ${allura.className}`}>Ariel Rajmaliuk</p>
            <p className={`${styles.heroSubtitle} ${Mont.className}`}>
              CEO @happyagencies & Fractional{' '}
              <span className={styles.cto}>CTO/CMO</span>
            </p>
          </div>
          <div className={styles.partners}>
            <Image src="/assets/imgs/upwork.png" width={122} height={43} alt="Upwork" />
            <Image src="/assets/imgs/clutch.png" width={100} height={25} alt="Clutch" />
            <Image src="/assets/imgs/hubSpot.png" width={110} height={38} alt="HubSpot" />
            <Image src="/assets/imgs/googlePartner.png" width={83} height={34} alt="Google Partner" />
            <Image src="/assets/imgs/make.png" width={159} height={19} alt="Make" />
          </div>
          <div className={styles.scrollContainer}>
            <p>Scroll</p>
            <div className={styles.line}></div>
          </div>
        </div>
        <div className={styles.imageFather}>
          <Image src="/assets/imgs/man.png" width={709} height={877} alt="Man Illustration" />
        </div>
      </div>
      <div className={stylesCarousel.heroCarousel}>      
        <CarouselHero></CarouselHero>
      </div>
      <div className={styles.scrollDiv}>
        <span className={styles.scrollDivspan}>Scroll</span>
        <Image width={20} height={20} src="/assets/imgs/down-arrow1.png" alt="Down Arrow" />
      </div>
      </div>
  );
};