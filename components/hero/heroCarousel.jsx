'use client'
import Image from 'next/image';
import styles from './carousel.module.css';

const CarouselHero = () => {
  const slides = [
    '/assets/imgs/upwork.png',
    '/assets/imgs/clutch.png',
    '/assets/imgs/hubSpot.png',
   '/assets/imgs/googlePartner.png',
   '/assets/imgs/make.png'
  ];

  const images = [];

  let i = 0;
  while (i < 200) {
    slides.forEach((slide, index) => {
      images.push(
        <div key={index + i * slides.length} className={styles.carousel_item}>
          <Image
            src={slide}
            width={110}
            height={34}
            alt={`Slide ${index}`}
            quality={100}
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
    </div>
  );
};

export default CarouselHero;
