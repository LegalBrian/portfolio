import Labels from "./Labels";
import Button from "./Button";

interface ProjectProps {
    title: string;
    description: string;
    github: string;
    figma: string;
    url: string
    tech: string[];
}

export default function Project({
    title,
    description,
    github,
    figma,
    url,
    tech
}: ProjectProps) {
    return (
        <div className="pb-8 flex flex-col p-4 rounded-lg border border-white/40 max-w-[510px] gap-2 bg-black/70">
            <h3 className="text-white/80 text-base">{title}</h3>
            <div className="text-white/80 text-sm">
                {description.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                ))}
            </div>
            <Labels list={tech} />
            <div className="flex flex-row gap-2">
                {
                    figma ?
                        <Button url={figma} text="Figma" />
                        :
                        null
                }
                {
                    github ?
                        <Button url={github} text="Github" />
                        :
                        null
                }
                {
                    url ?
                        <Button url={url} text="Deploy" />
                        :
                        null
                }
            </div>
        </div>
    )
}