"use client"
import React, { useEffect, useState } from "react";
//components 
import Banner from "@/src/components/video-explainer/Banner/Banner";
import Partner from "@/src/components/video-explainer/Partner/Partner";
import DigitalBranding from "@/src/components/video-explainer/DigitalBranding/DigitalBranding";
import Portfolio from "@/src/components/video-explainer/Portfolio/Portfolio";

export default function page() {
  const [showFolds, setShowFolds] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFolds(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <Banner />
      <Partner />
      <DigitalBranding />
      <Portfolio />
    </>
  );
}
