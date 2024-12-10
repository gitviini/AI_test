import Link from "next/link";

export default function Config() {
    const template = [
        {
            id:0,
            name:"mode",
            list:["light","dark"],
        },
        {
            id:1,
            name:"ai",
            list:["JAMBA-large AI.21","GEMINI-1.5-flash Google"],
        }
    ]
    return (
        <main className="font-mono h-full w-full max-h-full flex flex-col justify-start items-center overflow-y-auto">
            <header
                className="w-14 fixed z-1 bg-background left-0 box-border border-r-2 border-foreground h-full transition-all"
            >
                <nav className="w-full h-full">
                    <ul className="flex flex-col p-2 justify-between items-center w-full h-full overflow-hidden">
                        <li>
                            <Link href="/">
                                <i className="bi bi-house"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="/pages">
                                <i className="bi bi-gear-fill transform hover:rotate-180 transition-all"></i>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            
            <div
                className="flex flex-col justify-center items-start w-4/5 pt-4"
                >
                    {template.map(config=>(
                        <ul key={config.id}
                            className="flex flex-row gap-2 items-center flex-wrap">
                            <span className="text-xl w-full">{config.name}</span>
                            {config.list.map(item=>(
                                <li key={item}
                                    className="cursor-pointer border-2 border-foreground p-2 rounded-2xl hover:bg-foreground hover:text-background hover:-translate-y-1 active:translate-y-0 transform transition">{item}</li>
                            ))}
                        </ul>
                    ))}
            </div>
        </main>
    )
}