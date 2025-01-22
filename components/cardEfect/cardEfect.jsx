"use client";
import React, { useState } from "react";
import styles from "./cardEfect.module.css";
import { Mont } from "../../app/fonts/fonts";

export default function CardEfect() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`${Mont.className} ${styles.contenedor}`}>
      {/* TÍTULO (Debe quedarse fijo) */}
      <div className={`${Mont.className} ${styles.titlecontainer}`}>
        <h3 className={styles.title}>
          A decade of experience. United to Unlock a new era in brand growth
        </h3>
      </div>

      {/* Contenedor de las tarjetas */}
      <div
        className={`${styles.cardsContainer} ${
          expanded ? styles.expanded : ""
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        {[4, 3, 2, 1].map((num) => (
          <div key={num} className={`${styles.card} ${styles[`card${num}`]}`}>
            <span className={styles.cardNumber}>0{num}</span>
            <h4 className={styles.cardTitle}>Areas of Expertise</h4>
            <p className={styles.cardParagraph}>
              An expert specialized in business strategy development, process
              optimization, organizational change management, and digital
              transformation.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
