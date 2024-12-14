"use server"

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({})

interface DataPreferences {
    name: string,
    theme: string | null,
    typing_mode: string | null,
    ai_model: string | null,
}

const dbGetPreferences = async ():Promise<DataPreferences> =>{
    return await prisma.users.findUnique({where:{id:1}})
}

const dbSetPreferences = async (newPreferences:DataPreferences) =>{
    return await prisma.users.update({data:{id:1,...newPreferences},where:{id:1}})
}

export {dbGetPreferences,dbSetPreferences}