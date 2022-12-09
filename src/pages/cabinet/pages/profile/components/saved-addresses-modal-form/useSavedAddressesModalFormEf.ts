// Core
import {useEffect, useState} from "react"
import {useSelector, useDispatch} from 'react-redux'
// select
import {profileSelect, cabinetMainSelect} from 'selectors/cabinet'
// Action
import {profileActions, cabinetMainActions} from 'actions/cabinet'
// Types
import {IAddressTableItemBase} from "types/cabinet/profile"


export const useSavedAddressesModalFormEf = (id: string | null, mode: boolean) => {
    const dispatch = useDispatch()
    const currencyListCrypto = useSelector(cabinetMainSelect.currency_list_crypto)
    const addressTable = useSelector(profileSelect.address_table)
    const loadAddressTableModalForm = useSelector(profileSelect.load_address_table_modal_form)
    const errorAddressTableModalForm = useSelector(profileSelect.error_address_table_modal_form)

    const baseInit = {
        currency_id: currencyListCrypto ? currencyListCrypto[0].id : '0',
        wallet_address: '',
        name: ''
    } as IAddressTableItemBase

    const prepareInit = (Id: string | null) => {

        if (Id && addressTable) {
            const index = addressTable.items.findIndex(elem => elem.id === Id)

            return  index === -1
                ? baseInit
                : {
                    currency_id: addressTable.items[index].currency_id,
                    wallet_address: addressTable.items[index].wallet_address,
                    name: addressTable.items[index].name,
                }
        } else {
            return baseInit
        }
    }

    const [init, setInit] = useState<IAddressTableItemBase | null>(null)

    const handlerEdit = (data: IAddressTableItemBase) => {
        id && dispatch(profileActions.watch_address_table_edit(data, id))
    }

    const handlerAdd = (data: IAddressTableItemBase) => {
        dispatch(profileActions.watch_address_table_add(data))
    }

    useEffect(() => {
        mode ? setInit(prepareInit(id)) : setInit(null)
    }, [mode])

    return {
        init, currencyListCrypto, loadAddressTableModalForm, errorAddressTableModalForm,
        handlerEdit, handlerAdd,
    }
}
