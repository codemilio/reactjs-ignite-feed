import PropTypes from 'prop-types'
import styles from './styles.module.css'

export function Wrapper({ children }){
  return(
    <section className={styles.wrapper}>
      {children}
    </section>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}