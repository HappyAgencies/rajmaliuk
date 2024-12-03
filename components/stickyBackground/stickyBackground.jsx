'use client'
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { allura } from '../../app/fonts/fonts';
import { Mont } from '../../app/fonts/fonts';
import styles from './stickyBackground.module.css';

const StickyBackground = () => {
  const [isClient, setIsClient] = useState(false);

  // Asegurarse de que solo se ejecuta en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return; // Evitar ejecución en el servidor

    const stickyElement = document.querySelector(`.${styles.sticky}`);
    const backgroundElement = document.querySelector(`.${styles.background}`);
    
    // Animación con GSAP
    gsap.to(stickyElement, {
      yPercent: -50,
      scrollTrigger: {
        trigger: stickyElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true
      }
    });

    gsap.to(backgroundElement, {
      yPercent: 30,
      scrollTrigger: {
        trigger: stickyElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true
      }
    });
  }, [isClient]);

  return (
    <div className={styles.stickyWrapper}>
      <div className={styles.background}></div>
      <div className={styles.sticky}>
        <p className={`${Mont.className} ${styles.success}`}>
          Your success is my mission, 
          <span className={`${allura.className} ${styles.worldwide}`}>worldwide</span>
        </p>
      </div>
    </div>
  );
}

export default StickyBackground;

