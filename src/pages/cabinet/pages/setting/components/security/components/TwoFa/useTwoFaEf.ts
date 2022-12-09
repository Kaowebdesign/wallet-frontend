// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Actions
import {settingsCabinetAction} from "actions/cabinet";
// Selectors
import {settingsCabinetSelect} from "selectors/cabinet";
import {appSelect, authSelect} from "selectors";
// Types
import {ETwoFaType, TSettings, TTwoFaType, ETwoFaMethod, ITwoFaData, TTwoFaCode} from "types/cabinet/settings-type";
import {log} from "util";




export const useTwoFaEf = () => {
    const dispatch = useDispatch()
    const settings: TSettings = useSelector(settingsCabinetSelect.settings)
    const twofaErrors = useSelector(settingsCabinetSelect.twofa_errors)
    const twofaData: ITwoFaData | null = useSelector(settingsCabinetSelect.twofa_data)
    const twofaDataGoogle: ITwoFaData | null = useSelector(settingsCabinetSelect.twoda_data_google)
    const twofaDisabledEmail = useSelector(settingsCabinetSelect.twofa_disabled_email)
    const twofaDisabledGoogle = useSelector(settingsCabinetSelect.twofa_disabled_google)
    const user = useSelector(authSelect.user)
    const push = useSelector(appSelect.push)

    // 2Fa type
    const [twoFaType, setTwoFaType] = useState<TTwoFaType>(ETwoFaType.disabled)
    // 2Fa modal Email
    const [isModalEmail, setIsModalEmail] = useState<boolean>(false)
    // 2Fa modal Google
    const [isModalGoogle, setIsModalGoogle] = useState<boolean>(false)
    // Reset form
    const [resetForm, setResetForm] = useState<boolean>(false)

    // observe
    useEffect(() => {
        twoFaType.toString() === ETwoFaType.email.toString() && setTwoFaType(ETwoFaType.disabled)
        twoFaType.toString() === ETwoFaType.disabled.toString() && setTwoFaType(ETwoFaType.email)

    },[twofaDisabledEmail])

    useEffect(() => {
        twoFaType.toString() === ETwoFaType.google.toString() && setTwoFaType(ETwoFaType.disabled)
        twoFaType.toString() === ETwoFaType.disabled.toString() && setTwoFaType(ETwoFaType.google)
    },[twofaDisabledGoogle])

    // hide any modals when push is not null
    useEffect(() => {
        setIsModalEmail(false)
        setIsModalGoogle(false)
    },[push])

    // set current 2FA type from user settings
    useEffect(() => {
        setTwoFaType(settings.two_factor_method)
    }, [settings])

    useEffect(() => {
        return () => {
            dispatch(settingsCabinetAction.set_null_twofa_data())
        }
    },[dispatch])

    useEffect(() => {
        twofaData && setIsModalEmail(true)
    },[twofaData])

    useEffect(() => {
        twofaDataGoogle && setIsModalGoogle(true)
    }, [twofaDataGoogle])

    // Reset form
    useEffect(() => {
        setResetForm(false);
    },[resetForm])

    // request two fa connect via email
    const handlerRequestTwoFaEmail = () => {
        dispatch(settingsCabinetAction.twofa_connect_request({method: ETwoFaMethod.EMAIL}))
    }
    // request two fa disconnect via email
    const handlerRequestDisconnectTwoFaEmail = () => {
        dispatch(settingsCabinetAction.twofa_disconnect_request({method: ETwoFaMethod.EMAIL}))
    }
    // handler toggle 2FA modal Email
    const handlerToggleEmailModal = () => {
        setResetForm(true)
        setIsModalEmail(!isModalEmail)
    }
    // request two fa connect via google
    const handlerRequestTwoFaGoogle = () => {
        dispatch(settingsCabinetAction.twofa_connect_request({method: ETwoFaMethod.GOOGLE}))
    }
    // request two fa disconnect via google
    const handlerRequestDisconnectTwoFaGoogle = () => {
        dispatch(settingsCabinetAction.twofa_disconnect_request({method: ETwoFaMethod.GOOGLE}))
    }
    // handler toggle 2FA modal Google
    const handlerToggleGoogleModal = () => {
        setResetForm(true)
        setIsModalGoogle(!isModalGoogle)
    }

    function handlerSubmitTwoFaEmail(values: TTwoFaCode) {

        let data = {
            method: ETwoFaMethod.EMAIL,
            hash: twofaData ? twofaData?.hash : '',
            code: values.code
        }

        twoFaType.toString() === ETwoFaType.email.toString() ?

            twofaData && dispatch(settingsCabinetAction.twofa_disconnect(data))
        :
            twofaData && dispatch(settingsCabinetAction.twofa_connect(data))
    }

    function handlerSubmitTwoFaGoogle(values: TTwoFaCode) {
        let data = {
            method: ETwoFaMethod.GOOGLE,
            hash: twofaDataGoogle ? twofaDataGoogle?.hash : '',
            code: values.code
        }

        twoFaType.toString() === ETwoFaType.google.toString() ?
            twofaDataGoogle && dispatch(settingsCabinetAction.twofa_disconnect(data))
            :
            twofaDataGoogle && dispatch(settingsCabinetAction.twofa_connect(data))
    }

    return {
        isModalEmail, isModalGoogle, twoFaType, twofaErrors, user, push, twofaDataGoogle, resetForm,
        handlerToggleEmailModal, handlerToggleGoogleModal, handlerSubmitTwoFaEmail, handlerRequestTwoFaEmail,
        handlerRequestDisconnectTwoFaEmail, handlerRequestTwoFaGoogle, handlerSubmitTwoFaGoogle, handlerRequestDisconnectTwoFaGoogle
    }
}
