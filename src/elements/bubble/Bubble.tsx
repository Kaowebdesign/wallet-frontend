// Core
import React, {CSSProperties, FC, memo} from 'react'
// Ant Components
import {} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './Bubble.scss'


type PropsType = {
    color?: 'primary' | 'secondary'
    className?: string,
    style?: CSSProperties
    arrow?: 'top-left' | 'top-center' | 'top-right'
        | 'bottom-left' | 'bottom-center' | 'bottom-right'
        | 'left-top' | 'left-center' | 'left-bottom'
        | 'right-top' | 'right-center' | 'right-bottom'
}

const Bubble: FC<PropsType> = memo(({children, style, className, color = 'primary', arrow = ''}) => {

    return (
        <div className={`bubble arrow ${className} ${color} ${arrow}`} style={style}>
            {children}
        </div>
    )
})


export default Bubble
