// Core
import React, {FC, memo} from 'react'
// Ant Components
import {Button, Row, Col} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './AddressesModalDelete.scss'
// Hook
import {useAddressesModalDeleteEf} from './useAddressesModalDeleteEf'
// Icon
import {ModalDelete} from 'icons'
// Element
import {Typography} from 'elements'


type PropsType = {
    children?: never
    id: string | null
    handlerClose: () => void
}

const AddressesModalDelete: FC<PropsType> = memo(({handlerClose, id}) => {
    const {
        item, handlerDelete,
    } = useAddressesModalDeleteEf(id)

    return (<>
        {
            item && (
                <div className={'profile__addresses__modal_delete'}>
                    <ModalDelete className={'profile__addresses__modal_delete_icon'} />
                    <Typography style={{marginTop: 28}} type={"title-18"} color={"primary"} weight={"medium"}>
                        Delete address?
                    </Typography>
                    <Typography style={{marginTop: 16}} type={"text-18"} color={"primary"} align={"center"}>
                        Do you really want to delete
                        <span className={'profile__addresses__modal_delete_span'}> {item.name} </span>
                        wallet address
                        <span className={'profile__addresses__modal_delete_span'}> {item.wallet_address} </span>
                    </Typography>
                    <Row gutter={20} style={{marginTop: 44, width: '100%'}}>
                        <Col xs={12}>
                            <Button style={{width: '100%'}} type="default" onClick={handlerClose} className={'default'}>
                                Cancel
                            </Button>
                        </Col>
                        <Col  xs={12}>
                            <Button style={{width: '100%'}} type="primary" onClick={handlerDelete} danger className={'danger'}>
                                Delete address
                            </Button>
                        </Col>
                    </Row>
                </div>
            )
        }
    </>)
})

export default AddressesModalDelete
