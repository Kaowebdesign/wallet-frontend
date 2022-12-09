// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {FormikHelpers} from 'formik'
// Hooks
import {useRouter} from "hooks"
// Utils
import {config, filters} from 'utils'
// Selector
import {mainSelect, authSelect, appSelect} from 'selectors'
// Action
import {mainActions} from 'actions'
// Types
import {NewsData, NewsCategories, SubscribeEmail} from "types/main-types"


export const useNewsEf = () => {
    const {query, push} = useRouter<{tab: string}>()
    const dispatch = useDispatch()
    const loadForm = useSelector(mainSelect.load_subscribe)
    const formErrors = useSelector(mainSelect.form_errors)
    const loadMoreNews = useSelector(mainSelect.load_more_news)
    const isAuth = useSelector(authSelect.is_auth)
    const lang = useSelector(appSelect.language)
    const alert = useSelector(appSelect.alert)
    const newsData: Array<NewsData> = useSelector(mainSelect.news_items)
    const newsCategories: NewsCategories = useSelector(mainSelect.news_categories)
    // use for showing skeleton when we waiting for news
    const loading: boolean = useSelector(mainSelect.load_news)

    // state
    const [tab, setTab] = useState<string>(query.tab || 'all')
    const [emptyCategory, setEmptyCategory] = useState(false)
    const [news, setNews] = useState<NewsData | undefined>()
    const [moreNews, setMoreNews] = useState<boolean>(true)
    const redirect = query && config.app.page_token.includes(query.tab) ? query.tab : null


    const checkNewsExist = (newsData:Array<NewsData> , category: string):number => {
        return newsData.findIndex(item => filters.toUrlFriendly(item.category) === filters.toUrlFriendly(category))
    }

    const handlerTab = (value: string) => {
        // find news via current category
        const newsIndex:number = checkNewsExist(newsData, value)
        // check if we added news earlier
        newsIndex === -1
        ?
            // get news via category name from tab
            dispatch(mainActions.watch_news({size:10, category: value === 'all' ? null : value }))
        :
            setNews(newsData[newsIndex])

        // check tab and choose right route
        if (value.toLowerCase() === 'all') {
            push(`/${lang}/news`)
        } else {
            push(`/${lang}/news/${filters.toUrlFriendly(value)}`)
        }
        // set current tab
        setTab(value)
    }

    const handlerSubmit = (data: SubscribeEmail) => {
        dispatch(mainActions.watch_subscribe_email(data))
    }

    const handlerMore = () => {
        dispatch(mainActions.watch_news_update({size:10, from: 10, category: query.tab || 'all'}))
    }

    const handlerSetCategory = (text: string) => {
        setTab(text)
        // get news via category name from tab
        dispatch(mainActions.watch_news({size: 10, category: text}))
        window.scrollTo(0,0);
    }


    useEffect(() => {
        // check if category link was broken
        setEmptyCategory(!!query.tab ? !newsCategories.find( category => filters.toUrlFriendly(category) === query.tab) : false)
        // get news via category name
        dispatch(mainActions.watch_news({ size: 10, category: query.tab || 'all' }))
        window.scrollTo(0,0);
    },[dispatch])


    useEffect( () => {
        // get news via current category
        const news: NewsData | undefined = newsData.find( elem => elem.category === tab)
        // set news to state
        setNews(news)
        // check if we can not load more news
        news?.totalResults == news?.items.length ? setMoreNews(false) : setMoreNews(true)
    },[newsData])


    return {
        tab, redirect, loadForm, loadMoreNews, formErrors, isAuth, lang, newsCategories, emptyCategory, news, loading, moreNews, alert,
        handlerTab, handlerSubmit, handlerMore, handlerSetCategory
    }
}
