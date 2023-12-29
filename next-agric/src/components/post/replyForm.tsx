"use client";
import { userPost } from "@/lib/actions/user.post";
import { getCurrentUser } from "@/lib/session";
import { commentPost, replyComment } from "@/lib/validations/Userpost";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/router";
import { CiImageOn } from "react-icons/ci";
import { Value } from "@prisma/client/runtime/library";
import Image from "next/image";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import { Input } from "../ui/input";
import { Loader2 } from "lucide-react";
import { Container, Flex, Grid, Text } from "@radix-ui/themes";
import { replyComments } from "@/lib/actions/user.comment";
import { AvatarImage, Avatar } from "../ui/avatar";

interface Props {
  commentId: string;
  currentUserImage: string;
  currentUserId: string;
  reply: {
    id: string;
    replytext: true;
    author: {
      id: string;
      name: string;
      image: string;
    } | null;
    replyComment: {
      id: string;
    };
  }[];
}

export default function Reply({
  commentId,
  currentUserImage,
  currentUserId,
  reply,
}: Props) {
  const path = usePathname() ?? "";

  const replyForm = useForm<z.infer<typeof replyComment>>({
    resolver: zodResolver(replyComment),
    defaultValues: {
      reply: "",
    },
  });

  const onSubmitReply = async (values: z.infer<typeof replyComment>) => {
    await replyComments(
      commentId,
      values.reply,
      JSON.parse(currentUserId),
<<<<<<< HEAD
      path,
=======
      path
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
    );
  };

  const [replye, setReply] = useState(false);

  const handleShowReply = () => {
    setReply(true);
  };
  const handleHiddenReply = () => {
    setReply(false);
  };

  return (
    <>
      {!replye && <button onClick={handleShowReply}>Reply</button>}

      {replye && (
        <>
          <button onClick={handleHiddenReply}>Hidden</button>
          {reply.map((r) => (
            <>
              <Flex gap="3">
                <Avatar>
                  <AvatarImage
                    src={r.author?.image}
                    alt="Profile"
                    className="rounded-full "
                    width={24}
                    height={24}
                  />
                </Avatar>
                <Text>{r.author?.name}</Text>
              </Flex>
              <Text>{r.replytext}</Text>
            </>
          ))}
          <Form {...replyForm}>
            <form
              onSubmit={replyForm.handleSubmit(onSubmitReply)}
              className="
              flex  
              justify-center 
              text-center "
            >
              <FormField
                control={replyForm.control}
                name="reply"
                render={({ field }) => (
                  <FormItem
                    className="
                flex 
                items-center 
                 "
                  >
                    <FormLabel>
                      <Avatar>
                        <AvatarImage
                          src={currentUserImage}
                          alt="profile"
                          className="rounded-full object-cover"
                        />
                      </Avatar>
                    </FormLabel>

                    <FormControl className="border-none">
                      <input
                        placeholder="reply.."
                        className=" 
                        bg-base-300
                        rounded-lg ml-3 mr-3 p-3
                        w-96
                        "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-32  mt-1 flex">
                reply
              </Button>
            </form>
          </Form>
        </>
      )}
    </>
  );
}
