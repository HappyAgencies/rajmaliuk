'use client'

import React, { useState, useEffect, useRef } from 'react';
import styles from './dinamicText.module.css';
import { Mont } from '../../app/fonts/fonts';

const DinamicText = () => {
  const fullText = "I help companies solve complex technical & GTM challenges";
  const words = fullText.split(" ");
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const textRef = useRef(null); 

  const handleScroll = () => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect(); 
      const sectionTop = rect.top;
      const windowHeight = window.innerHeight;

      if (sectionTop <= windowHeight && sectionTop + rect.height >= 0) {
        const scrollPercent = ((windowHeight - sectionTop) / windowHeight) * 100;
        setScrollPercentage(scrollPercent);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const wordsToDisplay = Math.floor((scrollPercentage / 100) * words.length);

  return (
    <div className={styles.dinamic} ref={textRef}>
      <div className={styles.dinamicContenedor}>
        <h2 className={`${styles.phrase} ${Mont.className}`}>
          {words.map((word, index) => (
            <span
              key={index}
              style={{
                color: index < wordsToDisplay ? 'white' : '#313131', // Cambiar el color en base al porcentaje
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
