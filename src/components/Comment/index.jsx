import { Avatar } from '../Avatar'
import { ThumbsUp, Trash } from '@phosphor-icons/react'
import style from './styles.module.css'

export function Comment() {
  return (
    <div className={style.comment}>
      <Avatar src="https://github.com/lucasspor.png"  />

      <div className={style.box}>
        <div className={style.content}>
          <header>
            <div className={style.author}>
              <strong> Lucas Silva <span>(Você)</span> </strong>
              <time dateTime='2024-05-20 10:00:00' title='20 de Maio às 10hrs'> Há cerca de 2h</time>
            </div>
            <button title='Deletar'>
              <Trash size={20} />
            </button>
          </header>
          <p> Muito bom, meus parabéns! </p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20}/>
            <span>Aplaudir</span>
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}