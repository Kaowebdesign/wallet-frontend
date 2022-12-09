// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Actions
import { settingsCabinetAction } from 'actions/cabinet'
// Selectors
import {settingsCabinetSelect} from 'selectors/cabinet'
// Types
import {TUserTimezones, TCurrency, TSettings, TUpdateSettings} from 'types/cabinet/settings-type'


export const usePreferencesEf = () => {
    const dispatch = useDispatch()
    const settings: TSettings = useSelector(settingsCabinetSelect.settings)
    const loadSettings: Boolean = useSelector(settingsCabinetSelect.load_settings)
    const userTimezones:TUserTimezones = useSelector(settingsCabinetSelect.user_timezone)
    const currency:TCurrency = useSelector(settingsCabinetSelect.currency)
    const errors: any = useSelector(settingsCabinetSelect.errors)
    const languages = [
        {
            lang: 'en',
            name: 'English'
        }
    ]

    const [timezoneIndex, setTimezoneIndex] = useState<number>(-1)
    // timezone
    const [currentTimezone, setCurrentTimezone] = useState<string>()
    // currency
    const [currencyIndex, setCurrencyIndex] = useState<string>()
    // language
    const [currentLanguage, setCurrentLanguage] = useState<string | undefined>()
    const [changedValues, setChangedValues] = useState<boolean>(false)

    // get index of current timezone
    useEffect(() => {
        const timezoneIndex:number =  userTimezones.findIndex(item => item.name.toLowerCase() === settings.timezone.toLowerCase())
        setTimezoneIndex(timezoneIndex);
    },[settings,userTimezones])

    // get index of current currency
    useEffect(() => {
        setCurrencyIndex(settings.currency_id)
        setCurrentLanguage(settings.lang)
        setChangedValues(false)
    },[settings])

    // // set errors
    // useEffect(() => {
    //     errors && errors.timezone && setUpdateErrors(errors.timezone)
    // },[errors])

    function handleChangeUserCurrency(id: string):void {
        setCurrencyIndex(id)
        // check if currency was changed
        id === settings.currency_id.toString() ?
            setChangedValues(false)
        :
            setChangedValues(true)
    }

    function handleChangeUserTimezone(value: string):void {
        const timezoneIndex:number =  userTimezones.findIndex(item => item.name.toLowerCase() === value.toLowerCase())

        setTimezoneIndex(timezoneIndex);
        setCurrentTimezone(value)
        // check if timezone was changed
        value === settings.timezone.toString() ?
            setChangedValues(false)
        :
            setChangedValues(true)
    }

    function handleChangeLanguage(value: string):void {
        setCurrentLanguage(value)
        // check if language was changed
        value === settings.lang.toString() ?
            setChangedValues(false)
            :
            setChangedValues(true)
    }

    function handleSubmit(): void{
        const data:TUpdateSettings = {
            currency_id: currencyIndex ? currencyIndex : settings.currency_id,
            lang: currentLanguage ? currentLanguage : settings.lang,
            show_alert: true
        }

        currentTimezone && (data['timezone'] = currentTimezone)

        dispatch(settingsCabinetAction.update_settings({...data}))

    }

    function handleRequestData(): void {
        dispatch(settingsCabinetAction.watch_settings_base())
    }

    return {
        userTimezones, settings, timezoneIndex, currency, languages,
        currentLanguage, currencyIndex, changedValues, loadSettings,
        handleChangeUserTimezone, handleChangeUserCurrency, handleChangeLanguage, handleSubmit, handleRequestData
    }
}
