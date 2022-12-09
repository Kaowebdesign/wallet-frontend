// Core
import React, {FC, memo} from 'react'
import clsx from "clsx"
// Ant Components
import {Tooltip, Skeleton} from 'antd'
// Ant Icon
import {InfoCircleOutlined} from '@ant-design/icons'
// Elements
import {Typography} from "elements";
// Style
import './Overview.scss'
import {TCurrencyList, TOverview} from "types/cabinet/cabinet-main-type";

type PropsType = {
    children?: never,
    data: null | TOverview,
    parseFunction: (value: number | string) => any,
    crypto: null | TCurrencyList,
    currency: null | { name: string, sign: string },
    loadOverview?: Boolean
}

const Overview: FC<PropsType> = memo(({data, parseFunction, currency, crypto, loadOverview}) => {

    return (
        <>
            <div className="overview__title price-chart__title">
                <Typography type={'title-16'} weight={'medium'} color={'primary'}>Overview</Typography>
            </div>
            <div className={'overview__list'}>
                <div className={'overview__item'}>
                    <div className={'overview__label'}>
                        <Typography type={'text-16'} color={'gray'}>Current price</Typography>
                    </div>
                        <div className={'overview__value'}>
                            {
                                data && !loadOverview ?
                                    <>
                                        { parseFunction(data?.current_price).integer() }
                                        <span>{ parseFunction(data?.current_price).fractional() }</span>
                                    </>
                                :
                                <Skeleton.Button active={true} size={'small'} shape={'square'} />
                            }
                        </div>
                </div>
                <div className={'overview__item'}>
                    <div className={'overview__label'}>
                        <Typography type={'text-16'} color={'gray'}>Сhange (24H)</Typography>
                    </div>
                    <div className={clsx('overview__value',{'red': data && +data?.percent_change < 0,'green': data && +data?.percent_change > 0})}>
                        {
                            data && !loadOverview ?
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
                    </div>
                </div>
                <div className={'overview__item'}>
                    <div className={'overview__label'}>
                        <Typography type={'text-16'} color={'gray'}>Market cap</Typography>
                        <Tooltip placement="right" title={`The current price of ${crypto?.name} multiplied by its current circulating supply.`}>
                            <button className={'cab-settings__icon'}>
                                <InfoCircleOutlined />
                            </button>
                        </Tooltip>
                    </div>
                    <div className={'overview__value'}>
                        {
                            data && !loadOverview ?
                                <>
                                    { parseFunction(data?.market_cap).integer() }
                                    <span>{ parseFunction(data?.market_cap).fractional() }</span>
                                </>
                            :
                                <Skeleton.Button active={true} size={'small'} shape={'square'} />
                        }

                    </div>
                </div>
                <div className={'overview__item'}>
                    <div className={'overview__label'}>
                        <Typography type={'text-16'} color={'gray'}>Volume (24H)</Typography>
                        <Tooltip placement="right" title={`The total dollar value of all ${currency?.name} transactions over the past 24 hours. Includes data from all exchanges`}>
                            <button className={'cab-settings__icon'}>
                                <InfoCircleOutlined />
                            </button>
                        </Tooltip>
                    </div>
                    <div className={'overview__value'}>
                        {
                            data && !loadOverview ?
                                <>
                                    { parseFunction(data?.volume).integer() }
                                    <span>{ parseFunction(data?.volume).fractional() }</span>
                                </>
                            :
                                <Skeleton.Button active={true} size={'small'} shape={'square'} />
                        }

                    </div>
                </div>
                <div className={'overview__item'}>
                    <div className={'overview__label'}>
                        <Typography type={'text-16'} color={'gray'}>Hight Price (24H)</Typography>
                    </div>
                    <div className={'overview__value'}>
                        {
                            data && !loadOverview ?
                                <>
                                    { parseFunction(data?.high_price).integer() }
                                    <span>{ parseFunction(data?.high_price).fractional() }</span>
                                </>
                            :
                                <Skeleton.Button active={true} size={'small'} shape={'square'} />
                        }

                    </div>
                </div>
                <div className={'overview__item'}>
                    <div className={'overview__label'}>
                        <Typography type={'text-16'} color={'gray'}>Low Price (24H)</Typography>
                    </div>
                    <div className={'overview__value'}>
                        {
                            data && !loadOverview ?
                                <>
                                    { parseFunction(data?.low_price).integer() }
                                    <span>{ parseFunction(data?.low_price).fractional() }</span>
                                </>
                            :
                                <Skeleton.Button active={true} size={'small'} shape={'square'} />
                        }
                    </div>
                </div>
            </div>
        </>
    )

})

export default Overview
