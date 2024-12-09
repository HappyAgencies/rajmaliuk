import Header from "../header";
import { Hero } from "../hero/hero";
import styles from './hero&heder.module.css';




export default function Heroheader() {
  return (
    <div className={styles.mobileBg}>        
      <Header/>
      <Hero/>
    </div>
  );
}

