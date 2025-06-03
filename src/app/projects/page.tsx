import NavBar from "@/components/NavBar";
import Project from "@/components/Project";
import ProjectsList from "../../utils/projectsList.json"
export default function Projects() {
    return (
        <main className="flex flex-col gap-5 row-start-2 items-center justify-between sm:items-start">
            <NavBar />
            <div className="w-full flex flex-col sm:flex-row justify-center items-start flex-wrap gap-y-5 gap-x-10 text-white pb-10 px-5 sm:px-52">
                {
                    ProjectsList.map((i, k) => (
                        <Project key={k} title={i.title} url={i.url} figma={i.figma} github={i.github} description={i.description} tech={i.tech} />
                    ))
                }
            </div>
        </main>
    );
}
