import React from 'react'
import { formatData } from '../../assets/helpers/formatData'
import styles from "./style.module.css"
import BannersList from '../BannersList/BannersList'
import { useFetch } from '../../assets/helpers/hooks/useFetch'
import { getLatetsNews } from '../../api/apiNews'

function LatestNews() {

  const {data, isLoading} = useFetch(getLatetsNews, {})

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  )
}

export default LatestNews
