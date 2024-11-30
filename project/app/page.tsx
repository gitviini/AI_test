"use client"

import Image from "next/image"
import Button from "@/components/UI/Button"

export default function Home() {
  return (
    <main
      className="flex flex-1 flex-col gap-2 items-center justify-between font-mono h-full">
      <div className="flex flex-col items-start justify-center gap-4 h-full">
        <h1 className="text-5xl font-bold">
          AI GEN
        </h1>
        <ol className="list-inside list-decimal text-lg">
          <li>Tudo começa com uma ideia.</li>
          <li>E termina com um produto.</li>
        </ol>
<<<<<<< HEAD
        <Button href="/pages" content={"Começar"}/>
      </div>
      <footer
      className="flex flex-row justify-evenly items-center h-16 border-foreground border-t-2 w-full gap-2">
=======
        <Button href="/pages" content="começar"/>
      </div>
      <footer
        className="flex flex-row justify-center items-center h-16 border-black border-t-2 w-full gap-12">
>>>>>>> refs/remotes/origin/next
        <Image
          src={require("@/assets/images/logo_etepd_sem_fundo.png")}
          width={70}
          alt=""
        />
        <Image
          src={"https://www.portodigital.org/_nuxt/img/logo.9d0ef93.svg"}
          width={80}
          height={70}
          alt=""
        />
        <Image
          src={"https://amazon-blogs-brightspot-lower.s3.amazonaws.com/about/00/92/0260aab44ee8a2faeafde18ee1da/amazon-logo-inverse.svg"}
          width={60}
          height={0}
          alt=""
        />
      </footer>
    </main>
  )
}
