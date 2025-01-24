"use client"

import React, { useState } from "react";
import handle from "../api/user/create";
import Link from "next/link"
import faviconImage from "@/app/favicon.ico"
import Image from "next/image"
import Info from "@/assets/contants/InfoInterface";
import { useRouter } from "next/navigation";

function Signup() {
  const router = useRouter()
  const [confirmPassword, setConfirmPassword] = useState(true);
  const [message, setMessage] = useState("");

  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userPasswordConfirm, setUserPasswordConfirm] = useState('')
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
            setConfirmPassword(userPassword == userPasswordConfirm ? true : false)
            if(userPassword == userPasswordConfirm){
              handle(userName, userPassword)
              .then((info: Info) => {
                setMessage(info.message)
                if(info.code == 200){
                  router.replace("/login")
                }
              })
            }
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
          <div className="flex flex-row nowrap gap-2 justify-end items-center">
            <input
              type={inputPassView ? "text" : "password"}
              placeholder="Reescreva a senha"
              className={`max-h-28 min-h-11 outline-none bg-background border-2 border-foreground p-2 rounded-xl text-foreground no-underline transition w-full`}
              required
              autoComplete="off"
              onChange={e => {
                setUserPasswordConfirm(e.target.value)
              }}
            />
            <span
              onClick={() => setInputPassView(!inputPassView)}
              className="p-2 absolute -translate-x-1 translate-y-0.5 cursor-pointer">
              <i className={`bi bi-eye${inputPassView ? "-slash" : ""}`}></i>
            </span>
          </div>

          {confirmPassword ? <></> : <span className="text-red-700">Senhas não condizem</span>}
          {message ? <span>{message}</span> : <></>}
          <div className="flex flex-row justify-between items-center gap-2">
            <button className={`cursor-pointer max-h-28 min-h-11 outline-none bg-background border-2 border-foreground p-2 rounded-xl -translate-x-1 shadow-initial hover:shadow-hover hover:-translate-x-0.5 hover:translate-y-0.5 active:translate-x-0 active:translate-y-1 active:shadow-none text-foreground no-underline transition`}>
              cadastrar
            </button>

            <Link href={"login"} className="no-underline text-end text-foreground overflow-hidden">
              <span className="text-nowrap max-w-full text-ellipsis overflow-hidden">Já é cadastrado?</span>
              <span className="ml-1 text-blue-900 text-nowrap">Entrar</span>
            </Link>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Signup;