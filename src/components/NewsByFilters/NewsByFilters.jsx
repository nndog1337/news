import React from 'react'
import styles from "./style.module.css"
import Pagination from '../Pagination/Pagination'
import NewsList from '../NewsList/NewsList'
import { TOTAL_PAGES } from '../../constants/constant'
import NewsFilters from '../NewsFilters/NewsFilters'

function NewsByFilters({filters, changeFilter, isLoading, news}) {

  
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

      
      <Pagination 
      totalPages={TOTAL_PAGES} 
      handleNextPage={handleNextPage} 
      handlePreviousPage={handlePreviousPage} 
      handlePageClick={handlePageClick}
      currentPage={filters.page_number}
      />

      <NewsList isLoading={isLoading} news={news}/>

      <Pagination 
        totalPages={TOTAL_PAGES} 
        handleNextPage={handleNextPage} 
        handlePreviousPage={handlePreviousPage} 
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
        />
    </section>
  )
}

export default NewsByFilters
