// Type
import { RootState } from 'store'


const mainSelect = {
    form_errors: (store: RootState) => store.main.form_errors,
    // Load
    load_form: (store: RootState) => store.main.load_form,
    load_subscribe: (store: RootState) => store.main.load_subscribe,
    load_news: (store: RootState) => store.main.load_news,
    load_more_news: (store: RootState) => store.main.load_more_news,
    news_items: (store: RootState) => store.main.news.data,
    news_page: (store: RootState) => store.main.newsPage,
    faq_items: (store: RootState) => store.main.faq.items,
    faq_categories: (store: RootState) => store.main.faq.categories,
    news_categories: (store: RootState) => store.main.news.categories
}

export default mainSelect
