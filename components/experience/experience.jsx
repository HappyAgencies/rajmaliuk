'use client'
import React, { useState } from 'react';
import styles from './experience.module.css';
import { Mont } from '../../app/fonts/fonts';
import { allura } from '../../app/fonts/fonts';

const Experience = () => {
  const [hoveredCategory, setHoveredCategory] = useState('');

  const categories = [
    { name: 'Areas of Expertise', text: 'We specialize in diverse areas to drive growth.' },
    { name: 'Methodology', text: 'Our methodology ensures measurable results.' },
    { name: 'Impact on Clients', text: 'Delivering significant impact to our clients.' },
    { name: 'Added Value', text: 'Providing unparalleled value to your brand.' },
  ];

  return (
    <section className={styles.experience}>
      <div style={{ maxWidth: '1440px', margin:'0px auto', width:'80%'}}>
        <p className={`${Mont.className} ${styles.experienceText}`}>
          A decade of experience.
          <br />
          United to <span className={`${allura.className} ${styles.unlock}`}>Unlock</span> a new era <br />
          in brand growth.
        </p>
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ flex: 1 }}>
        
        <ul className={styles.list}>
          {categories.map((category) => (
            <li className={`${Mont.className} ${styles.listItem}`}
              key={category.name}
              onMouseEnter={() => setHoveredCategory(category.text)}
              onMouseLeave={() => setHoveredCategory('')}
              style={{ cursor: 'pointer', marginBottom: '48px' }}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ flex: 1, minHeight: '150px' }} className={styles.rightColumn}>
        {hoveredCategory ? <p className={`${Mont.className} ${styles.description}`}>{hoveredCategory}</p> : <p className={`${Mont.className}`}>Hover over a category to see details.</p>}
      </div>
    </div>
    </div>
    </section>
  );
};

export default Experience;
