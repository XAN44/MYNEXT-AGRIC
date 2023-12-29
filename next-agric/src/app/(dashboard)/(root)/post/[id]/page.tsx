import CommentCard from '@/components/post/commentCard'
import Comment from '@/components/post/commentForm'
import PostCard from '@/components/post/postCard'
import Reply from '@/components/post/replyForm'
import { fetchUser } from '@/lib/actions/user.action'
import { fetchPostByID } from '@/lib/actions/user.comment'
import { getCurrentUser } from '@/lib/session'
import { Container } from '@radix-ui/themes'
import { redirect } from 'next/navigation'

const Page = async ({ params }: { params: { id: string } }) => {
    if (!params.id) return null

    const user = await getCurrentUser()
    if (!user) return null

    const userInfo = await fetchUser(user.id)
    if (!userInfo) redirect('/profile')

    const postBy = await fetchPostByID(params.id)
    ////')

    return (
        <Container className="relative mt-24 h-0">
            <div className="  place-items-center justify-center ">
                <PostCard
                    key={postBy.id}
                    id={postBy.id}
                    content={postBy.content}
                    ImagePost={postBy.ImagePost}
                    authorId={postBy.authorId}
                    createAt={new Date(postBy.createdAt).toLocaleString()}
                    author={postBy.author}
                    comments={postBy.comments}
                />
                <div className="left-3 mt-7 ">
                    <Comment
                        postId={params.id}
                        currentUserImage={user.image}
                        currentUserId={JSON.stringify(user.id)}
                    />
                </div>
                <div className="mt-10">
                    {postBy.comments.map((comment: any) => (
                        <>
                            <CommentCard
                                key={comment.id}
                                id={comment.id}
                                comment={comment.text}
                                authorId={comment.authorId}
                                createAt={new Date(
                                    comment.createdAt
                                ).toLocaleString()}
                                author={
                                    comment.author || {
                                        id: '',
                                        name: '',
                                        image: '',
                                    }
                                }
                                reply={comment.Reply}
                                isComment
                                isReply
                            />
                            <Reply
                                commentId={comment.id}
                                currentUserImage={user.image}
                                currentUserId={JSON.stringify(user.id)}
                                reply={comment.Reply}
                            />
                        </>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default PageTransitionEvent