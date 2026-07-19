"use client";

import { useState } from "react";
import { content, Lang } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Hero,
  About,
  Message,
  Strengths,
  Services,
  Testimonials,
  Company,
  Contact,
} from "@/components/SiteSections";

export default function Home() {
  const [lang, setLang] = useState<Lang>("ja");
  const c = content[lang];

  return (
    <>
      <Header c={c} lang={lang} onToggleLang={setLang} />
      <main className="flex-1">
        <Hero c={c} />
        <About c={c} />
        <Message c={c} />
        <Strengths c={c} />
        <Services c={c} />
        <Testimonials c={c} />
        <Company c={c} />
        <Contact c={c} />
      </main>
      <Footer c={c} />
    </>
  );
}
