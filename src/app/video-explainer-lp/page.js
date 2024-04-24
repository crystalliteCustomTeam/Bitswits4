"use client"
import React, { useEffect, useState } from "react";
import Banner from "@/src/components/video-explainer/Banner/Banner";
//components 

export default function UiUxDesign() {
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
    </>
  );
}
