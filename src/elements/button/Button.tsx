// Core
import React, {CSSProperties, FC, memo} from 'react'
// Style
import './Button.scss'


type PropsType = {
    type?: 'button' | 'submit' | 'reset'
    color?: 'primary' | 'secondary' | 'gray' | 'error' | 'default'
    size?: 'icon' | 'small' | 'normal' | 'large' | 'full'
    variant?: 'outlined' | 'contained' | 'text'
    disabled?: boolean
    className?: string
    style?: CSSProperties
    onClick?: () => any & null
    loader?: any
    loaderPosition?: 'center' | 'start' | 'end'
    radius?: 'rad-norma' | 'rad-small'
}

const Button: FC<PropsType> = memo(({
    type = 'button',
    color = 'default',
    size = 'normal',
    disabled = false,
    className = '',
    onClick = null,
    style,
    loader,
    loaderPosition = 'end',
    children,
    variant = 'text',
    radius = 'rad-norma'
}) => {
    const handlerClick = () => onClick && onClick()
    const Loader =  loader  ? () => loader() : null

    return (
       <span className={'button-wrapper'}>
            <button
                style={style}
                onClick={handlerClick}
                type={type}
                className={`button ${color} ${size} ${className} ${variant} ${radius}`}
                disabled={disabled || Loader !== null}
            >
            {
                Loader && (
                    <div className={`button__load-wrapper ${loaderPosition}`}>
                        <Loader/>
                    </div>
                )
            }
                {children}
            </button>
       </span>
    )
})

export default Button
