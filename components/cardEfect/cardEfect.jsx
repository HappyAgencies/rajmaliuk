"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./cardEfect.module.css";
import { Mont } from "../../app/fonts/fonts";

export default function CardEfect() {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (isMobile) {
        // En pantallas menores a 1200px, activar cuando el 79% de la sección es visible
        if (rect.top <= windowHeight * 0.21 && rect.bottom >= windowHeight * 1) {
          setExpanded(true);
        } else {
          setExpanded(false);
        }
      } else {
        // En pantallas más grandes, sigue el comportamiento original con el 50%
        if (rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2) {
          setExpanded(true);
        } else {
          setExpanded(false);
        }
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // Detecta el tamaño inicial al cargar

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div ref={sectionRef} className={`${Mont.className} ${styles.contenedor}`}>
      <div className={`${Mont.className} ${styles.titlecontainer}`}>
        <h3 className={styles.title}>
          A decade of experience. United to Unlock a new era in brand growth
        </h3>
      </div>

      <div
        className={`${styles.cardsContainer} ${
          expanded ? (isMobile ? styles.expandedMobile : styles.expanded) : ""
        }`}
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
