"use server"

import { PrismaClient } from "@prisma/client";
import { setCookie } from "./_cookies";

const prisma = new PrismaClient({})

interface DataPreferences {
    name: string,
    theme: string | null,
    typing_mode: string | null,
    ai_model: string | null,
}

<<<<<<< HEAD
const dbGetPreferences = async ():Promise<DataPreferences | null> =>{
    return await prisma.users.findUnique({where:{id:1}})
}

const dbSetPreferences = async (theme:string | null,typing_mode:string | null ,ai_model:string | null) =>{
    setCookie({name:"Ana",theme:theme,typing_mode:typing_mode,ai_model:ai_model})
    return await prisma.users.update({data:{id:1,theme:theme,typing_mode:typing_mode,ai_model:ai_model},where:{id:1}})
=======
const dbGetPreferences = async ():Promise<DataPreferences> =>{
    return await prisma.users.findUnique({where:{id:1}})
}

const dbSetPreferences = async (newPreferences:DataPreferences) =>{
    return await prisma.users.update({data:{id:1,...newPreferences},where:{id:1}})
>>>>>>> origin/next
}

export {dbGetPreferences,dbSetPreferences}