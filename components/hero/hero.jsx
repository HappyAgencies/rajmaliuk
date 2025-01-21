'use client';

import React, { useRef, useEffect } from "react"
import Image from 'next/image';
import { Mont, allura } from '../../app/fonts/fonts';
import styles from './hero.module.css';
import stylesCarousel from './carousel.module.css';
import CarouselHero from './heroCarousel';
import Header from '../header';


export const Hero = (props) => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75 // Adjust playback speed if desired
    }
  }, [])
  
  return (
    <>

    <div className={styles.mobileBg}>    
   <video ref={videoRef} autoPlay loop muted playsInline className={styles.backgroundVideo}>
        <source
          src="https://s3-figma-videos-production-sig.figma.com/video/1107297411132669732/TEAM/07ab/a3ec/-f987-4859-97b1-24c998932b25?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dmX0anNtM-rKwZLDDBUnlcfkOGTMCyltrXO2ZpzZpKkiKxJdHVUR2gzZRP-VcG05bkCId617KWIMfuL2Ii0zIKMScSGqyRZG10hY20vnCQi99E~dNBb7~EQNmIhRvNYRfRwPPxXpeI8oBzronm60AlvDkgpZjOTs3pOoZ0kvRLI87u8YaxYdbXA4qH3rE75Db2EHmq8YCQ8YV4HH~Daef5pRFaQdCvnHVbpE9rS3oxGYfWGXwJsB5bnwDVpNVdg2OLUQZh29hTaLD5KeuzDES067Ah6vc0Z-qwBe7VxATN3nOB5xyyH~8JkatCkusZh6sb7lbkUlZmxgb6~fctYS7A__"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className={styles.gradientOverlay}></div>

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
      </div>
      <div className={stylesCarousel.heroCarousel}>      
        <CarouselHero></CarouselHero>
      </div>
      <div className={styles.scrollDiv}>
        <span className={styles.scrollDivspan}>{props.scroll}</span>
        <Image width={20} height={20} src="/assets/imgs/down-arrow1.png" alt="Down Arrow" />
      </div>
      </div>
      </>
  );
};



