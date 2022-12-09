// Core
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
// Actions
import {cabinetMainActions, homeActions} from "actions/cabinet";
// Types
import {EWalletDuration} from "types/cabinet/cabinet-main-type";
import {cabinetMainSelect, homeSelector} from "selectors/cabinet";


export const useHomeEf = () => {
    const dispatch = useDispatch()
    const tabName = useSelector(cabinetMainSelect.menu_mode)
    const currencyListCrypto = useSelector(cabinetMainSelect.currency_list_crypto)
    const currentCryptoCurrency = useSelector(homeSelector.current_crypto_currency)
    const overview = useSelector(homeSelector.home_data_overview)
    const duration = useSelector(homeSelector.current_duration)



    // get base data for home page
    useEffect(() => {

        tabName === 'home' &&
            !overview && dispatch(homeActions.watch_home_base({duration: EWalletDuration.HOUR}))
            !duration && dispatch(homeActions.home_set_duration(EWalletDuration.HOUR))
    },[dispatch, tabName])


    // get crypto currency list
    useEffect(() => {
        !currencyListCrypto && dispatch(cabinetMainActions.watch_currency_list_crypto())
    }, [dispatch])

    // set current crypto currency
    useEffect(() => {
        currencyListCrypto && !currentCryptoCurrency && dispatch(homeActions.home_set_crypto_currency(currencyListCrypto[0].id))
    },[currencyListCrypto])


    return {}
}
