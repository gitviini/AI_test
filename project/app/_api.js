import {
    BedrockRuntimeClient,
    InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime"; // ES Modules import

import info from "@/app/aws.js"

const client = new BedrockRuntimeClient({region: "us-east-1",
	credentials:{
		accessKeyId:info.accessKeyId,
		secretAccessKey:info.secretAccessKey,
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
    }

    return res
};

export default askAi;
