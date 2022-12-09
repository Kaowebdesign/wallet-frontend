// Core
import {getTime, getUnixTime, fromUnixTime, format} from "date-fns"

const converterTime = {
    get_spent_time: (time: number) => {
        const currentDate = Number(Number(String(getTime(new Date())).slice(0, 10)))
        const diffTime =  currentDate - time

        return  new Date(diffTime * 1000).toUTCString().split(/ /)[4]
    },
    get_date_time: (time: number) => {
        return new Date(time * 1000).toUTCString().slice(4,25)
    },
    get_news_time: (time: string | number, lang?: string):string => {

        return time ? format(fromUnixTime(+time),'MMM dd, yyyy').toString() : ''
    },
    get_date: (time: number) => {
        return new Date(time * 1000).toUTCString().slice(4,16)
    },
    get_unix: (time: Date) => {
        return getUnixTime(time, )
    }
}

export default converterTime
