import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 row-start-2 items-center justify-between sm:items-start h-dvh">
      <div className="text-white text-xs gap-3 flex items-center justify-center w-full py-4">
        <button className="px-2 py-1 rounded-lg hover:bg-white hover:text-black transition duration-400 cursor-pointer">Inicio</button>
        <button className="px-2 py-1 rounded-lg hover:bg-white hover:text-black transition duration-400 cursor-pointer">Experiencia</button>
        <button className="px-2 py-1 rounded-lg hover:bg-white hover:text-black transition duration-400 cursor-pointer">Proyectos</button>
      </div>
      <div className="h-full w-full flex items-center justify-center gap-5">
        <div className="text-white w-[450px] flex flex-col text-start gap-5">
          <h1 className="font-bold text-7xl/normal text-shadow-black text-shadow-2xs opacity-80 typing-container">Brian Legal</h1>
          <h2 className="font-bold text-2xl/normal text-shadow-black text-shadow-2xs opacity-80">Full Stack Developer</h2>
          <p className="text-xs/normal text-shadow-black text-shadow-2xs opacity-80">Innovador Desarrollador con una sólida experiencia de más de dos años en desarrollo Full Stack implementando interfaces atractivas y funcionales, además de asegurar la escalabilidad y el mantenimiento óptimo de aplicaciones.</p>
          <div className="flex flex-row gap-6">
            <button className="group px-2 py-1 border text-white border-white rounded hover:bg-white flex flex-row gap-2 hover:text-black duration-300 cursor-pointer">
              <Image
                className="group-hover:invert"
                src="/github.svg"
                alt="elipse"
                width={16}
                height={16}
              />
              <p className="hidden group-hover:inline-block transition-opacity duration-500 text-xs">Github</p>
            </button>
            <button className="group px-2 py-1 border text-white border-white rounded hover:bg-white flex flex-row gap-2 hover:text-black duration-300 cursor-pointer">
              <Image
                className="group-hover:invert"
                src="/linkedin.svg"
                alt="elipse"
                width={16}
                height={16}
              />
              <p className="hidden group-hover:inline-block transition-opacity duration-500 text-xs">Linkedin</p>
            </button>
            <button className="group px-2 py-1 border text-white border-white rounded hover:bg-white flex flex-row gap-2 hover:text-black duration-300 cursor-pointer">
              <Image
                className="group-hover:invert"
                src="/mail.svg"
                alt="elipse"
                width={16}
                height={16}
              />
              <p className="hidden group-hover:inline-block transition-opacity duration-500 text-xs">Email</p>
            </button>
            <button className="group px-2 py-1 border text-white border-white rounded hover:bg-white flex flex-row gap-2 hover:text-black duration-300 cursor-pointer">
              <Image
                className="group-hover:invert"
                src="/download.svg"
                alt="elipse"
                width={16}
                height={16}
              />
              <p className="hidden group-hover:inline-block transition-opacity duration-500 text-xs">Descargar CV</p>
            </button>
          </div>
        </div>
        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
          <Image
            className="opacity-70 absolute spin"
            src="/elipse.svg"
            alt="elipse"
            width={500}
            height={500}
            priority
          />
          <Image
            className="relative opacity-85"
            src="/image.svg"
            alt="image"
            width={360}
            height={360}
            priority
          />
        </div>
      </div>
    </main>

  );
}
