// Core
import React, {CSSProperties, FC, memo} from 'react'
// Ant Components
import {} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './User.scss'


type PropsType = {
    children?: never
    style?: CSSProperties,
    className?: string | Object
}

const User: FC<PropsType> = memo(({style, className}) => {

    return (
        <svg style={style} className={`user-icon ${className}`} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M3.875 26.9988C5.10445 24.8708 6.87227 23.1037 9.00085 21.8752C11.1294 20.6467 13.5438 20 16.0015 20C18.4592 20 20.8736 20.6468 23.0021 21.8754C25.1307 23.1039 26.8985 24.871 28.1279 26.9991" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
})

export default User
