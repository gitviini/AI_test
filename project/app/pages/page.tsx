import HeaderDefault from "@/components/Header";
import Link from "next/link";

export default function Chat() {
    return (
        <main className="font-mono h-screen flex flex-col justify-between items-center">
            <HeaderDefault />
            <div className="flex flex-col justify-center items-center p-2">
                <form action="" method="post"
                    className="flex flex-row gap-2">
                    <input className="p-2 rounded-md focus:outline-none hover:-translate-y-1 focus:-translate-y-0 text-black transition duration-200 w-screen max-w-sm min-w-5"
                        type="text" required placeholder="Prompt" />
                    <button className="p-2 bg-sky-800 rounded-md hover:-translate-y-1 focus:-translate-y-0 transition duration-200">enviar</button>
                </form>
            </div>
        </main>
    )
}