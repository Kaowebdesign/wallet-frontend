// Core
import React, {FC, memo} from 'react'
import clsx from 'clsx'
// Ant Components
import {} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './chevron.scss'


type PropsType = {
    children?: never
}

const Chevron: FC<PropsType> = memo((props) => {
    return (
        <svg className={clsx('chevron-icon')} width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2L12 12L2 2" stroke="#554CC2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
})

export default Chevron
