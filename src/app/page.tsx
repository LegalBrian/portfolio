import Button from "@/components/Button";
import ImageHome from "@/components/ImageHome";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 row-start-2 items-center justify-between sm:items-start h-dvh">
      <NavBar />
      <div className="h-full w-full flex flex-col sm:flex-row-reverse items-center justify-center gap-5">
        <ImageHome />
        <div className="text-white w-[280px] sm:w-[450px] flex flex-col items-center sm:items-start text-center sm:text-start gap-5">
          <h1 className="font-bold text-5xl/normal sm:text-7xl/normal text-shadow-black text-shadow-2xs opacity-80 w-64 sm:w-96 cssanimation typing sequence">Brian Legal</h1>
          <h2 className="font-bold text-2xl/normal text-shadow-black text-shadow-2xs opacity-80">Full Stack Developer</h2>
          <p className="text-base/normal text-shadow-black text-shadow-2xs opacity-80">Innovador Desarrollador con una sólida experiencia de más de dos años en desarrollo Full Stack implementando interfaces atractivas y funcionales, además de asegurar la escalabilidad y el mantenimiento óptimo de aplicaciones.</p>
          <div className="flex flex-row gap-6">
            <Button url="https://www.linkedin.com/in/legal-brian" text="LinkedIn" />
            <Button url="mailto:legalbriandev@gmail.com" text="Email" />
            <Button url="https://github.com/LegalBrian" text="Github" />
            <Button url="/curriculum.pdf" text="Curriculum" download={true} />
          </div>
        </div>
      </div>
    </main>
  );
}
