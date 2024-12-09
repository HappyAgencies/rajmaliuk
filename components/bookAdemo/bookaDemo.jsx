'use client'
import React, { useState } from 'react';
import { Mont } from '../../app/fonts/fonts';
import styles from './bookAdemo.module.css';
import Image from 'next/image';

const questions = [
  { id: 1, text: 'Question #1', answer: 'In his role as Fractional CMO, Ariel develops and executes effective marketing strategies to drive brand growth. He offers part-time marketing expertise, helping clients achieve their market objectives without the commitment of a full-time CMO.' },
  { id: 2, text: 'Question #2', answer: 'In his role as Fractional CMO, Ariel develops and executes effective marketing strategies to drive brand growth. He offers part-time marketing expertise, helping clients achieve their market objectives without the commitment of a full-time CMO.' },
  { id: 3, text: 'Question #3', answer: 'In his role as Fractional CMO, Ariel develops and executes effective marketing strategies to drive brand growth. He offers part-time marketing expertise, helping clients achieve their market objectives without the commitment of a full-time CMO.' },
  { id: 4, text: 'Question #4', answer: 'In his role as Fractional CMO, Ariel develops and executes effective marketing strategies to drive brand growth. He offers part-time marketing expertise, helping clients achieve their market objectives without the commitment of a full-time CMO.' },

  // Puedes añadir más preguntas aquí en el futuro
];

const BookaDemo = () => {
  // Crear un estado para controlar qué respuesta se debe mostrar
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (id) => {
    // Si la pregunta ya está activa, la cerramos; si no, la abrimos
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className={styles.container}>
      <h3 className={`${Mont.className} ${styles.price}`}>250 /hr</h3>
      <div className={styles.dobleColum}>
        <div className={`${Mont.className} ${styles.titleBox}`}>
          <h1 className={styles.title}>Book a 1hr <br className = {styles.brsP} /><span>one-on-one consultation</span> </h1>
        </div>
        <div className={styles.buttonBox}>
          <h2 className={`${Mont.className} ${styles.buttonText}`}>Schedule a consultation</h2>
        </div>
      </div>

      <div className={styles.qaSection}>
        {questions.map((question) => (
          <div key={question.id}>
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
                onClick={() => toggleAnswer(question.id)} // Toggle al hacer clic
              />
            </div>

            {/* Mostrar la respuesta solo si la pregunta está activa */}
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
  );
}

export default BookaDemo;
