// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Action
import {cabinetMainActions} from 'actions/cabinet'
// Selector
import {cabinetMainSelect} from 'selectors/cabinet'


export const useReceiveAssetsModalEf = () => {
    const dispatch = useDispatch()
    const receiveAssetsMode = useSelector(cabinetMainSelect.receive_asset_mode)

    const handlerClose = () => {
        dispatch(cabinetMainActions.set_receive_asset_mode(false))
    }

    return {
        receiveAssetsMode,
        handlerClose,
    }
}
