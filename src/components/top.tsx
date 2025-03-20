import Link from "next/link"
import Image from "next/image"

const Top = () => {

    return (
    <section className="max-w-[1224px] w-full mx-auto mt-7 flex flex-col sm:flex-row items-center justify-center gap-16 sm:gap-20 pb-16 sm:pb-20 border-b border-b-[#484848] px-4">
        <div className="sm:max-w-[544px] w-full flex flex-col items-start justify-center">
            <h2 className="font-bebas text-white max-lg:text-5xl text-8xl mb-2">
              Hola, soy <br /> Martin Nuñez.
            </h2>
            <p className="text-[#C7C7C7] max-lg:text-base text-[18px] mb-10 font-manrope">
              Un ingeniero de sistemas apasionado por el desarrollo web, enfocado en crear experiencias accesibles y amigables para el usuario.
            </p>
            <div className="flex gap-4">
              <Link href="#contact" className="flex items-center justify-center bg-[#D3E97A] text-[#0A0A0A] font-manrope font-bold text-[14px] sm:text-base w-[163px] sm:w-[187px] h-[48px] sm:h-[54px] px-4 gap-1 py-[19px] rounded-4xl">
                CONTÁCTAME
                <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx={20} cy={20} r={20} fill="#0A0A0A" />
                  <path d="m14.991 26.015 8.595-8.595v6.238h1.667v-9.083H16.17v1.666h6.238l-8.595 8.595z" fill="#fff" />
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/in/martinalonsonu/" target="_blank">
                <svg width={54} height={54} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width={54} height={54} rx={27} fill="#222" />
                  <path d="M19.398 21.797a2.37 2.37 0 1 0 0-4.74 2.37 2.37 0 0 0 0 4.74m4.609 1.796v13.15h4.083V30.24c0-1.716.323-3.378 2.45-3.378 2.099 0 2.125 1.962 2.125 3.487v6.396h4.085v-7.212c0-3.543-.763-6.265-4.903-6.265-1.988 0-3.32 1.09-3.866 2.123h-.055v-1.798zm-6.654 0h4.09v13.15h-4.09z" fill="#D3E97A" />
                </svg>
              </Link>
              <Link href="https://github.com/martinalonsonu" target="_blank">
                <svg width={54} height={54} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width={54} height={54} rx={27} fill="#222" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M27.028 16.167c-5.968 0-10.805 4.837-10.805 10.805 0 4.773 3.095 8.824 7.39 10.254.54.097.735-.235.735-.521 0-.257-.009-.937-.012-1.838-3.006.652-3.641-1.45-3.641-1.45-.49-1.247-1.2-1.58-1.2-1.58-.98-.67.075-.655.075-.655 1.086.076 1.655 1.113 1.655 1.113.964 1.651 2.53 1.175 3.144.898.098-.698.38-1.175.688-1.445-2.399-.272-4.921-1.199-4.921-5.34 0-1.178.421-2.144 1.11-2.898-.11-.275-.484-1.374.107-2.86 0 0 .906-.292 2.97 1.106a10.3 10.3 0 0 1 2.704-.364c.913.001 1.823.123 2.704.364 2.065-1.399 2.97-1.106 2.97-1.106.591 1.486.22 2.585.108 2.86.693.754 1.11 1.719 1.11 2.897 0 4.153-2.525 5.065-4.932 5.333.384.333.731.992.731 2 0 1.445-.013 2.61-.013 2.965 0 .289.193.625.744.519 4.293-1.433 7.384-5.48 7.384-10.252 0-5.968-4.837-10.805-10.805-10.805" fill="#D3E97A" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="w-[343px] h-[400px] sm:w-[600px] sm:h-full bg-[#C7C7C7] rounded-2xl flex items-end justify-center">
            <Image src="/img-martin.png" alt="Martin Nuñez Navarro" width={550} height={400} className="w-full" />
          </div>
        </section>
    )
}

export default Top