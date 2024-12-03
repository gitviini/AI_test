"use client"

import action from "@/app/_file";
import FileItem from "@/assets/contants/FileItemInterface";

export default function FileModel({stateBar,filesList}:{stateBar:boolean,filesList:Array<FileItem>}) {
    return (
        <>
            <form action={action} className="flex flex-row flex-nowrap">
                <label htmlFor="file"
                    className="p-1 cursor-pointer">
                    <i className="bi bi-file-earmark-plus-fill"></i>
                </label>
                <input type="file" name="file" id="file" accept="text/*"
                    className="hidden" />
                <button className={(stateBar ? "" : "hidden")}>enviar</button>
            </form>
            <div className={(stateBar ? "" : "hidden")}>
                {filesList?.map(file=>(
                    <div key={file.id}>
                        fodass
                    </div>
                ))}
            </div>
        </>
    )
}