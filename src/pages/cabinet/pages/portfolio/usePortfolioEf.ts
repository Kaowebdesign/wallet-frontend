// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Action
import {portfolioActions} from 'actions/cabinet'
// Selector
import {portfolioSelect} from 'selectors/cabinet'


export const usePortfolioEf = () => {
    const dispatch = useDispatch()
    const balanceDuration = useSelector(portfolioSelect.balance_duration)

    useEffect(() => {
        dispatch(portfolioActions.watch_balance(balanceDuration))
        dispatch(portfolioActions.watch_wallet())
    }, [dispatch])

    useEffect(() => {
        balanceDuration && dispatch(portfolioActions.watch_balance(balanceDuration))
    }, [balanceDuration])

    return {
        balanceDuration,
    }
}
