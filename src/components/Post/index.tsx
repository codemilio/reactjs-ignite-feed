import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import { IPost } from '../../utils/types'
import styles from './styles.module.css'

type Props = IPost

export function Post({ author, publishedAt, content }: Props) {

  const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    minute: '2-digit',
    hour: '2-digit'
  }).format(publishedAt)

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

        <time title={publishedDateFormatted} dateTime={publishedAt.toDateString()}> 
          {publishedDateFormatted}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(data => data.type === 'PARAGRAPH' ? 
          <p key={data.content}>{data.content}</p> : <p key={data.content}><a href='#'> {data.content} </a></p>
        )}
      </div>

      <form className={styles.replies}>
        <strong> Deixe um comentário: </strong>
        <textarea placeholder="Digite seu comentário..." />
        <footer>
          <button type='submit'> Enviar </button>
        </footer>
      </form>

      <Comment />
    </article>
  )
}
