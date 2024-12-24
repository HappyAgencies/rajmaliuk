'use client'
import React, { useState } from 'react';
import styles from './experienceMobile.module.css';
import { Mont } from '../../app/fonts/fonts';
import { allura } from '../../app/fonts/fonts';

const ExperienceMobile = (props) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { name: `${props.field1title}`, text: `${props.field1answer}` },
    { name: `${props.field2title}`, text: `${props.field2answer}` },
    { name: `${props.field3title}`, text: `${props.field3answer}` },
    { name: `${props.field4title}`, text: `${props.field4answer}` },
  ];

  const handleToggleCategory = (categoryName) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  return (
    <section className={styles.experience}>
      <div style={{ maxWidth: '1440px', margin: '0px auto', width: '80%' }}>
      <p
  className={`${Mont.className} ${styles.experienceText}`}
  dangerouslySetInnerHTML={{
    __html: props.title
  }}
></p>
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
