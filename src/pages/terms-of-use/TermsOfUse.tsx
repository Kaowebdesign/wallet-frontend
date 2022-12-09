// Core
import React, {FC, memo} from 'react'
import {Redirect} from "react-router-dom"
// Style
import './TermsOfUse.scss'
// Hook
import {useTermsOfUseEf} from './useTermsOfUseEf'
import {ComingSoon} from "elements"


type PropsType = {
    children?: never
}

const TermsOfUse: FC<PropsType> = memo(() => {
    const {
        isAuth, lang,
    } = useTermsOfUseEf()

    if (isAuth) return <Redirect to={`/${lang}/cabinet`}/>

    return <ComingSoon/>
})

export default TermsOfUse
