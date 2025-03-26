import Image from "next/image";
import Link from "next/link";
import React from "react";
import Socials from "./socials";

const AboutSection = ({ isHome }: { isHome: boolean }) => {
  const styles = {
    isHome: {
      container:
        "flex justify-between items-center max-sm:flex-col flex-row max-w-[1224px] m-auto px-4 max-lg:py-16 py-20 border-b border-b-[#484848]",
      first: "sm:max-w-[544px] w-full flex flex-col items-start justify-center",
      paragraph:
        "max-lg:text-base/[160%] text-[18px]/[150%] font-manrope text-[#C7C7C7] max-w-[600px]",
      containerImage:
        "w-full h-[400px] sm:w-[500px] sm:h-full max-sm:mt-16 bg-[#C7C7C7] rounded-2xl flex items-end justify-center",
    },
    noHome: {
      container:
        "flex justify-between items-center flex-col max-w-[1224px] m-auto px-4 max-lg:py-16 py-20",
      first: "w-full flex max-sm:flex-col flex-row items-start justify-between",
      paragraph:
        "max-lg:text-base/[160%] text-[18px]/[150%] font-manrope text-[#C7C7C7] max-w-[600px] mb-12",
      containerImage:
        "w-full h-[400px] sm:h-full max-sm:mt-16 bg-[#C7C7C7] rounded-2xl flex items-end justify-center max-sm:mt-20 mt-30",
    },
  };

  const ContainerDiv = isHome ? React.Fragment : "div";

  return (
    <section
      id="aboutMe"
      className={isHome ? styles.isHome.container : styles.noHome.container}
    >
      <div className={isHome ? styles.isHome.first : styles.noHome.first}>
        <h3 className="max-lg:text-[43px]/[100%] text-[76px]/[100%] font-bebas text-white">
          ACERCA DE MI
        </h3>
        <ContainerDiv>
          <p className="max-lg:text-base/[160%] text-[32px]/[150%] font-manrope text-white mb-4">
            Bachiller en Ing. de Sistemas
          </p>
          <p
            className={
              isHome ? styles.isHome.paragraph : styles.noHome.paragraph
            }
          >
            <b>
              Bachiller en Ingeniería de Sistemas con especialización en
              desarrollo frontend web.
            </b>{" "}
            Proactivo y orientado a resultados, con habilidades técnicas y
            blandas que favorecen el trabajo en equipo. Me especializo en el
            desarrollo de aplicaciones y sitios web empresariales, contribuyendo
            a la optimización de procesos y al cumplimiento de objetivos.
            Siempre en busca de nuevos desafíos, listo para aportar valor a tu
            equipo. ¡Hablemos! 🚀
          </p>
          {!isHome && <Socials textButton="DESCARGA CV" />}
        </ContainerDiv>
        {isHome && (
          <Link
            href="/about"
            className="flex text-[#D3E97A] text-[14px]/[150%] font-bold font-manrope max-sm:mt-6 mt-[53px] underline underline-offset-2"
          >
            MÁS ACERCA DE MÍ
          </Link>
        )}
      </div>
      <div
        className={
          isHome ? styles.isHome.containerImage : styles.noHome.containerImage
        }
      >
        <Image
          src="/img-martin-2.png"
          alt="Martin Nuñez Navarro"
          width={300}
          height={400}
          className="w-full max-sm:h-[400px] h-[500px] object-contain"
        />
      </div>
    </section>
  );
};

export default AboutSection;
