"use client"
import React, { useEffect, useState } from "react";
// CSS
import stylesjust from "@/styles/Justbuilditlp.module.css";
// Components
import Bannerlpfinal from "../../components/Bannerlpfinal";
const Awardsrecognition = React.lazy(() => import("../../components/Awardsrecognition"));
const Nothinglp2 = React.lazy(() => import("../../components/Nothinglp2"));
const Innovate = React.lazy(() => import("../../components/Innovate"));
const Technologieslp = React.lazy(() => import("../../components/Technologieslp"));
const Globallplp6 = React.lazy(() => import("../../components/Globallplp6"));
const ProjectProcesslpfinal6 = React.lazy(() => import("../../components/ProjectProcesslpfinal6"));
const Justbuilditlp = React.lazy(() => import("../../components/Justbuilditlp"));
const Transformideaslp6 = React.lazy(() => import("../../components/Transformideaslp6"));
const Formnewlp2lp6 = React.lazy(() => import("../../components/Formnewlp2lp6"));
const NewFaqslp = React.lazy(() => import("../../components/NewFaqslp"));
const HomeLocationlp = React.lazy(() => import("../../components/HomeLocationlp"));
const Expertapplp6 = React.lazy(() => import("../../components/Expertapplp6"));

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
      <Bannerlpfinal newHomeBgprops="newHomeBg" />
      <Awardsrecognition />
      <Nothinglp2 Nothing="lp6final" />
      <Innovate />
      <Expertapplp6 expertapp="expertapp" />
      <ProjectProcesslpfinal6 processclass="process1" />
      <Transformideaslp6 transform="transform" />
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
        slide="slide2lp6"
      />
      <Globallplp6 />
      <Formnewlp2lp6 />
      <NewFaqslp />
      <HomeLocationlp />

    </>
  );
}
