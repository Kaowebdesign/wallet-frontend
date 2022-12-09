// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {cabinetMainActions} from "../../../../../../actions/cabinet";
import {homeSelector} from "../../../../../../selectors/cabinet";


export const useResentTransactionsEf = () => {
    const dispatch = useDispatch()
    const baseFiatSign = useSelector(homeSelector.base_sign_name)

    // open receive assets modal
    const handleReceiveAssets = () => {
        dispatch(cabinetMainActions.set_receive_asset_mode(true))
    }

    return { baseFiatSign, handleReceiveAssets }
}
