import styles from "./page.module.css"
import Image from "next/image";
import Header from "../components/header";
import { Hero } from "../components/hero/hero";


export default function Home() {
  return (
    <>
      <div className={styles.background}>
      <Header/>
      <Hero/>
      </div>
    </>
  );
}

