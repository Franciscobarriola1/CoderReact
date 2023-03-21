import React from 'react'
import styles from './CartWidget.module.scss'

const cartWidget = ({icono}) => {
  return (
    <div>
        <div className={styles.container}></div>
       <img src={icono} alt="" width="40" height="40"/>
        <button>Registrarse</button>
    </div>
  )
}

export default cartWidget
