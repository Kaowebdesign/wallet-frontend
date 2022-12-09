// Core
import {useSelector, useDispatch} from 'react-redux'
// Selectors
import {authSelect, appSelect} from 'selectors'
// Actions
import {authActions} from "actions"


export const usePasswordRecoveryEf = () => {
    const dispatch = useDispatch()
    const loadForm = useSelector(authSelect.load_form)
    const isAuth = useSelector(authSelect.is_auth)
    const notFoundRedirect = useSelector(appSelect.not_found_redirect)
    const formErrors = useSelector(authSelect.form_errors)
    const lang = useSelector(appSelect.language)


    const handlerSubmit = (data: any) => {
        data.token = null

        dispatch(authActions.watch_recovery_password(data))
    }

    return {
        loadForm, isAuth, notFoundRedirect, formErrors, lang,
        handlerSubmit
    }
}
