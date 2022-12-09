// Core
import React, {CSSProperties, FC, memo, RefAttributes} from 'react'
// Ant Components
import {} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './Typography.scss'


type PropsType = {
    type: 'title-156' | 'title-78' | 'title-72' | "title-66" | 'title-48' | 'title-36' | 'title-38' | 'title-22' | 'title-18' | 'title-16'
        | 'link-36' | 'link-28' | 'link-22' | 'link-20' | 'link-16' | 'link-18'
        | 'text-24' | 'text-22' | 'text-20' | 'text-18' | 'text-16' | 'text-12'
        | 'action' | 'logo' | 'logo-small'
    align?: 'center'
    color?: 'primary' | 'secondary' | 'default' | 'gray' | 'error' |'success' | 'light-purple' | 'gray-light' | 'dark-gray'
    space?: number
    transform?: 'upper' | 'lower' | 'capitalize'
    weight?: 'regular' | 'medium' | 'semibold' | 'bold'
    className?: string
    style?: CSSProperties
    onClick?: () => any & null
}

const Typography: FC<PropsType & RefAttributes<HTMLDivElement>> = memo(({
    type, align = '',
    color = 'default',
    transform = '',
    className = '',
    weight = '',
    style,
    onClick,
    children
}) => {
    switch (type) {
        case 'title-156':
        case 'title-78':
        case 'title-72':
            return <h1 onClick={onClick} style={style} className={`typography ${type} ${align} ${color} ${weight} ${transform} ${className}`}>{children}</h1>
        case 'title-66':
            return <h2 onClick={onClick} style={style} className={`typography ${type} ${align} ${color} ${weight} ${transform} ${className}`}>{children}</h2>
        case 'title-48':
            return <h3 onClick={onClick} style={style} className={`typography ${type} ${align} ${color} ${weight} ${transform} ${className}`}>{children}</h3>
        case 'title-38':
        case 'title-36':
        case 'logo':
        case 'logo-small':
            return <h4 onClick={onClick} style={style} className={`typography ${type} ${align} ${color} ${weight} ${transform} ${className}`}>{children}</h4>
        case 'title-22':
        case 'title-18':
            return <h6 onClick={onClick} style={style} className={`typography ${type} ${align} ${color} ${weight} ${transform} ${className}`}>{children}</h6>
        case 'link-36':
        case 'link-20':
        case 'link-28':
        case 'link-22':
        case 'link-18':
        case 'link-16':
            return <span onClick={onClick} style={style} className={`typography ${type} ${align} ${color} ${weight} ${transform} ${className}`}>{children}</span>
        case 'text-24':
        case 'text-22':
        case 'text-20':
        case 'text-18':
        case 'text-16':
        case 'text-12':
            return <p onClick={onClick} style={style} className={`typography ${type} ${align} ${color} ${weight} ${transform} ${className}`}>{children}</p>
        default: return <h1>{children}</h1>
    }
})

export default Typography
