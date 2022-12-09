// Core
import React, {FC, memo} from 'react'
// Ant Components
import {} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './Transactions.scss'
// Hook
import {useTransactionsEf} from './useTransactionsEf'
// Element
import {ComingSoon} from "elements"
import {PageWrapper} from "#/components"


type PropsType = {
    children?: never
}

const Transactions: FC<PropsType> = memo(() => {
    const {} = useTransactionsEf()

    return (
        <PageWrapper>
            <ComingSoon/>
        </PageWrapper>
    )
})

export default Transactions
