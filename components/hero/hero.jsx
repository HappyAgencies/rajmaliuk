'use client';

import React from 'react';
import Image from 'next/image';
import { Mont, allura } from '../../app/fonts/fonts';
import styles from './hero.module.css';
import stylesCarousel from './carousel.module.css';
import CarouselHero from './heroCarousel';
import Header from '../header';


export const Hero = (props) => {
  return (
    <div className={styles.mobileBg}>        
          <Header/>
      <div className={styles.heroTwoColumns}>
        <div className={styles.left_colum_father}>
          <div className={styles.heroText}>
            <h1 className={`${styles.heroQuote} ${Mont.className}`}>
             {props.title}
            </h1>
            <a className={`${Mont.className} ${styles.appointment}`} href="#">
            {props.mobileButton}
            </a>
          </div>
          <div className={styles.heroParagraph}>
            <p className={`${styles.ariel} ${allura.className}`}>{props.heroParagraph}</p>
            <p className={`${styles.heroSubtitle} ${Mont.className}`}>
              {props.heroUnderTitleText2}
              <span className={styles.cto}> {props.heroUnderTitleText2Span}</span>
            </p>
          </div>
          <div className={styles.partners}>
          <Image 
                src={props.logo.startsWith('//') ? `https:${logo}` : props.logo}
                width={122} 
                height={43} 
                alt="Logo" 
              />            
          <Image 
               src={props.logo2.startsWith('//') ? `https:${logo2}` : props.logo2}
               width={100}
               height={25} 
               alt="Logo2" 
               />

            <Image 
              src={props.logo3.startsWith('//') ? `https:${logo3}` : props.logo3} 
              width={110} 
              height={38}
              alt="Logo3" 
              />
            <Image 
              src={props.logo4.startsWith('//') ? `https:${logo4}` : props.logo4}
              width={83} 
              height={34} 
              alt="Logo4 " 
              />
            <Image 
              src={props.logo5.startsWith('//') ? `https:${logo5}` : props.logo5}
              width={159} 
              height={19} 
              alt="Logo5" 
              />
          </div>
          <div className={styles.scrollContainer}>
            <p>{props.scroll}</p>
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
        <span className={styles.scrollDivspan}>{props.scroll}</span>
        <Image width={20} height={20} src="/assets/imgs/down-arrow1.png" alt="Down Arrow" />
      </div>
      </div>
  );
};



