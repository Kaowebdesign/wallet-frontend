// Core
import React, {FC, memo} from 'react'
import {Redirect} from "react-router-dom"
// Hook
import {useMainEf} from './useMainEf'
// Components
import {HeadArea, CointyBlock, MultiCoin, Secure, Receive, Device} from './components'


type PropsType = {
    children?: never
}

const Main: FC<PropsType> = memo(() => {
    const {
        isAuth, lang,
    } = useMainEf()

    if (isAuth) return <Redirect to={`/${lang}/cabinet`}/>

    return (
        <div className={'main-pages'}>
            <HeadArea/>
            <CointyBlock/>
            <MultiCoin/>
            <Secure/>
            <Receive/>
            <Device/>
        </div>
    )
})

export default Main
