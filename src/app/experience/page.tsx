import Job from "@/components/Job";
import Labels from "@/components/Labels";
import NavBar from "@/components/NavBar";
import SkillsList from "../../utils/skillsList.json"
import ExperienceList from "../../utils/experienceList.json"
import EducationList from "../../utils/educationList.json"

const Subtitle = ({ text }: { text: string }) => {
    return (
        <div className="w-full flex flex-row gap-2 items-center">
            <h1 className="text-lg font-bold text-white">{text}</h1>
            <div className="bg-white/40 h-[1px] w-full" />
        </div>
    )
}

export default function Experience() {
    return (
        <main className="flex flex-col gap-5 items-center justify-between sm:items-start">
            <NavBar />
            <div className="w-full flex flex-col items-start justify-center gap-5 pb-10 px-5 sm:px-52">
                <Subtitle text="Trayectoria" />
                <div className="flex flex-col">
                    {
                        ExperienceList.map((i, k) => (
                            <Job key={k} type={i.type} title={i.title} date={i.date} country={i.country} description={i.description} />
                        ))
                    }
                </div>
                <Subtitle text="Habilidades" />
                <div className="flex flex-col gap-5">
                    {
                        SkillsList.map((i, k) => (
                            <div key={k} className="flex flex-col gap-5">
                                <h2 className="text-base text-white/80">{i.title}</h2>
                                <Labels list={i.skills} />
                            </div>
                        ))
                    }
                </div>
                <Subtitle text="Educación" />
                <div className="flex flex-col">
                    {
                        EducationList.map((i, k) => (
                            <Job key={k} type={i.type} title={i.title} date={i.date} country={i.country} description={i.description} />
                        ))
                    }
                </div>
            </div>
        </main>
    );
}
