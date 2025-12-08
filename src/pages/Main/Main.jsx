import { useEffect, useState } from "react"
import NewBanner from "../../components/NewsBanner/NewsBanner"
import styles from "./style.module.css"
import { getNews } from "../../api/apiNews"
import NewsList from "../../components/NewsList/NewsList"

function Main() {
  const[news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      try{
        const response = await getNews()
        setNews(response.news)
      }catch(e){
        console.log(e)
      }
    }
    fetchNews()
  }, [])

  return (
    <main className={styles.main}>
      {news.length > 0 ? <NewBanner item ={news[0]}/> : null}

      <NewsList news={news}/>
    </main>
  )
}

export default Main