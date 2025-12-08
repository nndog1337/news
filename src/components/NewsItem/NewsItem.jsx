import React from 'react'
import styles from './style.module.css'
import { formatTimeAgo } from '../../assets/helpers/formatTimeAgo'
import Image from '../Image/Image'

function NewsItem({ item }) {
  return (
    <li className={styles.item}>
      <div 
      className={styles.wrapper} 
      style={{backgroundImage: `url(${item.image})`}}
      ></div>
      <div className={styles.ifo}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
      </div>
  
    </li>
  )
}

export default NewsItem
