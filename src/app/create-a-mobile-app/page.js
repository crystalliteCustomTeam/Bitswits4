"use client"
import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic'
// CSS 
import styles from "@/styles/bannerlp6.module.css";
import stylesjust from "@/styles/Justbuilditlp.module.css";
// Components
const Bannerlp6 = dynamic(() => import("../../components/Bannerlp6"), { ssr: true });
const People = dynamic(() => import("../../components/People"), { ssr: true });
const HomeBannerSliderlp = dynamic(() => import("../../components/HomeBannerSliderlp"), { ssr: true });
const LpForm6 = dynamic(() => import("../../components/LpForm6"), { ssr: true });
const Nothing = dynamic(() => import("../../components/Nothing"), { ssr: true });
const NewMaintain6Lp = dynamic(() => import("../../components/NewMaintain6Lp"), { ssr: true });
const WeworkLp = dynamic(() => import("../../components/new-home-page-fy/WeworkLphome"), { ssr: true });
const StartupsLp = dynamic(() => import("../../components/StartupsLp6"), { ssr: true });
const ProjectProcess = dynamic(() => import("../../components/ProjectProcessLp6"), { ssr: true });
const LpChoose = dynamic(() => import("../../components/LpChoose"), { ssr: true });
const Technologieslp = dynamic(() => import("../../components/Technologieslp"), { ssr: true });
const Justbuilditlp = dynamic(() => import("../../components/Justbuilditlp"), { ssr: true });
const Globallplp6 = dynamic(() => import("../../components/Globallplp6"), { ssr: true });
const Partnerships = dynamic(() => import("../../components/Partnerships"), { ssr: true });
const Formnewlp = dynamic(() => import("../../components/Formnewlp"), { ssr: true });
const NewFaqslp = dynamic(() => import("../../components/NewFaqslp"), { ssr: true });
import HomeLocationlp from "../../components/HomeLocationlp";

export default function gamedevelopmentcompany() {

  return (
    <>
      <Bannerlp6
        title={
          <>
            <h1 className={`${styles.develop} text-center font50 font-bold mb-3`}>
              Create a Mobile App That Stands Out
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
        newHomeBgprops="newHomeBg"
      />
      <People People="people" />
      <HomeBannerSliderlp />
      <LpForm6 />
      <Nothing Nothing="nothingLp6" />
      <NewMaintain6Lp />
      <WeworkLp wework="weworkLpnewhomefy" />
      <StartupsLp startups="startups" />
      <ProjectProcess
        processclass="processLp6"
        title="Explore Our App Development Journey"
        desc="We believe in efficiency without compromising quality. Our streamlined process for app development is <br /> designed to be transparent and collaborative, ensuring your vision comes to life exactly as you imagined."
      />
      <LpChoose transform="transformlp" />
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
    </>
  );
}
