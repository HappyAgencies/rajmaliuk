import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';
import { Mont } from '../../app/fonts/fonts';

const Footer = () => {
  return (
    <div>
        <p>© 2024 Ariel Rajmaliuk</p>
        <div>
            <a href=""><Image src="/assets/imgs/linkedin.png" width={20} height={20} alt=""/></a>
            <a href=""><Image src="/assets/imgs/twittwe.png" width={20} height={20}/></a>
        </div>
        <a href="#header">Back to top</a>
    </div>
  )
}

export default Footer