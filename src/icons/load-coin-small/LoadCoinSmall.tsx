// Core
import React, {FC, memo} from 'react'
// Style
import './LoadCoinSmall.scss'



type PropsType = {
    children?: never
    className?: string
}

const LoadCoinSmall: FC<PropsType> = memo(({className = ''}) => (
    <svg className={`load-coin-small ${className}`} viewBox="0 0 64 79" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.5904 14L0 25.6363L8 45.0278L41 50L64 36L56.5732 18.8853L23.5904 14Z" fill="#696CD2"/>
        <path d="M36.3369 34.4098L28.337 36.9096L21.0764 23.3203L36.8369 25.9097L36.3369 34.4098Z" fill="white"/>
        <path d="M43.1751 39.6422L28.8301 37.836L37.3308 35.2079L37.3517 26.1456L43.1751 39.6422Z" fill="white"/>
        <path d="M41 79V49.8036L64 36V65.1737L41 79Z" fill="#5859C0"/>
        <path d="M41 79V49.8397L8 45V73.8734L41 79Z" fill="url(#load-coin-small)"/>
        <path d="M8 74V44.8644L0 26V55.1356L8 74Z" fill="#5859C0"/>
        <defs>
            <linearGradient id="load-coin-small" x1="24.5" y1="45" x2="24.5" y2="79" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5B5EB8"/>
                <stop offset="1" stopColor="#6061C2"/>
            </linearGradient>
        </defs>
    </svg>

))

export default LoadCoinSmall
