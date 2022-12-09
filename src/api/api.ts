// Core
import axios from 'axios'
// Utils
import {config} from 'utils'


export const instance = axios.create({
    baseURL: config.app.apiURL,
    timeout: 5000,
})

export enum ResponseCodeType {
    success = 200,
    action = 202,
    bad_request = 400,
    unauthorized = 401,
    not_found = 404,
    not_valid = 422,
    error = 500,
}

export type ResponseApiType<D = false | {items: Array<any>}> = {
    code: ResponseCodeType
    message: string
    data: D
}
