// Core
import {ChangeEvent, useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Select
import {portfolioSelect} from 'selectors/cabinet'
// Action
import {portfolioActions} from 'actions/cabinet'


export const useAddWalletModalEf = () => {
    const dispatch = useDispatch()
    const addWalletMode = useSelector(portfolioSelect.add_wallet__mode)
    const addSearchWallet = useSelector(portfolioSelect.add_search_wallet)

    const handlerClose = () => {
        dispatch(portfolioActions.set_add_wallet__mode(false))
    }

    const handlerSearchWallet = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(portfolioActions.set_add_search_wallet(e.target.value))
    }

    return {
        addWalletMode, addSearchWallet,
        handlerClose, handlerSearchWallet,
    }
}
