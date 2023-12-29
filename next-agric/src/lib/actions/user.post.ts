'use server'
<<<<<<< HEAD
import { revalidatePath } from 'next/cache'
import { db } from '../db'
import { getCurrentUser } from '../session'

interface userPost {
    authorid: string
    path: string
=======
import { revalidatePath } from "next/cache"
import { db } from "../db"
import { getCurrentUser } from "../session"
import { useRouter } from "next/router"
import { redirect } from "next/dist/server/api-utils"
import { z } from "zod"



interface userPost {
    authorid: string
    path: string | null
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
    ImagePost: string
    content: string
}

export async function userPost({
    authorid,
    content,
    ImagePost,
<<<<<<< HEAD
    path,
=======
    path
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
}: userPost): Promise<void> {
    try {
        const currentUser = await getCurrentUser()

<<<<<<< HEAD
=======

>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
        if (!currentUser) {
            throw new Error('ไม่มีผู้ใช้')
        }
        await db.post.create({
            data: {
<<<<<<< HEAD
                authorId: currentUser.id,
                content,
                ImagePost,
            },
        })
        revalidatePath(path)
    } catch (error: any) {
        throw new Error(`Failed to create/update user: ${error.message}`)
    }
}

=======
                authorId: currentUser.id, content, ImagePost
            }
        })
        if (path === '/profile') {
            revalidatePath(path)
        }

    } catch (error: any) {
        throw new Error(`Failed to create/update user: ${error.message}`);
    }
}


>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
export async function FetchUserPost() {
    try {
        const user = await getCurrentUser()
        if (!user?.id) {
            throw new Error('not have dung')
        }
        if (user?.id) {
<<<<<<< HEAD
            const fetchUser = await db.post.findMany({
                where: {
                    authorId: user.id,
                },
                orderBy: {
                    createdAt: 'desc',
=======

            const fetchUser = await db.post.findMany({
                where: {
                    authorId: user.id
                },
                orderBy: {
                    createdAt: 'desc'
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
                },
                include: {
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
                    comments: {
                        select: {
                            id: true,
                            text: true,
                            author: {
                                select: {
                                    id: true,
                                    name: true,
<<<<<<< HEAD
                                    image: true,
                                },
                            },
                        },
                    },
                },
            })
            return fetchUser
        }
    } catch (error) {
        console.error('Error fetching user posts:', error) // หรือใช้วิธีที่ต้องการเพื่อจัดการข้อผิดพลาดที่เกิดขึ้น
    }
}

export async function Fetchusercomment() {
    try {
        const fetchcomment = await db.comment.findMany({
=======
                                    image: true
                                }
                            }
                        }
                    }

                }
            })
            return fetchUser;
        }

    } catch (error) {
        console.error('Error fetching user posts:', error); // หรือใช้วิธีที่ต้องการเพื่อจัดการข้อผิดพลาดที่เกิดขึ้น
    }
}


export async function Fetchusercomment() {
    try {
        const fetchcomment = await db.comment.findMany({

>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
            select: {
                id: true,
                postId: true,
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
                },
            },
            orderBy: {
                createdAt: 'desc',
=======
                        image: true
                    }
                }

            },
            orderBy: {
                createdAt: 'desc'
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
            },
        })
        return fetchcomment
    } catch (error) {
<<<<<<< HEAD
        console.error('Error fetching user posts:', error) // หรือใช้วิธีที่ต้องการเพื่อจัดการข้อผิดพลาดที่เกิดขึ้น
    }
}

=======
        console.error('Error fetching user posts:', error); // หรือใช้วิธีที่ต้องการเพื่อจัดการข้อผิดพลาดที่เกิดขึ้น

    }

}



>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
export async function FetchUserPostById() {
    try {
        const user = await getCurrentUser()
        if (!user?.id) {
            throw new Error('not have dung')
        }
        if (user?.id) {
<<<<<<< HEAD
            const fetchUser = await db.post.findMany({
                where: {
                    authorId: user.id,
                },
                orderBy: {
                    createdAt: 'desc',
=======

            const fetchUser = await db.post.findMany({
                where: {
                    authorId: user.id
                },
                orderBy: {
                    createdAt: 'desc'
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
                },
                include: {
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
                    comments: {
                        select: {
                            id: true,
                            text: true,
                            author: {
                                select: {
                                    id: true,
                                    name: true,
<<<<<<< HEAD
                                    image: true,
                                },
                            },
                        },
                    },
                },
            })
            return fetchUser
        }
    } catch (error) {
        console.error('Error fetching user posts:', error) // หรือใช้วิธีที่ต้องการเพื่อจัดการข้อผิดพลาดที่เกิดขึ้น
=======
                                    image: true
                                }
                            }
                        }
                    }

                }
            })
            return fetchUser;
        }

    } catch (error) {
        console.error('Error fetching user posts:', error); // หรือใช้วิธีที่ต้องการเพื่อจัดการข้อผิดพลาดที่เกิดขึ้น
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
    }
}

export async function fetchUserProfileByID(id: string) {
<<<<<<< HEAD
=======


>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
    if (!id) {
        return null
    }
    if (id) {
        const fetchUser = await db.user.findMany({
            where: {
<<<<<<< HEAD
                id: id,
            },
            include: {
                post: {
                    orderBy: {
                        createdAt: 'desc',
                    },
=======
                id: id
            },
            include: {
                post: {
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
                    select: {
                        id: true,
                        content: true,
                        ImagePost: true,
                        createdAt: true,
                        authorId: true,
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
                        comments: {
                            include: {
                                author: {
                                    select: {
                                        id: true,
                                        name: true,
<<<<<<< HEAD
                                        image: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        })
        return fetchUser
=======
                                        image: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
        return fetchUser

>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
    }
}
