"use server"

import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({})
import { hashPassword } from "./create";
export default async function handle(name:string, password:string) {
  return await loginUserHandler(name, password);
}
async function loginUserHandler(name:string, password:string) {
  if (!name || !password) {
    return {code:400,message: "Entradad inválida",content:{}}
  }
  try {
    const user = await prisma.users.findUnique({
      where: { name: name },
      select: {
        id: true,
        name: true,
        password: true,
      },
    });
    if (user && user.password == await hashPassword(password)) {
      return {code:200,message:"Usuário logado com sucesso",content:{user}}
    } else {
      return {code:401,message: "Nome ou senha inválidos",content:{}}
    }
  } catch (erro) {
    return {code:404,message:"Houve um erro",content:{erro}}
  }
}