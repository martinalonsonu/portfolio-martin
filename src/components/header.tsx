import Link from "next/link";

const Header = () => {
    return (
        <header className="w-full px-14 py-6 flex justify-between items-center sticky top-0 bg-black/60 backdrop-blur-md">
            <Link href='/'>
                <h1 className="text-white text-[32px]/[150%] font-bebas font-normal">Martin Nuñez</h1>
            </Link>
            <nav>
            <ul className="max-sm:hidden gap-5 flex text-white text-base/[24px] font-inter font-normal">
                <li className="flex items-center"><Link href="#">Proyectos</Link></li>                
                <li className="flex items-center"><Link href="#">Acerca de mi</Link></li>                
                <li className="flex items-center"><Link href="#">Contacto</Link></li>                
            </ul>
            </nav>
            <svg
                width={17}
                height={17}
                className="sm:hidden"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg" >
                <path fill="none" d="M0 0h16v16H0z" />
                <path fill="#fff" d="M1 9h14V7H1zm0 5h14v-2H1zM1 2v2h14V2z" />
            </svg>
        </header>
    )
}

export default Header;