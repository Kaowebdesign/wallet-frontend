// Core
import React, {FC, memo} from 'react'
// Ant Components
import {Button, Image, Table, Card} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Hook
import {useYourPortfolioEf} from './useYourPortfolioEf'
import {Typography} from "elements";
import {IWalletDataItem} from "types/cabinet/settings-type";
import {config} from "utils";
import {TPortfolioTable} from "types/cabinet/cabinet-main-type";
import {NodeError} from "#/elements";


type PropsType = {
    children?: never
}

const YourPortfolio: FC<PropsType> = memo(() => {
    const { baseFiatSign, portfolioData } = useYourPortfolioEf()

    const { Column } = Table;

    return <Card className={'home-card home-card_portfolio'}>
        <div className={'home-card__header'}>
            <Typography type={'title-16'} color={'primary'}>Your Portfolio</Typography>
            <Button type="link" className={'ant-btn-default'}>All Assets</Button>
        </div>
        <div className={'home-card__body'}>
            {
                portfolioData ?
                    <Table
                        dataSource={portfolioData}
                        pagination={false}
                        className={'base-table base-table__portfolio'}
                    >
                        <Column
                            title={'Assets Name'}
                            dataIndex={'name'}
                            key={'name'}
                            fixed={'left'}
                            render={ (name: string, row: TPortfolioTable) => (
                                <div className={'base-table__icon-wrap'}>
                                    <Image src={config.app.apiURL+row.icon} preview={false} className={'base-table__icon'} />
                                    {name}
                                </div>
                            )}
                        />
                        <Column
                            title={'Balance'}
                            dataIndex={'balance'}
                            key={'balance'}
                            fixed={true}
                            width={140}
                            render={(value, row: TPortfolioTable) => value+ ' ' + row.name}
                        />
                        <Column
                            title={`Value, ${baseFiatSign}`}
                            dataIndex={'value'}
                            key={'value'}
                            fixed={true}
                            width={140}
                            render={(value) => baseFiatSign + ' ' + value}
                        />
                        <Column
                            title={`Portfolio, %`}
                            dataIndex={'percent'}
                            key={'percent'}
                            fixed={true}
                            width={140}
                            render={(value) => value + ' %'}
                        />
                    </Table>
                :
                    <NodeError className={'home-card__error'} />
            }
        </div>
    </Card>
})

export default YourPortfolio
