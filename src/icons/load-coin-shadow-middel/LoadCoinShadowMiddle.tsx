// Core
import React, {FC, memo} from 'react'
// Style
import './LoadCoinShadowMiddle.scss'


type PropsType = {
    children?: never
    className?: string
}

const LoadCoinShadowMiddle: FC<PropsType> = memo(({className}) => (
    <svg className={`load-coin-shadow-middle ${className}`} viewBox="0 0 120 97" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f)">
            <path d="M52.2289 32L32 44.2222L39.2766 60.5775L67.1754 65L88 52.6947L80.1277 36.4225L52.2289 32Z" fill="url(#paint0_radial)" fillOpacity="0.15"/>
        </g>
        <defs>
            <filter id="filter0_f" x="0" y="0" width="120" height="97" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="16" result="effect1_foregroundBlur"/>
            </filter>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 48.5) rotate(90) scale(16.5 28)">
                <stop stopColor="#281794"/>
                <stop offset="1" stopColor="#281794" stopOpacity="0.88"/>
            </radialGradient>
        </defs>
    </svg>

))

export default LoadCoinShadowMiddle
