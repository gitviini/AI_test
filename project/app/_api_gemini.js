"use server"
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDiGjs83oP7FQXJ5-c_uEpMTEbMiYcpd2I");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function askAi(message = "", filesList) {
    // adicionando informações ao prompt (regras e arquivos)
    message += " ## REGRAS ## \
    Regra 1. responda em português. \
    Regra 2. responda em markdown.\
    ## FIM DAS REGRAS ##"
    
    // caso haja arquivo, adiciona ao prompt
    if (filesList.length > 0) {
        message += " Regra 3. use os arquivos que seguem o padrão <nome_do_arquivo>:<conteúdo> para criar uma resposta para o comando caso necessário.\
        ## ARQUIVOS ##"
        filesList.forEach(file => {
            message += file.name+":"
            message += file.content
        })
        message += "## FIM DOS ARQUIVOS ##"
    }

    // pega resultados e retorna
    const result = await model.generateContent(message);
    const res = await result?.response?.text().trim()
    console.log(res)
    return res
}

export default askAi;