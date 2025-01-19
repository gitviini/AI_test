"use client";
import Link from "next/link";
import { useState } from "react";
// import askAi from "@/app/_api";
import askAi from "../_api_gemini";
import Pressable from "@/components/UI/Pressable";
import Item from "@/assets/contants/ItemInterface";
import FileItem from "@/assets/contants/FileItemInterface";
import FileModel from "@/components/UI/FileModel";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect } from "react"
import { getCookie } from "../_cookies";

interface DataPreferences {
  name: string,
  theme: string | null,
  typing_mode: string,
  ai_model: string | null,
}

export default function Chat() {
  const [filesList, setFilesList] = useState<Array<FileItem>>([])
  const [stateBar, setStateBar] = useState(false)
  const [prompt, setPrompt] = useState("")
  const [listRes, setList] = useState<Array<Item>>([])
  const [stateRequest, setStateRequest] = useState(false)
  const [preferences, setPreferences] = useState<DataPreferences>({
    name: "User",
    theme: "dark",
    typing_mode: "trilha",
    ai_model: "GEMINI-1.5-flash Google",
  })

  useEffect(() => {
    getCookie("preferences").then(
      tmp_preferences =>
        setPreferences(tmp_preferences? tmp_preferences : preferences)
    )
  }, [])
  return (
    <main className="font-mono h-full w-full max-h-full flex flex-col justify-start items-center overflow-hidden">
      <header
        className={`fixed z-1 bg-background left-0 box-border border-r-2 border-foreground h-full transition-all ${stateBar ? "w-1/2" : "w-14"
          }`}
        onDoubleClick={() => {
          setStateBar(!stateBar);
        }}
        onMouseLeave={() => (stateBar ? setStateBar(!stateBar) : {})}
      >
        <nav className="w-full h-full">
          <ul className="flex flex-col p-2 justify-between items-center w-full h-full overflow-hidden">
            <li>
              <Link href="/">
                <i className="bi bi-house"></i>
              </Link>
            </li>
            <li className={stateBar ? "flex flex-col justify-center items-center w-full" : "hidden"}>
              <FileModel filesList={filesList} setFilesList={setFilesList} />
            </li>
            <li className={stateBar ? "hidden" : ""}>
              <button onClick={() => setStateBar(!stateBar)}>
                <i className="bi bi-arrow-right"></i>
              </button>
            </li>
            <li>
              <Link href="/config">
                <i className="bi bi-gear transform hover:rotate-180 transition-all"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="container_chat flex flex-col justify-center items-center pt-4 w-3/4 max-w-screen-md h-full min-w-80 overflow-hidden">
        <ul
          className="flex flex-col w-full h-full justify-start items-start overflow-y-auto overflow-x-hidden gap-2 pl-0 pr-1 rounded-2xl"
        >
          {
            // Cria lista de respostas
            listRes?.map((item) => (
              <li
                key={item?.id}
                className="flex flex-col gap-2 justify-start rounded-md text-black w-full h-auto"
              >
                <p className="p-2 rounded-2xl rounded-tr-md bg-orange text-foreground max-w-full text-ellipsis overflow-hidden self-end">
                  {item?.request}
                </p>
                <Markdown remarkPlugins={[remarkGfm]} className="p-2 rounded-2xl rounded-tl-md bg-blue-300 text-foreground max-w-full text-ellipsis overflow-hidden self-start">
                  {item?.response}
                </Markdown>
              </li>
            ))
          }
        </ul>
      </div>

      <form
        action=""
        method="post"
        onSubmit={async (e) => {
          // Evita reload da página
          e.preventDefault();
          setStateRequest(true)
          // Aciona um alerta quando houver a resposta
          const res = await askAi("comando:" + prompt, filesList, preferences.typing_mode);
          // Adiciona e atualiza lista de respostas
          console.log(res)
          setList([
            ...listRes,
            {
              id: listRes.length + 1,
              request: prompt,
              response: res,
            },
          ]);
          // limpando input
          setPrompt("");
          setStateRequest(false)
        }}
        className={`${(stateRequest ? "w-0 overflow-x-hidden" : "w-3/4 min-w-80")} max-w-screen-md flex flex-row gap-2 pb-4 justify-center items-end h-auto transition-all`}
      >
        <textarea
          value={prompt}
          className={`resize-none max-h-28 min-h-11 outline-none bg-background border-2 border-foreground p-2 rounded-xl shadow-initial hover:shadow-hover hover:translate-x-0.5 hover:translate-y-0.5 focus:translate-x-1 focus:translate-y-1 focus:shadow-none text-foreground no-underline transition w-full`}
          required
          placeholder={preferences.typing_mode ? preferences.typing_mode : "Prompt"}
          onChange={async (e) => {
            // Configurando valor do input
            setPrompt(e.target.value);
          }}
          rows={1}
          autoComplete="off"
          spellCheck={true}
        ></textarea>
        <Pressable onClick={() => { }}>Enviar</Pressable>
      </form>
    </main>
  );
}
