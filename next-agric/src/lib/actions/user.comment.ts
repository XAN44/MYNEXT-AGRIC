'use server'

<<<<<<< HEAD
import { revalidatePath } from 'next/cache'
import { db } from '../db'
=======
import { revalidatePath } from "next/cache"
import { db } from "../db"

>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4

export async function CommentInPost(
    postId: string,
    comment: string,
    authorId: string,
    path: string
) {
    try {
        const Inpost = await db.post.findUnique({
            where: {
<<<<<<< HEAD
                id: postId,
            },
        })
        if (!Inpost) {
            throw new Error('Dont have post')
=======
                id: postId
            }
        })
        if (!Inpost) {
            throw new Error("Dont have post")
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
        }

        const newComment = await db.comment.create({
            data: {
                text: comment,
                postId: postId,
<<<<<<< HEAD
                authorid: authorId,
            },
        })
        revalidatePath(path)
    } catch (error: any) {
        throw new Error(`Failed to create/update user: ${error.message}`)
    }
}

=======
                authorid: authorId
            }
        })
        revalidatePath(path)

    } catch (error: any) {
        throw new Error(`Failed to create/update user: ${error.message}`);

    }

}



>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
export async function fetchPostByID(id: string) {
    try {
        const post = await db.post.findUnique({
            where: {
                id: id,
            },
<<<<<<< HEAD

=======
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
<<<<<<< HEAD
                        image: true,
                    },
                },
                comments: {
                    orderBy: {
                        createdAt: 'asc',
                    },
=======
                        image: true
                    }
                },
                comments: {
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
                    select: {
                        id: true,
                        text: true,
                        authorid: true,
                        createdAt: true,
                        author: {
                            select: {
                                id: true,
                                name: true,
<<<<<<< HEAD
                                image: true,
                            },
=======
                                image: true
                            }
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
                        },
                        postId: true,
                        Post: {
                            select: {
                                id: true,
                                content: true,
<<<<<<< HEAD
                                ImagePost: true,
                            },
=======
                                ImagePost: true
                            }
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
                        },
                        Reply: {
                            select: {
                                replytext: true,
                                author: {
                                    select: {
                                        id: true,
                                        name: true,
<<<<<<< HEAD
                                        image: true,
                                    },
                                },
                                replyCommet: {
                                    select: {
                                        id: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        })

        if (!post) {
            throw new Error('Post not found')
=======
                                        image: true
                                    }
                                },
                                replyCommet: {
                                    select: {
                                        id: true
                                    }
                                }
                            }
                        }
                    }

                },


            },
        });

        if (!post) {
            throw new Error('Post not found');
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
        }

        return post
    } catch (error) {
<<<<<<< HEAD
        console.error('Error fetching comments:', error)
        throw error
    }
}

=======
        console.error('Error fetching comments:', error);
        throw error;
    }
}






>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
export async function replyComments(
    commentId: string,
    reply: string,
    authorId: string,
    path: string
) {
    try {
        const findComment = await db.comment.findUnique({
            where: {
<<<<<<< HEAD
                id: commentId,
            },
        })
        if (findComment) {
            console.log('Attempting to create reply...')
=======
                id: commentId
            }
        })
        if (findComment) {
            console.log('Attempting to create reply...');
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4

            const repy = await db.reply.create({
                data: {
                    replyCommentid: commentId,
                    replytext: reply,
<<<<<<< HEAD
                    authorid: authorId,
                },
            })
            console.log('Created reply:', repy)

            revalidatePath(path)
            console.log('Path revalidated:', path)
        }

        return reply
    } catch (error) {}
}
=======
                    authorid: authorId
                }
            })
            console.log('Created reply:', repy);

            revalidatePath(path)
            console.log('Path revalidated:', path);

        }

        return reply
    } catch (error) {

    }
}




>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
