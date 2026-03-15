"use client";

import { useState, useCallback } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Probleme from "@/components/Probleme";
import Formats from "@/components/Formats";
import Comment from "@/components/Comment";
import Fonctionnalites from "@/components/Fonctionnalites";
import Temoignages from "@/components/Temoignages";
import Tarifs from "@/components/Tarifs";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);
  const handleSplashComplete = useCallback(() => setSplashDone(true), []);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      <Navbar />
      <main>
        <Hero />
        <Probleme />
        <Formats />
        <Comment />
        <Fonctionnalites />
        <Temoignages />
        <Tarifs />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
