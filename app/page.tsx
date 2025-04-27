import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative h-dvh w-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll">
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}
