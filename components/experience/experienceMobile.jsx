'use client'
import React, { useState } from 'react';
import styles from './experienceMobile.module.css';
import { Mont } from '../../app/fonts/fonts';
import { allura } from '../../app/fonts/fonts';

const ExperienceMobile = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { name: 'Areas of Expertise', text: 'We specialize in diverse areas to drive growth.' },
    { name: 'Methodology', text: 'Our methodology ensures measurable results.' },
    { name: 'Impact on Clients', text: 'Delivering significant impact to our clients.' },
    { name: 'Added Value', text: 'Providing unparalleled value to your brand.' },
  ];

  const handleToggleCategory = (categoryName) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  return (
    <section className={styles.experience}>
      <div style={{ maxWidth: '1440px', margin: '0px auto', width: '80%' }}>
        <p className={`${Mont.className} ${styles.experienceText}`}>
          A decade of experience.
          <br />
          United to <span className={`${allura.className} ${styles.unlock}`}>Unlock</span> a new era <br />
          in brand growth.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <ul className={styles.list}>
            {categories.map((category) => (
              <li
                className={`${Mont.className} ${styles.listItem}`}
                key={category.name}
                onClick={() => handleToggleCategory(category.name)}
                style={{ cursor: 'pointer', marginBottom: '48px' }}
              >
                <div className={styles.categoryName}>{category.name}</div>
                {activeCategory === category.name && (
                  <p className={`${Mont.className} ${styles.description}`}>{category.text}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceMobile;
