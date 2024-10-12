'use client';
import HeaderDefault from "@/components/Header";
import { useState } from "react";

export default function Chat() {
    const [prompt, setPrompt] = useState("")
    return (
        <main className="font-mono h-screen flex flex-col justify-between items-center">
            <HeaderDefault />
            <div className="flex flex-col justify-center items-center p-2">
                <form action="" method="post"
                    className="flex flex-row gap-2">
                    <input className="bg-yellow-50 text-black outline-none p-2 rounded-md transition duration-200 w-screen max-w-sm min-w-5"
                        type="text" required placeholder="Prompt" onChange={e=>setPrompt(e.target.value)} />
                    <button className="p-2 bg-sky-800 rounded-md transition duration-200">enviar</button>
                </form>
            </div>
        </main>
    )
}