import Image from "next/image";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experiences from "./components/Experience";
import VideoPlay from "./components/Video";
import Achievement from "./components/Achievement";
import Ref from "./components/Ref";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <VideoPlay />
      <Experiences />
      <Achievement />
      <Ref />
    </main>
  );
}
