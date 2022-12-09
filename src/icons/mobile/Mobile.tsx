// Core
import React, {CSSProperties, FC, memo} from 'react'
// Ant Components
import {} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './Mobile.scss'


type PropsType = {
    children?: never
    style?: CSSProperties
    className?: string | Object
}

const Mobile: FC<PropsType> = memo(({style, className}) => {

    return (
        <svg style={style} className={`mobile-icon ${className}`} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 22C16.3284 22 17 21.3284 17 20.5C17 19.6716 16.3284 19 15.5 19C14.6716 19 14 19.6716 14 20.5C14 21.3284 14.6716 22 15.5 22Z" fill="white"/>
            <path d="M23.2273 4H7.77273C7.34596 4 7 4.44772 7 5V25C7 25.5523 7.34596 26 7.77273 26H23.2273C23.654 26 24 25.5523 24 25V5C24 4.44772 23.654 4 23.2273 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
})

export default Mobile
