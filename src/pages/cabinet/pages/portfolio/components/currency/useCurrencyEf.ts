// Core
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
// Action
import {portfolioActions} from "actions/cabinet"
// Selector
import {portfolioSelect} from 'selectors/cabinet'
// Type
import {TWalletItem} from "types/cabinet/portfoli-type"
import {EWalletDuration} from "types/cabinet/cabinet-main-type"


export const useCurrencyEf = (data: TWalletItem) => {
    const dispatch = useDispatch()
    const currencyDuration = useSelector(portfolioSelect.currency_duration)
    const currencies = useSelector(portfolioSelect.currencies)
    const loadFirstCurrency = useSelector(portfolioSelect.load_first_currency)
    const loadCurrency = useSelector(portfolioSelect.load_currency)

    const indexCurrencies = currencies.findIndex(elem => elem.id === data.id)
    const indexDuration = currencyDuration.findIndex(elem => elem.id === data.id)

    const handlerChange = (data: TWalletItem, val: EWalletDuration) => {
        dispatch(portfolioActions.watch_currency(data, val))
    }

    useEffect(() => {
        !loadFirstCurrency.includes(data.id) && dispatch(portfolioActions.watch_currency(data, EWalletDuration.HOUR))
    }, [dispatch, loadFirstCurrency])

    return {
        dataCurrencies: indexCurrencies !== -1 ? currencies[indexCurrencies].data.chart: null,
        overviewCurrencies: indexCurrencies !== -1 ? currencies[indexCurrencies].data.overview: null,
        duration: indexDuration !== -1 ? currencyDuration[indexDuration].duration : EWalletDuration.HOUR,
        loadFirstCurrency, loadCurrency,
        handlerChange,
    }
}
