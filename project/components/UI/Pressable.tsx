import React from "react";

export default function Pressable({children}:{children:React.ReactNode}){
    return(
        <button
            className="border-2 border-foreground p-2 rounded-xl shadow-initial hover:shadow-hover hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none text-foreground no-underline transition"
            >
            {children}
        </button>
    )
}