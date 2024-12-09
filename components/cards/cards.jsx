'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './cards.module.css';
import { Mont } from '../../app/fonts/fonts';

const Cards = () => {
  // Estado para rastrear la tarjeta que está en hover
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="cardsSection">
      <div className={styles.cardSectionTitle}>
        <div className={styles.bar1}></div>
        <h2 className={`${Mont.className} ${styles.brands}`}>Brands Led and Founded</h2>
        <div className={styles.bar2}></div>
      </div>
      <div className={styles.cardsContainer}>
        {/* Tarjeta 1 */}
        <div
          className={`${Mont.className} ${styles.card}`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.cardTopRow}>
            <div>
              <p className={styles.cardBrand}>MTC</p>
              <p className={styles.brandSubtitle}>Outsourcing Platform</p>
            </div>
            <Image className={styles.mtc} src="/assets/imgs/Group 133.svg" alt="" width={110} height={50} />
          </div>
             {/* 
          <div className={styles.imageDiv}>

            {hoveredCard === 1 && (
              <Image 
              src="/assets/imgs/man.png" 
              alt="MTC Hover" 
              style={{ maxHeight: '540px', width: 'auto', objectFit: 'cover' }} 
              height={540} 
              width={800} 
            />
            )}
   

          </div>
                   */}
          <div className={styles.cardBottomRow}>
            <p className={styles.cardText}>
              MTC is an outsourcing platform that helps businesses delegate key tasks to experts. With skilled
              professionals, MTC optimizes processes, cuts costs, and boosts productivity, letting companies focus on
              core activities.
            </p>
            <p className={styles.cardYear}>2019 - NOW</p>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div
          className={`${Mont.className} ${styles.card}`}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.cardTopRow}>
            <div>
              <p className={styles.cardBrand}>SuperTek</p>
              <p className={styles.brandSubtitle}>Crypto mining technical services</p>
            </div>
            <Image src="/assets/imgs/supertek (1).svg" className={styles.supertek} alt="" width={130} height={50} />
          </div>
       {/* 
<div className={styles.imageDiv}>
  {hoveredCard === 2 && (
    <Image 
      src="/assets/imgs/man.png" 
      alt="MTC Hover" 
      style={{ maxHeight: '540px', width: 'auto', objectFit: 'cover' }} 
      height={540} 
      width={800} 
    />
  )}
</div> 
*/}

          <div className={styles.cardBottomRow}>
            <p className={styles.cardText}>
              SuperTek provides expert technical services for cryptocurrency mining, ensuring optimal performance,
              maintenance, and troubleshooting to help mining businesses maximize profitability.
            </p>
            <p className={styles.cardYear}>2017 - NOW</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
