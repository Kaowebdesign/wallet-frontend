// Core
import React, {FC, memo} from 'react'


type PropsType = {
    children?: never
}

const AlertInfo: FC<PropsType> = memo(() => {

    return (
        <svg width="28" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 10C0 4.47768 4.47768 0 10 0C15.5223 0 20 4.47768 20 10C20 15.5223 15.5223 20 10 20C4.47768 20 0 15.5223 0 10ZM1.69643 10C1.69643 14.5848 5.41518 18.3036 10 18.3036C14.5848 18.3036 18.3036 14.5848 18.3036 10C18.3036 5.41518 14.5848 1.69643 10 1.69643C5.41518 1.69643 1.69643 5.41518 1.69643 10ZM9.24204 14.6862C9.04111 14.4853 8.92822 14.2127 8.92822 13.9286C8.92822 13.6444 9.04111 13.3719 9.24204 13.171C9.44297 12.97 9.71549 12.8571 9.99965 12.8571C10.2838 12.8571 10.5563 12.97 10.7573 13.171C10.9582 13.3719 11.0711 13.6444 11.0711 13.9286C11.0711 14.2127 10.9582 14.4853 10.7573 14.6862C10.5563 14.8871 10.2838 15 9.99965 15C9.71549 15 9.44297 14.8871 9.24204 14.6862ZM10.5354 11.4286H9.46394C9.36572 11.4286 9.28537 11.3482 9.28537 11.25V5.17857C9.28537 5.08036 9.36572 5 9.46394 5H10.5354C10.6336 5 10.7139 5.08036 10.7139 5.17857V11.25C10.7139 11.3482 10.6336 11.4286 10.5354 11.4286Z" fill="#554CC2"/>
        </svg>
    )
})

export default AlertInfo