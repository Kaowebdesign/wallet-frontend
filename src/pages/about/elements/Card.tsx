// Core
import React, {FC, memo} from 'react'
// Ant Components
import {Row, Col} from 'antd'
// Assets
import aboutScreenLeftSrc from 'assets/img/about-screen-left.png'
import aboutScreenRightSrc from 'assets/img/about-screen-right.png'
// Icons
import {Check3d} from 'icons'
// Elements
import {Container, Typography} from 'elements'
// Hooks
import useScreen from 'use-screen'


type PropsType = {
    children?: never
}

const CardWrapper: FC<{type?: 'width' | 'blue'}> = memo(({children, type = 'width'}) => {
    const {screenWidth} = useScreen()

    return (
        <div className={type === 'width' ? 'about__cart-width' : 'about__cart-blue'}>
            <Container className={'about__cart-container'} type={"div"}>
                <Row>
                    <Col xs={24} xl={12} offset={type !== 'width' && screenWidth >= 1200 ? 12 : 0} className={'about__cart-content-wrapper'}>
                        <div className={'about__cart-content'}>
                            {children}
                        </div>
                    </Col>
                </Row>
            </Container>
            {
                type === 'width'
                    ? <img className={'about__cart-screen right'} src={aboutScreenRightSrc} alt="screen dashboard"/>
                    : <img className={'about__cart-screen left'} src={aboutScreenLeftSrc} alt="screen dashboard"/>
            }
        </div>
    )
})

const Item: FC<{type?: 'width' | 'blue'}> = memo(({type = 'blue', children}) => (
    <>
        <div className={'about__card-icon'}>
            <Check3d color={type === 'width' ? "default" : "primary"}/>
        </div>
        <Typography type={"text-20"} color={type === 'width' ? "default" : "primary"}>
            {children}
        </Typography>
    </>
))

const Card: FC<PropsType> = memo(() => {

    return (
        <section className={'about__card'}>
            <CardWrapper>
                <Typography type={"title-48"} color={"primary"}>
                    Deposit and Withdraw
                </Typography>
                <Row gutter={[22, 25]} className={'about__card-item-wrapper'}>
                    <Col xs={24} sm={12} className={'about__card-item'}>
                      <Item>
                          Replenish your balance and receive payments with credit
                          and debit bank cards
                      </Item>
                    </Col>
                    <Col xs={24} sm={12} className={'about__card-item'}>
                        <Item>
                            Perform deposit and withdraw operations by using the bank transfers
                        </Item>
                    </Col>
                    <Col xs={24} sm={12} className={'about__card-item'}>
                        <Item>
                            Send cryptocurrencies quickly and easily to any recipient worldwide
                        </Item>
                    </Col>
                    <Col xs={24} sm={12} className={'about__card-item'}>
                        <Item>
                            Cointy allows you to deposit and withdraw all main cryptocurrencies
                        </Item>
                    </Col>
                </Row>
            </CardWrapper>

            <CardWrapper type={"blue"}>
                <Typography type={"title-48"}>
                    Reliable Storage
                </Typography>
                <Row gutter={[22, 25]} className={'about__card-item-wrapper'}>
                    <Col xs={24} sm={12} className={'about__card-item'}>
                        <Item  type={"width"}>
                            Two-factor authentication (2FA) and multi-factor action confirmations
                        </Item>
                    </Col>
                    <Col xs={24} sm={12} className={'about__card-item'}>
                        <Item  type={"width"}>
                            Upon request, we will give you cryptocurrency keys, and you can transfer assets to another wallet
                        </Item>
                    </Col>
                    <Col xs={24} lg={16} xl={24} className={'about__card-item'}>
                        <Item type={"width"}>
                            MasterPassword - your personal key to access
                            to crypto-wallets, which is not stored by our system and therefore even
                            Cointy employees cannot access your cryptocurrencies
                        </Item>
                    </Col>
                </Row>
            </CardWrapper>

            <CardWrapper>
                <Typography type={"title-48"} color={"primary"}>
                    Trading Operation
                </Typography>
                <Row gutter={[22, 25]} className={'about__card-item-wrapper'}>
                    <Col xs={24} sm={12} className={'about__card-item'}>
                        <Item>
                            Operations: crypto-crypto, fiat-crypto and crypto-fiat
                        </Item>
                    </Col>
                    <Col xs={24} sm={12} className={'about__card-item'}>
                        <Item>
                            Access to current cryptocurrency exchange rates
                        </Item>
                    </Col>
                    <Col xs={24} sm={12} className={'about__card-item'}>
                        <Item>
                            Transparent and low fees
                        </Item>
                    </Col>
                    <Col xs={24} sm={12} className={'about__card-item'}>
                        <Item>
                            Many currency pairs to exchange
                        </Item>
                    </Col>
                </Row>
            </CardWrapper>

            <CardWrapper type={"blue"}>
                <Typography type={"title-48"}>
                    Analysis and Control
                </Typography>
                <Row gutter={[22, 25]} className={'about__card-item-wrapper'}>
                    <Col xs={24} sm={12} className={'about__card-item'}>
                        <Item  type={"width"}>
                            It is very simple to make any operations - no exchange orders, no empty order books
                        </Item>
                    </Col>
                    <Col xs={24} sm={12} className={'about__card-item'}>
                        <Item  type={"width"}>
                            Use professional analysis tools to make the right decisions
                        </Item>
                    </Col>
                    <Col xs={24} sm={12} className={'about__card-item'}>
                        <Item type={"width"}>
                            The visualized statistics will provide you with a complete picture of what is happening.
                        </Item>
                    </Col>
                    <Col xs={24} sm={12} className={'about__card-item'}>
                        <Item type={"width"}>
                            Do not lose control of your crypto assets even on the run, by using the mobile app
                            <br/><br/><span style={{fontStyle: "italic"}}>Coming Soon</span>
                        </Item>
                    </Col>
                </Row>
            </CardWrapper>
        </section>
    )
})

export default Card
