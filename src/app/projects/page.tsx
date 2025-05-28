import NavBar from "@/components/NavBar";

export default function Experience() {
    return (
        <main className="flex flex-col gap-5 row-start-2 items-center justify-between sm:items-start h-dvh">
            <NavBar />
            <div className="h-full w-full flex flex-col sm:flex-row-reverse items-center justify-center gap-5 text-white">
                <h1 className="text-[40px]">Proximamente</h1>
            </div>
        </main>
    );
}
