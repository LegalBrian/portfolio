import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
    text: string,
    url: string
    download?: boolean
}

export default function Button({ text, url, download }: ButtonProps) {

    return (
        <Link href={url} target="_blank" download={download} className="group border bg-black/60 text-white border-white hover:bg-white flex flex-row gap-2 hover:text-black duration-300 cursor-pointer button">
            <Image
                className="group-hover:invert"
                src={`/${text.toLowerCase()}.svg`}
                alt="elipse"
                width={16}
                height={16}
            />
            <p className="hidden group-hover:inline-block transition-opacity duration-500 text-xs">{text}</p>
        </Link>
    )
}