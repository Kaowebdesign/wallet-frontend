// Core
import React, {CSSProperties, FC, memo} from 'react'
// Style
import './Check3d.scss'


type PropsType = {
    children?: never
    color?: 'primary' | 'default'
    style?: CSSProperties
    className?: string
}

const Check3d: FC<PropsType> = memo(({color = 'default', style, className = ''}) => {
    return (
        <svg style={style} className={`check-3d-icon ${color} ${className}`} width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 11.7734L4.5 7.84888L11.5 17.1696L24.5 0.980957L29 5.39605L11.5 25.9998L0 11.7734Z" fill="#D8E0F9"/>
            <path d="M4.5 7.8493L7 6.86816L13.5 14.7172L11.5 17.1701L4.5 7.8493Z" fill="#BBC7E7"/>
            <path d="M27 0L24.5 0.981132L29 5.39623L32 4.41509L27 0Z" fill="#BECAEA"/>
            <path d="M15 25.0188L32 4.41509L29 5.39623L11.5 25.9999L15 25.0188Z" fill="#BECAEA"/>
            <path d="M27 0L24.5 0.981132L29 5.39623L32 4.41509L27 0Z" fill="#D8E0F9"/>
        </svg>
    )
})

export default Check3d
