// Core
import React, {FC, memo} from 'react'
// Style
import './ModalDelete.scss'


type PropsType = {
    children?: never
    className?: string
}

const ModalDelete: FC<PropsType> = memo(({className}) => {

    return (
        <svg className={`modal-delete-icon ${className}`} width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="54" cy="54" r="54" fill="#FDF0F2"/>
            <path d="M41.2433 73.2182L36.5789 41.5H71.4211L66.7566 73.2182C66.6483 73.9545 66.0167 74.5 65.2725 74.5H42.7273C41.9832 74.5 41.3515 73.9545 41.2433 73.2182Z" fill="white" stroke="#D23E50"/>
            <path d="M34 41C33.7239 41 33.5 41.2239 33.5 41.5C33.5 41.7761 33.7239 42 34 42V41ZM74.0001 42C74.2762 42 74.5001 41.7761 74.5001 41.5C74.5001 41.2239 74.2762 41 74.0001 41V42ZM34 42H74.0001V41H34V42Z" fill="#D23E50"/>
            <path d="M46 42V37C46 35.3431 47.3431 34 49 34H59C60.6569 34 62 35.3431 62 37V42H46Z" fill="white" stroke="#D23E50"/>
            <path d="M54 51V69" stroke="#D23E50" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M63 51L60.4949 68.8248" stroke="#D23E50" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M45 51L47.5051 68.8248" stroke="#D23E50" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="33.5" y="39.5" width="41" height="5" rx="2.5" fill="white" stroke="#D23E50"/>
        </svg>

    )
})

export default ModalDelete
