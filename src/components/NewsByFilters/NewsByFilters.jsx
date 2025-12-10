import React from 'react'
import styles from "./style.module.css"
import Pagination from '../Pagination/Pagination'
import NewsList from '../NewsList/NewsList'
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constant'
import NewsFilters from '../NewsFilters/NewsFilters'
import { useFilters } from '../../assets/helpers/hooks/useFilters'
import { useDebounce } from '../../assets/helpers/hooks/useDebounce'
import { useFetch } from '../../assets/helpers/hooks/useFetch'
import { getNews } from '../../api/apiNews'
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper'

function NewsByFilters() {

  const {filters, changeFilter} = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  })

  const debounceKeywords = useDebounce(filters.keywords, 1500)

  const {data, isLoading, error} = useFetch(getNews, {
    ...filters,
    keywords: debounceKeywords,
  })

  
  const handleNextPage = () =>{
    if(filters.page_number < TOTAL_PAGES){
      changeFilter('page_number', filters.page_number+1)
    }
  }

  const handlePreviousPage = () =>{
    if(filters.page_number > 1){
      changeFilter('page_number', filters.page_number-1)
    }
  }

  const handlePageClick = (pageNumber) =>{
    changeFilter('page_number', pageNumber)
  }

  return (
    <section className={styles.section}>
      
      <NewsFilters filters={filters} changeFilter={changeFilter}/>

      <PaginationWrapper
        top
        bottom
        totalPages={TOTAL_PAGES} 
        handleNextPage={handleNextPage} 
        handlePreviousPage={handlePreviousPage} 
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}>
        <NewsList isLoading={isLoading} news={data?.news}/>
      </PaginationWrapper>
      
    </section>
  )
}

export default NewsByFilters
