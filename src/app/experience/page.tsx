import Job from "@/components/Job";
import NavBar from "@/components/NavBar";

export default function Experience() {

    const frameworks: string[] = [
        "JavaScript",
        "TypeScript",
        "Python",
        "Node.js",
        "Express",
        "React.js",
        "Next.js",
        "Redux",
        "React Native"
    ]

    const frontend: string[] = [
        "HTML",
        "CSS",
        "Tailwind",
        "Responsive Desing"
    ]

    const backend: string[] = [
        "MySQL",
        "PostgreSQL",
        "API Rest",
        "Responsive Desing"
    ]

    const tools: string[] = [
        "Git",
        "Postman",
        "Figma",
        "Expo"
    ]

    const soft: string[] = [
        "SCRUM",
        "Comunicación efectiva",
        "Resolución de problemas",
        "Trabajo en equipo",
        "Adaptabilidad",
        "Enfoque a resultados",
        "Buenas prácticas"
    ]

    return (
        <main className="h-dvh flex flex-col gap-5 row-start-2 items-center justify-between sm:items-start">
            <NavBar />
            <div className="w-full flex flex-col items-start justify-center gap-5 pb-10 px-5 sm:px-52 scroll-auto">
                <div className="w-full flex flex-row gap-2 items-center">
                    <h1 className="text-lg font-bold text-white">Trayectoria</h1>
                    <div className="bg-white/40 h-[1px] w-full" />
                </div>
                <div className="flex flex-col">
                    <Job
                        type="end"
                        title="Full Stack Developer (Front-End Focus) - Abai"
                        country="España · En remoto"
                        date="mar. 2023 - may. 2025"
                        description={`• Diseñé y desarrollé interfaces de usuario atractivas, intuitivas y accesibles para aplicaciones web, asegurando una experiencia fluida en diferentes plataformas y dispositivos.\n• Implementé diseños responsivos garantizando compatibilidad y rendimiento óptimo en distintos tamaños de pantalla.\n• Optimizé el rendimiento y la velocidad de carga de las interfaces mediante buenas prácticas de desarrollo, lazy loading y minimización de recursos.\n• Colaboré de forma activa con equipos de diseño UX/UI y back-end, integrando APIs y asegurando una comunicación eficaz entre cliente y servidor.\n• Realicé correcciones de bugs y tareas de mantenimiento continuo para garantizar la calidad del código y la estabilidad de las aplicaciones en producción.`}
                    />
                </div>
                <div className="w-full flex flex-row gap-2 items-center">
                    <h1 className="text-lg font-bold text-white">Habilidades</h1>
                    <div className="bg-white/40 h-[1px] w-full" />
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-base text-white/80">Lenguajes & Frameworks</h2>
                    <div className="flex flex-wrap gap-5">
                        {
                            frameworks.map((i) => (
                                <p className="px-2 py-1 border border-white/40 text-center rounded-md text-sm text-white/60">{i}</p>
                            ))
                        }
                    </div>
                    <h2 className="text-base text-white/80">Frontend</h2>
                    <div className="flex flex-wrap gap-5">
                        {
                            frontend.map((i) => (
                                <p className="px-2 py-1 border border-white/40 text-center rounded-md text-sm text-white/60">{i}</p>
                            ))
                        }
                    </div>
                    <h2 className="text-base text-white/80">Bases de datos & Backend</h2>
                    <div className="flex flex-wrap gap-5">
                        {
                            backend.map((i) => (
                                <p className="px-2 py-1 border border-white/40 text-center rounded-md text-sm text-white/60">{i}</p>
                            ))
                        }
                    </div>
                    <h2 className="text-base text-white/80">Herramientas</h2>
                    <div className="flex flex-wrap gap-5">
                        {
                            tools.map((i) => (
                                <p className="px-2 py-1 border border-white/40 text-center rounded-md text-sm text-white/60">{i}</p>
                            ))
                        }
                    </div>
                    <h2 className="text-base text-white/80">Soft Skills</h2>
                    <div className="flex flex-wrap gap-5">
                        {
                            soft.map((i) => (
                                <p className="px-2 py-1 border border-white/40 text-center rounded-md text-sm text-white/60">{i}</p>
                            ))
                        }
                    </div>
                </div>
                <div className="w-full flex flex-row gap-2 items-center">
                    <h1 className="text-lg font-bold text-white">Educación</h1>
                    <div className="bg-white/40 h-[1px] w-full" />
                </div>
                <div className="flex flex-col">
                    <Job
                        type="start"
                        title="Ingeniería electrónica - Universidad Nacional de Moreno (UNM)"
                        country="Buenos Aires, Argentina"
                        date="feb. 2024 - actualmente"
                        description="Actualmente cursando la carrera de Ingeniería Electrónica, donde desarrollo habilidades en matemáticas, lógica computacional y electrónica digital. Esta formación complementa mi perfil como desarrollador al fortalecer mi capacidad de análisis y resolución de problemas complejos."
                    />
                    <Job
                        type="end"
                        title="Full Stack Web Developer - Henry"
                        country="Buenos Aires, Argentina"
                        date="oct. 2022 - feb. 2023"
                        description="Bootcamp intensivo de más de 800 horas prácticas, enfocado en tecnologías como JavaScript, Node.js, React, PostgreSQL, y metodologías ágiles. Participé en un proyecto final colaborativo, simulando un entorno laboral real bajo la metodología SCRUM. Reforcé habilidades de desarrollo full stack, trabajo en equipo y resolución de problemas en entornos reales."
                    />
                </div>
            </div>
        </main>
    );
}
