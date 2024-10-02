// Make sure to include these imports:
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function ask(text=""){
    const result = await model.generateContent(text);
    return await result.response.text()
}

export default ask