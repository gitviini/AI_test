"use client";

import action from "@/app/_file";
import FileItem from "@/assets/contants/FileItemInterface";
import { useState } from "react";

export default function FileModel({ stateBar }: { stateBar: boolean }) {
  const [fileName, setFileName] = useState<string | undefined>("");
  const [filesList, setFilesList] = useState<Array<FileItem>>([]);
  return (
    <>
      <div className={stateBar ? "mb-2 flex flex-col gap-2" : "hidden"}>
        {filesList?.map((file) => (
          <div
            key={file.id}
            className="translate-x-1 cursor-pointer border-2 border-foreground p-2 rounded-xl  text-foreground no-underline transition w-full"
          >
            {file.name}
          </div>
        ))}
      </div>
      <form
        action={action}
        className="flex flex-col gap-2 justify-center items-start"
        onSubmit={(e) => {
          e.preventDefault();
          setFileName("");
          setFilesList([
            ...filesList,
            {
              id: filesList.length + 1,
              name: fileName,
              form: new FormData(),
            },
          ]);
        }}
      >
        <label
          htmlFor="file"
          className={`${
            fileName
              ? "shadow-initial"
              : "shadow-initial hover:shadow-hover hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none"
          } translate-button cursor-pointer border-2 border-foreground p-2 rounded-xl  text-foreground no-underline transition w-full`}
        >
          {!fileName ? "Novo arquivo" : fileName}
        </label>
        <input
          type="file"
          name="file"
          id="file"
          accept="text/*"
          className="hidden"
          onChange={(e) =>
            e.target.value != ""
              ? setFileName(e.target.value.split("\\").pop())
              : {}
          }
        />
        <div className="flex flex-row gap-2">
          <button
            className={`${
              fileName ? "" : "hidden"
            } cursor-pointer border-2 border-foreground p-2 rounded-xl shadow-initial hover:shadow-hover hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none text-foreground no-underline transition`}
          >
            enviar
          </button>
          <span
            className={`${
              fileName ? "" : "hidden"
            } cursor-pointer border-2 border-foreground p-2 rounded-xl shadow-initial hover:shadow-hover hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none text-foreground no-underline transition`}
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
