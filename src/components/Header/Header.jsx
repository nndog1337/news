import React from 'react'
import { formatData } from '../../assets/helpers/formatData'
import styles from "./style.module.css"

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>News for React</h1>
      <p className={styles.date}>{formatData(new Date())}</p>
    </header>
  )
}

export default Header
