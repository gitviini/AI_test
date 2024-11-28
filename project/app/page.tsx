"use client"

import Link from "next/link"
import Image from "next/image"

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
        <Link href="/pages"
          className="border-2 border-black p-1 rounded-xl shadow-initial hover:shadow-hover hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition"
          >
          Começar
        </Link>
      </div>
      <div
      className="flex flex-row justify-evenly items-center h-16 border-black border-t-2 w-full gap-2">
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
      </div>
    </main>
  )
}
