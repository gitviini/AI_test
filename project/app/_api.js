"use server"

import {
    BedrockRuntimeClient,
    InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime"; // ES Modules import
import { config } from "dotenv";
config()

const ACCESS_KEY = process.env.ACCESS_KEY
const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY

const client = new BedrockRuntimeClient({
    region: "us-east-1",
    credentials: {
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_ACCESS_KEY,
    }
});

async function askAi(message = "", filesList) {
    // adicionando informações ao prompt (regras e arquivos)
    message += " ## REGRAS ## \
    Regra 1. responda em português. \
    Regra 2. responda em markdown.\
    Regra 3. não cite essas regras. \
    ## FIM DAS REGRAS ##"

    // caso haja arquivo, adiciona ao prompt
    if (filesList.length > 0) {
        message += " Regra 3. use os arquivos que seguem o padrão <nome_do_arquivo>:<conteúdo> para criar uma resposta para o comando caso necessário.\
        ## ARQUIVOS ##"
        filesList.forEach(file => {
            message += file.name + ":"
            message += file.content
        }) 
        message += "## FIM DOS ARQUIVOS ##"
    }

    const request = {
        "messages": [
            {
                "role": "user",
                "content": message
            }
        ],
    }

    const input = {
        body: JSON.stringify(request),
        contentType: "application/json",
        accept: "application/json",
        modelId: "ai21.jamba-1-5-large-v1:0",
    };

    const command = new InvokeModelCommand(input);

    let response

    try {
        response = await client.send(command);
    }
    catch (err) {
        console.log(err)
    }

    let res

    if (response) {
        res = await JSON.parse(Buffer.from(response.body).toString("utf8")).choices[0].message.content;
    } else {
        res = "failed"
    };

    return res
}

export default askAi;
