// Core
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Actions
import {authActions} from 'actions'
// Selectors
import {authSelect} from 'selectors'


export const useValidatePasswordStatusEf = () => {
    const dispatch = useDispatch()
    const validPassword = useSelector(authSelect.valid_password)

    const handlerValidPassword = (mode: boolean) => {
        dispatch(authActions.set_valid_password(mode))
    }

    useEffect(() => {
        dispatch(authActions.set_valid_password(false))
    }, [dispatch])

    return {
        validPassword,
        handlerValidPassword,
    }
}
