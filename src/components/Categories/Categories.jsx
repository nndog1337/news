import React from 'react'
import { formatData } from '../../assets/helpers/formatData'
import styles from "./style.module.css"

function Categories({categories, setSelectedCategory, selectedCategory}) {
  return (
    <div className={styles.categories}>
      <button onClick={() => setSelectedCategory(null)} className={!selectedCategory ? styles.active : styles.item}>
          All
        </button>
      {categories.map(category => {
        return (
          <button onClick={() => setSelectedCategory(category)} className={selectedCategory === category ? styles.active : styles.item} key={category}>
            {category}
          </button>
        )
      } )}
    </div>
  )
}

export default Categories
