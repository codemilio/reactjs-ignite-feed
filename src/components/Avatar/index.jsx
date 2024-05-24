import propTypes from 'prop-types'
import style from './styles.module.css'

export function Avatar({src, hasBorder}) {
  return(
    <img 
      className={hasBorder ? style.avatarWithBorder : style.avatar}
      src={src} 
    />
  )
}

Avatar.propTypes = {
  src: propTypes.url,
  hasBorder: propTypes.bool // enable outline  
}