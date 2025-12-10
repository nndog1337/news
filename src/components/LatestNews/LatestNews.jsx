import React from 'react'
import { formatData } from '../../assets/helpers/formatData'
import styles from "./style.module.css"
import BannersList from '../BannersList/BannersList'

function LatestNews({banners, isLoading}) {
  return (
    <section className={styles.section}>
      <BannersList banners={banners} isLoading={isLoading} />
    </section>
  )
}

export default LatestNews
