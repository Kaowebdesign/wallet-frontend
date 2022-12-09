// Core
import React, {FC, memo} from 'react'
// Ant Components
import {Modal} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './ReceiveAssetsModal.scss'
// Hook
import {useReceiveAssetsModalEf} from './useReceiveAssetsModalEf'
// Elements
import {ComingSoon} from "elements"


type PropsType = {
    children?: never
}

const ReceiveAssetsModal: FC<PropsType> = memo(() => {
    const {
        receiveAssetsMode,
        handlerClose,
    } = useReceiveAssetsModalEf()

    return (
        <Modal
            title={'Receive Assets '}
            centered
            visible={receiveAssetsMode}
            onCancel={handlerClose}
            width={450}
            footer={false}
        >
           <ComingSoon/>
        </Modal>
    )
})

export default ReceiveAssetsModal
