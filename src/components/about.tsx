import React from "react";
import clsx from "clsx";

const AboutSection = () => {
  return (
    <section
      id="about"
      className={clsx(
        "flex flex-col items-center text-center max-w-[960px] mx-auto px-4 py-8",
        "md:py-16",
      )}
    >
      <h3 className={clsx("text-2xl font-bold", "md:text-3xl")}>
        Acerca de mí
      </h3>
      <p
        className={clsx(
          "text-lg font-semibold gradient-subtitle mb-6",
          "md:text-xl",
        )}
      >
        Conóceme
      </p>

      <p className={clsx("text-xs leading-relaxed", "md:text-base")}>
        <strong>
          Como Software Frontend Engineer, Bachiller en Ingeniería de Sistemas,
        </strong>{" "}
        cuento con experiencia en el desarrollo de soluciones web modernas en
        sectores como medios de comunicación y seguros. Mi trayectoria se ha
        centrado en la construcción de interfaces escalables, optimizadas y
        orientadas a la experiencia del usuario, participando activamente en
        entornos ágiles y colaborativos.
      </p>

      <p className={clsx("text-xs leading-relaxed mt-4", "md:text-base")}>
        Me apasiona crear soluciones digitales que comuniquen con claridad,
        optimicen procesos y generen valor real. Siempre busco nuevas formas de
        mejorar cada producto con tecnología moderna y un enfoque colaborativo.
      </p>

      <a
        href="/martin.nuñez-cv.pdf"
        download
        className={clsx(
          "mt-10 inline-flex items-center justify-center rounded-3xl border border-[#4FC3F7] bg-transparent px-8 py-3 text-base font-bold",
        )}
      >
        DESCARGAR CV
      </a>
    </section>
  );
};

export default AboutSection;
