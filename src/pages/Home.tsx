import About from "../components/About";
import Project from "../components/Project";
// import Testimonial from "./components/Testimonial";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Service from "../components/Service";
import WhatsAppButton from "../components/WhatsAppButton";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Kodeintekno – Solusi Digital & Pengembangan Sistem</title>
        <meta
          name="description"
          content="Kodeintekno adalah perusahaan teknologi yang menyediakan layanan pengembangan perangkat lunak, website, dan solusi digital berbasis kebutuhan bisnis, dengan fokus pada kualitas, inovasi, dan pengembangan talenta teknologi."
        />
      </Helmet>
      <WhatsAppButton />
      <Hero />
      <About />
      <Service />
      <Project />
      {/* <Testimonial /> */}
      <Contact />
    </>
  );
}
