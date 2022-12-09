// Core
import {ChangeEvent, useEffect, useRef, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Selector
import {profileSelect} from 'selectors/cabinet'
// Utils
import {phone} from 'utils'
// Action
import {profileActions} from 'actions/cabinet'
// Type
import {TProfileInfo} from "types/cabinet/profile"
import {FormikHelpers} from 'formik'


export const useAccountDetailsFormInfoEf = () => {
    const dispatch = useDispatch()
    const tab = useSelector(profileSelect.tab)
    const info = useSelector(profileSelect.info)
    const phoneCodes = useSelector(profileSelect.phone_codes)
    const loadAccount = useSelector(profileSelect.load_account)
    const loadInfo = useSelector(profileSelect.load_info)
    const errorInfo = useSelector(profileSelect.error_info)
    const guessCountry = useSelector(profileSelect.guess_country)

    const maskPhone = phone.mask(info.phone)

    const phoneInput = useRef<HTMLImageElement | any>(null)

    const [disabled, setDisabled] = useState(true)
    const [hadUpdate, setHadUpdate] = useState(false)
    const [code, setCode] = useState('')
    const [shadowPhone, setShadowPhone] = useState(false)
    const [firstLoad, setFirsLoad] = useState(true)
    const [valPhone, setValPhone] = useState(maskPhone ? maskPhone.val : '')
    const [rangePhone, setRangePhone] = useState(maskPhone ? maskPhone.range : 1)
    const [prefix, setPrefix] = useState('')

    const checkBirth = (day: string, mouth: string, year: string) =>
        (year && mouth && day) && (year !== info.year || mouth !== info.mouth || day !== info.day) ? true : false

    const handlerSubmit = (value: TProfileInfo, formik: FormikHelpers<TProfileInfo>) => {
        const phone = value.phone.match(/\d/g)
        const phoneVal = phone && phone.length ? phone.join('') : null
        let phoneValid = true
        console.log(value)
        const birth = checkBirth(value.day, value.mouth, value.year)

        if (phoneVal === null) {
            value.phone = ''
        } else if (phoneVal.length < 9) {
            phoneValid = false

            formik.setErrors({phone: 'Not valid'})
        } else {
            value.phone = phoneVal
        }

        if ((birth || value.login !== info.login || value.phone !== info.phone
            || value.first_name !== info.first_name || value.last_name !== info.last_name || value.phonecode_id !== code) && phoneValid) {

            value.phonecode_id = code

            if (!value.phone) {
                value.phonecode_id = ''
            }

            dispatch(profileActions.watch_update_info(value))
        }
    }

    const checkDisabled = (value: TProfileInfo, codeDef: null | string = null ) => {
        const phone = value.phone.match(/\d/g)
        const phoneVal = phone && phone.length ? phone.join('') : null

        if (phoneVal === null) {
            value.phone = ''
        } else {
            value.phone = phoneVal
        }

        if (checkBirth(value.day, value.mouth, value.year) || value.login !== info.login
            || value.phone !== info.phone || value.first_name !== info.first_name || value.last_name !== info.last_name
            || value.phonecode_id !== (codeDef ?  codeDef : code)) {

            setDisabled(false)
            setHadUpdate(true)
        } else {
            setDisabled(true)
            setHadUpdate(false)
        }
    }

    const handlerChangeUpdate = (val: TProfileInfo) => checkDisabled(val)

    const handlerNumberCodeChange = (val: string) => {

        if (info.phonecode_id === val && !hadUpdate) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }

        setCode(val)
    }

    const handlerPhoneFocus = () => setShadowPhone(true)

    const handlerPhoneBluer = () => setShadowPhone(false)

    const handlerPhoneChange = (e: ChangeEvent<HTMLInputElement>, value: TProfileInfo) => {
        const data = phone.mask(e.target.value)

        checkDisabled({...value, phone: e.target.value})

        if (data) {
            setValPhone( data.val)
            setRangePhone(data.range)
        } else if (!e.target.value.match(/\d/g)) {
            setValPhone(  '')
            setRangePhone( 1)
        }
    }

    const handlerPrepareCode = (phoneCodes: any) => {
        if (phoneCodes.length) {

            if (info.phonecode_id) {
                setCode(info.phonecode_id)
            } else if (guessCountry) {
                const index = phoneCodes.findIndex((elem: any) => elem.name.toLocaleLowerCase().match(guessCountry.toLocaleLowerCase()))

                if (index !== -1) {
                    setCode(phoneCodes[index].id)
                } else {
                    setCode(phoneCodes[0].id)
                }
            } else {
                setCode(phoneCodes[0].id)
            }
        }
    }

    useEffect(() => {
        if (phoneCodes.length) {
            const item = phoneCodes.findIndex(elem => elem.id === code)

            item !== -1 && setPrefix(`+${phoneCodes[item].dial}`)
        }

    }, [code, phoneCodes])

    useEffect(() => {
        phoneInput.current && phoneInput.current.input.setSelectionRange(rangePhone, rangePhone)
    }, [rangePhone])

    useEffect(() => {
        handlerPrepareCode(phoneCodes)
    }, [phoneCodes, info])

    useEffect(() => {
        if (firstLoad && maskPhone && maskPhone.val) {
            setValPhone(maskPhone.val)
            setFirsLoad(false)
        }
    }, [maskPhone, firstLoad])

    useEffect(() => {
        if (tab === 'Account details') {
            setDisabled(true)
            setHadUpdate(false)

            if (maskPhone) {
                setValPhone(maskPhone.val)
                setRangePhone(maskPhone.range)
            }
            handlerPrepareCode(phoneCodes)
        }
    }, [tab])

    return {
        phoneCodes, code, loadAccount, shadowPhone, valPhone, phoneInput, loadInfo, errorInfo, disabled, prefix,
        info: {...info, phone: valPhone},
        handlerSubmit, handlerNumberCodeChange, handlerPhoneFocus, handlerPhoneBluer, handlerPhoneChange, handlerChangeUpdate,
    }
}
