'use client'
import Image from 'next/image';
import styles from './carouselRight.module.css';

const CarouselRight = () => {
  const slides = [
    '/assets/imgs/castcapital.png',
    '/assets/imgs/nexafin.png',
    '/assets/imgs/supertek.png',
  ];

  const images = [];

  let i = 0;
  while (i < 200) {
    slides.forEach((slide, index) => {
      images.push(
        <div key={index + i * slides.length} className={styles.carousel_item}>
          <Image
            src={slide}
            width={200}
            height={200}
            alt={`Slide ${index}`}
          />
        </div>
        
      );
    });
    i++;
  }

  return (
    <div className={styles.carousel_container}>
      <div className={styles.carousel}>
        {images}
      </div>
      <br></br>
      <br></br>

    </div>
  );
};

export default CarouselRight;
