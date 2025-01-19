"use client";
import React, { useState, useEffect } from "react";
import WelcomeAnimation from "@/pages/WelcomePage";
import MainContent from "@/pages/LandigPage";

const Page = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000); // Tampilkan selama 2 detik
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showWelcome ? (
        <WelcomeAnimation />
      ) : (
        <MainContent /> // Konten utama website
      )}
    </div>
  );
};

export default Page;
