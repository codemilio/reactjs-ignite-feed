import { Avatar } from '../Avatar'
import { CommentList } from '../CommentList'
import { Time } from '../Time'
import { IComment, type IPost } from '../../utils/types'
import styles from './styles.module.css'
import { useState } from 'react'

type Props = IPost

export function Post({ author, publishedAt, content }: Props) {
  const [comments, setComments] = useState<IComment[]>([{
    id: 'first-comment-1232123',
    author: {
      name: 'Lucas Silva',
      avatarUrl: 'https://github.com/lucasspor.png',
      role: 'Desenvolvedor Web'
    },
    content: 'Muito legal esse post!',
    likes: 20,
    publishedAt: new Date()
  }])

  function handleCreateNewComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const newComment = e.currentTarget.comment as HTMLTextAreaElement
    setComments([...comments, {
      id: `comment-${comments.length + 1}`,
      likes: 20,
      content: newComment.value,
      publishedAt: new Date(),
      author: {
        name: 'Carlos Emilio',
        avatarUrl: 'https://github.com/codemilio.png',
        role: 'Desenvolvedor Web'
      },
    }])
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.info}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <Time publishedAt={publishedAt} />
      </header>

      <div className={styles.content}>
        {content.map(data => data.type === 'PARAGRAPH' ?
          <p key={data.content}>{data.content}</p> : <p key={data.content}><a href='#'> {data.content} </a></p>
        )}
      </div>

      <form className={styles.replies} onSubmit={handleCreateNewComment}>
        <strong> Deixe um comentário: </strong>
        <textarea placeholder="Digite seu comentário..." name='comment' />
        <footer>
          <button type='submit'> Enviar </button>
        </footer>
      </form>

      <CommentList comments={comments} />
    </article>
  )
}
