import AboutSection from "@/components/about";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import Top from "@/components/top";

export default function Home() {
  return (      
      <main>
        <Top />
        <Projects />
        <AboutSection isHome />
        <Contact />
      </main>    
  );
}
