// Core
import React, {FC, memo} from 'react'
import {animated} from 'react-spring'
import clsx from "clsx"
// Ant Components
import {Row, Col} from 'antd'
// Style
import './Device.scss'
// Hook
import {useDeviceEf} from './useDeviceEf'
// Element
import {Container, Typography} from 'elements'
// Assets
import gridDeviceSrc from 'assets/img/grid-device.png'
import phoneSrc from 'assets/img/phone.svg'
import cardDeviceSrc from 'assets/img/card-device.svg'
import cartETHSrc from 'assets/img/cart-ETH.svg'
import cartTRXSrc from 'assets/img/cart-TRX.svg'
import googlePlaySrc from 'assets/img/google-play.svg'
import appStoreSrc from 'assets/img/app-store.svg'


type PropsType = {
    children?: never
}

const Device: FC<PropsType> = memo(() => {
    const {
        targetRef, phoneAnim, cardAnim, ETHAnim, TRXAnim, isTable,
    } = useDeviceEf()

    return (
        <Container className={'device-block'}>
            <Row>
                <Col className={clsx('device-block__content-wrapper')} xl={12} xs={24}>
                    <Typography className={clsx('device-block__title-top', {'center': isTable})} type={"title-48"} color={"primary"}>
                        Get
                        <span className={'device-block__title-span'}> Catchcoin</span>
                    </Typography>
                    <Typography className={clsx('device-block__title-bottom', {'center': isTable})} type={"title-48"} color={"primary"}>
                        for your device
                    </Typography>
                    <div className={'device-block__stores-wrapper'}>
                        <a href="https://play.google.com/store" target={'_black'}>
                            <img className={'device-block__google-play'} src={googlePlaySrc} alt="google play btn"/>
                        </a>
                        <a href=" https://www.apple.com/app-store/" target={'_black'}>
                            <img className={'device-block__app-store'} src={appStoreSrc} alt="app store btn"/>
                        </a>
                    </div>
                </Col>
                <Col className={'device-block__device-wrapper'} xl={12} xs={24}>
                    <animated.img className={'device-block__phone'} style={phoneAnim} src={phoneSrc} alt="phone"/>
                    <animated.img className={'device-block__card'} style={cardAnim} src={cardDeviceSrc} alt="card message btn"/>
                    <animated.img className={'device-block__ETH'} style={ETHAnim} src={cartETHSrc} alt="card coin ETH btn"/>
                    <animated.img className={'device-block__TRX'} style={TRXAnim} src={cartTRXSrc} alt="card coin TRX btn"/>
                </Col>
            </Row>
            <img className={'device-block__grid'} src={gridDeviceSrc} alt="grid"/>
            <span className={'device-block__target'} ref={targetRef} />
        </Container>
    )
})

export default Device
