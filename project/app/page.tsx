export default function Home() {
  return (
    <main
      className="flex flex-1 flex-col gap-2 items-center justify-center font-mono h-full">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-5xl font-bold">
          AI GEN
        </h1>
        <ol className="list-inside list-decimal text-lg">
          <li>Tudo começa com uma ideia.</li>
          <li>E termina com um produto.</li>
        </ol>
        <a href="/pages"
          className="bg-sky-800 p-2 rounded-md hover:bg-sky-900 transition duration-200">
          Começar
        </a>
      </div>
    </main>
  )
}
