// Core
import React, {CSSProperties, FC, memo} from 'react'
// Ant Components
import {} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './Cube.scss'


type PropsType = {
    children?: never
    style?: CSSProperties
    className?: string
}

const Cube: FC<PropsType> = memo(({style, className}) => {

    return (
        <svg  style={style} className={`cube-icon ${className}`} width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 0.57735C9.6188 0.220085 10.3812 0.220085 11 0.57735L18.5263 4.92265C19.1451 5.27992 19.5263 5.94017 19.5263 6.6547V15.3453C19.5263 16.0598 19.1451 16.7201 18.5263 17.0774L11 21.4226C10.3812 21.7799 9.6188 21.7799 9 21.4226L1.47372 17.0774C0.854918 16.7201 0.473721 16.0598 0.473721 15.3453V6.6547C0.473721 5.94017 0.854918 5.27992 1.47372 4.92265L9 0.57735Z" fill="#000000"/>
        </svg>
    )
})

export default Cube