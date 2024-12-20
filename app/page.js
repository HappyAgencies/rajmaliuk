import { createClient } from 'contentful'
import * as contentful from 'contentful'

import styles from "./page.module.css"
import Image from "next/image";
import DinamicText from "../components/dinamicText/dinamicText";
import Experience from "../components/experience/experience";
import Cards from "../components/cards/cards";
import StickyBackground from "../components/stickyBackground/stickyBackground";
import BookaDemo from "../components/bookAdemo/bookaDemo";
import Footer from "../components/footer/footer";
import Carousel from "../components/carousel/carousel";
import CarouselRight from "../components/carousel/carouselRight";
import ExperienceMobile from "../components/experience/experienceMobile";
import Heroheader from "../components/hero&header/hero&header";
import { Hero } from "../components/hero/hero";

var client = contentful.createClient({
  space: "bopcc3zwcpm5",
  accessToken: "ThBTAAhXvcEf0p_eOV5AQy85QLgLZDLjH_5daTd85CM",
})

async function getHeroData() {
  const result = await client.getEntry('5S0OoTsRmaBvxnxBnAWbUH')
  const logoUrl1 = result.fields.logo1?.fields?.file?.url || ''
  const logoUrl2 = result.fields.logo2?.fields?.file?.url || ''
  const logoUrl3 = result.fields.logo3?.fields?.file?.url || ''
  const logoUrl4 = result.fields.logo4?.fields?.file?.url || ''
  const logoUrl5 = result.fields.logo5?.fields?.file?.url || ''


  return {
    title: result.fields.title || 'Default Title',
    heroParagraph: result.fields.heroParagraph || 'No hay valor',
    mobileButton : result.fields.mobileButton,
    heroUnderTitleText2 : result.fields.heroUnderTitleText2,
    heroUnderTitleText2Span : result.fields.heroUnderTitleText2Span,
    scroll : result.fields.scroll,
    logo: logoUrl1.startsWith('//') ? `https:${logoUrl1}` : logoUrl1,
    logo2: logoUrl2.startsWith('//') ? `https:${logoUrl2}` : logoUrl2,
    logo3: logoUrl3.startsWith('//') ? `https:${logoUrl3}` : logoUrl3,
    logo4 : logoUrl4.startsWith('//') ? `https:${logoUrl4}` : logoUrl4,
    logo5 : logoUrl5.startsWith('//') ? `https:${logoUrl5}` : logoUrl5,

  }
}

async function getLiveTextData() {
  const result = await client.getEntry('6QnLbjIlAwIj31Gbaaqsf9')



  return {
    liveText: result.fields.text    || 'Default Title',
  

  }
}

async function getLiveCardData() {
  const result = await client.getEntry('7EtQrcJ006KjphJ5FkJyXP')



  return {
    sectiontitle: result.fields.sectiontitle    || 'Default Title',
    card1Ttile : result.fields.card1Ttile  || 'Default',
    card1SubTitle : result.fields.card1SubTitle  || 'Default',
    card1Paragraph : result.fields.card1Paragraph || 'Default',
    card1Date : result.fields.card1Date || 'Default',
    card2Ttitle: result.fields.card2Ttitle, 
    card2SubTitle: result.fields.card2SubTitle,
    card2Paragraph: result.fields.card2Paragraph,
    card2Date: result.fields.card2Date,
  }
}

async function getStickyData() {
  const result = await client.getEntry('7rwcDSY3HdtZg6Z5qlGRXX')
  return {
    text: result.fields.text    || 'Default Title',
    specialText : result.fields.specialText

  }
}




export default async function Home() {
  const heroData = await getHeroData()
  const liveTextData = await getLiveTextData()
  const cardData = await getLiveCardData()
  const stockyData = await getStickyData()
  return (
    <>
      <div className={styles.background}>
        <div className={styles.mobileBackground}>
          <Hero {...heroData} />
        </div>
        <DinamicText {...liveTextData}/>
        <Experience className={styles.xpDesktop}/>
        <ExperienceMobile className={styles.xpMobile}/>
        <Cards {...cardData}/>
        <Carousel/>
        <br />
        <CarouselRight/>
        <StickyBackground {...stockyData}/>
        <BookaDemo />
        <Footer/>
      </div>
    </>
  );
}

