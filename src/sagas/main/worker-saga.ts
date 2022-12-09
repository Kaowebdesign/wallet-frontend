// Api
import {mainApi} from "api"
// Action
import {mainActions, appActions} from 'actions'
// Template
import {makeRequest} from 'sagas/template'
// Type
import {WorkerProps} from "sagas/root-saga"
import {LoginData} from "types/auth-type"
import {AlertType} from "types/app-type";
import {FaqType, GetNews, INewsPageRequest, NewsType, SubscribeEmail} from "types/main-types"


export function* workerContactFrom({payload}: WorkerProps<LoginData>): Generator {
    yield makeRequest({
        // @ts-ignore
        fetcher: mainApi.contact_form,
        is_token: false,
        start: [
            {action: mainActions.load_form, handler: () => true},
            {action: mainActions.set_form_errors, handler: () => null},
        ],
        finish: [
            {action: mainActions.load_form, handler: () => false}
        ],
        fetcherParam: [
            payload,
        ],
        success: [
            {
                action: appActions.set_alert,
                handler: () => ({
                    type: "success",
                    header: 'Success',
                    text: 'Your message has been successfull',
                } as AlertType)
            }
        ],
        validation: [
            {action: mainActions.set_form_errors}
        ],
    })
}

export function* workerSubscribeEmail({ payload }: WorkerProps<SubscribeEmail>): Generator {
    yield makeRequest({
        // @ts-ignore
        fetcher: mainApi.subscribe_email,
        is_token: false,
        fetcherParam: [
            payload
        ],
        start: [
            {action: mainActions.load_subscribe, handler: () => true},
            {action: mainActions.set_form_errors, handler: () => null},
        ],
        finish: [
            {action: mainActions.load_subscribe, handler: () => false}
        ],
        success: [
            {
                action: appActions.set_alert,
                handler: () => ({
                    type: "success",
                    header: 'Success',
                    text: 'You successfully subscribe',
                } as AlertType)
            }
        ],
        validation: [
            {action: mainActions.set_form_errors}
        ],
    })
}

export function* workerNews({payload}: WorkerProps<GetNews>): Generator {
    yield makeRequest({
        // @ts-ignore
        fetcher: mainApi.get_news,
        is_token: false,
        fetcherParam: [
            payload,
        ],
        start: [
            { action: mainActions.load_news, handler: () => true }
        ],
        finish: [
            { action: mainActions.load_news, handler: () => false }
        ],
        success: [
            {
                action: mainActions.set_news,
                handler: (data: {totalResults: string, items: Array<NewsType>, category: string}) => ({
                    totalResults: data.totalResults,
                    items: data.items,
                    category: payload.category || 'all'
                })
            }
        ],
    })
}

export function* workerNewsPage({payload}: WorkerProps<INewsPageRequest>): Generator {
    yield makeRequest({
        // @ts-ignore
        fetcher: mainApi.get_news_page,
        is_token: false,
        fetcherParam: [
            payload,
        ],
        success: [
            {
                action: mainActions.set_news_page
            }
        ],
    })
}

export function* workerNewsUpdate({payload}:WorkerProps<GetNews>): Generator {
    yield makeRequest({
        // @ts-ignore
        fetcher: mainApi.get_news,
        is_token: false,
        fetcherParam: [
            payload,
        ],
        start: [
            { action: mainActions.load_more_news, handler: () => true}
        ],
        finish: [
            { action: mainActions.load_more_news, handler: () => false }
        ],
        success: [
            {
                action: mainActions.update_news,
                handler: (data: {totalResults: string, items: Array<NewsType>, category: string}) => ({
                    totalResults: data.totalResults,
                    items: data.items,
                    category: payload.category || 'all'
                })
            }
        ],
    })
}

export function* workerNewsCategories(): Generator {

    yield makeRequest({
        // @ts-ignore
        fetcher: mainApi.get_news_category,
        is_token: false,
        success: [
            {
                action: mainActions.set_news_categories
            },
        ],
    })
}

export function* workerFaq(): Generator {

    yield makeRequest({
        // @ts-ignore
        fetcher: mainApi.get_faq,
        is_token: false,
        success: [
            {
                action: mainActions.set_faq,
                handler: (data: {totalResults: string, items: Array<FaqType>, categories: Array<string>}) => ({
                    totalResults: data.totalResults,
                    items: data.items,
                    categories: data.categories
                })
            },
        ],
    })
}
