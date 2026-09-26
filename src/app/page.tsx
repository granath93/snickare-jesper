"use client";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Library from "@/components/Library";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Services from "@/components/Services";
import { useTitleObserver } from "@/hooks/useTitleObserver";

export default function Home() {
  useTitleObserver()
  return (
    <>
      <Menu />
      <Hero />
      <div className="mt-8 md:mt-18 md:mx-12 mx-4">
        <main className="flex flex-col justify-center items-center">
          <About />
          <Contact />
          <Services />
          <Library />
        </main>
        <Footer />
      </div>
    </>
  );
}
