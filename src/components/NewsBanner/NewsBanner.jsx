import React from 'react'
import styles from './style.module.css'
import { formatTimeAgo } from '../../assets/helpers/formatTimeAgo'
import Image from '../Image/Image'
import withSkeleton from '../../assets/helpers/hocs/withSkeleton'

function NewsBanner({ item }) {
  return (
    <div className={styles.banner}>
      <Image image={item?.image}/>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
    </div>
  )
}


export default NewsBanner
