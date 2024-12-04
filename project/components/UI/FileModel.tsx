"use client"

import action from "@/app/_file";
import FileItem from "@/assets/contants/FileItemInterface";
import { useState } from "react";

export default function FileModel({ stateBar, filesList }: { stateBar: boolean, filesList: Array<FileItem> }) {
    const [fileName, setFileName] = useState<string>("")
    return (
        <>
            <form action={action} className="flex flex-col gap-2 justify-center items-start">
                {/* <span
                    className={`${(fileName ? "" : "hidden")} cursor-pointer`}
                    onClick={()=>{setFileName("")}}>
                    <i className="bi bi-x"></i>
                </span> */}
                <label htmlFor="file"
                    className={`${(fileName ? "" : "shadow-initial hover:shadow-hover hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none")} cursor-pointer border-2 border-foreground p-2 rounded-xl  text-foreground no-underline transition w-full`}>
                    {(fileName == "" ? "Novo arquivo" : (fileName.split('\\').pop()))}
                </label>
                <input type="file" name="file" id="file" accept="text/*"
                    className="hidden" onChange={e => (e.target.value != "" ? setFileName(e.target.value) : {})} />
                <div className="flex flex-row gap-2">
                    <button
                        className={`${(fileName ? "" : "hidden")} cursor-pointer border-2 border-foreground p-2 rounded-xl shadow-initial hover:shadow-hover hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none text-foreground no-underline transition`}>
                        enviar</button>
                    <span
                        className={`${(fileName ? "" : "hidden")} cursor-pointer border-2 border-foreground p-2 rounded-xl shadow-initial hover:shadow-hover hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none text-foreground no-underline transition`}
                        onClick={() => { setFileName("") }}>
                        apagar
                    </span>
                </div>
            </form>
            <div className={(stateBar ? "" : "hidden")}>
                {filesList?.map(file => (
                    <div key={file.id}>

                    </div>
                ))}
            </div>
        </>
    )
}