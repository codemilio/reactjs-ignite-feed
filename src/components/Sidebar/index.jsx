import { PencilLine } from '@phosphor-icons/react'
import styles from './styles.module.css'
import { Avatar } from '../Avatar'

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1715604535941-3a38ad63bd79?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Imagem de capa."
      />

      <div className={styles.profile}>
        <Avatar 
          hasBorder={true}
          src="https://github.com/eupendragon.png" 
        />
        <strong> Carlos Emilio </strong>
        <span> Web developer </span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} /> 
          Editar perfil 
        </a>
      </footer>
    </aside>
  )
}