// Core
import {useSelector, useDispatch} from 'react-redux'
// Selectors
import { authSelect, appSelect } from 'selectors'
// Actions
import {authActions} from 'actions'


export const useTwoFaEf = () => {
    const dispatch = useDispatch()
    const loadForm = useSelector(authSelect.load_form)
    const formErrors = useSelector(authSelect.form_errors)
    const twoFa = useSelector(authSelect.two_fa)
    const isAuth = useSelector(authSelect.is_auth)
    const notFoundRedirect = useSelector(appSelect.not_found_redirect)
    const lang = useSelector(appSelect.language)

    const handlerSubmit = (data: {code: string}) => {
       dispatch(authActions.watch_two_fa(data.code))
    }

    const handlerResend = () => {

    }

    return {
        loadForm, twoFa, isAuth, formErrors, notFoundRedirect, lang,
        handlerSubmit, handlerResend,
    }
}
