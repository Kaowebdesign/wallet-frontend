// Core
import React, {FC, memo} from 'react'
// Style
import './LoadCoinShadowLarge.scss'


type PropsType = {
    children?: never
    className?: string
}

const LoadCoinShadowLarge: FC<PropsType> = memo(({className = ''}) => (
    <svg className={`load-coin-shadow-large ${className}`} viewBox="0 0 124 99" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f)">
            <path d="M53.9639 32L32 44.0988L39.9412 60.9506L69.9412 67L92 54.4645L83.9639 36.7484L53.9639 32Z" fill="url(#paint0_radial)" fillOpacity="0.15"/>
        </g>
        <defs>
            <filter id="filter0_f" x="0" y="0" width="124" height="99" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="16" result="effect1_foregroundBlur"/>
            </filter>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62 49.5) rotate(90) scale(17.5 30)">
                <stop stopColor="#281794"/>
                <stop offset="1" stopColor="#281794" stopOpacity="0.88"/>
            </radialGradient>
        </defs>
    </svg>
))

export default LoadCoinShadowLarge
