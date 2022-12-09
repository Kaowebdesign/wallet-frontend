// Core
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from 'react-redux'
// Actions
import { settingsCabinetAction } from 'actions/cabinet'
// Selectors
import {settingsCabinetSelect} from 'selectors/cabinet'
// Types
import { TSettings, TUpdateSettings} from 'types/cabinet/settings-type'


export const useNotificationsEf = () => {
    const dispatch = useDispatch()
    const settings: TSettings = useSelector(settingsCabinetSelect.settings)
    const loadSettings: Boolean = useSelector(settingsCabinetSelect.load_settings)

    const [cryptoSelected, setCryptoSelected] = useState<boolean | null>()
    const [infoSelected, setInfoSelected] = useState<boolean | null>()

    useEffect(() => {
        settings.notif_currency !== null &&
            setCryptoSelected(settings.notif_currency.toString() === '1' ? true : false)

        settings.notif_info !== null &&
            setInfoSelected(settings.notif_info.toString() === '1' ? true : false)
    },[settings])

    // update settings
    type TUpdateData = {
        crypto?: boolean,
        info?: boolean
    }
    function updateSettings(updateData:TUpdateData):void{
        const { crypto, info} = updateData

        const data: TUpdateSettings = {
            currency_id: settings.currency_id,
            lang: settings.lang,
            show_alert: false
        }

        crypto !== undefined && (crypto === true ? data['notif_currency'] = '1' : data['notif_currency'] = '0')
        info !== undefined && (info === true ? data['notif_info'] = '1' : data['notif_info'] = '0')

        dispatch(settingsCabinetAction.update_settings({...data}))
    }

    function onChangeCrypto(value: boolean):void {
        setCryptoSelected(value)
        updateSettings({crypto:value})
    }

    function onChangeInfo(value: boolean):void {
        setInfoSelected(value)
        updateSettings({info:value})
    }

    function handleRequestData(): void {
        dispatch(settingsCabinetAction.watch_settings_base())
    }


    return {cryptoSelected, infoSelected, loadSettings, onChangeCrypto, onChangeInfo, handleRequestData}
}
