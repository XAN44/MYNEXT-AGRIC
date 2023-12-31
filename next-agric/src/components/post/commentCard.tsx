"use client";
import Image from "next/image";
import Link from "next/link";
import { classNames } from "uploadthing/client";
import { Code, Container, Flex, Grid, Text } from "@radix-ui/themes";
import { FaCommentDots } from "react-icons/fa";
import { useState } from "react";
import Reply from "./replyForm";
import { getCurrentUser } from "@/lib/session";
import { Avatar, AvatarImage } from "../ui/avatar";

interface Props {
  id: string;
  comment: string | null;
  authorId: string | null;
  createAt: string;
  author: {
    id: string;
    name: string | null;
    image: string | null;
  } | null;

  reply: {
    id: string;
    replytext: true;
    author: {
      id: string | null;
      name: true | null;
      image: true | null;
    } | null;
    replyComment: {
      id: string;
    };
  }[];
  isComment?: boolean;
  isReply?: boolean;
}

const CommentCard = ({
  id,
  comment,
  author,
  createAt,
  reply,
  authorId,
  isComment,
  isReply,
}: Props) => {
  const [replying, setReplying] = useState(false);
  const [showReply, setShowReply] = useState(false);

  const handleShowReply = () => {
    setShowReply(true);
  };

  const handleHiddenReply = () => {
    setShowReply(false);
  };

  const handleReplyClick = () => {
    setReplying(true);
  };
  const handleCancleClick = () => {
    setReplying(false);
  };

  return (
    <Container size="4" p="6" className="flex w-full flex-col rounded-xl">
      {isComment ? (
        <>
          <Flex gap="3">
            {/* Profile in Comment */}

            <Link href={`/profile/${author?.id}`}>
              <Avatar>
                {author?.image && (
                  <AvatarImage
                    src={author?.image}
                    width={100}
                    height={100}
                    alt="profileImage"
                  />
                )}
              </Avatar>
            </Link>
            {/* Comment By name */}
            <Text mt="2" size="5">
              {author?.name}
            </Text>
          </Flex>
          {/* Comment In Post */}
          <Grid mt="6" ml="8" width="100%">
            <Text>{comment}</Text>
          </Grid>
        </>
      ) : null}
    </Container>
  );
};

export default CommentCard;
