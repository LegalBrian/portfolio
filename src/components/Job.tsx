interface JobProps {
    type: string;
    title: string;
    date: string;
    country: string;
    description: string;
}

export default function Job({
    type,
    title,
    date,
    country,
    description
}: JobProps) {
    return (
        <div className="flex flex-row w-full gap-8">
            <div className="flex flex-col items-center">
                <div className={`w-[1px] h-[6px] ${type === "start" ? "" : "bg-white/40"}`} />
                <div className="h-3 w-3 rounded-full bg-white" />
                <div className={`w-[1px] h-full ${type === "end" ? "" : "bg-white/40"}`} />
            </div>
            <div className="pb-8 flex-col">
                <h3 className="text-white/80 text-base pb-2">{title}</h3>
                <p className="text-xs text-white/60 pb-2">{date}</p>
                <p className="text-xs text-white/40 pb-2">{country}</p>
                <div className="text-white/80 text-sm">
                    {description.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}