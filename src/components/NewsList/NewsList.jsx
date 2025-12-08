import React from 'react'
import styles from './style.module.css'
import NewsItem from '../NewsItem/NewsItem'

function NewsList({ news }) {
  return (
    <ul className={styles.list}>
      {news.map((item) => {
        return <NewsItem key = {item.id} item={item}/>
      })}
    </ul>
  )
}

export default NewsList
