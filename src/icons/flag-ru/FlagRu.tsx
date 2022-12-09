// Core
import React, {FC, memo} from 'react'
// Style
import './FlagRu.scss'



type PropsType = {
    children?: never
    className?: string
}

const FlagRu: FC<PropsType> = memo(({className = ''}) => {

    return (
        <svg className={`flag-ru-icon ${className}`} style={{width: 25, marginRight: 10}} xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-ru" viewBox="0 0 640 480">
            <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="#fff" d="M0 0h640v480H0z"/>
                <path fill="#0039a6" d="M0 160h640v320H0z"/>
                <path fill="#d52b1e" d="M0 320h640v160H0z"/>
            </g>
        </svg>
    )
})

export default FlagRu
