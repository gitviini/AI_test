"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { dbDeleteAccount, dbSetPreferences } from "../_db";
import { getCookie, setCookie } from "../_cookies";
import Pressable from "@/components/UI/Pressable";
import { useRouter } from "next/navigation";

interface DataPreferences {
    name: string,
    theme: string | null,
    typing_mode: string | null,
    ai_model: string | null,
    trial_model: string | null,
}

interface dbError {
    errorMessage: string
}

export default function Config() {
    const router = useRouter()
    const template = {
        theme: {
            name: "Tema",
            list: ["light", "dark"],
        },
        ai_model: {
            name: "Modelo de IA",
            list: ["JAMBA-large AI.21", "GEMINI-1.5-flash Google"],
        },
        typing_mode: {
            name: "Modelo de escrita",
            list: ["text", "trilha"],
        },
        trial_model: {
            name: "Modelo de trilha",
            list: [],
        },
    }

    const [dbError, setDbError] = useState("")
    const [preferences, setPreferences] = useState<DataPreferences>({
        name: "User",
        theme: "dark",
        typing_mode: "trilha",
        ai_model: "GEMINI-1.5-flash Google",
        trial_model: "",
    })

    useEffect(() => {
        getCookie("preferences").then(
            tmp_preferences => {
                !tmp_preferences ? router.replace('/login') : setPreferences(tmp_preferences)
            }
        )
            .catch(err => setDbError("Falha na conexão com o banco de dados"))
    }, [])

    return (
        <main className="font-mono h-full w-full max-h-full flex flex-col justify-start items-center overflow-y-auto">
            <header
                className="w-14 fixed z-1 bg-background left-0 box-border border-r-2 border-foreground h-full transition-all"
            >
                <nav className="w-full h-full">
                    <ul className="flex flex-col p-2 justify-between items-center w-full h-full overflow-hidden">
                        <li>
                            <Link href="/">
                                <i className="bi bi-house"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="/pages">
                                <i className="bi bi-gear-fill transform hover:rotate-180 transition-all"></i>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            {
                dbError
                    ?
                    <div className="flex flex-1 flex-col justify-center align-center">
                        <h3>Ops! Houve um pequeno erro 😅</h3>
                        <p className="italic text-gray-500">{dbError}</p>
                    </div>

                    :

                    <div
                        className={`${preferences.name == "User" ? "opacity-50 pointer-events-none" : "opacity-100 pointer-events-auto"} flex flex-col justify-center items-start w-4/5 pt-4 pl-12 transition-opacity duration-500`}
                    >
                        <h2>Configurações -</h2>
                        <ul className="flex flex-row nowrap gap-2 items-center justify-start p-0">
                            <span className="text-xl w-full">Usuário - @{preferences.name}</span>
                            <Pressable onClick={() => {
                                setCookie(null)
                                router.replace('/login')
                            }}>
                                sair
                            </Pressable>
                            <button className="border-2 border-foreground p-2 rounded-xl shadow-initial hover:shadow-hover hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none text-foreground no-underline transition bg-red-300"
                                onClick={() => {
                                    setCookie(null)
                                    dbDeleteAccount(preferences.name)
                                        .then(e => {
                                            router.replace('/login')
                                        }
                                        )
                                        .catch(e => { })
                                }}
                            >
                                deletar
                            </button>
                        </ul>
                        <ul className="flex flex-row gap-2 items-center justify-start flex-wrap p-0">
                            <span className="text-xl w-full">{template.ai_model.name}</span>
                            {template.ai_model.list.map(item => (
                                <li key={item}
                                    className={`${(preferences.ai_model == item ? "bg-foreground text-background" : {})} cursor-pointer border-2 border-foreground p-2 rounded-2xl hover:bg-foreground hover:text-background hover:-translate-y-1 active:translate-y-0 transform transition`}
                                    onClick={() => { preferences.ai_model = item; setPreferences({ ...preferences }) }}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-row gap-2 items-center justify-start flex-wrap p-0">
                            <span className="text-xl w-full">{template.typing_mode.name}</span>
                            {template.typing_mode.list.map(item => (
                                <li key={item}
                                    className={`${(preferences.typing_mode == item ? "bg-foreground text-background" : {})} cursor-pointer border-2 border-foreground p-2 rounded-2xl hover:bg-foreground hover:text-background hover:-translate-y-1 active:translate-y-0 transform transition`}
                                    onClick={() => { preferences.typing_mode = item; setPreferences({ ...preferences }) }}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-row gap-2 items-center justify-start flex-wrap p-0">
                            <span className="text-xl w-full">{template.trial_model.name}</span>
                            <div className="flex flex-row gap-2 justify-center items-center">
                                <span>Número de módulos</span>
                                <input 
                                value={preferences.trial_model?.toString()}
                                onChange={e => {
                                    preferences.trial_model = e.target.value.toString()
                                    setPreferences({ ...preferences })
                                }} type="number" className={`max-h-28 min-h-11 outline-none bg-background border-2 border-foreground p-2 rounded-xl text-foreground no-underline transition w-auto`} />
                            </div>
                        </ul>
                        <Pressable onClick={() => {
                            dbSetPreferences(preferences.name, preferences.theme, preferences.typing_mode, preferences.ai_model, preferences.trial_model)
                        }}>
                            salvar
                        </Pressable>
                    </div>}
        </main>
    )
}