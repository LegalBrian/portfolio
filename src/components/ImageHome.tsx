import Image from "next/image";

export default function ImageHome() {
    return (
        <div className="relative w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] flex items-center justify-center">
            <Image
                className="opacity-70 absolute spin"
                src="/elipse.svg"
                alt="elipse" fill
                sizes="(max-width: 500px)"
                priority
            />
            <div className="relative opacity-85 w-[200px] h-[200px] sm:w-[360px] sm:h-[360px]">
                <Image
                    src="/image.svg"
                    alt="image"
                    fill
                    sizes="(max-width: 360px)"
                    priority
                />
            </div>
        </div>
    )
}