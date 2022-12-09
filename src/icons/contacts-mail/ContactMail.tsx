// Core
import React, {CSSProperties, FC, memo} from 'react'
// Style
import './ContactMail.scss'


type PropsType = {
    children?: never
    className?: string
    style?: CSSProperties
}

const ContactMail: FC<PropsType> = memo(({className, ...props}) => {

    return (
        <svg className={`contact-mail ${className}`} {...props} width="41" height="56" viewBox="0 0 41 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.87891 31.5L21.9521 4.5L40.0009 10.5L21.9521 33.5L4.87891 31.5Z" fill="#F9DF64"/>
            <path d="M4.87805 31.5L21.9512 4.5L18.0488 2L0 28L4.87805 31.5Z" fill="#F2CF58"/>
            <path d="M5.36719 33V16L8.78182 17.5V32.5L5.36719 33Z" fill="#BBC7E7"/>
            <path d="M39.9981 10.5L21.9493 4.5L18.0469 2L39.9981 10.5Z" fill="#E7C556"/>
            <path d="M8.78125 17.5L36.0983 1.5V25.1591L8.78125 42.5V17.5Z" fill="#E6E9F0"/>
            <path d="M8.78182 17.5L5.36719 16L33.1721 0L36.0989 1.5L8.78182 17.5Z" fill="#D8E0F9"/>
            <path d="M4.87805 56L0 53V28L4.87805 31.5V56Z" fill="#ECC953"/>
            <path d="M4.87891 56L21.9521 33.5L40.0009 35.5L4.87891 56Z" fill="#F9DF64"/>
            <path d="M40.0019 35.5V10.5L21.9531 33.5L40.0019 35.5Z" fill="#F5D25B"/>
            <path d="M21.9521 33.5L4.87891 31.5V56L21.9521 33.5Z" fill="#F5D25B"/>
            <path d="M14.6328 23V21L31.2182 11V13L14.6328 23Z" fill="#C1CBE2"/>
            <path d="M15.6094 29V27L32.1947 17V19L15.6094 29Z" fill="#C1CBE2"/>
        </svg>
    )
})

export default ContactMail
