import styles from "./page.module.css"
import Image from "next/image";
import DinamicText from "../components/dinamicText/dinamicText";
import Experience from "../components/experience/experience";
import Cards from "../components/cards/cards";
import StickyBackground from "../components/stickyBackground/stickyBackground";
import BookaDemo from "../components/bookAdemo/bookaDemo";
import Footer from "../components/footer/footer";
import  Carousel  from "../components/carousel/carousel";
import CarouselRight from "../components/carousel/carouselRight";
import ExperienceMobile from "../components/experience/experienceMobile";
import Heroheader from "../components/hero&header/hero&header";
import { Hero } from "../components/hero/hero";

export default function Home() {
  return (
    <>
      <div className={styles.background}>
      <div className={styles.mobileBackground}>

  <Hero></Hero>
      </div>
      <DinamicText></DinamicText>
      <Experience className={styles.xpDesktop}/>
      <ExperienceMobile className={styles.xpMobile}/>
      <Cards/>
      <Carousel/>
      <br></br>
      <CarouselRight/>
      <StickyBackground/>
      <BookaDemo></BookaDemo>
      <Footer/>
      </div>
    </>
  );
}

