import Image from "next/image"
import Link from "next/link"

const projectsArray = [
    {title: 'Tabla Histórica - Copa Libertadores de América', description: 'Aplicación interactiva que permite consultar la tabla histórica y diferentes parámetros de los equipos participantes de la competición a lo largo de los años. Permite consultar una clasificación por países y los clásicos de cada país en la competición.', year: '2025', role: 'Full-Stack Developer', image: '/especial-libertadores.png', liveDemo: 'https://especiales.elcomercio.pe/?q=especiales/copa-libertadores-tabla-historica/index.html'},
    {title: 'Fixture - Liga 1 Perú 2025', description: 'Aplicación interactiva que permite consultar el fixture de la Liga 1 Perú 2025. Puedes clickear sobre tu equipo favorito y se resaltará en todas las tablas. Además puedes descargar un póster con el fixture.', year: '2025', role: 'Full-Stack Developer', image: '/especial-fixture.png', liveDemo: 'https://especiales.depor.com/fixture-liga-1-2025-peru-calendario-descarga-programacion-torneo-apertura-torneo-clausura-alianza-lima-universitario-cristal-y-mas-multimedia/index.html'},
    {title: 'Especial - Once Ideal Universitario de Deportes', description: 'Aplicación interactiva para armar el once ideal histórico del Club Universitario de Deportes, con motivo de su aniversario 100. Además, se puede consultar el 11 y jugadores más votados.', year: '2024', role: 'Full-Stack Developer', image: '/especial-universitario.png', liveDemo: 'https://especiales.depor.com/club-universitario-de-deportes-arma-11-ideal-historia-club-trivia'},
]

const Projects = () => {
    return (
        <section id="projects" className="max-w-[1224px] m-auto px-4 max-lg:py-16 py-20 border-b border-b-[#484848]">
            <h3 className="max-lg:text-[43px]/[100%] text-[76px]/[100%] font-bebas text-white">Proyectos Destacados</h3>
            <p className="max-lg:text-base/[160%] text-[18px]/[150%] font-manrope text-[#C7C7C7] max-w-[600px] max-lg:mb-16 mb-20">Estos son algunos de los proyectos seleccionados que muestran mi pasión por el desarrollo front-end.</p>
            <div className="max-sm:gap-[96px] gap-[120px] flex flex-col">
            {projectsArray.map((prj, i) => (
                <div key={i} className="flex max-sm:flex-col flex-row min-sm:gap-12">
                    <div className="min-sm:max-w-[600px] w-full flex justify-center items-center bg-[#1a1a1a] max-sm:px-7 max-sm:py-15 rounded-2xl">
                        <Image src={prj.image} alt={prj.title} width={450} height={320} className="rounded-2xl mx-7 min-sm:max-w-[450px] min-sm:max-h-[320px]"/>
                    </div>
                    <div>
                        <h3 className="text-white max-sm:text-[24px]/[140%] max-sm:mt-10 font-manrope text-[32px]/[140%]">{prj.title}</h3>
                        <p className="text-[#c7c7c7] max-sm:text-base/[160%] text-[18px]/[150%] mt-4 max-sm:mb-8 font-manrope">{prj.description}</p>
                        <div className="min-sm:mt-8">
                            <p className="text-white text-base font-semibold font-manrope pb-4 border-b border-[#454c51]">INFORMACIÓN DEL PROYECTO</p>
                            <p className="w-full flex justify-between text-base/[160%] py-4 text-white border-b border-[#454c51]">Año <span className="text-[#c7c7c7]">{prj.year}</span></p>
                            <p className="w-full flex justify-between text-base/[160%] py-4 text-white border-b border-[#454c51]">Rol <span className="text-[#c7c7c7]">{prj.role}</span></p>                            
                        </div>
                        <Link href={prj.liveDemo} target="_blank" className="flex text-[#D3E97A] text-[14px]/[150%] font-bold font-manrope max-sm:mt-10 mt-12 underline underline-offset-2">
                            LIVE DEMO
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)"><path d="M5.99 19.218 16.304 8.904v7.485h2V5.49h-10.9v2h7.485L4.575 17.803z" fill="#D3E97A"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>
                        </Link>
                    </div>
                </div>
            ))}        
            </div>
        </section>
    )
}

export default Projects