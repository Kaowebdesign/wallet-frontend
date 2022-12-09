// Core
import React, {FC, memo} from 'react'
import clsx from "clsx"
// Style
import './LoadApp.scss'
// Element
import {Typography} from 'elements'
// Icon
import {LoadCoinLarge, LoadCoinMiddle, LoadCoinSmall, LoadCoinShadowLarge, LoadCoinShadowMiddle, LoadCoinShadowSmall} from 'icons'
// Hook
import {useLoadAppEf} from './useLoadAppEf'
// Utils
import {range} from 'utils'


type PropsType = {
    children?: never
}

const LoadApp: FC<PropsType> = memo(() => {
    const {
        point, timerAnim,
    } = useLoadAppEf()

    return (
        <div className={'load-app'}>
            <div className={'load-app__coins'}>
                <LoadCoinLarge
                    className={clsx(
                        'load-app__item', 'load-app__item_large', {
                            'up-coin': [1,2,3,4,5,6].includes(timerAnim),
                            'down-coin': [6].includes(timerAnim),
                        })}
                />
                <LoadCoinMiddle
                    className={clsx(
                        'load-app__item', 'load-app__item_middle',{
                            'up-coin': [2,3,4,5].includes(timerAnim),
                            'down-coin': [5].includes(timerAnim),
                    })}
                />
                <LoadCoinSmall
                    className={clsx(
                        'load-app__item', 'load-app__item_small', {
                            'up-coin': [3,4,].includes(timerAnim),
                            'down-coin': [4].includes(timerAnim),
                        })}
                />

                <LoadCoinShadowLarge
                    className={clsx(
                        'load-app__item__shadow', 'load-app__item__shadow_large', {
                            'show-shadow': [1,2,3,4,5,6].includes(timerAnim),
                            'hide-shadow': [6].includes(timerAnim),
                    })}
                />
                <LoadCoinShadowMiddle
                    className={clsx(
                        'load-app__item__shadow', 'load-app__item__shadow_middle', {
                            'show-shadow': [2,3,4,5].includes(timerAnim),
                            'hide-shadow': [5].includes(timerAnim),
                    })}
                />
                <LoadCoinShadowSmall
                    className={clsx(
                        'load-app__item__shadow', 'load-app__item__shadow_small',{
                            'show-shadow': [3,4,].includes(timerAnim),
                            'hide-shadow': [4].includes(timerAnim),
                    })}
                />
            </div>
            <Typography color={"primary"} type={"text-18"} style={{width: 100, marginLeft: 50}}>
                Loading
                <span>{
                    range(0, point).map(() => ' .')
                }</span>
            </Typography>
        </div>
    )
})

export default LoadApp
