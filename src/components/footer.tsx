import clsx from "clsx";
import Link from "next/link";
import Socials from "./socials";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={clsx("border-t border-[#303030] py-12")}>
      <div
        className={clsx(
          "max-w-[960px] mx-auto px-4",
          "flex flex-col gap-8",
          "md:flex-row md:items-center md:justify-between",
        )}
      >
        <div className="max-w-xl">
          <p
            className={clsx(
              "text-xs uppercase tracking-[0.35em] text-[#4FC3F7]",
              "mb-4",
            )}
          >
            Da el siguiente paso
          </p>
          <h2
            className={clsx(
              "text-[32px] font-bold leading-tight",
              "md:text-[42px]",
            )}
          >
            Trabajemos juntos -
          </h2>
        </div>

        <Link
          href="mailto:martin99huacho@gmail.com"
          className={clsx(
            "inline-flex items-center justify-center",
            "rounded-full border border-[#4FC3F7] bg-transparent",
            "px-5 py-3 text-sm font-semibold",
            "gradient-subtitle",
          )}
        >
          Contáctame
        </Link>
      </div>

      <div
        className={clsx(
          "max-w-[960px] mx-auto px-4 mt-10",
          "flex flex-col-reverse gap-6",
          "border-t border-[#303030] pt-6",
          "md:flex-row md:items-center md:justify-between",
        )}
      >
        <p className="text-sm">
          © (sin derechos reservados 😂) {year}. <br />
          Hecho con ❤️ por @martinalonsonu.
        </p>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
