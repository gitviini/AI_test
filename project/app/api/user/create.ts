"use server"
import { createHash } from "crypto";
// Prisma will help handle and catch errors
import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({})

import Info from "@/assets/contants/InfoInterface";
export default async function handle(name:string, password:string) {
  return createUserHandler(name, password)
}
export const hashPassword = (text:string) => {
  return createHash('sha256').update(text).digest('hex');
};
// function to create user in our database
async function createUserHandler(name:string, password:string) {
  if (password.length < 6) {
    return {code:400,message:"Senhas devem conter mais de 6 caracteres",content:{}}
  }
  try {
    const user = await prisma.users.create({
      data: { name: name, password: await hashPassword(password) },
    });
    console.log(user)
    return {code:200, message:"Novo usuário criado", content:user};
  } catch (e) {
    return {code:500, message:"Ops! Houve um erro, tente novamente.", content:{e}}
  }
}