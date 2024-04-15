"use client"
import React, { useEffect, useState } from "react";
// css
import stylesjust from "@/styles/Justbuilditlp.module.css";
// componets
import Bannerdubai from "../../components/Bannerdubainew";
import Whowearenew from "../../components/Whowearenew";
import Delivered from "../../components/Delivered";
import Expertappdubaiadvanced from "../../components/Expertappdubaiadvanced";
import Justbuilditlpdubai from "../../components/Justbuilditlpdubai";
import Globallplp6dubai from "../../components/Globallplp6dubai";
import Faqdubai from "../../components/Faqdubai";
import Technologieslpdubainew from "../../components/Technologieslpdubainew";
import LpChoosedubaishipnewdubai from "../../components/LpChoosedubaishipnewdubai";
import Globalmap from "../../components/Globalmap";
import Brand from "../../components/Brand";
import Latestblog from "../../components/Latestblog";
import Houtondubai from "../../components/Houtondubai";
//Images 
import blog1 from "/public/newdubai/blog1.png";
import blog2 from "/public/newdubai/blog2.png";
import blog3 from "/public/newdubai/blog3.png";
import StoryLine1 from "/public/newDubaiPagev1/storyLine1.png";
import StoryLine2 from "/public/images/iosbanner/who_image2.png";
import StoryLine3 from "/public/fluttermobiledevelopment/who_image2.png";
import StoryLine4 from "/public/images/game2dbanner/bann2.png";
import StoryLine5 from "/public/blockchaindevelopment/images/engageduplicate.png";
import NewDubaiAwards from "@/src/components/NewDubaiAwards";
import DubiaDevelopers from "@/src/components/DubiaDevelopers";
import DubaiDelivered from "@/src/components/DubaiDelivered";
import DubaiTimeline from "@/src/components/DubaiTimeline";
import DubaiClients from "@/src/components/DubaiClients";
import StoryLine from "@/src/components/DubaiStoryLine";
import DeliveredBlack from "@/src/components/DeliveredBlack";
import NewDubaiBussiness from "@/src/components/NewDubaiBussiness";
import DubaiDevelopment from "@/src/components/DubaiDevelopment";
import DubaiDevelopmentUAE from "@/src/components/DubaiDevelopmentUAE";
import DubaiIOS from "@/src/components/DubaiIOS";
import DubaiAndriod from "@/src/components/DubaiAndriod";
import DubaiMobileApplication from "@/src/components/DubaiMobileApplication";
import DubaiConquered from "@/src/components/DubaiConquered";

export default function gamedevelopmentcompany() {
  const blogBox = [
    {
      img: blog1,
      title: 'Leading Grocery Delivery Apps Making Waves In Saudi Arabia',
      content: 'Remember Carrying Heavy Bags Of Groceries Under The Sizzling Saudi Sun? Those Days Are Fast Disappearing Into A Memory As The Expedient Rise Of...'
    },
    {
      img: blog2,
      title: 'Detail Overview For Online Shopping App In Saudi Arabia',
      content: 'Online Shopping Apps Have Become A Keystone Of Today’s Retail Business, Transforming The Shopping Experience With Unprecedented Ease And A Wide...'
    },
    {
      img: blog3,
      title: 'How To Develop An Android App: A Complete Guide',
      content: 'There Are Around 2.69 Million Apps For Android Smartphones. Almost Everyone Understands Android Apps, And Many Are Ready To Launch Their Own. But...'
    },
  ];
  const [showFolds, setShowFolds] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFolds(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  //=====StoryLine Fold=====//
  const accordionData = [
    {
      question: 'Android App Development In Dubai',
      answer: "Bitswits' Android mobile app development in Dubai is a result-centric process, bringing intuitive and experience-driven Android applications to life. As a prominent mobile app development company in Dubai, we aim to live up to our name and work to ensure that we remain at the top of the list of mobile app development companies in Dubai. Leveraging Android, an open-source platform, and combining it with the skills and expertise of our Android app development team in Dubai, we tap into the very core of Android apps and build revolutionary functionalities, features, and experiences that yield amazing results and help businesses achieve their objectives. Our mobile app development company in Dubai knows that the industry is becoming increasingly complex and competitive, with an application being published to the Google Play Store every now and then. Therefore, Bitswits' app developers in Dubai take the strategic route to develop best-in-class mobile applications that make an impact on the market.",
      StoryLineImg: StoryLine1,
    },
    {
      question: 'Iphone App Development In Dubai',
      answer: "Step into a realm of immersive storytelling with our cutting-edge 3D animations. Elevate your visual narratives, whether for product showcases, virtual tours, or cinematic experiences.",
      StoryLineImg: StoryLine2
    },
    {
      question: 'Flutter App Development In Dubai',
      answer: "Simplify the complex and engage your audience with our whiteboard animations. Each stroke unfolds a nuanced narrative, turning ideas into visually compelling stories.",
      StoryLineImg: StoryLine3
    },
    {
      question: 'Game App Development In Dubai',
      answer: "Transform your content into visual masterpieces with our motion graphics. Every movement is a brushstroke of dynamic storytelling, enhancing your brand's visual appeal.",
      StoryLineImg: StoryLine4
    },
    {
      question: 'Blockchain Game Development In Dubai',
      answer: "Refine your raw footage into cinematic brilliance with our video editing services. Every cut and transition is a stroke of storytelling precision, enhancing your visual narratives.",
      StoryLineImg: StoryLine5
    },
  ];
  const storyLine = {
    subtitle: (<> Business Empowering </>),
    title: (<> App Development Company in UAE </>),
    para: "With years of experience empowering startups and well-established brands with advanced app development solutions, we have garnered attention from several credible platforms worldwide, including Zawya and Lovin Dubai in Dubai. Our recognition in the mobile app development industry has solidified us as an end-to-end mobile app development solution provider. Our team of highly talented individuals is ready to take your mobile app development project to the next level.",
    accordionData: accordionData
  };
  return (
    <>
      <Bannerdubai newHomeBgprops="newHomeBg" />
      {showFolds &&
        <>
          <NewDubaiAwards />
          <DubiaDevelopers />
          <DubaiDelivered />
          <DubaiTimeline />
          <DubaiClients />
          <StoryLine content={storyLine} />
          <Whowearenew />
          <Delivered />
          <DeliveredBlack />
          <Technologieslpdubainew />
          <NewDubaiBussiness />
          <DubaiDevelopment />
          <DubaiDevelopmentUAE />
          <DubaiIOS />
          <DubaiAndriod />
          <DubaiMobileApplication />
          <DubaiConquered />
          <LpChoosedubaishipnewdubai
            transform="transformlp"
          />
          <Expertappdubaiadvanced expertapp="expertapp" />
          <Justbuilditlpdubai
            title1="Just"
            title="Build It."
            para="Design, Develop, and Grow with BitsWits."
            slide="slide1lp"
          />
          <Globallplp6dubai />
          <Globalmap />
          <Brand />
          <Houtondubai />
          <Faqdubai
            faqsData={[
              {
                question:
                  "How can I launch an app in the UAE?",
                answer: (
                  <>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </>
                ),
              },
              {
                question: "How much time is required to build a mobile application?",
                answer: (
                  <>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </>
                ),
              },
              {
                question:
                  "How much does it cost to create an app in Dubai?",
                answer: (
                  <>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </>
                ),
              },
              {
                question:
                  "What is a mobile app support service, and does Bitswits offer it?",
                answer: (
                  <>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </>
                ),
              },

            ]}
          />
          <Latestblog blogBox={blogBox} />
        </>
      }
    </>
  );
}
