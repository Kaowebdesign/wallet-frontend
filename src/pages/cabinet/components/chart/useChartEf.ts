// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {EWalletDuration, TChart} from "../../../../types/cabinet/cabinet-main-type";
import {cabinetMainActions} from "../../../../actions/cabinet";


export const useChartEf = (data: null | TChart[]) => {
    const dispatch = useDispatch()

    // min and max values for yAxis charts
    const [chartsDelta, setChartsDelta] = useState<Array<number> | null>([])
    // tick count on charts
    const [tickCount, setTickCount] = useState<number>(5)

    // durations
    const durations = [
        {
            name: '1h',
            value: EWalletDuration.HOUR
        },
        {
            name: '1d',
            value: EWalletDuration.DAY
        },
        {
            name: '1w',
            value: EWalletDuration.WEEK
        },
        {
            name: '1m',
            value: EWalletDuration.MOUNTH
        },
        {
            name: 'All time',
            value: EWalletDuration.ALL_TIME
        },
    ]

    // Count lowest number and highest number of chart data
    const getLowestHighestValues = (dataArray: TChart[]) => {

        let lowestNumber = dataArray.length && dataArray[0].yAxis
        let highestNumber = dataArray.length && dataArray[0].yAxis

        dataArray?.forEach(function (keyValue, index){

            if (index > 0) {
                if (lowestNumber && +keyValue.yAxis < lowestNumber) {
                    lowestNumber = Math.round(+keyValue.yAxis)
                }
                if (highestNumber && +keyValue.yAxis > highestNumber) {
                    highestNumber = Math.round(+keyValue.yAxis)
                }
            }
        })


        return lowestNumber && highestNumber ? [lowestNumber, highestNumber] : null
    }

    // Get lowest number and highest number of chart data
    useEffect(() => {

        const chartsDelta = data && getLowestHighestValues(data)

        setChartsDelta(chartsDelta)

    },[data])

    // open receive assets modal
    const handleReceiveAssets = () => {
        dispatch(cabinetMainActions.set_receive_asset_mode(true))
    }


    return {durations, chartsDelta, tickCount, handleReceiveAssets}
}
