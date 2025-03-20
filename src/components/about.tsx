import Image from "next/image"
import Link from "next/link"

const AboutSection = () => {
    return (
        <section id="aboutMe" className="flex justify-between items-center max-sm:flex-col flex-row max-w-[1224px] m-auto px-4 max-lg:py-16 py-20 border-b border-b-[#484848]">
            <div className="sm:max-w-[544px] w-full flex flex-col items-start justify-center">
                <h3 className="max-lg:text-[43px]/[100%] text-[76px]/[100%] font-bebas text-white">ACERCA DE MI</h3>
                <p className="max-lg:text-base/[160%] text-[32px]/[150%] font-manrope text-white mb-4">Bachiller en Ing. de Sistemas</p>
                <p className="max-lg:text-base/[160%] text-[18px]/[150%] font-manrope text-[#C7C7C7] max-w-[600px]"><b>Bachiller en Ingeniería de Sistemas con especialización en desarrollo frontend web.</b> Proactivo y orientado a resultados, con habilidades técnicas y blandas que favorecen el trabajo en equipo. Me especializo en el desarrollo de aplicaciones y sitios web empresariales, contribuyendo a la optimización de procesos y al cumplimiento de objetivos. Siempre en busca de nuevos desafíos, listo para aportar valor a tu equipo. ¡Hablemos! 🚀</p>
                <Link href='/' target="_blank" className="flex text-[#D3E97A] text-[14px]/[150%] font-bold font-manrope max-sm:mt-6 mt-[53px] underline underline-offset-2">
                    MÁS ACERCA DE MÍ
                </Link>
            </div>
            <div className="w-full h-[400px] sm:w-[500px] sm:h-full max-sm:mt-16 bg-[#C7C7C7] rounded-2xl flex items-end justify-center">
                <Image src="/img-martin-2.png" alt="Martin Nuñez Navarro" width={300} height={400} className="w-full max-sm:h-[400px] h-[500px] object-contain" />
            </div>
        </section>
    )
}

export default AboutSection