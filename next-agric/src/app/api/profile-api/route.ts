import { z } from "zod";
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
=======
import type { NextApiRequest, NextApiResponse } from 'next'
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";

const userSchema = z.object({
<<<<<<< HEAD
  nickname: z
    .string()
    .min(3, "Nickname must be at least 3 characters long")
    .max(30),
});

export async function POST(req: Request) {
  const user = await getCurrentUser();
  try {
    if (!user?.id) {
      return NextResponse.json(
        { message: "ไม่มีสิทธิ์ในการแก้ไข" },
        { status: 500 },
      );
    }

    const { nickname } = await req.json();

    const newNickName = await db.user.update({
      where: { id: user.id },
      data: { nickname },
    });

    return NextResponse.json({
      user: newNickName,
      message: "เปลี่ยนชื่อเล่นสำเร็จ",
    });
  } catch (error) {
    return NextResponse.json({ message: "เกิดข้อผิดพลาด" }, { status: 500 });
  }
}

export async function GET(req: Request, res: Response) {
  const user = await getCurrentUser();
  try {
    const getUser = await db.user.findUnique({
      where: { id: user?.id },
    });
    return NextResponse.json({ user: getUser });
  } catch (error) {
    return NextResponse.json(
      { message: "ไม่สามารถดึงข้อมูล" },
      { status: 500 },
    );
  }
}
=======
    nickname: z.string().min(3, "Nickname must be at least 3 characters long").max(30),
});

export async function POST(req: Request) {
    const user = await getCurrentUser()
    try {

        if (!user?.id) {
            return NextResponse.json({ message: "ไม่มีสิทธิ์ในการแก้ไข" }, { status: 500 })
        }

        const { nickname } = await req.json()

        const newNickName = await db.user.update({
            where: { id: user.id },
            data: { nickname }
        })

        return NextResponse.json({ user: newNickName, message: "เปลี่ยนชื่อเล่นสำเร็จ" })

    } catch (error) {
        return NextResponse.json({ message: "เกิดข้อผิดพลาด" }, { status: 500 })
    }
}


export async function GET(req: Request, res: Response) {
    const user = await getCurrentUser();
    try {
        const getUser = await db.user.findUnique({
            where: { id: user?.id }
        });
        return NextResponse.json({ user: getUser });
    } catch (error) {
        return NextResponse.json({ message: "ไม่สามารถดึงข้อมูล" }, { status: 500 });
    }
}
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
