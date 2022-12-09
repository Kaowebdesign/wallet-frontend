// Core
import React, {FC, memo} from 'react'
// Style
import './Moon.scss'

type PropsType = {
    children?: never
    className?: string
    disabled?: boolean
    hover?: boolean
}

const Moon: FC<PropsType> = memo(({className, disabled, hover = false}) => {
    return (
        <svg className={`moon ${className} ${disabled ? 'disabled' : ''}`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.46963 9.38548L8.46973 9.38558C9.51248 10.4283 11.2091 10.8386 12.6328 11.0096C13.6001 11.1259 14.5327 11.1411 15.2296 11.1267C15.1135 11.3969 14.9776 11.6965 14.827 11.9986C14.4914 12.6719 14.1197 13.2814 13.7738 13.6274C11.1371 16.2634 6.86366 16.2639 4.22714 13.6274C1.59128 10.9916 1.59128 6.71744 4.22714 4.08158C4.87554 3.43318 5.62228 2.94525 6.41888 2.61667C5.9481 4.98805 6.63 7.54516 8.46963 9.38548Z" stroke={disabled ? hover ? '#554CC2' : '#807d7d' : "#332E54"} strokeWidth="1.5"/>
        </svg>

    )
})

export default Moon
