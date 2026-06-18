import React from "react";
import clsx from "clsx";

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: "1",
    title: "Software Frontend Engineer",
    company: "Rimac Seguros - Softtek",
    period: "jun. 2025 - actualidad",
    description:
      "Desarrollé funcionalidades para cotizadores digitales, optimicé rendimiento y mantuve contenido CMS. Trabajé con AWS y GitHub Actions, refactoricé React/TypeScript y participé en code reviews dentro de SCRUM.",
  },
  {
    id: "2",
    title: "Frontend Developer Junior",
    company: "Grupo El Comercio - RPA Latam",
    period: "dic. 2023 - jun. 2025",
    description:
      "Implementé front-end en ARC XP con React, mejoré SEO y performance, lideré el rediseño de Gestión y colaboré en code reviews con Git/GitLab en Scrum.",
  },
  {
    id: "3",
    title: "Frontend Developer",
    company: "INNAPSIS SAS S.A.C.",
    period: "jul. 2023 - dic. 2023",
    description:
      "Desarrollé un aplicativo de gestión para transporte de cargas y un proyecto e-commerce, creando formularios, tablas e integrando APIs REST con React, Redux y TypeScript.",
  },
  {
    id: "4",
    title: "Web FullStack Dev",
    company: "Yellow Patito - Pasantía",
    period: "jun. 2023 - jul. 2023",
    description:
      "Modularicé el proyecto, mejoré la interfaz con CSS Modules y desarrollé funcionalidades con React/Redux. También integré WebSockets con socket.io y apoyé backend en NodeJS/Express.",
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className={clsx(
        "flex flex-col items-center text-start max-w-[960px] mx-auto px-4 py-8",
        "md:py-16",
      )}
    >
      <h3 className={clsx("text-2xl font-bold", "md:text-3xl")}>
        Experiencia Laboral
      </h3>
      <p
        className={clsx(
          "text-lg font-semibold gradient-subtitle mb-10",
          "md:text-xl",
        )}
      >
        Mi trayectoria
      </p>

      <div className="w-full space-y-12">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="flex flex-col md:flex-row justify-between gap-4 md:gap-8"
          >
            <div className="flex gap-4 flex-shrink-0">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3" />
              </div>
              <div className="pt-0.5">
                <h4
                  className={clsx(
                    "text-lg md:text-xl font-bold gradient-subtitle",
                  )}
                >
                  {exp.title}
                </h4>
                <p className={clsx("text-base md:text-xs font-bold mt-0.5 ")}>
                  {exp.company}
                </p>
                <p
                  className={clsx(
                    "text-xs md:text-sm mt-0.5 whitespace-nowrap",
                  )}
                >
                  {exp.period}
                </p>
              </div>
            </div>
            <div className="w-full md:w-[60%]">
              <p
                className={clsx("text-xs md:text-sm leading-relaxed pt-1 px-5")}
              >
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
