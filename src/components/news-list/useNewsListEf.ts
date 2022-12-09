// Core
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// Selector
import { mainSelect } from 'selectors'
// Action
import { mainActions } from 'actions'
// Types
import { NewsData, NewsType } from "types/main-types"
import {mackNews} from "../../utils";
import useScreen from "use-screen";


export const useNewsListEf = () => {

    const dispatch = useDispatch()
    const {screenWidth} = useScreen()
    const newsData:Array<NewsData>  = useSelector(mainSelect.news_items)
    const [news, setNews] = useState<Array<NewsType>>()
    
    useEffect(() => {
        dispatch(mainActions.watch_news({ size: 3, category: 'all' }))
    },[dispatch])

    useEffect(() => {
        const news: NewsData | undefined = newsData.find( elem => elem.category === 'all')

       setNews(screenWidth < 1030 && screenWidth >= 768 ? news?.items.slice(0,2) : news?.items)
    },[newsData])
    
    return {
        news
    }
}
