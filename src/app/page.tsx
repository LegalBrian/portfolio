import ButtonsHome from "@/components/ButtonsHome";
import ImageHome from "@/components/ImageHome";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 row-start-2 items-center justify-between sm:items-start h-dvh">
      <div className="text-white text-xs gap-3 flex items-center justify-center w-full py-4">
        <button className="px-2 py-1 rounded-lg hover:bg-white hover:text-black transition duration-400 cursor-pointer">Inicio</button>
        <button className="px-2 py-1 rounded-lg hover:bg-white hover:text-black transition duration-400 cursor-pointer">Experiencia</button>
        <button className="px-2 py-1 rounded-lg hover:bg-white hover:text-black transition duration-400 cursor-pointer">Proyectos</button>
      </div>
      <div className="h-full w-full flex flex-col sm:flex-row-reverse items-center justify-center gap-5">
        <ImageHome />
        <div className="text-white w-[280px] sm:w-[450px] flex flex-col items-center sm:items-start text-center sm:text-start gap-5">
          <h1 className="font-bold text-5xl/normal sm:text-7xl/normal text-shadow-black text-shadow-2xs opacity-80 w-64 sm:w-96 cssanimation typing sequence">Brian Legal</h1>
          <h2 className="font-bold text-2xl/normal text-shadow-black text-shadow-2xs opacity-80">Full Stack Developer</h2>
          <p className="text-xs/normal text-shadow-black text-shadow-2xs opacity-80">Innovador Desarrollador con una sólida experiencia de más de dos años en desarrollo Full Stack implementando interfaces atractivas y funcionales, además de asegurar la escalabilidad y el mantenimiento óptimo de aplicaciones.</p>
          <ButtonsHome />
        </div>
      </div>
    </main>

  );
}
