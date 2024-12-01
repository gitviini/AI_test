"use server"
import { promises as fs } from "fs";

async function action(formData: FormData) {
    //pegando informações do arquivo no input file
    const file = formData.get("file") as File;
    //verifica se há o arquivo e seu tamanho, caso seja inapropriado, retornará um erro
    if (!file || file.size === 0) {
        console.log("action error:. file == null or file.size === 0")
        return
    }
    //recebendo buffer do arquivo img
    const data = await file.text()
    //criando novo arquivo com o conteúdo recebido
    //await fs.writeFile(`${process.cwd()}/${file.name}`, Buffer.from(data))
    console.log(data)
}

export default action

/*
EXEMPLO DE CÓDIGO

<form action={action}>
        <input type="file" name="file" accept="image/*" />
        <button>enviar</button>
      </form>
*/

// 'use client'
 
// import { useState } from 'react'
 
// export default function Dashboard({
//   children,
// }: {
//   children: React.ReactNode
// }) {
 
//   return (
//     <>
//       {children}
//     </>
//   )
// }
