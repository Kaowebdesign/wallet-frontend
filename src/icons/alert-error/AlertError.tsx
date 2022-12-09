// Core
import React, {FC, memo} from 'react'


type PropsType = {
    children?: never
}

const AlertError: FC<PropsType> = memo(() => {

    return (
        <svg width="28" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 10C0 4.47768 4.47768 0 10 0C15.5223 0 20 4.47768 20 10C20 15.5223 15.5223 20 10 20C4.47768 20 0 15.5223 0 10ZM1.69643 10C1.69643 14.5848 5.41518 18.3036 10 18.3036C14.5848 18.3036 18.3036 14.5848 18.3036 10C18.3036 5.41518 14.5848 1.69643 10 1.69643C5.41518 1.69643 1.69643 5.41518 1.69643 10ZM13.6917 6.2915C13.7899 6.2915 13.8702 6.37186 13.8702 6.47008C13.8702 6.51249 13.8568 6.5549 13.83 6.58615L10.926 10.046L13.8256 13.5036C13.8524 13.537 13.868 13.5772 13.868 13.6196C13.868 13.7201 13.7876 13.7982 13.6894 13.7982L12.2162 13.7915L9.99969 11.1486L7.78317 13.7937L6.30772 13.8004C6.20951 13.8004 6.12915 13.7201 6.12915 13.6219C6.12962 13.5795 6.14459 13.5385 6.17156 13.5058L9.07558 10.0482L6.17156 6.58838C6.14478 6.5549 6.12915 6.51472 6.12915 6.47231C6.12915 6.37186 6.20951 6.29374 6.30772 6.29374L7.78317 6.30043L9.99969 8.94329L12.2184 6.2982L13.6917 6.2915Z" fill="#D23E50"/>
        </svg>
    )
})

export default AlertError