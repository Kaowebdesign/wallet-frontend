// Core
import React, {FC, memo} from 'react'
// Ant Components
import {Input, Modal} from 'antd'
// Ant Icon
import {SearchOutlined} from '@ant-design/icons'
// Style
import './AddWalletModal.scss'
// Hook
import {useAddWalletModalEf} from './useAddWalletModalEf'
// Element
import {ComingSoon} from "elements"


type PropsType = {
    children?: never
}

const AddWalletModal: FC<PropsType> = memo(() => {
    const {
        addWalletMode, addSearchWallet,
        handlerClose, handlerSearchWallet,
    } = useAddWalletModalEf()

    return (
        <Modal
            className={'portfolio-add-wallet-modal'}
            title={(<>
                Add Wallet
                <Input
                    placeholder="Search Recipient name"
                    prefix={<SearchOutlined />}
                    style={{width: 230}}
                    className={'input-item portfolio-add-wallet-modal__input'}
                    size={'middle'}
                    onChange={handlerSearchWallet}
                    value={addSearchWallet}
                    // disabled={loadAddressTable}
                    allowClear={true}
                />
            </>)}
            centered
            visible={addWalletMode}
            onCancel={handlerClose}
            width={904}
            footer={false}
        >
            <ComingSoon/>
        </Modal>
    )
})

export default AddWalletModal
