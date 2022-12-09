// Core
import React, {FC, memo} from 'react'
import {animated} from 'react-spring'
// Ant Components
import {Row, Col} from 'antd'
// Style
import './CointyBlock.scss'
// Hook
import {useCointyBlockEf} from './useCointyBlockEf'
// Elements
import {Typography, Container} from 'elements'
// Assets
import bgHeadAreaSrc from 'assets/img/bg-head-area.png'
import coinsCointySrc from 'assets/img/coins-cointy.png'
// Icon
import {MobileIcon, DialogIcon, UserIcon, LockIcon} from 'icons'


type PropsType = {
    children?: never
}

const CointyBlock: FC<PropsType> = memo(() => {
    const {coinsAnim, divRef} = useCointyBlockEf()

    return (
        <Container className={'cointy-block'}>
            <Row align={'middle'} className={'cointy-block__wrapper'}>
                <Col xl={14} sm={24}>
                    <div className={'cointy-block__text-content'}>
                        <Typography type={"title-48"} color={"primary"}  className={'cointy-block__title'}>
                            <span className={'cointy-block__title-span'}>Catchcoin </span>
                            is a storage platform for your blockchain assets
                        </Typography>
                        <Typography type={"text-20"} color={"primary"} className={'cointy-block__text-top'}>
                            Each crypto holder is faced with the choice of the best solution for storing, transferring and exchanging cryptocurrency. Catchcoin is a solution that allows you to perform, your tasks as simple and convenient as possible.
                        </Typography>
                        <Typography type={"text-20"} color={"primary"} className={'cointy-block__text-bottom'}>
                            The service works simply and clear. To create a bitcoin wallet you need to pass the registration procedure.
                        </Typography>
                    </div>
                </Col>
                <Col xl={10} sm={24} className={'cointy-block__info-wrapper'}>
                    <div className="cointy-block__info-content">
                        <div className={'cointy-block__info-content-wrapper'}>
                            <Row gutter={[0, 20]}>
                                <Col xs={24}>
                                    <Row align={'middle'}>
                                        <LockIcon className={'cointy-block__lock-icon'} style={{marginRight: 20}} />
                                        <Typography type={"text-20"}>
                                            Privat and Secure
                                        </Typography>
                                    </Row>
                                </Col>
                                <Col xs={24}>
                                    <Row align={'middle'}>
                                        <UserIcon className={'cointy-block__user-icon'} style={{marginRight: 20}} />
                                        <Typography type={"text-20"}>
                                            User Friendly
                                        </Typography>
                                    </Row>
                                </Col>
                                <Col xs={24}>
                                    <Row align={'middle'}>
                                        <MobileIcon className={'cointy-block__mobile-icon'} style={{marginRight: 20}} />
                                        <Typography type={"text-20"}>
                                            Mobile application
                                        </Typography>
                                    </Row>
                                </Col>
                                <Col xs={24}>
                                    <Row align={'middle'}>
                                        <DialogIcon className={'cointy-block__dialog-icon'} style={{marginRight: 20}} />
                                        <Typography type={"text-20"}>
                                            24/7 Support
                                        </Typography>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <div className={'cointy-block__grid-wrapper'}>
                    <img src={bgHeadAreaSrc} className={'cointy-block__grid-img'} alt="grid"/>
                </div>
                <animated.img src={coinsCointySrc} style={coinsAnim} className={'cointy-block__coins-img'} alt="coins"/>
                <span className={'cointy-block__target'} ref={divRef}/>
            </Row>
        </Container>
    )
})

export default CointyBlock
