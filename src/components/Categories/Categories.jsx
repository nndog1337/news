import React, { forwardRef } from 'react'
import { formatData } from '../../assets/helpers/formatData'
import styles from "./style.module.css"

const Categories =  forwardRef(
  ({categories, setSelectedCategory, selectedCategory}, ref) => {
  return (
    <div ref={ref} className={styles.categories}>
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
})

Categories.displayName = 'Categories'

export default Categories
