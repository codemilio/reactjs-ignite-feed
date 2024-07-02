import { ImgHTMLAttributes } from 'react'
import style from './styles.module.css'

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  hasBorder?: boolean
} 

export function Avatar({ hasBorder = true, ...props}: Props) {
  return(
    <img 
      className={hasBorder ? style.avatarWithBorder : style.avatar}
      {...props}
    />
  )
}

