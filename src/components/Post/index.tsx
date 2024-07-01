import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import { IPost } from '../../utils/types'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import styles from './styles.module.css'

type Props = IPost

export function Post({ author, publishedAt, content }: Props) {

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    includeSeconds: true,
    addSuffix: true,
    locale: ptBR
  })

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

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}> 
          {publishedDateRelativeToNow}
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
