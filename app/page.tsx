import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main>
      <section className="mb-[20px]  w-full max-w-[1300px] m-auto" id="hero">
        <Hero />
      </section>
      <section className="mb-[60px] w-full  m-auto" id="about">
        <About />
      </section>
      <section className="mb-[60px] w-full max-w-[1300px] m-auto" id="projects">
        <Projects />
      </section>
      <section id="contact" className="mb-[20px] w-full max-w-[1300px] m-auto">
        <Contact />
      </section>
    </main>
  );
}
