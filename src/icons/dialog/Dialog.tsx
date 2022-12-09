// Core
import React, {CSSProperties, FC, memo} from 'react'
// Ant Components
import {} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './Dialog.scss'


type PropsType = {
    children?: never
    style?: CSSProperties
    className?: string
}

const Dialog: FC<PropsType> = memo(({style, className}) => {

    return (
        <svg style={style} className={`dialog-icon ${className}`} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.6793 22.132C4.18776 19.6177 3.6654 16.6453 4.21033 13.773C4.75526 10.9008 6.32998 8.32622 8.63879 6.53284C10.9476 4.73947 13.8317 3.85062 16.7495 4.03321C19.6673 4.21579 22.418 5.45726 24.4853 7.52447C26.5525 9.59169 27.794 12.3425 27.9766 15.2602C28.1592 18.178 27.2703 21.0621 25.477 23.3709C23.6836 25.6798 21.1091 27.2545 18.2368 27.7994C15.3646 28.3444 12.3922 27.822 9.87777 26.3305L9.8778 26.3304L5.7315 27.515C5.55995 27.564 5.37842 27.5663 5.20571 27.5215C5.033 27.4768 4.87541 27.3867 4.74925 27.2605C4.62309 27.1344 4.53297 26.9768 4.48822 26.804C4.44347 26.6313 4.44571 26.4498 4.49473 26.2783L5.67939 22.132L5.6793 22.132Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 17.5C16.8284 17.5 17.5 16.8284 17.5 16C17.5 15.1716 16.8284 14.5 16 14.5C15.1716 14.5 14.5 15.1716 14.5 16C14.5 16.8284 15.1716 17.5 16 17.5Z" fill="white"/>
            <path d="M10 17.5C10.8284 17.5 11.5 16.8284 11.5 16C11.5 15.1716 10.8284 14.5 10 14.5C9.17157 14.5 8.5 15.1716 8.5 16C8.5 16.8284 9.17157 17.5 10 17.5Z" fill="white"/>
            <path d="M22 17.5C22.8284 17.5 23.5 16.8284 23.5 16C23.5 15.1716 22.8284 14.5 22 14.5C21.1716 14.5 20.5 15.1716 20.5 16C20.5 16.8284 21.1716 17.5 22 17.5Z" fill="white"/>
        </svg>
    )
})

export default Dialog