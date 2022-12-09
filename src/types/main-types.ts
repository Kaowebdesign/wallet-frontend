// Forms
export interface ContactForm {
    email: string
    firstName: string
    lastName: string
    message: string
}

export interface SubscribeEmail {
    email: string
}

// News
export interface GetNews {
    size?: number,
    from?: number,
    category?: string | null
}

export interface NewsResponse extends NewsItems {
    categories: Array<string>
    category: string
}

export interface NewsData extends NewsItems {
    category: string
}

export interface NewsItems {
    totalResults: number,
    items: Array<NewsType>,
}

export interface NewsList {
    categories: NewsCategories,
    data: Array<NewsData>
}

export type NewsCategories = Array<string>

export type NewsType = {
    id: number | string
    img: {
        url: string
        alt: string
    },
    category: string
    url: string
    date: string
    title: string
    text: string
}

export interface INewsPageRequest {
    url: string
}

export interface INewsPage {
    title: string,
    text: string,
    date: string,
    keywords: string,
    description: string,
    hits: number,
    category: string,
    img: {
        url: string
        alt: string
    }
}

// Faq
export interface FaqResponse {
    totalResults: number,
    items: Array<FaqType>,
    categories: FaqCategories
}
export type FaqType = {
    id: number | string,
    category: string,
    title: string,
    text: any
}

export type FaqCategories = Array<string>