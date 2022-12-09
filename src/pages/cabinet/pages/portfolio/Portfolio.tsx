// Core
import React, {FC, memo} from 'react'
// Ant Components
import {} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './Portfolio.scss'
// Hook
import {usePortfolioEf} from './usePortfolioEf'
// Components
import { GenerateReport, AddWalletModal} from './components'
import {PageWrapper} from "#/components"
import {Balance, Wallets} from "./components"


type PropsType = {
    children?: never
}

const Portfolio: FC<PropsType> = memo(() => {
    const {} = usePortfolioEf()

    return (<>
        <PageWrapper bg={"transparent"} className={'portfolio'}>
            <Balance/>
            <Wallets/>
        </PageWrapper>
        <GenerateReport/>
        <AddWalletModal/>
    </>)
})

export default Portfolio
