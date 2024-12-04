'use client';
import Link from "next/link";
// import HeaderDefault from "@/components/Header";
import { useState } from "react";
import askAi from "@/app/_api.js"
import Pressable from "@/components/UI/Pressable";
import Item from "@/assets/contants/ItemInterface";
import FileItem from "@/assets/contants/FileItemInterface";
import FileModel from "@/components/UI/FileModel";
import Button from "@/components/UI/Button";

const form: FileItem = {
	id: 0,
	form: new FormData(),
}

export default function Chat() {
	const [filesList, setFilesList] = useState<Array<FileItem>>([form])
	const [stateBar, setStateBar] = useState(false)
	const [prompt, setPrompt] = useState("")
	const [listRes, setList] = useState<Array<Item>>([])
	return (
		<main className=" font-mono h-full w-full max-h-full flex flex-col justify-start items-center overflow-hidden shadow-initial">
			<header
				className={`fixed bg-background left-0 box-border border-r-2 border-foreground h-full transition-all ${stateBar ? "w-1/2" : "w-14"}`}
				onDoubleClick={() => { setStateBar(!stateBar) }}
				onMouseLeave={() => (stateBar ? setStateBar(!stateBar) : {})}
			>
				<nav className="w-full h-full">
					<ul
						className="flex flex-col p-2 justify-between items-center w-full h-full overflow-hidden"
					>
						<li>
							<Link href="/">
								<i className="bi bi-house"></i>
							</Link>
						</li>
						<li className={(stateBar ? "" : "hidden")}>
							<FileModel filesList={filesList} stateBar={stateBar} />
						</li>
						<li className={(stateBar ? "hidden" : "")}>
						<button onClick={() => setStateBar(!stateBar)}><i className="bi bi-arrow-right"></i></button>
						</li>
						<li>
							<Link href="/config">
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
						listRes?.map((item) => (
							<li key={item?.id}
								className="flex flex-col gap-2 justify-start rounded-md text-black w-full h-auto">
								<p className="p-2 rounded-2xl rounded-tr-md bg-orange text-foreground self-end">{item?.request}</p>
								<p className="p-2 rounded-2xl rounded-tl-md bg-blue-300 text-foreground self-start">{item?.response}</p>
							</li>
						))}
				</ul>
			</div>
			<form action="" method="post"
				onSubmit={async e => {
					// Evita reload da página
					e.preventDefault()
					// Aciona um alerta quando houver a resposta
					const res = await askAi(prompt)
					// Adiciona e atualiza lista de respostas
					await setList([...listRes,
					{
						id: listRes.length + 1,
						request: prompt,
						response: res
					},
					])
					// limpando input
					setPrompt("")
				}
				}
				className="flex flex-row gap-2 p-4 justify-center items-end w-3/5 min-h-1/5 max-h-1/5 min-w-80">
				<textarea value={prompt}
					className={`resize-y max-h-28 min-h-11 outline-none bg-background border-2 border-foreground p-2 rounded-xl shadow-initial hover:shadow-hover hover:translate-x-0.5 hover:translate-y-0.5 focus:translate-x-1 focus:translate-y-1 focus:shadow-none text-foreground no-underline transition w-full`}
					required placeholder="Prompt"
					onChange={
						async e => {
							// Configurando valor do input
							setPrompt(e.target.value)
						}
					}
					rows={1}
					autoComplete="off"
					spellCheck={true}
					>
					</textarea>
					<Pressable>Enviar</Pressable>
			</form>
		</main>
	)
}
