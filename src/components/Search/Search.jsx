import React from 'react'
import { formatData } from '../../assets/helpers/formatData'
import styles from "./style.module.css"

function Search({keywords, setKeywords}) {
  return (
    <div className={styles.search}>
      <input className={styles.input} type="text" placeholder='Javasript' value={keywords} onChange={(e) => setKeywords(e.target.value)} />
    </div>
  )
}

export default Search
