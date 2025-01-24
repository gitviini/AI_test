import Link from "next/link"

export default function NotFound() {
    return (
        <main className="flex flex-1 flex-col justify-center items-center font-mono">
            <h3>Ops! Essa página não existe 😅</h3>
            <div className="flex flex-row gap-2 justify-center items-center">
                <span className="italic">volte para o início</span>
                <Link href="/">
                    <i className="bi bi-house"></i>
                </Link>
            </div>
        </main>
    )
}