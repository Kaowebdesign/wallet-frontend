// Type
import { ActionsCreatorType } from 'store'
import {ContactForm, FaqResponse, GetNews, NewsCategories, NewsResponse, SubscribeEmail, INewsPageRequest, INewsPage} from 'types/main-types'


export const MAIN__WATCH__CONTACT_FORM = 'MAIN__WATCH__CONTACT_FORM'
export const MAIN__SUBSCRIBE__EMAIL = 'MAIN__SUBSCRIBE__EMAIL'
export const MAIN__WATCH__NEWS = 'MAIN__WATCH__NEWS'
export const MAIN__WATCH__UPDATE_NEWS = 'MAIN__WATCH__UPDATE_NEWS'
export const MAIN__WATCH__NEWS_CATEGORIES = 'MAIN__WATCH__NEWS_CATEGORIES'
export const MAIN__WATCH__NEWS_PAGE = 'MAIN__WATCH__NEWS_PAGE'
export const MAIN__WATCH__FAQ = 'MAIN__WATCH__FAQ'

const mainActions = {
    // Sync
    set_form_errors: (data: any) => ({type: 'MAIN__SET__ERROR_FORM', payload: {data}} as const),
    set_news: (data: Omit<NewsResponse, 'categories'>) => ({type: 'MAIN__SET__NEWS', payload: {...data}} as const),
    set_news_page: (data: INewsPage) => ({type: 'MAIN__SET__NEWS_PAGE', payload: {data}} as const),
    set_news_categories: (data: NewsCategories) => ({type: 'MAIN__SET__NEWS_CATEGORIES', payload: {data}} as const),
    set_faq: (data: FaqResponse) => ({type: 'MAIN__SET__FAQ', payload: { ...data }} as const),
    // Loader
    load_form: (mode: boolean) => ({type: 'MAIN__LOAD__FORM', payload: {mode}} as const),
    load_subscribe: (mode: boolean) => ({type: 'MAIN__LOAD__SUBSCRIBE', payload: {mode}} as const),
    load_news: (mode: boolean) => ({type: 'MAIN__LOAD__NEWS', payload: {mode}} as const),
    load_more_news: (mode: boolean) => ({type: 'MAIN__LOAD__MORE_NEWS', payload: {mode}} as const),
    // Update
    update_news: (data: Omit<NewsResponse, 'categories'>) => ({type: 'MAIN__UPDATE__NEWS',payload:{ ...data }} as const),
    // Clear

    // Async
    watch_contact_form: (data: ContactForm) => ({type: MAIN__WATCH__CONTACT_FORM, payload: {...data}} as const),
    watch_subscribe_email: (data: SubscribeEmail) => ({type: MAIN__SUBSCRIBE__EMAIL, payload: {...data}} as const),
    watch_news: (data: GetNews ) => ({ type: MAIN__WATCH__NEWS, payload: {...data} } as const),
    watch_news_update: (data: GetNews) => ({ type: MAIN__WATCH__UPDATE_NEWS, payload: {...data}} as const),
    watch_news_categories: () => ({ type: MAIN__WATCH__NEWS_CATEGORIES} as const),
    watch_news_page: (data: INewsPageRequest) => ({type: MAIN__WATCH__NEWS_PAGE, payload: {...data}} as const),
    watch_faq: () => ({ type: MAIN__WATCH__FAQ } as const)
}

export type MainActionReducerType = ActionsCreatorType<typeof mainActions>

export default mainActions
