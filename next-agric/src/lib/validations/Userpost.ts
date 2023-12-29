import { z } from "zod";

<<<<<<< HEAD
export const TimeLinePost = z.object({
  content: z.string().nonempty().optional(),
  imagePost: z.string().url().nonempty().optional(),
});

export const commentPost = z.object({
  comment: z.string().nonempty(),
});

export const replyComment = z.object({
  reply: z.string().nonempty(),
});
=======

export const TimeLinePost = z.object({
    content: z.string().nonempty().optional(),
    imagePost: z.string().url().nonempty().optional(),
})


export const commentPost = z.object({
    comment: z.string().nonempty(),
})


export const replyComment = z.object({
    reply: z.string().nonempty(),
})
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
