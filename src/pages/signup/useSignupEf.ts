// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Selectors
import {appSelect, authSelect} from 'selectors'
// Actions
import {authActions} from 'actions'
// Types
import {SignupData} from 'types/auth-type'


interface SignupExactData extends SignupData {
    agree: boolean
}

export const useSignupEf = () => {
    const dispatch = useDispatch()
    const validPassword = useSelector(authSelect.valid_password)
    const loadForm = useSelector(authSelect.load_form)
    const successSignup = useSelector(authSelect.success_signup)
    const formErrors = useSelector(authSelect.form_errors)
    const isAuth = useSelector(authSelect.is_auth)
    const lang = useSelector(appSelect.language)

    const [showValidate, setShowValidate] = useState(false)

    const handlerSubmit = (data: SignupExactData) => {
        const {agree, ...rest} = data
        validPassword && dispatch(authActions.watch_signup(rest))
    }

    const handlerFocus = () => {
        setShowValidate(true)
    }

    const handlerBlur = () => {
        setShowValidate(false)
    }

    useEffect(() => {
        dispatch(authActions.set_form_errors(null))
    }, [dispatch])

    return {
        validPassword, loadForm, successSignup, showValidate, formErrors, isAuth, lang,
        handlerSubmit, handlerBlur, handlerFocus,
    }
}
