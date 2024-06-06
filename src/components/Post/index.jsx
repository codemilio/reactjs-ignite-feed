import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import propTypes from 'prop-types'
import styles from './styles.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/eupendragon.png" />
          <div className={styles.info}>
            <strong>Carlos Emilio</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="20 de Maio às 10hrs" dateTime="2024-05-20 10:00:00"> Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p> Fala dev! </p>
        <p> Este é o primeiro post da nossa aplicação feita em parceira com a Rocketseat</p>
        <p><a href="#"> https://meusite.com.br </a></p>
        <p> 
          <a href="#"> #programing </a>
          <a href="#"> #react</a>
          <a href="#"> #ignitefeed </a>
        </p>
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