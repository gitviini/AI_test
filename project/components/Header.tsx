import Link from "next/link"
import { useState } from "react"

export default function HeaderDefault() {
    const [stateBar,setStateBar] = useState(false)
    return (
        <header className={`fixed bg-background h-full w-16 left-0 border-r-2 border-foreground transition-all\
            ${(!stateBar ? "" : "hover:w-1/2")}`}
            onDoubleClick={e=>setStateBar(!stateBar)}>
            <nav className="h-full w-full">
                <ul className="flex flex-col h-full w-full gap-4 items-center justify-start p-2">
                    <li>
                        <Link
                            className="flex flex-row gap-2 items-center justify-center p-2 pb-1 pt-1 transition duration-200 rounded-full
                          hover:bg-white/[.8] hover:border-2"
                            href="/">
                            <i className="bi bi-house text-foreground text-2xl"></i>
                        </Link>
                    </li>
                    <li 
                    className="flex flex-row gap-2 items-center justify-center p-2 py-1 transition duration-200 rounded-full hover:bg-white/[.8] cursor-pointer">
                        <i className="bi bi-gear text-foreground text-2xl"></i>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
