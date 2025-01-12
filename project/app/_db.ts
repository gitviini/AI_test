"use server"

import { PrismaClient, Prisma} from "@prisma/client";
import { setCookie } from "./_cookies";

const prisma = new PrismaClient({})

interface DataPreferences {
    name: string,
    theme: string | null,
    typing_mode: string | null,
    ai_model: string | null,
}

interface dbError {
    errorMessage: string
}

const dbGetPreferences = async (): Promise<DataPreferences | null | undefined> => {
    return await prisma.users.findUnique({ where: { id: 1 } })
}

const dbSetPreferences = async (theme: string | null, typing_mode: string | null, ai_model: string | null) => {
    setCookie({ name: "Ana", theme: theme, typing_mode: typing_mode, ai_model: ai_model })
    return await prisma.users.update({ data: { id: 1, theme: theme, typing_mode: typing_mode, ai_model: ai_model }, where: { id: 1 } })
}

export { dbGetPreferences, dbSetPreferences }