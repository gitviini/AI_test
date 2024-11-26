'use client';
import HeaderDefault from "@/components/Header";
import { useState } from "react";
import askAi from "@/app/_api.js"

interface Item {
	id:number,
	request:string,
	response:string,
}

export default function Chat() {
	//askAi("hello")
    const [prompt, setPrompt] = useState("")
    const [listRes, setList] = useState<Array<Item>>([])
    return (
        <main className="font-mono h-full w-full max-h-full flex flex-col justify-start items-center overflow-hidden">
            <HeaderDefault />
            <div className="flex flex-col justify-start items-center p-4 max-w-3/5 w-3/5 max-h-4/5 h-4/5 min-w-80 overflow-hidden">

				<ul className="flex flex-1 flex-col w-full h-full justify-start items-start overflow-y-auto pr-1 gap-2">
				{
				// Cria lista de respostas
				listRes?.map((item)=>(
					<li key={item?.id}
					className="flex flex-col gap-2 justify-start rounded-md text-black w-full h-auto">
						<p 
							className="p-2 rounded-md bg-white/[.20] text-white self-end">{item?.request}</p>
						<p
							className="p-2 rounded-md bg-blue-200 self-start">{item?.response}</p>
					</li>
				))}
				</ul>
			</div>
       		<form action="" method="post"
               	onSubmit={async e=>{
               		// Evita reload da página
               		e.preventDefault()
               		// Aciona um alerta quando houver a resposta
               		const res = await askAi(prompt)
					// Adiciona e atualiza lista de respostas
               		await setList([...listRes,
						{id:listRes.length+1,
						request:prompt,
						response:res},
					])
					console.log(listRes)
					setPrompt("")
               		}
               	}
                   className="flex flex-row gap-2 p-4 justify-center items-end w-3/5 min-h-1/5 max-h-1/5 min-w-80">
                  <input value={prompt} className="bg-yellow-50 text-black outline-none p-2 rounded-md transition duration-200 w-full"
                      type="text" required placeholder="Prompt"
                      onChange={
                       	async e=>{
                       		setPrompt(e.target.value)}
                       	} />
                  <button className="p-2 bg-sky-800 rounded-md transition duration-200">enviar</button>
            </form>
        </main>
    )
}
