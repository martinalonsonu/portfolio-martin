import Header from "@/components/header";
import Projects from "@/components/projects";
import Top from "@/components/top";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Top />
        <Projects />
      </main>
    </>
  );
}
