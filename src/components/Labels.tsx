interface LabelsProps {
    list: string[]
}

export default function Labels({
    list
}: LabelsProps) {
    return (
        <div className="flex flex-row flex-wrap gap-2 bg-black/70">
            {
                list.map((i, k) => (
                    <p key={k} className="px-2 py-1 border border-white/40 text-center rounded-md text-sm text-white/80">{i}</p>
                ))
            }
        </div>
    )
}