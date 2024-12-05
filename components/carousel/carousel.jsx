'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import style from './carousel.module.css';

const Carousel = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    // Obtener el ancho total del carrusel
    const totalWidth = track.scrollWidth;

    // Animar el desplazamiento infinito
    const animateCarousel = () => {
      gsap.to(track, {
        x: `-=${totalWidth / 2}`, // Desplazar por la mitad de su tamaño
        duration: 10, // Duración de la animación
        ease: "none", // Movimiento constante
        repeat: -1, // Repetir infinitamente
        modifiers: {
          x: (x) => {
            if (parseFloat(x) <= -totalWidth) {
              // Restablecer la posición al principio
              return 0;
            }
            return x;
          }
        }
      });
    };

    animateCarousel();
  }, []);

  return (
    <div className={style.carousel}>
      <div className={style.carouselTopRow}>
        <div className={style.carouselTrack} ref={trackRef}>
          <Image src="/assets/imgs/castcapital.png" width={188} height={160} alt="" />
          <Image src="/assets/imgs/nexafin.png" width={188} height={160} alt="" />
          <Image src="/assets/imgs/supertekbox.png" width={188} height={160} alt="" />
          <Image src="/assets/imgs/castcapital.png" width={188} height={160} alt="" />
          <Image src="/assets/imgs/nexafin.png" width={188} height={160} alt="" />
          <Image src="/assets/imgs/supertekbox.png" width={188} height={160} alt="" />
        </div>
      </div>
      <div className={style.carouselBottomRow}>
        <div className={style.carouselTrack}>
          <Image src="/assets/imgs/castcapital.png" width={188} height={160} alt="" />
          <Image src="/assets/imgs/nexafin.png" width={188} height={160} alt="" />
          <Image src="/assets/imgs/supertekbox.png" width={188} height={160} alt="" />
          <Image src="/assets/imgs/castcapital.png" width={188} height={160} alt=""/>
          <Image src="/assets/imgs/nexafin.png" width={188} height={160} alt="" />
          <Image src="/assets/imgs/supertekbox.png" width={188} height={160} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;




