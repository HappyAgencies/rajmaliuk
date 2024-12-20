'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './cards.module.css';
import { Mont } from '../../app/fonts/fonts';

const Cards = (props) => {
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
        <h2 className={`${Mont.className} ${styles.brands}`}>{props.sectiontitle}</h2>
        <div className={styles.bar2}></div>
      </div>
      <div className={styles.cardsContainer}>
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
            <div className={styles.mtc} alt="logo"  >
            <svg width="110" height="50" viewBox="0 0 356 240" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M127.8 50L123.6 80H83.6L68.2 190H38.2L53.6 80H13.6L17.8 50H127.8ZM189.477 87.2C199.143 87.2 207.61 89.5667 214.877 94.3C222.21 99.0333 227.677 105.4 231.277 113.4C234.943 121.4 236.077 130.267 234.677 140C233.677 147.267 231.343 154.067 227.677 160.4C224.077 166.733 219.51 172.333 213.977 177.2C208.51 182 202.41 185.767 195.677 188.5C188.943 191.233 181.943 192.6 174.677 192.6C165.01 192.6 157.043 190.233 150.777 185.5C144.51 180.7 140.11 174.4 137.577 166.6L134.277 190H128.277L149.277 40H155.277L145.077 113.2C149.743 105.4 155.877 99.1333 163.477 94.4C171.143 89.6 179.81 87.2 189.477 87.2ZM175.477 186.6C184.077 186.6 192.21 184.5 199.877 180.3C207.543 176.1 213.943 170.467 219.077 163.4C224.277 156.333 227.477 148.533 228.677 140C229.943 131.2 228.91 123.267 225.577 116.2C222.31 109.133 217.41 103.533 210.877 99.4C204.41 95.2667 197.01 93.2 188.677 93.2C180.077 93.2 172.477 95.3333 165.877 99.6C159.277 103.8 153.877 109.467 149.677 116.6C145.543 123.667 142.877 131.467 141.677 140C140.477 148.667 140.977 156.533 143.177 163.6C145.377 170.6 149.177 176.2 154.577 180.4C160.043 184.533 167.01 186.6 175.477 186.6ZM345.202 90H351.202L337.202 190H331.202L334.502 166.6C329.835 174.4 323.668 180.7 316.002 185.5C308.402 190.233 299.735 192.6 290.002 192.6C282.735 192.6 276.102 191.233 270.102 188.5C264.168 185.767 259.135 182 255.002 177.2C250.868 172.333 247.868 166.733 246.002 160.4C244.202 154.067 243.802 147.267 244.802 140C245.802 132.667 248.102 125.833 251.702 119.5C255.368 113.1 259.935 107.5 265.402 102.7C270.935 97.8333 277.068 94.0333 283.802 91.3C290.535 88.5667 297.535 87.2 304.802 87.2C314.535 87.2 322.535 89.6 328.802 94.4C335.068 99.1333 339.468 105.4 342.002 113.2L345.202 90ZM290.802 186.6C299.402 186.6 307.002 184.5 313.602 180.3C320.202 176.1 325.568 170.467 329.702 163.4C333.902 156.333 336.602 148.533 337.802 140C339.068 131.267 338.568 123.367 336.302 116.3C334.102 109.233 330.268 103.633 324.802 99.5C319.402 95.3 312.468 93.2 304.002 93.2C295.402 93.2 287.268 95.3 279.602 99.5C272.002 103.7 265.602 109.367 260.402 116.5C255.202 123.567 252.002 131.4 250.802 140C249.602 148.733 250.635 156.633 253.902 163.7C257.168 170.7 262.035 176.267 268.502 180.4C275.035 184.533 282.468 186.6 290.802 186.6Z" fill="white"/>
</svg>

            
            </div>
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
            <div className={styles.supertek} alt="supertek logo"  >
            <svg width="136" height="29" viewBox="0 0 136 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 20.5176L1.56369 16.7225C3.50483 18.2049 5.76948 18.9758 8.08806 18.9758C10.7841 18.9758 11.9164 17.9677 11.9164 16.6632C11.9164 12.5716 0.377443 15.3586 0.377443 7.29396C0.377443 3.55814 3.12738 0.474609 8.73511 0.474609C11.2154 0.474609 13.7497 1.1269 15.6369 2.43147L14.235 6.28589C12.5635 5.21851 10.6762 4.62552 8.73511 4.56622C6.03908 4.56622 4.96068 5.6929 4.96068 7.05677C4.96068 11.0891 16.4996 8.30204 16.4996 16.3074C16.4996 19.9246 13.7497 23.0674 8.08806 23.0674C4.90676 23.0081 1.72545 22.0001 0 20.5176ZM33.9159 5.93009V22.6523H29.7641V20.6362C28.5778 22.1186 26.8524 22.9488 25.0191 22.8895C21.1907 22.8895 18.4947 20.5176 18.4947 15.3586V5.93009H22.9162V14.7063C22.9162 17.4933 24.0485 18.7386 25.9896 18.7386C28.0386 18.7386 29.4945 17.3155 29.4945 14.2319V5.93009H33.9159ZM70.9593 16.0702H59.4203C59.8517 18.1456 61.4693 19.4502 63.7878 19.4502C65.1898 19.5095 66.5917 18.9165 67.6162 17.7898L69.9887 20.5769C68.5868 22.3558 66.4299 23.3046 63.68 23.3046C58.3958 23.3046 54.9988 19.6874 54.9988 14.7063C54.9988 9.72521 58.5036 6.10799 63.1408 6.10799C67.6162 6.10799 71.0671 9.42872 71.0671 14.7656C71.0132 15.1214 70.9593 15.6551 70.9593 16.0702ZM59.3664 13.2238H66.8613C66.5378 10.9705 64.6506 9.36942 62.5477 9.72521C60.9301 9.96241 59.636 11.3856 59.3664 13.2238Z" fill="white"/>
<path d="M45.5101 5.99021C43.8386 5.99021 42.221 6.58319 40.9269 7.65057V5.93091H36.6133V28.7016H40.9269V21.4079C44.3778 24.1949 49.2307 23.3647 51.8188 19.5696C54.3531 15.7745 53.5982 10.4376 50.1473 7.59127C48.7454 6.5239 47.1278 5.99021 45.5101 5.99021ZM45.5101 18.3243C43.569 18.3243 42.0592 16.6047 42.0592 14.5292C42.0592 12.3945 43.6229 10.7341 45.5101 10.7341C47.4513 10.7341 48.9611 12.4538 48.9611 14.5292C48.9611 16.6047 47.3974 18.3243 45.5101 18.3243Z" fill="white"/>
<path d="M77.5168 6.04834H73.2031V23.0078H77.5168V6.04834Z" fill="white"/>
<path d="M78.1314 23.0076H73.2246L73.6021 15.1801C73.6021 9.90254 77.8618 5.57373 82.7146 5.57373V10.1397C80.1803 10.1397 78.1314 12.3931 78.1314 15.1801V23.0076Z" fill="white"/>
<path d="M90.8568 5.39618H84.4941V1.30457H101.749V5.39618H95.3861V23.0672H90.8028V5.39618H90.8568ZM116.469 15.9514H104.93C105.361 18.0268 106.979 19.3314 109.298 19.3314C110.699 19.3907 112.101 18.7977 113.126 17.7303L115.444 20.5174C114.043 22.2963 111.886 23.2451 109.19 23.2451C103.905 23.2451 100.509 19.6279 100.509 14.6468C100.509 9.66569 104.013 5.92987 108.65 5.92987C113.126 5.92987 116.577 9.2506 116.577 14.5875C116.577 15.0026 116.523 15.5363 116.469 15.9514ZM104.93 13.105H112.425C112.209 11.0296 110.538 9.5471 108.704 9.60639C106.655 9.60639 105.2 10.9703 104.93 13.105ZM125.312 16.5443L123.209 18.857V23.1265H118.788V0H123.209V13.0457L129.626 6.34496H134.91L128.547 13.4015L135.449 23.0672H130.111L125.312 16.5443Z" fill="white"/>
</svg>

            </div>
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
