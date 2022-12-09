// Core
import React, {FC, memo} from 'react'
// Ant Components
import {Button, Card, Image, Table} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Hook
import {useResentTransactionsEf} from './useResentTransactionsEf'
import {Typography} from "elements";
import ErrorImage from "assets/img/empty_states.svg";
import {NodeError} from "#/elements";


type PropsType = {
    children?: never
}

const ResentTransactions: FC<PropsType> = memo(() => {
    const { baseFiatSign, handleReceiveAssets } = useResentTransactionsEf()

    return <Card className={'home-card home-card_transactions'}>
        <div className={'home-card__header'}>
            <Typography type={'title-16'} color={'primary'}>Resent Transactions</Typography>
        </div>
        <div className={'home-card__body'}>
            <NodeError
                errorImage={ErrorImage}
                className={'home-card__error'}
                description={'You don’t own any crypto. Send yourself some crypto to get started.'}
                withHandler={true}
                handler={() => handleReceiveAssets()}
                requestButtonName={'Receive Assets'}
            />
        </div>
    </Card>
})

export default ResentTransactions
