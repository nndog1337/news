import styles from "./style.module.css"
import { getNews } from "../../api/apiNews"
import { useDebounce } from "../../assets/helpers/hooks/useDebounce"
import { PAGE_SIZE } from "../../constants/constant"
import { useFetch } from "../../assets/helpers/hooks/useFetch"
import { useFilters } from "../../assets/helpers/hooks/useFilters"
import LatestNews from "../../components/LatestNews/LatestNews"
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters"

function Main() {

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


  return (
    <main className={styles.main}>

      <LatestNews isLoading={isLoading} banners={data && data.news}/>

      <NewsByFilters news={data?.news} isLoading={isLoading} filters={filters} changeFilter={changeFilter} />

      
    </main>
  )
}

export default Main