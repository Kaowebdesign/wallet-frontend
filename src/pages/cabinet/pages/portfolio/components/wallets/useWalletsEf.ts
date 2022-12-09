// Core
import {ChangeEvent, useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Selector
import {portfolioSelect} from 'selectors/cabinet'
// Actions
import {portfolioActions} from 'actions/cabinet'


export const useWalletsEf = () => {
    const dispatch = useDispatch()
    const emptyBalanceMode = useSelector(portfolioSelect.empty_balance_mode)
    const searchWallet = useSelector(portfolioSelect.search_wallet)
    const loadWallet = useSelector(portfolioSelect.load_wallet)
    const walletsPrepare = useSelector(portfolioSelect.wallets)

    const fiatSymbol = walletsPrepare ? walletsPrepare.base_fiat_sign : ''
    const wallets = !walletsPrepare || !walletsPrepare.items
        ? []
        : walletsPrepare.items
            .filter(elem => emptyBalanceMode ? elem.balance !== '0' : elem.balance !== null)
            .filter(elem => elem.full_name.toLocaleLowerCase().match(searchWallet.toLocaleLowerCase()))
            .map(elem => ({...elem, key: elem.id}))

    const getCountEmptyBalance = () => wallets.filter(elem => elem.balance === '0').length

    const [emptyBalanceCount, setEmptyBalanceCount] = useState(() => getCountEmptyBalance())

    const handlerEmptyBalance = () => {
        dispatch(portfolioActions.set_empty_balance_mode(!emptyBalanceMode))
    }

    const handlerModalAddWallet = () => {
        dispatch(portfolioActions.set_add_wallet__mode(true))
    }

    const handlerSearchWallet = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(portfolioActions.set_search_wallet(e.target.value))
    }

    const handlerFavorite = (id: string, state: boolean) => {
        dispatch(portfolioActions.update_wallets_favorite(id, state))
    }

    useEffect(() => {
        setEmptyBalanceCount(getCountEmptyBalance())
    }, [wallets])

    return {
        emptyBalanceMode, emptyBalanceCount, searchWallet, loadWallet, wallets, fiatSymbol,
        handlerEmptyBalance, handlerModalAddWallet, handlerSearchWallet, handlerFavorite,
    }
}
