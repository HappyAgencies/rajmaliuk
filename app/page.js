import styles from "./page.module.css"
import Image from "next/image";
import Header from "../components/header";
import { Hero } from "../components/hero/hero";
import DinamicText from "../components/dinamicText/dinamicText";
import Experience from "../components/experience/experience";


export default function Home() {
  return (
    <>
      <div className={styles.background}>
      <Header/>
      <Hero/>
      <DinamicText></DinamicText>
      <Experience/>
      </div>
    </>
  );
}

