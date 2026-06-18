"use client";

import useTheme from "@/hooks/useTheme";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

const Header = () => {
  const { toggleTheme, theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className={clsx(
          "w-full sticky top-0 left-0 z-50 bg-transparent backdrop-blur-sm",
        )}
      >
        <div
          className={clsx(
            "max-w-[1224px] mx-auto px-4 py-4 grid items-center gap-4",
            "md:px-6",
            "grid-cols-[auto_1fr_auto]",
          )}
        >
          <Link
            href="/#top"
            className={clsx("text-lg font-bold", "md:text-xl")}
          >
            Martin Nuñez
          </Link>
          {/* Desktop Navigation */}
          <nav className={clsx("hidden justify-center", "md:flex")}>
            <ul
              className={clsx("flex items-center justify-center gap-8 text-sm")}
            >
              <li>
                <Link href="/#experience">Experiencia</Link>
              </li>
              <li>
                <Link href="/#services">Servicios</Link>
              </li>
              <li>
                <Link href="/#projects">Proyectos</Link>
              </li>
              <li>
                <Link href="/#about">Acerca de mí</Link>
              </li>

              <li
                className={clsx(
                  "border-[#4FC3F7] border-[1px] rounded-md px-3 py-1",
                )}
              >
                <Link href="mailto:martin99huacho@gmail.com">Contacto</Link>
              </li>
            </ul>
          </nav>

          {/* Mobile/Tablet Controls */}
          <div
            className={clsx("flex items-center justify-end gap-3", "md:gap-4")}
          >
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={clsx("cursor-pointer", "md:hidden")}
            >
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0H6C6.26522 0 6.51957 0.105357 6.70711 0.292893C6.89464 0.48043 7 0.734784 7 1C7 1.26522 6.89464 1.51957 6.70711 1.70711C6.51957 1.89464 6.26522 2 6 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM8 8H13C13.2652 8 13.5196 8.10536 13.7071 8.29289C13.8946 8.48043 14 8.73478 14 9C14 9.26522 13.8946 9.51957 13.7071 9.70711C13.5196 9.89464 13.2652 10 13 10H8C7.73478 10 7.48043 9.89464 7.29289 9.70711C7.10536 9.51957 7 9.26522 7 9C7 8.73478 7.10536 8.48043 7.29289 8.29289C7.48043 8.10536 7.73478 8 8 8ZM1 4H13C13.2652 4 13.5196 4.10536 13.7071 4.29289C13.8946 4.48043 14 4.73478 14 5C14 5.26522 13.8946 5.51957 13.7071 5.70711C13.5196 5.89464 13.2652 6 13 6H1C0.734784 6 0.48043 5.89464 0.292893 5.70711C0.105357 5.51957 0 5.26522 0 5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4Z"
                  fill={theme === "dark" ? "#ffffff" : "#000000"}
                />
              </svg>
            </button>

            {/* Theme Toggle Button */}
            <button onClick={toggleTheme} className={clsx("cursor-pointer")}>
              {theme === "dark" ? (
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.75 22.9722C19.7387 22.9722 22.9722 19.7387 22.9722 15.75C22.9722 11.7613 19.7387 8.52778 15.75 8.52778C11.7613 8.52778 8.52778 11.7613 8.52778 15.75C8.52778 19.7387 11.7613 22.9722 15.75 22.9722Z"
                    stroke="#E1E1E1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.08333 27.4167L5.19444 26.3056M26.3056 26.3056L27.4167 27.4167M26.3056 5.19444L27.4167 4.08333M5.19444 5.19444L4.08333 4.08333M2.97222 15.75H0.75M30.75 15.75H28.5278M15.75 28.5278V30.75M15.75 0.75V2.97222"
                    stroke="#E1E1E1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.1975 19.1563C26.4525 18.5488 25.7238 18.0313 25.1125 18.3013C23.8907 18.8376 22.5706 19.1134 21.2362 19.1113C16.005 19.1113 11.765 14.9563 11.765 9.83C11.7631 8.09918 12.2548 6.40371 13.1825 4.9425C13.5375 4.3825 13.1112 3.6075 12.4613 3.7725C7.45 5.05125 3.75 9.51625 3.75 14.8275C3.75 21.1363 8.96875 26.25 15.4075 26.25C20.2825 26.25 24.4575 23.3188 26.1975 19.1563Z"
                    fill="#484E53"
                  />
                  <path
                    d="M19.5136 3.87875C18.8511 3.43625 18.0611 4.22625 18.5024 4.88875L19.2899 6.07C19.6093 6.54896 19.7798 7.11178 19.7798 7.6875C19.7798 8.26322 19.6093 8.82605 19.2899 9.305L18.5024 10.4863C18.0611 11.1488 18.8524 11.9388 19.5149 11.4963L20.6949 10.7088C21.1738 10.3893 21.7367 10.2188 22.3124 10.2188C22.8881 10.2188 23.4509 10.3893 23.9299 10.7088L25.1111 11.4963C25.7736 11.9388 26.5636 11.1488 26.1211 10.4863L25.3336 9.305C25.0142 8.82605 24.8437 8.26322 24.8437 7.6875C24.8437 7.11178 25.0142 6.54896 25.3336 6.07L26.1211 4.88875C26.5636 4.22625 25.7736 3.43625 25.1099 3.87875L23.9299 4.66625C23.4509 4.98571 22.8881 5.15619 22.3124 5.15619C21.7367 5.15619 21.1738 4.98571 20.6949 4.66625L19.5136 3.87875Z"
                    fill="#484E53"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Sidebar Navigation */}
      {menuOpen && (
        <div
          className={clsx(
            "fixed inset-0 top-16 bg-card backdrop-blur-sm z-40",
            "md:hidden",
          )}
        >
          <nav className={clsx("bg-card w-full h-screen flex flex-col")}>
            <ul className={clsx("flex flex-col gap-6 p-6 text-lg")}>
              <li>
                <a href="#experience" onClick={() => setMenuOpen(false)}>
                  Experiencia
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setMenuOpen(false)}>
                  Servicios
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setMenuOpen(false)}>
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  Acerca de mi
                </a>
              </li>
              <li
                className={clsx(
                  "border-[#4FC3F7] border-[1px] rounded-md px-3 py-2 inline-block",
                )}
              >
                <a
                  href="mailto:martin99huacho@gmail.com"
                  onClick={() => setMenuOpen(false)}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
