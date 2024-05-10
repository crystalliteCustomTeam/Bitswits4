"use client"

import React from 'react'
import Bannerdubai from '@/src/components/NewMobileApp/Banner/Banner'
import NewAward from '@/src/components/NewMobileApp/NewAward/NewAward';
import Whowearenew from '@/src/components/NewMobileApp/WhoWeAre/WhoWeAre';
import FutureReady from '@/src/components/NewMobileApp/FutureReady/FutureReady';
import AppsLived from '@/src/components/NewMobileApp/AppsLived/AppsLived';
import AppsJourney from '@/src/components/NewMobileApp/AppsJourney/AppsJourney';
import Conviced from '@/src/components/NewMobileApp/Conviced/Conviced';
import NewHouston from '@/src/components/NewMobileApp/NewHouston/NewHouston';
import Deliver from '@/src/components/NewMobileApp/Deliver/Deliver';
import LogoSlider from '@/src/components/NewMobileApp/LogoSlider/LogoSlider';
import JournyForm from '@/src/components/NewMobileApp/JourneyForm/JournyForm';
import Faqs from '@/src/components/NewMobileApp/Faqs/Faqs';
import Location from '@/src/components/NewMobileApp/Location/Location';

const page = () => {
  // Banner Content
  const Banner = {
    title: "Build Your Digital  Software Infrastructure",
    desc: "We’re a software development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership to its client’s goals, and internal teams.",
  }

  // award Content
  const Award = {
    title: <>Our Partners For Digital Marketing <span>Solution</span></>,
    desc: <>At Rhillane, we take pride in collaborating with a diverse range of  partners in the digital world, creating a dynamic and innovative <br className='d-none d-xxl-block' />network.</>,

  }

  // Who We Are Content
  const WhoWeAre = {
    title: "Who We Are",
    desc: <>Discover excellence in app innovation with <span>Bitswits,</span> a leading mobile app development company. We turn your ideas into impactful mobile app solutions. Our expertise isn't just in coding; it's about understanding your needs and delivering an app that resonates with your audience. <span>Experience the Bitswits difference:</span> where expertise meets excellence, and your vision becomes a reality.</>,
    subtitleOne: "Soul Scribe ",
    subDescOne: "Soul Scribe is a groundbreaking social networking app which functions as digital diary, and you can enlist your loved ones to be part of you online journal. The app operates by using the freemium subscription model, providing a complimentary family room option that enables users to welcome someone from their circle of friends to share their memories. Users have the privilege to create and share profound moments with their loved ones. This makes Soul Scribe a social media experience that is different and personal.",
    subtitleTwo: "Ready App",
    subDescTwo: "The Ready App is a revolutionary platform invented to revolutionize the hiring process for the transportation industry. It fills the communication gap between drivers and recruiters by having an user-friendly interface along with features like secure messaging, personal meetings and real-time updates. Our platform solve issues such as data security, algorithm revisions, and user interface design among others in order to have a scalable and mutually beneficial solution. ",
    subtitleThree: "Greasy Monkey ",
    subDescThree: "Grease Monkey is a comprehensive automotive innovation system which provides everything ranging from car repairs to oil checkup. Serving as an independent app, Grease Monkey presents users with important factors to consider such as prices and locations and also client ratings for your vehicles. The app takes the convenience to a different level altogether.. With Grease Monkey, car owners can do regular maintenance for their cars in an easy way by just a few taps on their smartphones."
  }
  // Houston Content
  const menus = [
    "Initial Brief ",
    "The Concept Of The App",
    "UX… The Be-All & End-All",
    "Visual Style",
    "Programming",
    "Bug Searching",
    "Releasing The App",
  ];
  const sections = [
    {
      num: "01",
      title: "First Of All, Let’s Get To Know Each Other",
      content: `<p class='fontsfregular'>Ideally around the same table. To discuss what you actually need, why you’d like to achieve it, what the weak spots of your business are, and what we can do to help. We’re experts at asking the right questions, so it’s likely we’ll come across things that had never occurred to you before.</p>
         `
    },
    {
      num: "02",
      title: "The Concept Of The App",
      content: `<p class='fontsfregular'>Ideally around the same table. To discuss what you actually need, why you’d like to achieve it, what the weak spots of your business are, and what we can do to help. We’re experts at asking the right questions, so it’s likely we’ll come across things that had never occurred to you before.</p>`
    },
    {
      num: "03",
      title: "UX… The Be-All & End-All",
      content: `<p class='fontsfregular'>Ideally around the same table. To discuss what you actually need, why you’d like to achieve it, what the weak spots of your business are, and what we can do to help. We’re experts at asking the right questions, so it’s likely we’ll come across things that had never occurred to you before.</p>`
    },
    {
      num: "04",
      title: "Visual Style",
      content: `<p class='fontsfregular'>Creating an app for a Fortune 500 or enterprise-level company entails a more substantial financial commitment compared to other brick-and-mortar businesses. </p>`
    },
    {
      num: "05",
      title: "Programming",
      content: `<p class='fontsfregular'>For individuals seeking app development in Houston, the expenses can significantly vary based on the app’s complexity and desired features. </p>`
    },
    {
      num: "06",
      title: "Bug Searching",
      content: `<p class='fontsfregular'>Unravelling the cost of developing apps for B2B clients in Houston is influenced by multiple factors. For an illustration, </p>`
    },
    {
      num: "07",
      title: "Releasing The App",
      content: `<p class='fontsfregular'>Unravelling the cost of developing apps for B2B clients in Houston is influenced by multiple factors. For an illustration, </p>`
    }
  ];
  const HoustonContent = {
    menus: menus,
    sections: sections,
  }

  return (
    <>
      <Bannerdubai content={Banner} />
      <NewAward content={Award} />
      <Whowearenew content={WhoWeAre} />
      <FutureReady />
      <AppsLived />
      <AppsJourney />
      <Conviced />
      <NewHouston content={HoustonContent} />
      <Deliver />
      <LogoSlider />
      <JournyForm />
      <Faqs
        faqsData={[
          {
            question: "How can I launch an app in the UAE?",
            answer: "We've helped businesses cross the chasm with our data-driven approach toward app development, and we've brought the same passion for disruption and growth to UAE. Having expertise and first-hand experience in multiple tangents of mobile app development in Dubai, our mobile apps development company rev up your growth engine by building new revenue streams allowing you to rethink possibilities and ensure long-term growth. We know that the Dubai mobile app development market has gained traction mainly due to the tourism and business economy that Dubai has built over the years."
          },
          {
            question: "How much time is required to build a mobile application?",
            answer: "We've helped businesses cross the chasm with our data-driven approach toward app development, and we've brought the same passion for disruption and growth to UAE. Having expertise and first-hand experience in multiple tangents of mobile app development in Dubai, our mobile apps development company rev up your growth engine by building new revenue streams allowing you to rethink possibilities and ensure long-term growth. We know that the Dubai mobile app development market has gained traction mainly due to the tourism and business economy that Dubai has built over the years."
          },
          {
            question: "How much does it cost to create an app in Dubai?",
            answer: "We've helped businesses cross the chasm with our data-driven approach toward app development, and we've brought the same passion for disruption and growth to UAE. Having expertise and first-hand experience in multiple tangents of mobile app development in Dubai, our mobile apps development company rev up your growth engine by building new revenue streams allowing you to rethink possibilities and ensure long-term growth. We know that the Dubai mobile app development market has gained traction mainly due to the tourism and business economy that Dubai has built over the years."
          },
          {
            question: "What is a mobile app support service, and does BitsWits offer it?",
            answer: "We've helped businesses cross the chasm with our data-driven approach toward app development, and we've brought the same passion for disruption and growth to UAE. Having expertise and first-hand experience in multiple tangents of mobile app development in Dubai, our mobile apps development company rev up your growth engine by building new revenue streams allowing you to rethink possibilities and ensure long-term growth. We know that the Dubai mobile app development market has gained traction mainly due to the tourism and business economy that Dubai has built over the years."
          },
        ]}
      />
      <Location />
    </>
  )
}

export default page
