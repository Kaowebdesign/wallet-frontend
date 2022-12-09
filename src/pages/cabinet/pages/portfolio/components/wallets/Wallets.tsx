// Core
import React, {FC, memo} from 'react'
import useScreen from "use-screen"
// Ant Components
import {Button, Input, Spin, Table} from 'antd'
// Ant Icon
import {SearchOutlined, StarFilled, StarOutlined} from '@ant-design/icons'
// Style
import './Wallets.scss'
// Hook
import {useWalletsEf} from './useWalletsEf'
import {useParseToCurrency} from "hooks"
// Component
import {Chart} from "#/components"
import {WalletChart} from '..'
// Element
import {Typography} from "elements"
// Utils
import {config} from 'utils'
// Type
import {TWallet, TWalletItem} from 'types/cabinet/portfoli-type'


type PropsType = {
    children?: never
}

type TColumns = {
    handlerFavorite: (id: string, state: boolean) => void
}

const columns = ({handlerFavorite}: TColumns) => ([
    {
        title: 'Assets Name',
        dataIndex: 'name',
        key: 'name',
        align: 'left',
        disable: true,
        sorter: {
            compare: (a: TWalletItem, b: TWalletItem) => {
                const A = a.full_name
                const B = b.full_name

                if (A < B) return -1
                if (A > B) return 1
                return 0
            },
        },
        render: (text: string, record: TWalletItem) => <>
            <img width={24} src={config.app.apiURL + record.icon} alt={`${record.full_name} icon`} />
            {record.full_name}
        </>
    },
    {
        title: 'Balance',
        dataIndex: 'balance',
        key: 'balance',
        align: 'right',
        sorter: {
            compare: (a: TWalletItem, b: TWalletItem) => {
                const A = a.balance
                const B = b.balance

                if (A < B) return -1
                if (A > B) return 1
                return 0
            },
        },
        render: (text: string, record: TWalletItem) => record.balance
    },
    {
        title: 'Value, USD',
        dataIndex: 'value',
        key: 'value',
        align: 'right',
        sorter: {
            compare: (a: TWalletItem, b: TWalletItem) => {
                const A = a.value
                const B = b.value

                if (A < B) return -1
                if (A > B) return 1
                return 0
            },
        },
        render: (text: string, record: TWalletItem) => `$ ${record.value}`
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        align: 'right',
        sorter: {
            compare: (a: TWalletItem, b: TWalletItem) => {
                const A = a.price
                const B = b.price

                if (A < B) return -1
                if (A > B) return 1
                return 0
            },
        },
        render: (text: string, record: TWalletItem) => `$ ${record.price}`
    },
    {
        title: 'Change (24H)',
        dataIndex: 'percent_change',
        key: 'percent_change',
        align: 'right',
        sorter: {
            compare: (a: TWalletItem, b: TWalletItem) => {
                const A = a.percent_change
                const B = b.percent_change

                if (A < B) return -1
                if (A > B) return 1
                return 0
            },
        },
        render: (text: string, record: TWalletItem) => `${record.percent_change}%`
    },
    {
        title: 'Portfolio, %',
        dataIndex: 'percent',
        key: 'percent',
        align: 'right',
        sorter: {
            compare: (a: TWalletItem, b: TWalletItem) => {
                const A = a.percent
                const B = b.percent

                if (A < B) return -1
                if (A > B) return 1
                return 0
            },
        },
        render: (text: string, record: TWalletItem) => `${record.percent}%`
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        align: 'center',
        render: (text: string, record: TWalletItem) => (<>
            {
                record.in_favorites
                    ? <StarFilled onClick={() => handlerFavorite(record.id, false)} />
                    : <StarOutlined onClick={() => handlerFavorite(record.id, true)} />
            }
        </>)
    },
])


const Wallets: FC<PropsType> = memo(() => {
    const {screenHeight} = useScreen()

    const {
        emptyBalanceMode, emptyBalanceCount, searchWallet, loadWallet, wallets, fiatSymbol,
        handlerEmptyBalance, handlerModalAddWallet, handlerSearchWallet, handlerFavorite,
    } = useWalletsEf()

    return (
        <div className={'portfolio-wallet'}>
            <div className={'portfolio-wallet__header'}>
                <Typography type={"text-18"} color={"primary"} weight={"medium"}>
                    My Wallets
                </Typography>
                <div className={'portfolio-wallet__header__action'}>
                    <Input
                        placeholder="Search Recipient name"
                        prefix={<SearchOutlined />}
                        style={{width: 230}}
                        className={'input-item portfolio-wallet__header__action_item'}
                        size={'middle'}
                        onChange={handlerSearchWallet}
                        value={searchWallet}
                        disabled={loadWallet}
                        allowClear={true}
                    />
                    <Button
                        className={'portfolio-wallet__header__action_item'}
                        onClick={handlerEmptyBalance}
                        type={'default'}
                        disabled={loadWallet}
                    >
                        {
                            `${emptyBalanceMode ? 'Show' : 'Hide'} empty balance (${emptyBalanceCount} item)`
                        }
                    </Button>
                    <Button
                        className={'portfolio-wallet__header__action_item'}
                        onClick={handlerModalAddWallet}
                        type="primary"
                        disabled={loadWallet}
                    >
                        Add Wallet
                    </Button>
                </div>
            </div>
            <Table
                className={'base-table portfolio-wallet__table'}
                loading={loadWallet}
                scroll={{ y: screenHeight - 297}}
                pagination={false}
                expandable={{expandedRowRender: (data) => <WalletChart fiatSign={fiatSymbol} data={data}/>}}
                // onExpand={(expanded, record) => console.log(expanded, record)}
                //@ts-ignore
                columns={columns({
                    handlerFavorite,
                })}
                dataSource={wallets}
            />
        </div>
    )
})

export default Wallets
