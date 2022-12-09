// Core
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Actions
import {authActions} from 'actions'
// Selector
import {appSelect, authSelect} from 'selectors'


export const useNewPasswordEf = (token: string) => {
    const dispatch = useDispatch()
    const validPassword = useSelector(authSelect.valid_password)
    const isAuth = useSelector(authSelect.is_auth)
    const formErrors = useSelector(authSelect.form_errors)
    const loadForm = useSelector(authSelect.load_form)
    const recoveryPassword = useSelector(authSelect.recovery_password)
    const notFoundRedirect = useSelector(appSelect.not_found_redirect)
    const lang = useSelector(appSelect.language)

    const [showValidate, setShowValidate] = useState(false)

    const handlerSubmit = (data: any) => {
        data.token = token

        validPassword && dispatch(authActions.watch_recovery_password(data))
    }

    const handlerFocus = () => {
        setShowValidate(true)
    }

    const handlerBlur = () => {
        setShowValidate(false)
    }

    return {
        validPassword, loadForm, showValidate, isAuth, notFoundRedirect, recoveryPassword, formErrors, lang,
        handlerSubmit, handlerBlur, handlerFocus,
    }
}
