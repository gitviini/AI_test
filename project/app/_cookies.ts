'use server'

import { cookies } from "next/headers"

interface DataPreferences {
    name: string,
    theme: string | null,
    typing_mode: string | null,
    ai_model: string | null,
    trial_model: string | null,
}

async function setCookie(preferences:DataPreferences | null){
    const cookiemanage = await cookies()
    cookiemanage.set("preferences",JSON.stringify(preferences))
}

async function getCookie(name:string){
    const cookiemanage = await cookies()
    const tmp_value = cookiemanage.get(name)?.value
    return JSON.parse(tmp_value ? tmp_value : "{}" )
}

export {getCookie,setCookie}