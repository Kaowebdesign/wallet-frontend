// Core
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
// Selectors
import {settingsCabinetSelect} from 'selectors/cabinet'
// Actions
import {settingsCabinetAction} from "actions/cabinet";
// Types
import {TSettings, TUpdateSettings, TAutoLogout} from "types/cabinet/settings-type";




export const useSecurityEf = () => {
    const dispatch = useDispatch()
    const settings: TSettings = useSelector(settingsCabinetSelect.settings)
    const loadForm = useSelector(settingsCabinetSelect.load_form)
    const logoutErrors = useSelector(settingsCabinetSelect.logout_errors)

    // show logout form
    const [showLogout, setShowLogout] = useState<boolean>(false)

    // logout timeout
    const [logout, setLogout] = useState<number>()

    useEffect(() => {
        setLogout(settings.auto_logout)
    },[settings])

    useEffect(() => {
        setShowLogout(false);
    },[settings])

    function handlerSubmitAutoLogout(values: TAutoLogout) {

        const data: TUpdateSettings = {
            currency_id: settings.currency_id,
            lang: settings.lang,
            auto_logout: values.auto_logout,
            show_alert: true
        }

        dispatch(settingsCabinetAction.update_settings({...data}))
    }

    // Show timeout logout form
    const handlerAutoLogout = () => {
        setShowLogout(!showLogout)
    }


    return {
        logoutErrors, loadForm, showLogout, logout,
        handlerAutoLogout, handlerSubmitAutoLogout
    }
}
