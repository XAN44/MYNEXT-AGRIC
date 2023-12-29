import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import { join } from "path";
import { use } from "react";
import { v4 as uuid } from "uuid";

<<<<<<< HEAD
export async function POST(req: Request) {
  const user = await getCurrentUser();
  const { image } = req.body;

  if (!user?.id) {
    return NextResponse.json({ message: "เข้าสู่ระบบก่อน" });
  }

  try {
    const newProfile = await db.user.update({
      where: { id: user?.id },
      data: { image },
    });
    return NextResponse.json({ success: true });
  } catch (error) {}
}

export async function GET(req: Request, res: Response) {
  const user = await getCurrentUser();
  try {
    const getProfile = await db.user.findUnique({
      where: { id: user?.id },
      select: { image: true },
    });

    return Response.json({ user: getProfile });
  } catch (error) {
    // Handle error
    return Response.json({ error: "Internal Server Error" });
  }
}
=======


export async function POST(req: Request) {

    const user = await getCurrentUser()
    const { image } = req.body


    if (!user?.id) {

        return NextResponse.json({ message: "เข้าสู่ระบบก่อน" })
    }


    try {

        const newProfile = await db.user.update({
            where: { id: user?.id },
            data: { image }
        })
        return NextResponse.json({ success: true })

    } catch (error) {

    }
}

export async function GET(req: Request, res: Response) {
    const user = await getCurrentUser()
    try {
        const getProfile = await db.user.findUnique({
            where: { id: user?.id },
            select: { image: true }
        })

        return Response.json({ user: getProfile });
    } catch (error) {
        // Handle error
        return Response.json({ error: "Internal Server Error" });
    }
}


>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
