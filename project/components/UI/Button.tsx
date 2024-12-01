import Link from "next/link"
import React from "react"

export default function Button({href,children}:{href:string,children: React.ReactNode}){
    return(
        <Link href={href}
            className="border-2 border-foreground p-2 rounded-xl shadow-initial hover:shadow-hover hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none text-foreground no-underline transition"
            >
            {children}
        </Link>
    )
}