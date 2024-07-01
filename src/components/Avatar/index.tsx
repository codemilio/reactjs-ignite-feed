import style from './styles.module.css'

type Props = {
  src: string
  hasBorder?: boolean
}

export function Avatar({src, hasBorder = true}: Props) {
  return(
    <img 
      className={hasBorder ? style.avatarWithBorder : style.avatar}
      src={src} 
    />
  )
}

