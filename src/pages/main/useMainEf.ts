// Core
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Actions
import {authActions} from "actions"
import {appSelect, authSelect} from "selectors"


export const useMainEf = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(authSelect.is_auth)
    const lang = useSelector(appSelect.language)

    useEffect(() => {

    }, [dispatch])

    return {
        isAuth, lang,
    }
}
