'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'


export default function NavBar() {

    const pathname = usePathname()
    return (
        <div className="text-xs gap-3 flex items-center justify-center w-full py-4 bg-black/50">
            <Link href="/" className={`text-lg px-2 py-1 rounded-lg hover:bg-white hover:text-black transition duration-400 cursor-pointer ${pathname === "/" ? "bg-white text-black" : "text-white "}`}>Inicio</Link>
            <Link href="/experience" className={`text-lg px-2 py-1 rounded-lg hover:bg-white hover:text-black transition duration-400 cursor-pointer ${pathname === "/experience" ? "bg-white text-black" : "text-white "}`}>Experiencia</Link>
            <Link href="/projects" className={`text-lg px-2 py-1 rounded-lg hover:bg-white hover:text-black transition duration-400 cursor-pointer ${pathname === "/projects" ? "bg-white text-black" : "text-white "}`}>Proyectos</Link>
        </div>
    )
}