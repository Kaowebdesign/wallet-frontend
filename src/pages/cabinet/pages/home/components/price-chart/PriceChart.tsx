// Core
import React, {FC, memo} from 'react'
import clsx from "clsx"
// Ant Components
import {Card, Image, Button, Skeleton, Tabs} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './PriceChart.scss'
// Hook
import {usePriceChartEf} from './usePriceChartEf'
// Components
import {Chart} from '#/components'
import Overview from "#/elements/overview/Overview";
import Favorites from "./components/Favorites";
// Elements
import {Typography} from "elements";
import {config} from "utils";


type PropsType = {
    children?: never
}

const PriceChart: FC<PropsType> = memo(() => {
    const {
        currencyList, chartData, overview, currentCryptoCurrency, baseFiatName,
        activeCrypto, currentDuration, loadChart, updatingChart, showFavorites, baseFiatSign,
        handleChangeCrypto, handlerChangeFavorites, handlerChangeDuration, handlerRequestChartData, parseValue,
    } = usePriceChartEf()

    return (
        <Card className={'price-chart'}>
            <div className="price-chart__header">
                {
                    !loadChart ?
                        currentCryptoCurrency && (
                            <Tabs activeKey={currentCryptoCurrency} tabPosition={'top'} onChange={handleChangeCrypto} className={'price-chart__tabs'}>
                                {
                                    currencyList && currencyList.map((item, key) => (
                                        <Tabs.TabPane
                                            tab={(
                                                <div className={'price-chart__link'}>
                                                    <Image src={config.app.apiURL+item.icon} preview={false} className={'base-table__icon price-chart__icon'} />
                                                    <Typography type={'text-16'} color={currentCryptoCurrency === item.name.toLowerCase()?'secondary':'primary'} weight={'medium'}>{item.full_name}</Typography>
                                                </div>
                                            )}
                                            key={item.id}
                                        />
                                    ))
                                }
                            </Tabs>
                        )
                    :
                        <Tabs activeKey={'1'} tabPosition={'top'} className={'price-chart__tabs'}>
                            {
                                [1, 2, 3, 4].map((item, key) =>
                                    <Tabs.TabPane
                                        tab={(
                                            <div className={'price-chart__link'}>
                                                <Skeleton.Avatar active={true} size={24} shape={'circle'} />
                                                <Skeleton.Button active={true} size={"small"} shape={'square'} />
                                            </div>
                                        )}
                                        key={item}
                                    />
                                )
                            }
                        </Tabs>
                }
                <Button className={'default secondary'} onClick={() => handlerChangeFavorites()}>
                    Change Favorites
                </Button>
            </div>
            <div className={'price-chart__body'}>
                <div className={'price-chart__chart'}>
                    <Chart
                        data={chartData}
                        title={'Price Chart'}
                        currentDuration={currentDuration}
                        parseFunction={parseValue}
                        handlerChangeDuration={handlerChangeDuration}
                        handlerRequestChartData={handlerRequestChartData}
                        chartLoading={loadChart}
                        updatingChart={updatingChart}
                    />
                </div>
                <div className={'price-chart__overview'}>
                    <Overview
                        data={overview}
                        parseFunction={parseValue}
                        currency={{name: baseFiatName || '', sign: baseFiatSign || ''}}
                        crypto={activeCrypto}
                        loadOverview={loadChart}
                    />
                </div>
            </div>
            <Favorites showFavorites={showFavorites} handlerChangeFavorites={handlerChangeFavorites} />
        </Card>
    )

})

export default PriceChart
