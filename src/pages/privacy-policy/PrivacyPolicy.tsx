// Core
import React, {FC, memo} from 'react'
import {Redirect} from "react-router-dom"
// Style
import './PrivacyPolicy.scss'
// Hook
import {usePrivacyPolicyEf} from './usePrivacyPolicyEf'
// Element
import {ComingSoon} from "elements"


type PropsType = {
    children?: never
}

const PrivacyPolicy: FC<PropsType> = memo(() => {
    const {
        isAuth, lang,
    } = usePrivacyPolicyEf()

    if (isAuth) return <Redirect to={`/${lang}/cabinet`}/>

    return  <ComingSoon/>
})

export default PrivacyPolicy
