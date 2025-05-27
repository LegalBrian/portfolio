import Link from 'next/link'

export default function NavBar() {

    return (
        <div className="text-white text-xs gap-3 flex items-center justify-center w-full py-4">
            <Link href="/" className="px-2 py-1 rounded-lg hover:bg-white hover:text-black transition duration-400 cursor-pointer">Inicio</Link>
            <Link href="/experience" className="px-2 py-1 rounded-lg hover:bg-white hover:text-black transition duration-400 cursor-pointer">Experiencia</Link>
            <Link href="/projects" className="px-2 py-1 rounded-lg hover:bg-white hover:text-black transition duration-400 cursor-pointer">Proyectos</Link>
        </div>
    )
}