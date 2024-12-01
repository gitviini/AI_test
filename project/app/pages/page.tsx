'use client';
import Link from "next/link";
// import HeaderDefault from "@/components/Header";
import { useState } from "react";
import askAi from "@/app/_api.js"
import action from "@/app/_file";

interface Item {
	id:number,
	request:string,
	response:string,
}

export default function Chat() {
	const [stateBar, setStateBar] = useState(false)
    const [prompt, setPrompt] = useState("")
    const [listRes, setList] = useState<Array<Item>>([])
    return (
        <main className=" font-mono h-full w-full max-h-full flex flex-col justify-start items-center overflow-hidden shadow-initial">
            {/* <HeaderDefault>
			</HeaderDefault> */}
			<header
				className={`fixed bg-background left-0 box-border border-r-2 border-foreground h-full transition-all ${stateBar ? "w-1/2" : "w-14"}`}
				onDoubleClick={()=>setStateBar(!stateBar)}
				>
				<nav className="w-full h-full">
					<ul 
						className="flex flex-col p-3 justify-between items-start w-full h-full overflow-hidden"
						>
						<li>
							<Link href="/">
								<i className="bi bi-house"></i>
							</Link>
						</li>
						<li>
							<form action={action}>
								<label htmlFor="file"
									className="p-1 cursor-pointer">
										<i className="bi bi-file-earmark-plus-fill"></i>
								</label>
								<input type="file" name="file" id="file" accept="text/*"
									className="hidden"/>
								<button>enviar</button>
							</form>
						</li>
						<li>
							<Link href="/Config">
								<i className="bi bi-gear transform hover:rotate-180 transition-all"></i>
							</Link>
						</li>
					</ul>
				</nav>
			</header>
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
					// limpando input
					setPrompt("")
               		}
               	}
                   className="flex flex-row gap-2 p-4 justify-center items-end w-3/5 min-h-1/5 max-h-1/5 min-w-80">
                  <input value={prompt} className="bg-yellow-50 text-black outline-none p-2 rounded-md transition duration-200 w-full"
                      type="text" required placeholder="Prompt"
                      onChange={
                       	async e=>{
							// Configurando valor do input
                       		setPrompt(e.target.value)}
                       	} />
                  <button className="p-2 bg-sky-800 rounded-md transition duration-200">enviar</button>
            </form>
        </main>
    )
}
