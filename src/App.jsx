import Lenis from "@studio-freight/lenis";
import "./App.css";
import { AnimatedHero } from "./components/AnimatedHero";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Example from "./components/HorizontalCarousel";

function App() {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  return (
    <>
      <Navbar />
      <Header />
      <AnimatedHero />
      <Services/>
      <Example/>
    </>
  );
}

export default App;
