import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const projectsArray = [
  {
    title: "Tabla Histórica - Copa Libertadores",
    description:
      "Aplicación interactiva que permite consultar la tabla histórica y diferentes parámetros de los equipos participantes de la competición a lo largo de los años. Permite consultar una clasificación por países y los clásicos de cada país en la competición.",
    year: "2025",
    role: "Full-Stack Developer",
    image: "/especial-libertadores.png",
    liveDemo:
      "https://especiales.elcomercio.pe/?q=especiales/copa-libertadores-tabla-historica/index.html",
  },
  {
    title: "Fixture Completo - Liga 1 Perú 2025",
    description:
      "Aplicación interactiva que permite consultar el fixture de la Liga 1 Perú 2025. Puedes clickear sobre tu equipo favorito y se resaltará en todas las tablas. Además puedes descargar un póster con el fixture.",
    year: "2025",
    role: "Full-Stack Developer",
    image: "/especial-fixture.png",
    liveDemo:
      "https://especiales.depor.com/fixture-liga-1-2025-peru-calendario-descarga-programacion-torneo-apertura-torneo-clausura-alianza-lima-universitario-cristal-y-mas-multimedia/index.html",
  },
  {
    title: "Especial - Universitario de Deportes",
    description:
      "Aplicación interactiva para armar el once ideal histórico del Club Universitario de Deportes, con motivo de su aniversario 100. Además, se puede consultar el 11 y jugadores más votados.",
    year: "2024",
    role: "Full-Stack Developer",
    image: "/especial-universitario.png",
    liveDemo:
      "https://especiales.depor.com/club-universitario-de-deportes-arma-11-ideal-historia-club-trivia",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-[960px] m-auto px-4 py-8 md:py-16 text-center"
    >
      <h3 className={clsx("text-2xl font-bold", "md:text-3xl")}>
        Proyectos Destacados
      </h3>
      <p
        className={clsx(
          "text-lg font-semibold gradient-subtitle mb-6",
          "md:text-xl",
        )}
      >
        Visualiza mi trabajo
      </p>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projectsArray.map((prj, i) => (
          <article
            key={i}
            className="group overflow-hidden rounded-[28px] border border-[#292929] transition-all duration-300 hover:border-[#4FC3F7] bg-card"
          >
            <div className="relative overflow-hidden rounded-t-[28px]">
              <Image
                src={prj.image}
                alt={prj.title}
                width={400}
                height={240}
                className="h-[180px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="gradient-subtitle text-[20px] font-bold leading-tight mb-2">
                {prj.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4 line-clamp-4">
                {prj.description}
              </p>
              <Link
                href={prj.liveDemo}
                target="_blank"
                className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm"
              >
                Live Demo
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.99 19.218 16.304 8.904v7.485h2V5.49h-10.9v2h7.485L4.575 17.803z"
                    fill="#26C6DA"
                  />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
