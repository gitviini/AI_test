import Link from "next/link"

export default function HeaderDefault({
    children,
}:{
    children: React.ReactNode
}) {
    return (
        <div>
            <header className="w-full">
                <nav>
                    <ul className="w-screen flex flex-row gap-4 items-center mb-1 justify-between p-2 pb-1">
                        <li>
                            <Link
                                className="flex flex-row gap-2 items-center justify-center px-2 pt-1 transition rounded-md bg-white/[.1] hover:bg-white/[.2] duration-200"
                                href="/">
                                <i className="bi bi-arrow-left text-xl"></i>
                            </Link>
                        </li>
                        <li className="flex flex-row gap-2 items-center justify-center">
                            <i className="bi bi-terminal text-3xl"></i>
                            <h2 className="font-bold text-xl">AI bot</h2>
                        </li>
                        {children}
                    </ul>
                </nav>
            </header>
            <hr/>
        </div>
    )
}
