<<<<<<< HEAD
import * as z from "zod";

export const FOrmImage = z.object({
  image: z.string().url().nonempty(),
});

export const UserBio = z.object({
  bio: z.string().min(3).max(100),
});

export const UserName = z.object({
  name: z.string().min(3).max(4),
});

export const UserNickName = z.object({
  nickname: z.string().min(3).max(4),
});
=======
import * as z from "zod"

export const FOrmImage = z.object({
    image: z.string().url().nonempty(),

})

export const UserBio = z.object({
    bio: z.string().min(3).max(100)
})

export const UserName = z.object({
    name: z.string().min(3).max(4)
})

export const UserNickName = z.object({
    nickname: z.string().min(3).max(4)
})
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
