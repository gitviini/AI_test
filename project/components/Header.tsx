import Link from "next/link"

export default function HeaderDefault() {
    return (
        <div>
            <header className="w-screen">
                <nav>
                    <ul className="w-screen flex flex-row gap-4 items-center justify-between p-2">
                        <li>
                            <Link
                                className="flex flex-row gap-2 items-center justify-center p-2 rounded-full bg-white/[.05] hover:bg-white/[.1] transition duration-200"
                                href="/">
                                <i className="bi bi-arrow-left-circle text-2xl"></i>
                                <span>back</span>
                            </Link>
                        </li>
                        <li className="flex flex-row gap-2 items-center justify-center">
                            <i className="bi bi-terminal text-3xl"></i>
                            <h2 className="font-bold text-xl">AI bot</h2>
                        </li>
                    </ul>
                </nav>
            </header>
            <hr />
        </div>
    )
}
