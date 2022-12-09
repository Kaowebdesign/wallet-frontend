// Core
import React, {FC, memo} from 'react'
// Ant Components
import {} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Component
import {Chart} from '#/components'
// Element
import {Typography} from 'elements'
// Hook
import {useBalanceEf} from './useBalanceEf'
import {BalanceInfo} from '../'



type PropsType = {
    children?: never
}

const Balance: FC<PropsType> = memo(() => {
    const {
        chart, loadFirst, loadBalanceChart, balanceDuration, parseValue,
        handlerChange,
    } = useBalanceEf()

    return (
        <div className={'portfolio__balance'}>
            <div className="portfolio__balance__header">
                <Typography type={"title-18"} color={"primary"} weight={"medium"}>
                    Portfolio Balance
                </Typography>
            </div>
            <div className="portfolio__balance__content">
                <BalanceInfo/>
                <div className={'portfolio__balance__content__chart'}>
                    <Chart
                        currentDuration={balanceDuration}
                        parseFunction={parseValue}
                        handlerChangeDuration={handlerChange}
                        handlerRequestChartData={() => {}}
                        data={chart}
                        chartLoading={loadFirst}
                        updatingChart={loadBalanceChart}
                    />
                </div>
            </div>
        </div>
    )
})

export default Balance
