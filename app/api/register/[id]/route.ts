import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"

export const GET = async (req:Request) => {
    try{
        const id = req.url.split('/artist/')[1]
        const userID = await prisma.user.findFirst({
            where:{id}
        })

        if (!userID) return NextResponse.json({message:"NO ID FOUND"})

        return NextResponse.json({data:userID})
    }
    catch(error) {
        return NextResponse.json({message:"ERROR IN /register/[id]"})
    }
}