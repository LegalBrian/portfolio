"use client"
import Image from "next/image";
import Link from 'next/link'

export default function ButtonsHome() {


    return (
        <div className="flex flex-row gap-6">
            <Link href="https://www.linkedin.com/in/legal-brian" target="_blank" className="group border text-white border-white hover:bg-white flex flex-row gap-2 hover:text-black duration-300 cursor-pointer button">
                <Image
                    className="group-hover:invert"
                    src="/linkedin.svg"
                    alt="elipse"
                    width={16}
                    height={16}
                />
                <p className="hidden group-hover:inline-block transition-opacity duration-500 text-xs">Linkedin</p>
            </Link>
            <Link href="mailto:legalbriandev@gmail.com" target="_blank" className="group border text-white border-white hover:bg-white flex flex-row gap-2 hover:text-black duration-300 cursor-pointer button">
                <Image
                    className="group-hover:invert"
                    src="/mail.svg"
                    alt="elipse"
                    width={16}
                    height={16}
                />
                <p className="hidden group-hover:inline-block transition-opacity duration-500 text-xs">Email</p>
            </Link>
            <Link href="https://github.com/LegalBrian" target="_blank" className="group border text-white border-white hover:bg-white flex flex-row gap-2 hover:text-black duration-300 cursor-pointer button">
                <Image
                    className="group-hover:invert"
                    src="/github.svg"
                    alt="elipse"
                    width={16}
                    height={16}
                />
                <p className="hidden group-hover:inline-block transition-opacity duration-500 text-xs">Github</p>
            </Link>
            <Link href="/curriculum.pdf" download={true} className="group border text-white border-white hover:bg-white flex flex-row gap-2 hover:text-black duration-300 cursor-pointer button">
                <Image
                    className="group-hover:invert"
                    src="/download.svg"
                    alt="elipse"
                    width={16}
                    height={16}
                />
                <p className="hidden group-hover:inline-block transition-opacity duration-500 text-xs">Curriculum</p>
            </Link>
        </div>
    )
}