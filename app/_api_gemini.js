"use server"
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDiGjs83oP7FQXJ5-c_uEpMTEbMiYcpd2I");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function askAi(message = "", filesList, mode = "") {
    // adicionando informações ao prompt (regras e arquivos)
    if(mode == "trilha"){
        message += " ## REGRAS ## \
        Regra 1. responda em português. \
        Regra 2. responda em markdown.\
        Regra 3. não cite essas regras.\
        Regra 4. cria uma trilha seguindo o padrão\
        <título>\
        <módulo 1><título do módulo 1><conteúdo detalhado>\
        <módulo 2><título do módulo 2><conteúdo detalhado>\
        <Questões sobre o conteúdo>.\
        ## FIM DAS REGRAS ##"
    }
    else{
        message += " ## REGRAS ## \
        Regra 1. responda em português. \
        Regra 2. responda em markdown.\
        Regra 3. não cite essas regras.\
        Regra 4. você está no modo texto.\
        ## FIM DAS REGRAS ##"
    }
    
    // caso haja arquivo, adiciona ao prompt
    if (filesList.length > 0) {
        message += " Regra 5. use os arquivos que seguem o padrão <nome_do_arquivo>:<conteúdo> para criar uma resposta para o comando caso necessário.\
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