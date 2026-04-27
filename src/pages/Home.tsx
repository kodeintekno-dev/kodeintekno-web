import About from "../components/About";
import Project from "../components/Project";
// import Testimonial from "./components/Testimonial";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Service from "../components/Service";
import WhatsAppButton from "../components/WhatsAppButton";
import Segmentation from "../components/Segmentation";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Kodeintekno – Solusi Digital & Inovasi Dampak Sosial</title>
        <meta
          name="description"
          content="Kodeintekno adalah mitra solusi digital untuk bisnis dan program CSR. Kami menghadirkan teknologi yang memacu pertumbuhan sekaligus menciptakan dampak sosial yang berkelanjutan."
        />
      </Helmet>
      <WhatsAppButton />
      <Hero />
      <Segmentation />
      <About />
      <Service />
      <Project />
      {/* <Testimonial /> */}
      <Contact />
    </>
  );
}
