"use client"
import Script from "next/script";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// css
import styles from "@/styles/bannerlp.module.css";
import stylesjust from "@/styles/Justbuilditlp.module.css";
// components
import Bannerlp from "../../components/Bannerlp";
import People from "../../components/People";
import HomeBannerSliderlp from "../../components/HomeBannerSliderlp";
import LpForm from "../../components/LpFormprops";
import Nothing from "../../components/Nothing";
import Hurdles from "../../components/Hurdles";
import Expertapp from "../../components/Expertapp";
import ProjectProcesslp1 from "../../components/ProjectProcesslp1";
import LpChoose from "../../components/LpChoose";
import Technologieslp from "../../components/Technologieslp";
import Justbuilditlp from "../../components/Justbuilditlp";
import Globallplp6 from "../../components/Globallplp6";
import Partnerships from "../../components/Partnerships";
import Formnewlp from "../../components/Formnewlp";
import NewFaqslp from "../../components/NewFaqslp";
import HomeLocationlp from "../../components/HomeLocationlp";

export default function gamedevelopmentcompany() {
  const [showFolds, setShowFolds] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFolds(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <Bannerlp
        title={
          <>
            <h1 className={`${styles.develop} text-center font50 font-bold mb-3`}>
              Top Mobile App Development Company
            </h1>
          </>
        }
        para={
          <>
            <p className="font20 white center mb-3">
              Beautiful, High-Performance Apps Delivered <span className={styles.txtDec}>ON TIME</span> and <span className={styles.txtDec}>WITHIN BUDGET</span>
            </p>
          </>
        }
        btn2={
          <>
            <div className={styles.pont}>
              <Link className={styles.about} href="javascript:$zopim.livechat.window.show();">
                Transform Your App Idea Into A Success Story - Today Is The Day
                To Start!
              </Link>
            </div>
          </>
        }
        newHomeBgprops="newHomeBg"
      />
      <People People="people" />
      <HomeBannerSliderlp />
      <LpForm
        addresClass="iosclass"
        heading={`Discover excellence in app innovation with Bitswits, a leading mobile app development company. We turn your ideas into impactful mobile app solutions. Our expertise isn't just in coding; it's about understanding your needs and delivering an app that resonates with your audience. Experience the Bitswits difference: where expertise meets excellence, and your vision becomes a reality.`}
      />
      <Nothing Nothing="nothing" />
      <Hurdles />
      <Expertapp expertapp="expertapp" />
      <ProjectProcesslp1 processclass="process" />
      <LpChoose transform="transform" />
      <Technologieslp />
      <Justbuilditlp
        title={
          <>
            <h2 className={stylesjust.just}>Just Build It.</h2>
          </>
        }
        para={
          <>
            <h3 className={stylesjust.develop}>
              Design, Develop, and Grow with BitsWits.
            </h3>
          </>
        }
        slide="slide1lp"
      />
      <Globallplp6 />
      <Partnerships />
      <Formnewlp />
      <NewFaqslp />
      <HomeLocationlp />

      <Script id="websiteSchema" type="application/ld+json">
        {`
           {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Top Mobile App Development Company",
            "url": "https://www.bitswits.co/top-mobile-app-development-company",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "{search_term_string}",
              "query-input": "required name=search_term_string"
            }
           }                  
        `}
      </Script>
      <Script id="organizationSchema" type="application/ld+json">
        {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BitsWits",
              "url": "https://www.bitswits.co/top-mobile-app-development-company",
              "logo": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
              "sameAs": [
                "https://www.facebook.com/officialBitsWits",
                "https://twitter.com/BitsWits_/",
                "https://www.youtube.com/@officialBitsWits",
                "https://www.instagram.com/officialBitsWits/",
                "https://www.linkedin.com/company/officialBitsWits"
              ]
            }              
        `}
      </Script>
      <Script id="localBusinessSchema" type="application/ld+json">
        {`
           {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Top Mobile App Development Company",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F10.c29e3673.png&w=384&q=75",
            "url": "https://www.bitswits.co/top-mobile-app-development-company",
            "telephone": "+1 713 565 7656",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Williams Tower, 41st Floor 2800 Post Oak Blvd, Suite 4100",
              "addressLocality": "Houston",
              "addressRegion": "TX",
              "postalCode": "77056",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 29.7370769,
              "longitude": -95.46221829999999
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "06:00"
            },
            "sameAs": [
              "https://www.facebook.com/officialBitsWits",
              "https://www.instagram.com/officialBitsWits/",
              "https://twitter.com/BitsWits_/",
              "https://www.linkedin.com/company/officialBitsWits",
              "https://www.youtube.com/@officialBitsWits"
            ] 
           }                                                                                                       
        `}
      </Script>
      <Script id="productSchema" type="application/ld+json">
        {`
           {
            "@context": "https://schema.org/", 
            "@type": "Product", 
            "name": "Top Mobile App Development Company",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F10.c29e3673.png&w=384&q=75",
            "description": "Our mobile app development services turn your innovative ideas into success stories by crafting apps that stand out in the market. While you focus on your business, Bitswits will handle the technical aspects of developing your app.",
            "brand": {
              "@type": "Brand",
              "name": "BitsWits"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "1174"
            }
           }
        `}
      </Script>
    </>
  );
}
