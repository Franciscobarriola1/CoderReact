import React from 'react'
import styles from "./navbar.module.scss"


const NavBar = ({imagen}) => {
  return (
    <nav>
      <div className={styles.container}>
            <img src={imagen} alt="" width="40" height="40"/>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Productos</li>
            </ul>        
      </div>
    </nav>
  )
}


export default NavBar
