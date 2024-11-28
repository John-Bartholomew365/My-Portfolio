// import Alright from "@/components/alright/Alright";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Process from "@/components/process/Process";
import Project from "@/components/project/Project";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Process/>
        <Contact/>
        <Project/>
      </div>
    </main>
  );
}
