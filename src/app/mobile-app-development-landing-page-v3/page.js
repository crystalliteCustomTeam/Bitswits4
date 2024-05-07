"use client"

import React from 'react'
import Bannerdubai from '@/src/components/NewMobileApp/Banner/Banner'
import NewAward from '@/src/components/NewMobileApp/NewAward/NewAward';
import Whowearenew from '@/src/components/NewMobileApp/WhoWeAre/WhoWeAre';
import FutureReady from '@/src/components/NewMobileApp/FutureReady/FutureReady';

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
  return (
    <>
      <Bannerdubai content={Banner} />
      <NewAward content={Award} />
      <Whowearenew content={WhoWeAre} />
      <FutureReady />
    </>
  )
}

export default page
