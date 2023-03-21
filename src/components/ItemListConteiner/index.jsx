import React from 'react'
import styles from './ItemListConteiner.module.scss'
const itemListConteiner = ({props}) => {
    return (
        <nav>
          <div className={styles.container}>

          <h1>Hola, {props.texto} </h1>
               
            
            
          </div>
        </nav>
      )
    }

export default itemListConteiner
