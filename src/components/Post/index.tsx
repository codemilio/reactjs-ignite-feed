import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import { IPost } from '../../utils/types'
import propTypes from 'prop-types'
import styles from './styles.module.css'

type Props = IPost

export function Post({ author, publishedAt, content }: Props) {
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

        <time title="20 de Maio às 10hrs" dateTime={publishedAt.toDateString()}> Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        {content.map(data => data.type === 'PARAGRAPH' ? 
          <p>{data.content}</p> : <p><a href='#'> {data.content} </a></p>
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

Post.propTypes = {
  author: {
    avatarURL: propTypes.string,
    name: propTypes.string,
    role: propTypes.string
  },
  date: propTypes.string,
  content: [
    {
      type: propTypes.string,
      content: propTypes.string
    },
  ]
}