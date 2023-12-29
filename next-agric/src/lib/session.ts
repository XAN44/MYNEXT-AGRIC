import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
export async function getCurrentUser() {
<<<<<<< HEAD
  const session = await getServerSession(authOptions);
  return session?.user;
}
=======
    const session = await getServerSession(authOptions)
    return session?.user
}
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
