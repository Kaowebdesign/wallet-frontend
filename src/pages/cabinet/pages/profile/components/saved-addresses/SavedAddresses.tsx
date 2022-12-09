// Core
import React, {FC, memo} from 'react'
import useScreen from 'use-screen'
// Ant Components
import {Input, Button, Table, Modal, Spin} from 'antd'
// Ant Icon
import {ArrowRightOutlined, DeleteOutlined, EditOutlined, LoadingOutlined, SearchOutlined} from '@ant-design/icons'
// Hook
import {useSavedAddressesEf} from './useSavedAddressesEf'
// Element
import {Typography} from "elements"
// Component
import {SavedAddressesModalForm, AddressesModalDelete} from '../'
// Utils
import {config} from 'utils'
// Type
import {IAddressTableItem, TAddressTableSort } from 'types/cabinet/profile'
import { NodeError } from '#/elements'


type PropsType = {
    children?: never
}

type TColumns = {
    sort: TAddressTableSort,
    handlerEdit: (id: string) => void
    handlerDelete: (id: string) => void
    handlerSendAssets: (id: string) => void
}

const columns = ({sort, handlerEdit, handlerDelete, handlerSendAssets}: TColumns) => ([
    {
        title: 'Recipient Name',
        dataIndex: 'name',
        key: 'name',
        sorter: true,
        defaultSortOrder: sort === 'name'
            ? 'ascend'
            : sort === '-name'
                ?  'descend'
                : false,
    },
    {
        title: 'Assets Name',
        dataIndex: 'full_name',
        key: 'full_name',
        sorter: true,
        defaultSortOrder: sort === 'currency'
            ? 'ascend'
            : sort === '-currency'
                ?  'descend'
                : false,
        render: (text: string, record: IAddressTableItem) => <>
            <img width={24} src={config.app.apiURL + record.icon} alt={`${record.full_name} icon`} />
            {record.full_name}
        </>
    },
    {
        title: 'Wallet Address',
        dataIndex: 'wallet_address',
        key: 'wallet_address',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (text: string, record: IAddressTableItem) => (<>
            <span className={'base-table profile__addresses__table__action_btn'} onClick={() => handlerSendAssets(record.id)}>
                <ArrowRightOutlined className={'base-table profile__addresses__table__action_arrow'} />
                Send assets
            </span>
            <EditOutlined className={'base-table profile__addresses__table__action_btn profile__addresses__table__action_icon'} onClick={() => handlerEdit(record.id)} />
            <DeleteOutlined className={'base-table profile__addresses__table__action_btn profile__addresses__table__action_icon'} onClick={() => handlerDelete(record.id)} />
        </>)
    },
])

const SavedAddresses: FC<PropsType> = memo(() => {
    const {screenHeight} = useScreen()

    const {
        addressTable, loadAddressTable, modalEditMode, modalEditTitle, modalEditItemId, addressTableSearch,
        loadAddressTableSearch, addressTableSort, modalDeleteMode, deleteId,
        handlerSearch, handlerTableChange, handlerModalEditModeOpen, handlerModalEditModeClose, handlerDelete, handlerDeleteClose,
        handlerSendAssets, handlerReload,
    } = useSavedAddressesEf()

    return (<>
        {
            !addressTable && !loadAddressTable
                ? (
                    <NodeError handler={handlerReload} withHandler={true} />
                )
                :(
                    <div className={'profile__addresses'}>
                        <div className={'profile__addresses__header'}>
                            <Typography type={"text-18"} color={"primary"} weight={"medium"}>
                                Saved addresses
                            </Typography>
                            <div className={'profile__addresses__header__action'}>
                                <Input
                                    placeholder="Search Recipient name"
                                    prefix={
                                        loadAddressTableSearch
                                            ? <Spin indicator={<LoadingOutlined className={'profile__addresses__header__action_load'} style={{fontSize: 18}} spin />} />
                                            : <SearchOutlined />
                                    }
                                    style={{width: 230}}
                                    className={'input-item'}
                                    size={'middle'}
                                    onChange={handlerSearch}
                                    value={addressTableSearch}
                                    disabled={loadAddressTable}
                                    allowClear={true}
                                />
                                <Button
                                    onClick={() => handlerModalEditModeOpen(null)}
                                    type="primary"
                                >
                                    Add address
                                </Button>
                            </div>
                        </div>
                        <Table
                            className={'base-table profile__addresses__table'}
                            onChange={handlerTableChange}
                            loading={loadAddressTable}
                            dataSource={addressTable ? addressTable.items.map(elem => ({...elem, key: elem.id})) : []}
                            scroll={{ y: screenHeight - 515}}
                            pagination={{
                                total: addressTable ? addressTable.pagination.totalCount : 0,
                                current: addressTable ? addressTable.pagination.page : 1,
                                pageSizeOptions: ['10', '20', '30', '40', '50'],
                                pageSize: addressTable ? +addressTable.pagination.pageSize : 10,
                            }}
                            //@ts-ignore
                            columns={columns({
                                sort: addressTableSort,
                                handlerEdit: handlerModalEditModeOpen,
                                handlerDelete,
                                handlerSendAssets,
                            })}
                        />
                        <Modal
                            title={`${modalEditTitle} Address `}
                            centered
                            visible={modalEditMode}
                            onCancel={handlerModalEditModeClose}
                            width={450}
                            footer={false}
                        >
                            <SavedAddressesModalForm mode={modalEditMode} id={modalEditItemId}/>
                        </Modal>
                        <Modal
                            title={''}
                            centered
                            visible={modalDeleteMode}
                            onCancel={handlerDeleteClose}
                            width={450}
                            footer={false}
                        >
                            <AddressesModalDelete handlerClose={handlerDeleteClose} id={deleteId} />
                        </Modal>
                    </div>
                )
        }
    </>)
})

export default SavedAddresses
