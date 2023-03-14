import React from 'react'
import styles from "./navbar.module.scss"


const NavBar = ({icono, imagen}) => {
  return (
    <nav>
      <div className={styles.container}>
            <img src={imagen} alt="" width="40" height="40"/>
            <p>Home</p>
            <p>About</p>
            <p>Productos</p>
            <img src={icono} alt="" width="40" height="40"/>
            <button>Registrarse</button>
        
        
      </div>
    </nav>
  )
}


export default NavBar
