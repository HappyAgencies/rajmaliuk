'use client'
import React from 'react'
import styles from './dinamicText.module.css';
import { Mont } from '../../app/fonts/fonts';

const DinamicText = () => {
  return (
    <div className={styles.dinamic}>
        <h2 className={`${styles.phrase} ${Mont.className}`} >I help companies solve complex tachnical & GTM challenges</h2>
    </div>
  )
}

export default DinamicText;