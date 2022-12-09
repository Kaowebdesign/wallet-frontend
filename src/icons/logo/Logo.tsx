// Core
import React, {FC, memo} from 'react'
// Ant Components
import {} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './Logo.scss'


type PropsType = {
    children?: never
    className?: string
    small?: boolean
}

const Logo: FC<PropsType> = memo(({className, small = false}) => {

    return (
        <svg className={`logo-icon ${small ? 'small' : ''} ${className}`} viewBox="0 0 588 690" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M277.806 9.50149C287.805 3.6348 300.195 3.63481 310.194 9.5015L546.539 148.173C565.048 159.033 564.962 185.821 546.385 196.563L294 342.5L547.287 493.266C565.592 504.162 565.509 530.696 547.136 541.477L310.194 680.499C300.195 686.365 287.805 686.365 277.806 680.498L15.8061 526.774C6.01469 521.029 0 510.526 0 499.174V190.826C0 179.474 6.0147 168.971 15.8061 163.226L277.806 9.50149Z" fill="url(#paint0_linear)"/>
            <path d="M281.877 101.095C289.365 96.7128 298.635 96.7128 306.123 101.095L508 219.25L294 342.685L508 469.75L306.123 587.905C298.635 592.287 289.365 592.287 281.877 587.905L91.877 476.701C84.5208 472.396 80 464.512 80 455.988V233.012C80 224.488 84.5208 216.604 91.877 212.299L281.877 101.095Z" fill="url(#paint1_linear)"/>
            <path d="M281.335 194.153C288.844 189.738 298.156 189.738 305.665 194.153L427 265.5L293.5 342.862L427 422.5L305.665 493.847C298.156 498.262 288.844 498.262 281.335 493.847L171.835 429.459C164.502 425.148 160 417.277 160 408.771V279.229C160 270.723 164.502 262.852 171.835 258.541L281.335 194.153Z" fill="url(#paint2_linear)"/>
            <path d="M293.085 286.045C294.278 285.394 295.722 285.394 296.915 286.045L347.915 313.863C349.2 314.564 350 315.911 350 317.375V372.625C350 374.089 349.2 375.436 347.915 376.137L296.915 403.955C295.722 404.606 294.278 404.606 293.085 403.955L242.085 376.137C240.8 375.436 240 374.089 240 372.625V317.375C240 315.911 240.8 314.564 242.085 313.863L293.085 286.045Z" fill="white"/>
            <defs>
                <linearGradient id="paint0_linear" x1="294" y1="-12" x2="184.5" y2="690" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9994DA"/>
                    <stop offset="1" stopColor="#9994DA" stopOpacity="0.4"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="310.5" y1="94" x2="216.5" y2="595" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7770CE"/>
                    <stop offset="1" stopColor="#7770CE" stopOpacity="0.4"/>
                </linearGradient>
                <linearGradient id="paint2_linear" x1="315" y1="187" x2="266.5" y2="493" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5048B9"/>
                    <stop offset="1" stopColor="#554CC2" stopOpacity="0.38"/>
                </linearGradient>
            </defs>
        </svg>

    )
})

export default Logo
