import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Library from "@/components/Library";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import ImageList from "@/components/ImageList";



export default async function Home() {

  return (
    <>
      <Menu />
      <Hero />
      <ImageList />
      <div className="mt-8 md:mt-18 md:mx-12 mx-4">
        <main className="flex flex-col justify-center items-center">
          <About />
          <Contact />
          <Library />
        </main>
        <Footer />
      </div>
    </>
  );
}
