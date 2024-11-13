'use client';
import HeaderDefault from "@/components/Header";
import { useState } from "react";
import askAi from "@/app/_api.js"
import { machine } from "os";

export default function Chat() {
	//askAi("hello")
    const [prompt, setPrompt] = useState("")
    const [listRes, setList] = useState<Object[]>([])
    return (
        <main className="font-mono h-screen flex flex-col justify-between items-center">
            <HeaderDefault />
            <div className="flex flex-col justify-center items-center p-2 h-svh">

				<ul className="flex flex-1 flex-col min-h-auto w-full justify-start items-center gap-2">
				{
				// Cria lista de respostas
				listRes?.map((item)=>(
					<li key={item?.id}
					className="p-2 rounded-md bg-teal-200 text-black">
						<p>{item?.content}</p>
					</li>
				))}
				</ul>
                <form action="" method="post"
                	onSubmit={async e=>{
                		// Evita reload da página
                		e.preventDefault()
                		// Aciona um alerta quando houver a resposta
                		let res = await askAi(prompt)
						// Adiciona e atualiza lista de respostas
                		setList([...listRes,
							{"id":listRes.length+1,"content":res},
						])
						setPrompt("")
                		}
                	}
                    className="flex flex-row gap-2">
                    <input value={prompt} className="bg-yellow-50 text-black outline-none p-2 rounded-md transition duration-200 w-screen max-w-sm min-w-5"
                        type="text" required placeholder="Prompt" onChange={e=>setPrompt(e.target.value)} />
                    <button className="p-2 bg-sky-800 rounded-md transition duration-200">enviar</button>
                </form>
            </div>
        </main>
    )
}
