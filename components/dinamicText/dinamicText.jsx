'use client'

import React, { useState, useEffect } from 'react';
import styles from './dinamicText.module.css';
import { Mont } from '../../app/fonts/fonts';

const DinamicText = () => {
  const fullText = "I help companies solve complex technical & GTM challenges";
  const words = fullText.split(" "); // Dividir el texto en palabras
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    
    const scrollPercent = (scrollPosition / (docHeight - windowHeight)) * 100;
    setScrollPercentage(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Cálculo de cuántas palabras deben volverse visibles
  const wordsToDisplay = Math.floor((scrollPercentage / 100) * words.length);

  return (
    <div className={styles.dinamic}>
      <div className={styles.dinamicContenedor}>
        <h2 className={`${styles.phrase} ${Mont.className}`}>
          {words.map((word, index) => (
            <span
              key={index}
              style={{
                color: index < wordsToDisplay ? 'white' : '#313131', // Inicialmente en gris oscuro
                transition: 'color 0.3s ease-out'
              }}
            >
              {word}{" "}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
};

export default DinamicText;
