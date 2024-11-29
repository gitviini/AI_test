import Link from "next/link"

export default function Button(props:{href:string,content:string}){
    return(
        <Link href={props.href}
            className="border-2 border-foreground p-2 rounded-xl shadow-initial hover:shadow-hover hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition"
            >
            {props.content}
        </Link>
    )
}