// Core
import {useSelector, useDispatch} from 'react-redux'
import {useEffect, useState} from "react"
// Selector
import {appSelect, mainSelect, authSelect} from 'selectors'
// Types
import { FaqType } from "types/main-types"
// Actions
import {mainActions} from "actions"
// Utils
import { filters } from 'utils'


export const useFaqEf = () => {
    const dispatch = useDispatch()
    const lang = useSelector(appSelect.language)
    const faqItems: Array<FaqType> = useSelector(mainSelect.faq_items)
    const faqCategories = useSelector(mainSelect.faq_categories)
    const isAuth = useSelector(authSelect.is_auth)


    const [tab, setTab] = useState<string>()

    // current faq list
    const [currentFaq, setCurrentFaq] = useState<Array<FaqType>>([])


    // find faq via category
    const filterFaq = (faqArray: Array<FaqType>, value: string):Array<FaqType> | [] => {

        const faqs = faqArray.filter(item => filters.toUrlFriendly(item.category) === filters.toUrlFriendly(value))

        return faqs.length ? faqs : []
    }

    const handlerTab = (value: string) => {
        setCurrentFaq(filterFaq(faqItems, value))
        setTab(value)
    }

    useEffect(() => {
        dispatch(mainActions.watch_faq())
    },[dispatch])


    useEffect( () => {
        setCurrentFaq(faqItems)
        handlerTab(faqCategories[0])
    }, [faqCategories ,faqItems])

    return {
        isAuth, lang, faqCategories, tab, handlerTab, currentFaq
    }
}
