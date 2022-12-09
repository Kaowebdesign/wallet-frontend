// Core
import produce, {Draft} from 'immer'
// Type
import {MainActionReducerType} from 'actions/main-action'
import { NewsType, NewsResponse, NewsList, FaqResponse, INewsPage } from 'types/main-types'

interface INews {
    key: NewsResponse
}

type TYpex = {
    name: string
    totalResults: number,
    items: Array<NewsType>
}

const initialState = {
    form_errors: null as any,
    // Loader
    load_form: false,
    load_subscribe: false,
    load_news: false,
    load_more_news: false,
    faq: {
        totalResults: 0,
        categories: [],
        items: []
    } as FaqResponse,
    news: {
        categories: [],
        data: []
    }  as NewsList,
    newsPage: {} as INewsPage
}

type InitialStateType = typeof initialState

export const mainReducer = (state: InitialStateType = initialState, action: MainActionReducerType): InitialStateType => {
    return produce(state, (draft: Draft<InitialStateType>) => {
        switch (action.type) {
            // Sync
            case "MAIN__SET__ERROR_FORM":
                draft.form_errors = action.payload.data
                break
            case "MAIN__SET__NEWS": {
                const newsKey: number = draft.news.data.findIndex(elem => elem.category === action.payload.category)
                newsKey !== -1 ? draft.news.data[newsKey] = action.payload : draft.news.data.push(action.payload)
                break
            }
            case "MAIN__SET__NEWS_PAGE": {
                draft.newsPage = action.payload.data
                break
            }
            case "MAIN__SET__FAQ":
                draft.faq = action.payload
                break
            case "MAIN__SET__NEWS_CATEGORIES":
                draft.news.categories = action.payload.data
                break
            // Load
            case "MAIN__LOAD__FORM":
                draft.load_form = action.payload.mode
                break
            case "MAIN__LOAD__SUBSCRIBE":
                draft.load_subscribe = action.payload.mode
                break
            case "MAIN__LOAD__NEWS":
                draft.load_news = action.payload.mode
                break
            case "MAIN__LOAD__MORE_NEWS":
                draft.load_more_news = action.payload.mode
                break
            // Update
            case "MAIN__UPDATE__NEWS": {
                // get key of news array which we want to update
                const newsKey: number = draft.news.data.findIndex(elem => elem.category === action.payload.category)
                draft.news.data[newsKey].items = [ ...draft.news.data[newsKey].items, ...action.payload.items]
                break
            }
            // Clear

            // Async
            case "MAIN__WATCH__CONTACT_FORM": return state
            case "MAIN__SUBSCRIBE__EMAIL": return state
            case "MAIN__WATCH__NEWS": return state
            case "MAIN__WATCH__UPDATE_NEWS": return state
            case "MAIN__WATCH__NEWS_CATEGORIES": return state
            case "MAIN__WATCH__NEWS_PAGE": return state
            case "MAIN__WATCH__FAQ": return state
            // Def
            default:
                const allAction:never = action // check use all action
                return state
        }
    })
}
