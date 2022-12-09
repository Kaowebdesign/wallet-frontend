// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Actions
import {settingsCabinetAction} from "actions/cabinet";
// Selectors
import {appSelect, authSelect} from "selectors";
import {settingsCabinetSelect} from "selectors/cabinet";
// Types
import {TUpdatePassword} from "types/cabinet/settings-type";



export const useChangePasswordEf = () => {
    const dispatch = useDispatch()
    const validPassword = useSelector(authSelect.valid_password)
    const loadForm = useSelector(settingsCabinetSelect.load_form)
    const push = useSelector(appSelect.push)
    const passwordErrors = useSelector(settingsCabinetSelect.password_errors)

    const [showValidate, setShowValidate] = useState(false)

    function handlerSubmitPassword(values: TUpdatePassword) {
        dispatch(settingsCabinetAction.change_password(values))
    }

    const handlerFocus = () => {
        setShowValidate(true)
    }

    const handlerBlur = () => {
        setShowValidate(false)
    }

    return {push, passwordErrors, validPassword, loadForm, showValidate, handlerFocus, handlerBlur, handlerSubmitPassword}
}
