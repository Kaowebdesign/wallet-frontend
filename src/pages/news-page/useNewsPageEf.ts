// Core
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux'
// Hooks
import {useRouter} from "hooks"
// Selector
import {appSelect, authSelect, mainSelect} from 'selectors'
// Utils
import {config} from "utils"
// Actions
import {mainActions} from "actions";
// Types
import {INewsPage} from "types/main-types";



export const useNewsPageEf = () => {
    const dispatch = useDispatch()
    const {query} = useRouter<{id: string}>()
    const isAuth = useSelector(authSelect.is_auth)
    const lang = useSelector(appSelect.language)
    const newsPage: INewsPage = useSelector(mainSelect.news_page)

    //const redirect = query && config.app.page_token.includes(query.id) ? query.id : null
    // const redirectNoFound = +query.id > 0

    useEffect(() => {
        dispatch(mainActions.watch_news_page({url:query.id}))
        window.scrollTo(0,0)
    },[dispatch])

    return {
        isAuth, lang, newsPage
    }
}
