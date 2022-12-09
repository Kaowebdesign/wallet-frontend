// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Action
import {portfolioActions} from 'actions/cabinet'
// Selector
import {portfolioSelect} from 'selectors/cabinet'
// Types
import {RadioChangeEvent} from "antd/lib/radio"
import {useParseToCurrency} from "hooks";


export const useBalanceEf = () => {
    const dispatch = useDispatch()
    const loadFirst = useSelector(portfolioSelect.load_first)
    const loadBalanceChart = useSelector(portfolioSelect.load_balance_chart)
    const chart = useSelector(portfolioSelect.chart)
    const balanceDuration = useSelector(portfolioSelect.balance_duration)
    //const x = useSelector(x)
    // parse value to correct currency format
    const parseValue = useParseToCurrency('$')

    const handlerChange = (e: RadioChangeEvent) => {
        dispatch(portfolioActions.set_balance_duration(e.target.value))
    }

    return {
        chart, loadFirst, loadBalanceChart, balanceDuration, parseValue,
        handlerChange
    }
}
