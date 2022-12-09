// Core
import React, {CSSProperties, FC, memo} from 'react'
import {NavLink} from "react-router-dom"
import clsx from "clsx"
// Style
import './Logo.scss'
// Elements
import {Typography} from "elements"
// Hooks
import {useLogoEf} from './useLogoEf'
// Icons
import {Logo as LogoIcon} from 'icons'



type PropsType = {
    children?: never
    handlerClick?: () => any
    className?: string
    hide?: boolean
    style?: CSSProperties
    cabinet?: boolean
    isLink?: boolean
}

type LogoLinkType = {
    handlerClick?: () => any
    hide: boolean
    lang: string
}


const LogoLink: FC<LogoLinkType> = memo(({handlerClick, hide, children, lang}) => (
    <>
        {
            hide
                ? <NavLink to={`/${lang}/`} onClick={handlerClick}>{children}</NavLink>
                : children
        }
    </>
))


const Logo: FC<PropsType> = memo(({
    handlerClick = () => {},
    className = '',
    hide = false,
    style,
    cabinet = false,
    isLink = true
}) => {
    const {
        lang,
    } = useLogoEf()

    return (
        <LogoLink hide={isLink} lang={lang} handlerClick={handlerClick}>
            <div className={`logo ${className}`} style={style}>
                <LogoIcon small={cabinet} className={'logo__icon'}/>
                {
                    hide
                        ? ''
                        : (
                            <Typography className={clsx('logo__title')} type={cabinet ? 'logo-small' : "logo"} color={"primary"}>
                                CatchCoin
                            </Typography>
                        )
                }
            </div>
        </LogoLink>
    )
})

export default Logo

