/*
  Warnings:

  - You are about to drop the column `title` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "title",
ADD COLUMN     "ImagePost" TEXT,
ALTER COLUMN "content" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Reply" (
    "id" TEXT NOT NULL,
    "replytext" TEXT NOT NULL,
    "authorid" TEXT,
    "replyCommentid" TEXT,

    CONSTRAINT "Reply_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reply" ADD CONSTRAINT "Reply_authorid_fkey" FOREIGN KEY ("authorid") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reply" ADD CONSTRAINT "Reply_replyCommentid_fkey" FOREIGN KEY ("replyCommentid") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
