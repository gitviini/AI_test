"use server"

import {
    BedrockRuntimeClient,
    InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime"; // ES Modules import

const ACCESS_KEY = process.env.ACCESS_KEY
const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY

const client = new BedrockRuntimeClient({region: "us-east-1",
	credentials:{
		accessKeyId:ACCESS_KEY,
		secretAccessKey:SECRET_ACCESS_KEY,
	}
});

const askAi = async (message) => {
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

    try{
        response = await client.send(command);
    }
    catch(err){
        console.log(err)
    }

    let res

    if(response){
        res = await JSON.parse(Buffer.from(response.body).toString("utf8")).choices[0].message.content;
    }else{
        res = "failed"
    };

    return res
};

export default askAi;
