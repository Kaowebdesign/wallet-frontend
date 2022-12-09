// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Selectors
import {settingsCabinetSelect} from "selectors/cabinet"
// Types
import {IWalletDataItem, TCloseAccount, TSingleCurrency} from 'types/cabinet/settings-type'
// Selectors
import {appSelect, authSelect} from "selectors";
// Actions
import {settingsCabinetAction} from "actions/cabinet";

export const useCloseAccountEf = () => {
    const dispatch = useDispatch()
    const settings = useSelector(settingsCabinetSelect.settings)
    const currency = useSelector(settingsCabinetSelect.currency)
    const walletList = useSelector(settingsCabinetSelect.wallet_list)
    const formErrors = useSelector(authSelect.form_errors)
    const loadForm = useSelector(authSelect.load_form)
    const closeAccountError = useSelector(settingsCabinetSelect.close_account_errors)
    const push = useSelector(appSelect.push)

    // Close account wallets table
    const [walletData, setWalletData] = useState<IWalletDataItem[] | []>()
    // Close account modal
    const [isCloseAccModal, setIsCloseAccModal] = useState<boolean>(false)
    // Close account full modal
    const [isCloseFull, setIsCloseFull] = useState<boolean>( false)
    // Current currency
    const [currentCurrency, setCurrentCurrency] = useState<TSingleCurrency>()
    // Card number
    const [cardNumber, setCardNumber] = useState<string>()
    // Card valid
    const [validCard, setValidCard] = useState<boolean>(false)

    useEffect(() => {
        const currentCurrency = currency.find(item => item.id.toString() === settings.currency_id.toString())
        setCurrentCurrency(currentCurrency)
    },[settings, currency]);

    useEffect(() => {
        const list:IWalletDataItem[] = walletList.map((item) => ({
            key: item.id,
            icon: item.icon,
            name: item.name,
            balance: item.balance,
            value: item.value
        }))

        setWalletData(list)
    },[walletList])

    useEffect(() => {
        setIsCloseFull(false)
    }, [push])


    // handler toggle Close account modal
    const handlerToggleCloseAccount = () => {
        setIsCloseAccModal(!isCloseAccModal)
    }

    // handler toggle Close full account modal
    const handlerToggleCloseFullAccount = () => {
        setIsCloseAccModal(false)
        setIsCloseFull(!isCloseFull)
    }

    const handlerBlurCardNumber = (value: string):void => {
        setCardNumber('')
        setValidCard(false)

        const changedValue = value
            .replace(/_/g, '')
            .replace(/ /g, '')

        changedValue.length === 16 && setValidCard(true)
        changedValue.length === 16 && setCardNumber(changedValue)
    }

    const handlerSubmitCardNUmber = (values: TCloseAccount) => {

        const data = {
            card: cardNumber,
            name: values.name,
            password: values.password,
            descr: values.descr
        } as TCloseAccount

        dispatch(settingsCabinetAction.watch_close_account(data))

    }


    return {
        isCloseAccModal, isCloseFull, walletData, currentCurrency, validCard, formErrors, loadForm, closeAccountError,
        handlerToggleCloseAccount, handlerToggleCloseFullAccount, handlerBlurCardNumber, handlerSubmitCardNUmber
    }
}
