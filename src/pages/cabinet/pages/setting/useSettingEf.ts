// Core
import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from "react-redux"
// Actions
import { settingsCabinetAction } from 'actions/cabinet'
// Selector
import {settingsCabinetSelect} from 'selectors/cabinet'


export const useSettingEf = () => {
    const dispatch = useDispatch()
    const tab = useSelector(settingsCabinetSelect.tab)

    // get settings
    useEffect(() => {
        dispatch(settingsCabinetAction.watch_settings_base())
    },[dispatch])

    // request to get wallet list
    useEffect(() => {
        dispatch(settingsCabinetAction.watch_wallet_list())
    },[dispatch])

    return {
        tab
    }
}
