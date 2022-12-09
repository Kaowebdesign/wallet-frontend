// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Action
import {cabinetMainActions} from 'actions/cabinet'
// Selector
import {cabinetMainSelect} from 'selectors/cabinet'


export const useSendAssetsModalEf = () => {
    const dispatch = useDispatch()
    const sendAssetsMode = useSelector(cabinetMainSelect.send_asset_mode)

    const handlerClose = () => {
        dispatch(cabinetMainActions.set_send_asset_mode(false))
    }

    return {
        sendAssetsMode,
        handlerClose,
    }
}
