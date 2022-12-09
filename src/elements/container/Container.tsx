// Core
import React, {CSSProperties, FC, memo} from 'react'
// Style
import './Container.scss'

type PropsType = {
    className?: string
    style?: CSSProperties
    type?: 'div' | 'section'
}

const Container: FC<PropsType> = memo(({children, className = '', type = 'section', style}) => {
    switch (type) {
        case 'section': return <section style={style} className={`container ${className}`}>{children}</section>
        case 'div': return <div style={style} className={`container ${className}`}>{children}</div>
        default: return <section style={style} className={`container ${className}`}>{children}</section>
    }
})

export default Container
