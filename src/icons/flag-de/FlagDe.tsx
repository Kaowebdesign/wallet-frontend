// Core
import React, {FC, memo} from 'react'
// Style
import './FlagDe.scss'


type PropsType = {
    children?: never
    className?: string
}

const FlagDe: FC<PropsType> = memo(({className}) => {

    return (
        <svg className={`flag-de-icon ${className}`} style={{width: 25, marginRight: 10}} xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 640 480">
            <path fill="#ffce00" d="M0 320h640v160H0z"/>
            <path d="M0 0h640v160H0z"/>
            <path fill="#d00" d="M0 160h640v160H0z"/>
        </svg>
    )
})

export default FlagDe
