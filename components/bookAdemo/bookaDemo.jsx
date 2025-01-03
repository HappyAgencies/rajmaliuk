'use client'
import React, { useState, useEffect } from 'react';
import { Mont } from '../../app/fonts/fonts';
import styles from './bookAdemo.module.css';
import Image from 'next/image';



const BookaDemo = (props) => {
  const questions = [
    { id: 1, text: `${props.question1}`, answer: `${props.answer1}` },
    { id: 2, text: `${props.question2}`, answer: `${props.answer2}` },
    { id: 3, text: `${props.question3}`, answer: `${props.answer3}` },
    { id: 4, text: `${props.question4}`, answer: `${props.answer4}` },

      
  
  ];
  
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (id) => {
    
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `${props.scriptSrc}`;
    script.async = true;
    document.body.appendChild(script);

    // Limpiar el script al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <div className={styles.container} id="book-a-demo">
      <h3 className={`${Mont.className} ${styles.price}`}>{props.price}</h3>
      <div className={styles.dobleColum}>
        <div className={`${Mont.className} ${styles.titleBox}`}>
          <h1 className={styles.title}>{props.sectionTitle}<br className = {styles.brsP} /> </h1>
        </div>
      </div>

      <div className={styles.qaSection}>



  <div className={styles.left_column}>
  <div className="meetings-iframe-container" data-src={props.dataSrc}>
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
