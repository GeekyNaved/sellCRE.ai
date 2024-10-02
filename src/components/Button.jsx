import React from 'react'
import styles from "./button.module.css";

const Button = ({title}) => {
  return (
    <div className={styles.container}>{title}</div>
  )
}

export default Button