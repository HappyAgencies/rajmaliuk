import styles from "./page.module.css"
import Image from "next/image";
import Header from "../components/header";
import { Hero } from "../components/hero/hero";
import DinamicText from "../components/dinamicText/dinamicText";
import Experience from "../components/experience/experience";
import Cards from "../components/cards/cards";
import StickyBackground from "../components/stickyBackground/stickyBackground";
import BookaDemo from "../components/bookAdemo/bookaDemo";
import Footer from "../components/footer/footer";


export default function Home() {
  return (
    <>
      <div className={styles.background}>
      <Header/>
      <Hero/>
      <DinamicText></DinamicText>
      <Experience/>
      <Cards/>
      <StickyBackground/>
      <BookaDemo></BookaDemo>
      <Footer/>
      </div>
    </>
  );
}

