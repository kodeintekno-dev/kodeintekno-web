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
        <title>Home | Kodeintekno</title>
        <meta name="description" content="Welcome to kodeintekno" />
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
