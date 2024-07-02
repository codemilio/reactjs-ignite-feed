import { Avatar } from '../Avatar'
import { ThumbsUp, Trash } from '@phosphor-icons/react'
import style from './styles.module.css'
import { IComment } from '../../utils/types'
import { Time } from '../Time'

type Props = IComment

export function Comment({ author, content, likes, publishedAt }: Props) {
  return (
    <div className={style.comment}>
      <Avatar 
        hasBorder={false} 
        src={author.avatarUrl}
      />

      <div className={style.box}>
        <div className={style.content}>
          <header>
            <div className={style.author}>
              <strong> 
                {author.name} 
                {/* <span>(Você)</span>  */}
              </strong>
              <Time publishedAt={publishedAt} />
            </div>
            <button title='Deletar'>
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20}/>
            <span>Aplaudir</span>
            <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}