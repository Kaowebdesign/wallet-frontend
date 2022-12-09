// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Selector
import {homeSelector} from "selectors/cabinet"
// Hooks
import {useParseToCurrency} from "hooks";
// Types
import {EWalletDuration, TCurrencyList} from "types/cabinet/cabinet-main-type"
import {cabinetMainActions, homeActions} from "actions/cabinet";
import {RadioChangeEvent} from "antd/lib/radio";


export const usePriceChartEf = () => {
    const dispatch = useDispatch()

    const chartData = useSelector(homeSelector.home_data_chart)
    const overview = useSelector(homeSelector.home_data_overview)
    const baseFiatName = useSelector(homeSelector.base_fiat_name)
    const baseFiatSign = useSelector(homeSelector.base_sign_name)
    const currentCryptoCurrency = useSelector(homeSelector.current_crypto_currency)
    // get current duration for charts
    const currentDuration = useSelector(homeSelector.current_duration)
    // parse value to correct currency format
    const parseValue = useParseToCurrency(baseFiatSign || '')
    const loadChart = useSelector(homeSelector.home_load_chart)
    const updatingChart = useSelector(homeSelector.home_updating_chart)

    const currencyList: null | TCurrencyList[] = useSelector(homeSelector.currency_list)


    // active currency crypto tab
    const [activeCrypto, setActiveCrypto] = useState<TCurrencyList | null>(null)
    // show favorites modal
    const [showFavorites, setShowFavorites] = useState<boolean>(false)

    // get current crypto currency
    useEffect(() => {
        const currentCryptoItem  = currencyList?.find( item => item.id.toLowerCase() === currentCryptoCurrency?.toLowerCase())

        setActiveCrypto(currentCryptoItem || null)
    },[currencyList, currentCryptoCurrency])


    // handlers
    const handleChangeCrypto = (value: string) => {
        dispatch(homeActions.watch_update_home_base({duration: currentDuration, currencyId: value}))
        dispatch(homeActions.home_set_crypto_currency(value))
    }

    const handlerRequestChartData = () => {
        dispatch(homeActions.watch_home_base({duration: currentDuration}))
    }

    // change current duration for chart
    const handlerChangeDuration = (event: RadioChangeEvent) => {
        dispatch(homeActions.home_set_duration(event.target.value))

        currentCryptoCurrency && dispatch(homeActions.watch_update_home_base({duration: event.target.value, currencyId: currentCryptoCurrency}))
    }
    // toggle change favorites modal
    const handlerChangeFavorites = () => {
        setShowFavorites(!showFavorites)
    }


    return {
        currencyList, chartData, overview, showFavorites, activeCrypto, baseFiatName,
        currentDuration, loadChart, updatingChart, currentCryptoCurrency, baseFiatSign,
        handleChangeCrypto, handlerChangeFavorites, handlerChangeDuration, handlerRequestChartData, parseValue
    }
}
