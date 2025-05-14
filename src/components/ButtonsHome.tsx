import Image from "next/image";

export default function ButtonsHome() {
    return (
        <div className="flex flex-row gap-6">
            <a href="https://www.linkedin.com/in/legal-brian" target="_blank" className="group border text-white border-white hover:bg-white flex flex-row gap-2 hover:text-black duration-300 cursor-pointer button">
                <Image
                    className="group-hover:invert"
                    src="/linkedin.svg"
                    alt="elipse"
                    width={16}
                    height={16}
                />
                <p className="hidden group-hover:inline-block transition-opacity duration-500 text-xs">Linkedin</p>
            </a>
            <a href="mailto:legalbriandev@gmail.com" target="_blank" className="group border text-white border-white hover:bg-white flex flex-row gap-2 hover:text-black duration-300 cursor-pointer button">
                <Image
                    className="group-hover:invert"
                    src="/mail.svg"
                    alt="elipse"
                    width={16}
                    height={16}
                />
                <p className="hidden group-hover:inline-block transition-opacity duration-500 text-xs">Email</p>
            </a>
            <a href="https://github.com/LegalBrian" target="_blank" className="group border text-white border-white hover:bg-white flex flex-row gap-2 hover:text-black duration-300 cursor-pointer button">
                <Image
                    className="group-hover:invert"
                    src="/github.svg"
                    alt="elipse"
                    width={16}
                    height={16}
                />
                <p className="hidden group-hover:inline-block transition-opacity duration-500 text-xs">Github</p>
            </a>
            <a href="/curriculum.pdf" download className="group border text-white border-white hover:bg-white flex flex-row gap-2 hover:text-black duration-300 cursor-pointer button">
                <Image
                    className="group-hover:invert"
                    src="/download.svg"
                    alt="elipse"
                    width={16}
                    height={16}
                />
                <p className="hidden group-hover:inline-block transition-opacity duration-500 text-xs">Descargar CV</p>
            </a>
        </div>
    )
}