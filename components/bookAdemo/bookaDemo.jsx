'use client'
import React, { useState, useEffect } from 'react';
import { Mont } from '../../app/fonts/fonts';
import styles from './bookAdemo.module.css';
import Image from 'next/image';

const questions = [
  { id: 1, text: 'Question #1', answer: 'In his role as Fractional CMO, Ariel develops and executes effective marketing strategies to drive brand growth. He offers part-time marketing expertise, helping clients achieve their market objectives without the commitment of a full-time CMO.' },
  { id: 2, text: 'Question #2', answer: 'In his role as Fractional CMO, Ariel develops and executes effective marketing strategies to drive brand growth. He offers part-time marketing expertise, helping clients achieve their market objectives without the commitment of a full-time CMO.' },
  { id: 3, text: 'Question #3', answer: 'In his role as Fractional CMO, Ariel develops and executes effective marketing strategies to drive brand growth. He offers part-time marketing expertise, helping clients achieve their market objectives without the commitment of a full-time CMO.' },
  { id: 4, text: 'Question #4', answer: 'In his role as Fractional CMO, Ariel develops and executes effective marketing strategies to drive brand growth. He offers part-time marketing expertise, helping clients achieve their market objectives without the commitment of a full-time CMO.' },

  
];

const BookaDemo = (props) => {
  
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (id) => {
    
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    document.body.appendChild(script);

    // Limpiar el script al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <div className={styles.container}>
      <h3 className={`${Mont.className} ${styles.price}`}>{props.price}</h3>
      <div className={styles.dobleColum}>
        <div className={`${Mont.className} ${styles.titleBox}`}>
          <h1 className={styles.title}>{props.sectionTitle}<br className = {styles.brsP} /> </h1>
        </div>
      </div>

      <div className={styles.qaSection}>



  <div className={styles.left_column}>
  <div className="meetings-iframe-container" data-src="https://meetwith.happyagencies.com/meetings/ariel/rajmaliukcom?embed=true">
    </div>
     </div>
  <div className={styles.right_column}>
    {questions.map((question) => (
      <div key={question.id} onClick={() => toggleAnswer(question.id)}>
        <hr className={styles.horizontalLIne} />
        <div className={styles.question}>
          <h3 className={`${Mont.className} ${styles.qaQuestion}`}>
            {question.text}
          </h3>
          <Image
            className={`${styles.plusImage} ${activeQuestion === question.id ? styles.rotated : ''}`}
            src="/assets/imgs/icon.png"
            width={19}
            height={19}
            alt="toggle answer"
            onClick={() => toggleAnswer(question.id)} 
          />
        </div>
        {activeQuestion === question.id && (
          <div className={styles.answer}>
            <p>{question.answer}</p>
          </div>
        )}
        <hr className={styles.horizontalLIne} />
      </div>
    ))}
  </div>



      </div>
    </div>
  );
}

export default BookaDemo;
