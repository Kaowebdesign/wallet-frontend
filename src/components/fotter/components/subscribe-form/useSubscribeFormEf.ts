// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Types
import {SubscribeEmail} from "types/main-types";
import {mainActions} from "actions";
// Selector
import {appSelect, mainSelect} from 'selectors'

export const useSubscribeFormEf = () => {

    const dispatch = useDispatch()
    const alert = useSelector(appSelect.alert)
    const formErrors = useSelector(mainSelect.form_errors)
    const loadForm = useSelector(mainSelect.load_subscribe)

    const handlerSubmit = (data: SubscribeEmail, ) => {
        dispatch(mainActions.watch_subscribe_email(data))
    }

    return {
        alert,
        formErrors,
        loadForm,
        handlerSubmit
    }
}
