// Core
import React, {FC, memo} from 'react'
// Ant Components
import {Skeleton} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './Currency.scss'
// Hook
import {useCurrencyEf} from './useCurrencyEf'
import {useParseToCurrency} from "hooks"
// Component
import {Chart} from "#/components"
// Element
import {Typography} from 'elements'
// Type
import {TWalletItem} from "types/cabinet/portfoli-type"
import {TOverview} from "types/cabinet/cabinet-main-type"
import clsx from "clsx";


type PropsType = {
    children?: never
    data: TWalletItem
    fiatSign: string
}

type TCurrencyChartTitle = {
    children?: never
    fiatSign: string
    data: TOverview | null
    parseFunction: (val: number | string) => any
}

const CurrencyChartTitle: FC<TCurrencyChartTitle> = ({fiatSign, data, parseFunction}) => {

    return (
        <div className={'portfolio-currency'}>
            <div className={'portfolio-currency_item'}>
                <Typography className={'portfolio-currency_item_title'} type={"text-16"} color={"dark-gray"}>
                    Price
                </Typography>
                <Typography className={'overview__value'} type={"text-22"} color={"primary"} weight={"regular"}>
                    {
                        data ?
                            <>
                                { parseFunction(data?.current_price).integer() }
                                <span>{ parseFunction(data?.current_price).fractional() }</span>
                            </>
                            :
                            <Skeleton.Button active={true} size={'small'} shape={'square'} />
                    }
                </Typography>
            </div>
            <div className={'portfolio-currency_item'}>
                <Typography className={'portfolio-currency_item_title'} type={"text-16"} color={"dark-gray"}>
                    Сhange (24H)
                </Typography>
                <Typography
                    type={"text-22"}
                    color={"primary"}
                    weight={"regular"}
                    className={clsx('overview__value',{'red': data && +data?.percent_change < 0,'green': data && +data?.percent_change > 0})}
                >
                    {
                        data ?
                            <>
                                {
                                    +data?.percent_change > 0 ?
                                        '+' + parseFunction(data?.percent_change).full() + '%'
                                        :
                                        parseFunction(data?.percent_change).full() + '%'
                                }
                            </>
                            :
                            <Skeleton.Button active={true} size={'small'} shape={'square'} />
                    }
                </Typography>
            </div>
            <div className={'portfolio-currency_item'}>
                <Typography className={'portfolio-currency_item_title'} type={"text-16"} color={"dark-gray"} >
                    Market Cap
                </Typography>
                <Typography className={'overview__value'} type={"text-22"} color={"primary"} weight={"regular"}>
                    {
                        data ?
                            <>
                                {`${fiatSign} ${data?.market_cap}`}
                            </>
                            :
                            <Skeleton.Button active={true} size={'small'} shape={'square'} />
                    }
                </Typography>
            </div>
        </div>
    )
}

const Currency: FC<PropsType> = memo(({data, fiatSign}) => {
    const parseValue = useParseToCurrency(fiatSign)
    const {
        duration, dataCurrencies, loadCurrency, loadFirstCurrency, overviewCurrencies,
        handlerChange,
    } = useCurrencyEf(data)


    return (
        <Chart
            title={<CurrencyChartTitle parseFunction={parseValue} data={overviewCurrencies} fiatSign={fiatSign}/>}
            currentDuration={duration}
            parseFunction={parseValue}
            handlerChangeDuration={(e) =>handlerChange(data, e.target.value)}
            handlerRequestChartData={() => {}}
            data={dataCurrencies}
            chartLoading={!loadFirstCurrency.includes(data.id)}
            updatingChart={loadCurrency.includes(data.id)}
            skeletonType={'large'}
        />
    )
})

export default Currency
