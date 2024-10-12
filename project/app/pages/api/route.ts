
import { NextResponse, NextRequest} from "next/server";

// Pegar
export async function GET(req: NextRequest){
  console.log(req.headers)
  return NextResponse.json({
    name_project: "aibot",
    infos: {
      version: "1.0.0",
    }
  })
}

// Postar
export async function POST(req: NextRequest){
  console.log(req.headers)
}

// Atualizar
export async function PUT(req: NextRequest){
  console.log(req.headers)
}

// Deletar
export async function DELETE(req: NextRequest){
  console.log(req.headers)
}