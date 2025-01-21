"use client"

import { useState } from "react"
import Link from "next/link"
import faviconImage from "@/app/favicon.ico"
import Image from "next/image"

export default function Login() {
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [inputPassView, setInputPassView] = useState(false)
    return (
        <main className="flex flex-1 flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center w-4/5">
                <div className="flex flex-row nowrap justify-center items-center w-full gap-3 m-4">
                    <Image
                        src={faviconImage}
                        alt="favicon"
                        className="w-10"
                    />
                    <span className="text-xl">AI GEN</span>
                </div>
                <form action="." onSubmit={
                    (e) => {
                        e.preventDefault()
                        console.log(userName)
                        console.log(userPassword)
                    }
                }
                    className="flex flex-col gap-2 text-base w-full max-w-xl">
                    <input
                        type="text"
                        placeholder="Usuário"
                        className={`max-h-28 min-h-11 outline-none bg-background border-2 border-foreground p-2 rounded-xl text-foreground no-underline transition w-full`}
                        required
                        autoComplete="off"
                        onChange={e => setUserName(e.target.value)}
                    />
                    <div className="flex flex-row nowrap gap-2 justify-end items-center">
                        <input
                            type={inputPassView ? "text" : "password"}
                            placeholder="Senha"
                            className={`max-h-28 min-h-11 outline-none bg-background border-2 border-foreground p-2 rounded-xl text-foreground no-underline transition w-full`}
                            required
                            autoComplete="off"
                            onChange={e => setUserPassword(e.target.value)}
                        />
                        <span
                            onClick={() => setInputPassView(!inputPassView)}
                            className="p-2 absolute -translate-x-1 translate-y-0.5 cursor-pointer">
                            <i className={`bi bi-eye${inputPassView ? "-slash" : ""}`}></i>
                        </span>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-2">
                        <button className={`cursor-pointer outline-none bg-background border-2 border-foreground p-2 rounded-xl -translate-x-1 shadow-initial hover:shadow-hover hover:-translate-x-0.5 hover:translate-y-0.5 active:translate-x-0 active:translate-y-1 active:shadow-none text-foreground no-underline transition`}>entrar</button>
                        <Link href={"signup"} className="text-end no-underline text-foreground">
                            <span className="text-nowrap mr-1">Não tem cadastrado?</span>
                            <span className="text-blue-900 text-nowrap">Cadastre-se</span>
                        </Link>
                    </div>
                </form>
            </div>
        </main>
    )
}
  