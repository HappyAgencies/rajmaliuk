import React from 'react';
import styles from './cardEfect.module.css';
import { Mont } from "../../app/fonts/fonts";

export default function CardEfect() {
  return (
    <>
      <div className={`${Mont.className} ${styles.contenedor}`}>
        <div className={`${Mont.className} ${styles.titlecontainer}`}>
          <h3 className={styles.title}>
            A decade of experience. United to Unlock a new era in brand growth
          </h3>
        </div>

        <div className={`${styles.card}`}>
          <span className={` ${styles.cardNumber}`}>01</span>
          <h4 className={` ${styles.cardTitle}`}>Areas of Expertise</h4>
          <p className={styles.cardParagraph}>
            An expert specialized in business strategy development, process
            optimization, organizational change management, and digital
            transformation.
          </p>
        </div>
        
      </div>
    </>
  );
}