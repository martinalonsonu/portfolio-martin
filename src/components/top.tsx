import Image from "next/image";
import Socials from "./socials";

const Top = () => {
  return (
    <section className="max-w-[1224px] w-full mx-auto mt-7 flex flex-col sm:flex-row items-center justify-center gap-16 sm:gap-20 pb-16 sm:pb-20 border-b border-b-[#484848] px-4">
      <div className="sm:max-w-[544px] w-full flex flex-col items-start justify-center">
        <h2 className="font-bebas text-white max-lg:text-5xl text-8xl mb-2">
          Hola, soy <br /> Martin Nuñez.
        </h2>
        <p className="text-[#C7C7C7] max-lg:text-base text-[18px] mb-10 font-manrope">
          Un ingeniero de sistemas apasionado por el desarrollo web, enfocado en
          crear experiencias accesibles y amigables para el usuario.
        </p>
        <Socials textButton="CONTÁCTAME" />
      </div>
      <div className="w-[343px] h-[400px] sm:w-[600px] sm:h-full bg-[#C7C7C7] rounded-2xl flex items-end justify-center">
        <Image
          src="/img-martin.png"
          alt="Martin Nuñez Navarro"
          width={550}
          height={400}
          className="w-full"
          decoding="async"
          priority
        />
      </div>
    </section>
  );
};

export default Top;
