"use server"

import { PrismaClient } from "@prisma/client";
import { setCookie } from "./_cookies";

const prisma = new PrismaClient({})

interface DataPreferences {
    name: string,
    theme: string | null,
    typing_mode: string | null,
    ai_model: string | null,
    trial_model: string | null
}

const dbDeleteAccount = async (name:string) => {
    const deleteUser = await prisma.users.delete({where:{name:name}})
    return deleteUser
}

const dbGetPreferences = async (name:string): Promise<DataPreferences | null | undefined> => {
    return await prisma.users.findUnique({ where: { name: name },select:{name:true,theme:true,trial_model:true,typing_mode:true,ai_model:true}})
}

const dbSetPreferences = async (name:string,theme: string | null, typing_mode: string | null, ai_model: string | null, trial_model: string | null) => {
    const tmp_preferences = { name: name, theme: theme, typing_mode: typing_mode, ai_model: ai_model , trial_model: trial_model}
    setCookie(tmp_preferences)
    return await prisma.users.update({ data: {theme: theme, typing_mode: typing_mode, ai_model: ai_model, trial_model: trial_model}, where: { name: name } })
}

export { dbDeleteAccount, dbGetPreferences, dbSetPreferences }