// Core
import React, {FC, memo} from 'react'
// Ant Components
import {} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './Check.scss'



type PropsType = {
    children?: never
}

const Check: FC<PropsType> = memo(() => {
    return (
        <svg className={'check-icon'} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6877 2.22656H9.86855C9.75371 2.22656 9.64472 2.2793 9.57441 2.36953L4.74277 8.49023L2.42597 5.55469C2.39092 5.51019 2.34625 5.47421 2.29531 5.44945C2.24436 5.42469 2.18847 5.41179 2.13183 5.41172H1.31269C1.23417 5.41172 1.19081 5.50195 1.23886 5.56289L4.44863 9.6293C4.59863 9.81914 4.88691 9.81914 5.03808 9.6293L10.7615 2.37656C10.8096 2.3168 10.7662 2.22656 10.6877 2.22656Z" fill="#4BA98E"/>
        </svg>
    )
})

export default Check
