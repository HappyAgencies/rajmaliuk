'use client'
import React, { useState } from 'react';
import styles from './experience.module.css';
import { Mont } from '../../app/fonts/fonts';
import { allura } from '../../app/fonts/fonts';

const Experience = (props) => {
  const [hoveredCategory, setHoveredCategory] = useState('');

  const categories = [
    { name: `${props.field1title}`, text: `${props.field1answer}` },
    { name: `${props.field2title}`, text: `${props.field2answer}` },
    { name: `${props.field3title}`, text: `${props.field3answer}` },
    { name: `${props.field4title}`, text: `${props.field4answer}` },
  ];

  return (
    <section className={styles.experience}>
      <div style={{ maxWidth: '1440px', margin:'0px auto', width:'80%'}}>
      <p
  className={`${Mont.className} ${styles.experienceText}`}
  dangerouslySetInnerHTML={{
    __html: props.title
  }}
></p>

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
