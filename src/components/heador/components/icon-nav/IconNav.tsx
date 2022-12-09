// Core
import React, {FC, memo} from 'react'
// Ant Components
import {} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './IconNav.scss'
// Hook
import {useIconNavEf} from './useIconNavEf'
import {animated, useSpring} from "react-spring";


type PropsType = {
    children?: never
}

const IconNav: FC<PropsType> = memo(() => {
    const {
        menuMode,
    } = useIconNavEf()


    const top = useSpring({
        from: {
            transform: menuMode ? 'rotate(0deg)' : 'rotate(45deg)',
            top: menuMode ? 13 : 20,
        },
        to: {
            transform: menuMode ? 'rotate(45deg)' : 'rotate(0deg)',
            top: menuMode ? 20 : 13,
        },
        delay: 50,
        config: { mass: 1, tension: 180, friction: 12},
    })

    const middle = useSpring({
        from: {left: menuMode ? 13 : 40},
        to: {left: menuMode ? 40 : 13},
        config: { mass: 1, tension: 180, friction: 12},
    })

    const bottom = useSpring({
        from: {
            transform: menuMode ? 'rotate(0deg)' : 'rotate(-45deg)',
            top: menuMode ? 23 : 20,
        },
        to: {
            transform: menuMode ? 'rotate(-45deg)' : 'rotate(0deg)',
            top: menuMode ? 20 : 23,
        },
        delay: 50,
        config: { mass: 1, tension: 180, friction: 12},
    })

    return (
        <div className={'icon-nav'}>
            <animated.span className={'icon-nav__top'} style={menuMode !== null ? top : {}} />
            <animated.span className={'icon-nav__middle'} style={menuMode !== null ? middle : {}} />
            <animated.span className={'icon-nav__bottom'} style={menuMode !== null ? bottom : {}} />
        </div>
    )
})

export default IconNav
