"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { dbGetPreferences, dbSetPreferences } from "../_db";
import Pressable from "@/components/UI/Pressable";

interface DataPreferences {
    name: string,
    theme: string | null,
    typing_mode: string | null,
    ai_model: string | null,
}

interface dbError {
    errorMessage: string
}

export default function Config() {

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
    }

    const [dbError, setDbError] = useState("")
    const [preferences, setPreferences] = useState<DataPreferences>({
        name: "User",
        theme: "dark",
        typing_mode: "trilha",
        ai_model: "GEMINI-1.5-flash Google",
    })

    useEffect(() => {
        dbGetPreferences()
            .then(
                (tmp_preferences) =>
                    tmp_preferences ? setPreferences({
                        name: tmp_preferences.name,
                        theme: tmp_preferences.theme,
                        ai_model: tmp_preferences.ai_model,
                        typing_mode: tmp_preferences.typing_mode,
                    }) : {}
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
                dbError ?
                    <div className="flex flex-1 flex-col justify-center align-center">
                        <h3>Ops! Houve um pequeno erro 😅</h3>
                        <p className="italic text-gray-500">{dbError}</p>
                    </div>
                    :
                    <div
                        className={`${preferences.name == "User" ? "opacity-50 pointer-events-none" : "opacity-100 pointer-events-auto"} flex flex-col justify-center items-start w-4/5 pt-4 pl-12 transition-opacity duration-500`}
                    >
                        <h2>Configurações - {preferences.name}</h2>

                        {/* <ul className="flex flex-row gap-2 items-center justify-start flex-wrap p-0">
                    <span className="text-xl w-full">{template.theme.name}</span>
                    {template.theme.list.map(item => (
                        <li key={item} 
                            className={`${( preferences.theme == item ? "bg-foreground text-background" : {})} cursor-pointer border-2 border-foreground p-2 rounded-2xl hover:bg-foreground hover:text-background hover:-translate-y-1 active:translate-y-0 transform transition`}
                            onClick={()=>{preferences.theme = item;setPreferences({...preferences})}}>
                            {item}
                        </li>
                    ))}
                </ul> */}
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
                        <Pressable onClick={() => {
                            dbSetPreferences(preferences.theme, preferences.typing_mode, preferences.ai_model)
                        }}>
                            salvar
                        </Pressable>
                    </div>}
        </main>
    )
}