// Core
import React, {FC, memo} from 'react'
// Ant Component
import {Button, Col, Row} from 'antd'
// Element
import {Typography} from 'elements'
// Hook
import {useBalanceInfoEf} from './useBalanceInfoEf'


type PropsType = {
    children?: never
}

const BalanceInfo: FC<PropsType> = memo(() => {
    const {
        handlerOpenGenerateReport
    } = useBalanceInfoEf()

    return (<>
        <div className={'portfolio__balance__info'}>
            <Typography className={'portfolio__balance__info_title'} type={"title-38"} color={"primary"} weight={"regular"}>
                $ 0.00
            </Typography>
            <Row>
                <Col xs={12}>
                    <div>
                        <Typography type={"text-16"} color={"dark-gray"}>
                            Income (24H)
                        </Typography>
                        <Typography className={'portfolio__balance__info_count'} type={"text-22"} color={"primary"}>
                            $ 0
                        </Typography>
                    </div>
                    <div className={'portfolio__balance__info_item'}>
                        <Typography type={"text-16"} color={"dark-gray"}>
                            Profit (24H)
                        </Typography>
                        <Typography className={'portfolio__balance__info_count'} type={"text-22"} color={"primary"}>
                            $ 0
                        </Typography>
                    </div>
                </Col>
                <Col xs={12}>
                    <div>
                        <Typography type={"text-16"} color={"dark-gray"}>
                            Income (24H)
                        </Typography>
                        <Typography className={'portfolio__balance__info_count'} type={"text-22"} color={"primary"}>
                            $ 0
                        </Typography>
                    </div>
                    <div className={'portfolio__balance__info_item'}>
                        <Typography type={"text-16"} color={"dark-gray"}>
                            Profit (24H)
                        </Typography>
                        <Typography className={'portfolio__balance__info_count'} type={"text-22"} color={"primary"}>
                            $ 0
                        </Typography>
                    </div>
                </Col>
            </Row>
            <Button type="default" className={'portfolio__balance__info_btn'} onClick={handlerOpenGenerateReport}>
                Generate Report
            </Button>
        </div>
    </>)
})

export default BalanceInfo
