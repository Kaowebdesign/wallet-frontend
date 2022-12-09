// Core
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from "react"
// Actions
import {authActions} from 'actions'
// Selector
import {appSelect} from 'selectors'

export const useConfirmEmailEf = (token: string) => {
    const dispatch = useDispatch()

    const lang = useSelector(appSelect.language)

    useEffect(() => {
        dispatch(authActions.watch_confirm_email(token))
    }, [dispatch])

    return {
        lang,
    }
}
