// Core
import React, {FC, memo, ReactNode} from 'react'
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts"
import clsx from "clsx";
// Ant Components
import {Radio, Spin} from 'antd'
import {RadioChangeEvent} from "antd/lib/radio"
// Ant Icon
import {LoadingOutlined} from '@ant-design/icons'
// Elements
import {Typography} from "elements"
import {TChart, TDuration} from "types/cabinet/cabinet-main-type"
import {NodeError} from "#/elements"
// Hooks
import {useChartEf} from "./useChartEf"
// Style
import './Chart.scss'
// Images
import ErrorImage from 'assets/img/empty_states.svg'
// Icon
import {SkeletonChartLarge, SkeletonChartSmall} from 'icons'



type PropsType = {
    children?: never,
    data: null | TChart[],
    title?: null | string | ReactNode,
    className?: string,
    currentDuration: TDuration,
    parseFunction: (value: number | string) => any,
    handlerChangeDuration: (event: RadioChangeEvent) => void,
    handlerRequestChartData: () => void,
    chartLoading: Boolean,
    updatingChart: Boolean
    skeletonType?: 'small' | 'large'
}

const Chart: FC<PropsType> = memo((
    {
         data, title, currentDuration, parseFunction,
        handlerChangeDuration, handlerRequestChartData,
        className = '', chartLoading, updatingChart, skeletonType = 'small'
    }) => {

    const {durations, chartsDelta, tickCount, handleReceiveAssets} = useChartEf(data)

    // custom tooltip
    const CustomTooltip = (data:any) => {
        if (data.active && data.payload && data.payload.length) {
            return (
                <div className="chart-tooltip">
                    <p className="chart-tooltip__label">{data.label}</p>
                    <p className="chart-tooltip__price">{parseFunction ? parseFunction(data.payload[0].value).pure_with_currency() : data.payload[0].value}</p>
                </div>
            );
        }

        return null;
    };

    return <>
        <div className={`price-chart__chart-wrap ${className}`}>
            {
                title &&
                    <div className="price-chart__title">
                        <Typography type={'title-16'} weight={'medium'} color={'primary'}>{title}</Typography>
                    </div>
            }
            <Radio.Group defaultValue={currentDuration} size="small" style={{ marginTop: 16 }} className={'base-radio'} onChange={handlerChangeDuration}>
                {
                    durations.map((item, key) =>
                        <Radio.Button value={item.value} key={key} className={'base-radio__button'} disabled={!!updatingChart}>{item.name}</Radio.Button>
                    )
                }
            </Radio.Group>
        </div>
        {
            !chartLoading && !data ?
                    <NodeError withHandler={true} handler={() => handlerRequestChartData()} className={'chart__node-error'} />
                :
                    chartLoading
                        ? <>
                            {
                                skeletonType === 'small' ? <SkeletonChartSmall/> : <SkeletonChartLarge/>
                            }
                        </>
                        :
                            data?.length ?
                                <div className={'chart__responsive-wrap'}>
                                    <div className={clsx('chart__loading', {'active': updatingChart})}>
                                        <Spin className={'chart__spin'} indicator={<LoadingOutlined  style={{fontSize: 18}} spin />} />
                                    </div>
                                    <ResponsiveContainer width={'100%'} height={260} className={'chart__responsive-chart'}>
                                        <AreaChart data={data}
                                                   margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                            <defs>
                                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="27.4%" stopColor="rgb(85 76 194 / 20%)" />
                                                    <stop offset="85.8%" stopColor="rgba(85, 76, 194, 0.04)" />
                                                </linearGradient>
                                            </defs>
                                            <XAxis dataKey="xAxisFormatted" tick={{fontSize: 12}} tickMargin={10}/>
                                            {
                                                chartsDelta ?
                                                    <YAxis tick={{fontSize: 12}}  tickMargin={10} width={70} domain={chartsDelta} allowDecimals={false} tickCount={tickCount} tickFormatter={(value) => parseFunction(value).full_with_currency(0) }/>
                                                :
                                                    <YAxis tick={{fontSize: 12}}  tickMargin={10} width={70} allowDecimals={false} tickCount={tickCount} tickFormatter={(value) => parseFunction(value).full_with_currency(0)}/>

                                            }
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <Tooltip content={<CustomTooltip />} />
                                            <Area dataKey="yAxis" stroke="#554CC2" fillOpacity={1} fill="url(#colorUv)" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            :
                                <NodeError
                                    errorImage={ErrorImage}
                                    description={'You don’t own any crypto. Send yourself some crypto to get started.'}
                                    withHandler={true}
                                    handler={() => handleReceiveAssets()}
                                    requestButtonName={'Receive Assets'}
                                    requestButtonDisabled={updatingChart}
                                />
        }
    </>
})

export default Chart
