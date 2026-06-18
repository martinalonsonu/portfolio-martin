import AboutSection from "@/components/about";
import ExperienceSection from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Top from "@/components/top";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Top />
        <ExperienceSection />
        <Projects />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
