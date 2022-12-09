// Core
import React, {FC, memo} from 'react'
// Style
import './LoadCoinShadowSmall.scss'



type PropsType = {
    children?: never
    className?: string
}

const LoadCoinShadowSmall: FC<PropsType> = memo(({className}) => (
    <svg className={`load-coin-shadow-small ${className}`} viewBox="0 0 117 94" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f)">
            <path d="M51.5358 32L32 41.6969L38.625 57.8565L65.9531 62L85 50.3333L78.8496 36.0711L51.5358 32Z" fill="url(#paint0_radial)" fillOpacity="0.15"/>
        </g>
        <defs>
            <filter id="filter0_f" x="0" y="0" width="117" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="16" result="effect1_foregroundBlur"/>
            </filter>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.5 47) rotate(90) scale(15 26.5)">
                <stop stopColor="#281794"/>
                <stop offset="1" stopColor="#281794" stopOpacity="0.88"/>
            </radialGradient>
        </defs>
    </svg>

))

export default LoadCoinShadowSmall
