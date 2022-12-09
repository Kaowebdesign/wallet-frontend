// Core
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Selector
import {appSelect, authSelect} from 'selectors'
// Actions
import {authActions} from "actions"
// Types
import {LoginData} from 'types/auth-type'


export const useSigninEf = () => {
    const dispatch = useDispatch()
    const loadForm = useSelector(authSelect.load_form)
    const formErrors = useSelector(authSelect.form_errors)
    const twoFa = useSelector(authSelect.two_fa)
    const isAuth = useSelector(authSelect.is_auth)
    const notFoundRedirect = useSelector(appSelect.not_found_redirect)
    const lang = useSelector(appSelect.language)

    const handlerSubmit = (data: LoginData) => {
        dispatch(authActions.watch_signin(data))
    }

    useEffect(() => {
        dispatch(authActions.clear_two_fa())
        dispatch(authActions.clear_recovery_password())
        dispatch(authActions.set_success_signup(null))
        dispatch(authActions.set_form_errors(null))
    }, [dispatch])


    return {
        loadForm, formErrors, twoFa, isAuth, notFoundRedirect, lang,
        handlerSubmit,
    }
}
