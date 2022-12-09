// Core
import React, {FC, memo} from 'react'
// Ant Components
import {Modal} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './SendAssetsModal.scss'
// Hook
import {useSendAssetsModalEf} from './useSendAssetsModalEf'
// Elements
import {ComingSoon} from "elements"


type PropsType = {
    children?: never
}

const SendAssetsModal: FC<PropsType> = memo(() => {
    const {
        sendAssetsMode,
        handlerClose,
    } = useSendAssetsModalEf()

    return (
        <Modal
            title={'Send Assets '}
            centered
            visible={sendAssetsMode}
            onCancel={handlerClose}
            width={450}
            footer={false}
        >
           <ComingSoon/>
        </Modal>
    )
})

export default SendAssetsModal
