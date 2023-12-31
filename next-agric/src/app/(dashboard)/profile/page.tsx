<<<<<<< HEAD
'use server'
import FetchPost from '@/components/post/fetchPost'
import { PostForm } from '@/components/post/postForm'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { fetchAccount } from '@/lib/actions/user.action'
import { AlertAuth } from '@/lib/alert/alertSession'
import { getCurrentUser } from '@/lib/session'
import { Flex, Grid, Text } from '@radix-ui/themes'
import { Suspense } from 'react'

export default async function Page() {
    const session = await getCurrentUser()

    const ac = await fetchAccount()

    if (!session?.id) {
        return (
            <>
                <AlertAuth />
            </>
        )
    }

    if (session.id) {
        return (
            <>
                <Flex justify="center" align="center">
                    <Grid
                        justify="center"
                        align="center"
                        columns="1"
                        gap="3"
                        className="p-6 text-center 
            shadow-inner
            "
                    >
                        {ac?.image ? (
                            <Avatar className="left-1/2 h-36 w-36 -translate-x-16 ">
                                <AvatarImage src={ac.image} />
                                <AvatarFallback>{ac?.name}</AvatarFallback>
                            </Avatar>
                        ) : (
                            <Avatar className="left-1/2 h-36 w-36 -translate-x-14 ">
                                <AvatarImage src="defaultAvatar.png" />
                            </Avatar>
                        )}
                        <div>
                            <Text>
                                {ac?.name} {ac?.nickname}
                            </Text>
                        </div>

                        <h1>
                            bio
                            {ac?.bio}
                        </h1>
                    </Grid>
                    <div className="divider divider-horizontal " />
                    <Grid>
                        <div className="divider text-lg font-bold"> POST </div>
                        <div className="text-center">
                            <PostForm
                                user={{
                                    authorid: '',
                                    content: '',
                                    imagePost: '',
                                }}
                            />
                        </div>
                        <div className="h-32">
                            <Suspense fallback={<p> LOADING </p>}>
                                <FetchPost />
                            </Suspense>
                        </div>
                    </Grid>
                </Flex>
            </>
        )
    }
=======
"use server";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { AlertAuth } from "@/lib/alert/alertSession";
import { PostForm } from "@/components/post/postForm";
import FetchPost from "@/components/post/fetchPost";
import Cart from "./cart/page";
import { getCurrentUser } from "@/lib/session";
import { FetchUserPost } from "@/lib/actions/user.post";
import {
  FetchBio,
  FetchImageProfile,
  FetchName,
  FetchNickname,
  fetchAccount,
} from "@/lib/actions/user.action";
import { Flex, Grid, Text } from "@radix-ui/themes";

export default async function Page() {
  const session = await getCurrentUser();

  const ac = await fetchAccount();

  if (!session?.id) {
    return (
      <>
        <AlertAuth />
      </>
    );
  }

  if (session.id) {
    return (
      <>
        <Flex justify="center" align="center">
          <Grid
            justify="center"
            align="center"
            columns="1"
            gap="3"
            className="shadow-inner text-center ring-1 w-[400px] 
            p-6
            "
          >
            {ac?.image ? (
              <Avatar className="w-36 h-36 left-1/2 -translate-x-16 ">
                <AvatarImage src={ac.image} />
                <AvatarFallback>{ac?.name}</AvatarFallback>
              </Avatar>
            ) : (
              <Avatar className="w-36 h-36 left-1/2 -translate-x-14 ">
                <AvatarImage src="defaultAvatar.png" />
              </Avatar>
            )}
            <div>
              <Text>
                {ac?.name} {ac?.nickname}
              </Text>
            </div>

            <h1>
              bio
              {ac?.bio}
            </h1>
          </Grid>
          <div className="divider divider-horizontal " />
          <Grid>
            <div className="divider font-bold text-lg"> POST </div>
            <div className="text-center">
              <PostForm
                user={{
                  authorid: "",
                  content: "",
                  imagePost: "",
                }}
              />
            </div>
            <div className="h-32">
              <Suspense fallback={<p> LOADING </p>}>
                <FetchPost />
              </Suspense>
            </div>
          </Grid>
        </Flex>
      </>
    );
  }
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
}
