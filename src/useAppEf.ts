// Core
import {useEffect, useRef, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useCookies } from 'react-cookie'
// Hooks
import {useCheckPage, useRouter} from 'hooks'
// Antd
import {notification} from "antd"
// Actions
import {appActions, authActions, mainActions} from 'actions'
// Selector
import {appSelect, authSelect} from 'selectors'
// Utils
import {config} from "utils"
// Type
import {AlertType, TPushMessage} from "types/app-type"


export const useAppEf = (alertMessage: (alert: AlertType) => void) => {
    const dispatch = useDispatch()
    const {path, push} = useRouter()
    const {lang} = useCheckPage()
    const alert = useSelector(appSelect.alert)
    const notFoundRedirect = useSelector(appSelect.not_found_redirect)
    const init = useSelector(appSelect.init)
    const token = useSelector(authSelect.token)
    const language = useSelector(appSelect.language)
    const pushMessage = useSelector(appSelect.push)

    const timer = useRef<any>(null)
    const [cookies, setCookie, removeCookie] = useCookies()

    const [isInit, setIsInit] = useState(false)
    const [checkLang, setCheckLang] = useState(false)

    const [api, contextHolder] = notification.useNotification()

    const openNotification = (push: TPushMessage) => {
        api.success({
            message: push.title,
            description: push.content,
            placement: 'bottomLeft',
            duration: 5,
            className: 'c-push'
        })
    }

    useEffect(() => {
         if (pushMessage) {
             openNotification(pushMessage)
             dispatch(appActions.set_push(null))
         }
    }, [pushMessage])

    useEffect(() => {
        if (alert) {
            alertMessage(alert)
            dispatch(appActions.set_alert(null))
        }
    }, [dispatch, alert])

    useEffect(() => {
        if (lang && config.app.language_list.includes(lang)) {
            dispatch(appActions.set_language(lang))
        }

        setCheckLang(true)
    }, [])

    useEffect(() => {
        if (checkLang) {
            if (lang && config.app.language_list.includes(lang) && language !== lang) {
                push(`/${language}/${path.slice(4, path.length)}`)


            } else if (!lang) {
                push(`/${language}${path}`)
            }
        }
    }, [language, lang, checkLang])

    useEffect(() => {
        if (token) {
            setCookie('token', {...token}, {
                maxAge: 3600 * 24 * 7,
                domain: config.app.domain,
                path: '/'
            })
        } else {
            removeCookie('token', {
                domain: config.app.domain,
                path: '/'
            })
        }
    }, [token, init])

    useEffect(() => {
        if (notFoundRedirect) {
            dispatch(appActions.set_not_found_redirect(false))
        }
    }, [dispatch, notFoundRedirect])

    useEffect(() => {
        dispatch(appActions.watch_init())
        dispatch(mainActions.watch_news_categories())
        dispatch(authActions.watch_identification(cookies.token ? cookies.token : null))
    }, [dispatch])

    useEffect(() => {
        timer.current = setTimeout(() => setIsInit(true),1000)

         return () => clearTimeout(timer.current)
    }, [init])

    return {
        isInit, alert, notFoundRedirect, contextHolder,
    }
}
