import React from 'react'
import { formatData } from '../../assets/helpers/formatData'
import styles from "./style.module.css"
import { useFetch } from '../../assets/helpers/hooks/useFetch'
import { getCategories } from '../../api/apiNews'
import Categories from '../Categories/Categories'
import Search from '../Search/Search'
import Slider from '../Slider/Slider'

function NewsFilters({filters, changeFilter}) {

  const {data:dataCategories} = useFetch(getCategories)

  return (
    <div className={styles.filters}>
      {dataCategories ?
      <Slider>
        <Categories
        categories={dataCategories.categories} 
        setSelectedCategory={(category) => changeFilter('category', category)} 
        selectedCategory={filters.category}/>
      </Slider>
      : null}

      <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)} />
    </div>
  )
}

export default NewsFilters
