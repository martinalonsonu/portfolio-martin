import Image from "next/image";
import Socials from "./socials";
import TopGridBackground from "./TopGridBackground";
import clsx from "clsx";

const Top = () => {
  return (
    <section
      id="top"
      className={clsx(
        "relative w-full mx-auto py-14 px-4 flex flex-col items-center justify-center overflow-hidden",
        "md:py-20",
      )}
    >
      <TopGridBackground />

      {/* Content */}
      <div
        className={clsx(
          "relative z-10 flex flex-col items-center justify-center max-w-2xl text-center",
        )}
      >
        {/* Avatar */}
        <div
          className={clsx(
            "w-24 h-24 rounded-full bg-gradient-to-b flex items-center justify-center shadow-lg border-2 border-cyan-400 mb-6",
            "md:w-32 md:h-32",
          )}
        >
          <Image
            src="/img-martin-nunez.png"
            alt="Martin Nuñez"
            width={128}
            height={128}
            className={clsx(
              "w-full h-full rounded-full object-cover object-top",
            )}
            priority
          />
        </div>

        {/* Name */}
        <h1
          className={clsx(
            "text-5xl leading-tight tracking-[-2px] font-bold",
            "md:text-7xl md:tracking-[-5px]",
          )}
        >
          Martin Nuñez
        </h1>

        {/* Subtitle */}
        <div className={clsx("flex items-center gap-2 mb-4")}>
          <p
            className={clsx(
              "text-lg font-semibold gradient-subtitle",
              "md:text-2xl",
            )}
          >
            Software Frontend Engineer
          </p>
          <span>🧑‍💻</span>
        </div>

        {/* Description */}
        <p className={clsx("text-sm leading-relaxed mb-6", "md:text-base")}>
          Un ingeniero de sistemas apasionado por el desarrollo web, enfocado en
          crear experiencias accesibles y amigables para el usuario.
        </p>

        {/* Button */}
        <Socials />
      </div>
    </section>
  );
};

export default Top;
