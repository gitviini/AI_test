"use client";

import action from "@/app/_file";
import FileItem from "@/assets/contants/FileItemInterface";
import { useState } from "react";

export default function FileModel({filesList,setFilesList}:{filesList:Array<FileItem>,setFilesList:Function}) {
  const [fileName, setFileName] = useState<string | undefined>("");
  return (
    <>
      <div className="mb-2 flex flex-col gap-2 justify-center items-center max-w-3/4 w-3/4">
        {filesList?.map((file) => (
          <div
            key={file.id}
            className="hover:bg-red-400 file text-ellipsis overflow-hidden text-nowrap translate-x-1 cursor-pointer border-2 border-foreground p-2 rounded-xl text-foreground no-underline transition w-full"
            onClick={()=>{
              const NewFilesList = [...filesList]
              NewFilesList.splice(file.id,1)
              for(let i = 0; i < NewFilesList.length; i++){
                NewFilesList[i].id = i
              }
              setFilesList(NewFilesList)
            }}
          >
            <i className="bi bi-trash"></i>
            <span>{file.name}</span>
          </div>
        ))}
      </div>
      <form
        action={async (formData)=>
          setFilesList([...filesList,{
            id:filesList.length,
            name:fileName,
            content: await action(formData)
        }])}
        className={`${filesList.length == 0 && !fileName ? "w-auto" : "w-3/4"} flex flex-col gap-2 justify-center items-start`}
        onSubmit={(e) => {
          setFileName("")
        }}
      >
        <label
          htmlFor="file"
          className={`${fileName
              ? "shadow-initial"
              : "shadow-initial hover:shadow-hover hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none"
            } text-ellipsis overflow-hidden text-nowrap translate-button cursor-pointer border-2 border-foreground p-2 rounded-xl text-foreground no-underline transition w-full`}
        >
          {!fileName ? "Novo arquivo" : fileName}
        </label>
        <input
          type="file"
          name="file"
          id="file"
          accept="text/*"
          className="hidden"
          onChange={(e) => {
            const inputFile = e.target.value.split("\\").pop()
            let exists = false
            filesList.forEach(file => file.name == inputFile ? exists = true : {})
            if (inputFile == "" || exists) {
              e.preventDefault()
              setFileName("")
              exists ? alert(`Arquivo ${fileName} já anexado`) : alert("Arquivo com nome inválido")
              return
            }
            setFileName(inputFile)
          }
        }
        />
        <div className="flex flex-row gap-2 w-full">
          <button
            className={`${fileName ? "" : "hidden"
              } w-full cursor-pointer border-2 border-foreground p-2 rounded-xl shadow-initial hover:shadow-hover hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none text-foreground no-underline transition`}
          >
            enviar
          </button>
          <span
            className={`${fileName ? "" : "hidden"
              } w-full cursor-pointer text-center border-2 border-foreground p-2 rounded-xl shadow-initial hover:shadow-hover hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none text-foreground no-underline transition`}
            onClick={() => {
              setFileName("");
            }}
          >
            apagar
          </span>
        </div>
      </form>
    </>
  );
}
