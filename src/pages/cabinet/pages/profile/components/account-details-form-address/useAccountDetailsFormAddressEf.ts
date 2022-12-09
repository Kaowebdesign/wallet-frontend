// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Selector
import { profileSelect } from 'selectors/cabinet'
// Action
import {profileActions} from 'actions/cabinet'
// Type
import {TProfileAddress} from 'types/cabinet/profile'


export const useAccountDetailsFormAddressEf = () => {
    const dispatch = useDispatch()
    const address = useSelector(profileSelect.address)
    const loadAccount = useSelector(profileSelect.load_account)
    const loadAddress = useSelector(profileSelect.load_address)
    const errorAddress = useSelector(profileSelect.error_address)
    const tab = useSelector(profileSelect.tab)
    const phoneCodes = useSelector(profileSelect.phone_codes)

    const [disabled, setDisabled] = useState(true)

    const handlerCheckUpdate = (val: TProfileAddress) => {

        return address.apartment !== val.apartment || address.zip !== val.zip
            || address.city !== val.city || address.country !== val.country
            || address.address !== val.address || address.state !== val.state || address.second_address !== val.second_address
    }

    const handlerDisabled = (val: TProfileAddress) => {
        handlerCheckUpdate(val) ? setDisabled(false) : setDisabled(true)
    }

    const handlerSubmit = (val: TProfileAddress) => {
        handlerCheckUpdate(val) && dispatch(profileActions.watch_update_address(val))
    }

    useEffect(() => {
        if (tab === 'Account details') {
            setDisabled(true)
        }
    }, [tab])

    return {
        loadAccount, loadAddress, errorAddress, address, disabled, phoneCodes,
        handlerSubmit, handlerDisabled,
    }
}
