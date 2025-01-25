"use server"

async function action(formData: FormData) {
    //pegando informações do arquivo no input file
    const file = formData.get("file") as File;
    //verifica se há o arquivo e seu tamanho, caso seja inapropriado, retornará um erro
    if (!file || file.size === 0) {
        console.log("action error:. file == null or file.size === 0")
        return
    }
    //recebendo buffer do arquivo
    const data = await file.text()
    //criando novo arquivo com o conteúdo recebido
    //await fs.writeFile(`${process.cwd()}/${file.name}`, Buffer.from(data))
    return data
}

export default action