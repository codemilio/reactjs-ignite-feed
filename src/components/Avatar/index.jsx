import propTypes from 'prop-types'
import style from './styles.module.css'

export function Avatar(props) {
  return(
    <img 
      className={style.avatar}  
      style={props.isHighlighted ? {
        border: '4px solid var(--gray-800)',
        outline: '2px solid var(--green-500)',
        width: 'calc(3rem + 12px)',
        height: 'calc(3rem + 12px)'
      } : {}} 
      src={props.src} 
    />
  )
}

Avatar.propTypes = {
  src: propTypes.url,
  isHighlighted: propTypes.bool // enable outline  

  // border: 4px solid var(--gray-800);
  // outline: 2px solid var(--green-500);
}