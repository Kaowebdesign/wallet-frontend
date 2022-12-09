// Core
import React, {FC, memo} from 'react'
import {animated} from 'react-spring'
// Style
import './MultiCoin.scss'
// Hook
import {useMultiCoinEf} from './useMultiCoinEf'
// Elements
import {Typography, Container} from 'elements'
// Assets
import ATOMSrc from 'assets/img/ATOM.svg'
import BCHSrc from 'assets/img/BCH.svg'
import BNBSrc from 'assets/img/BNB.svg'
import BTCSrc from 'assets/img/BTC.svg'
import DCRSrc from 'assets/img/DCR.svg'
import DGBSrc from 'assets/img/DGB.svg'
import EOSSrc from 'assets/img/EOS.svg'
import ETHSrc from 'assets/img/ETH.svg'
import LTCSrc from 'assets/img/LTC.svg'
import TRXSrc from 'assets/img/TRX.svg'
import USDTSrc from 'assets/img/USDT.svg'
import VETSrc from 'assets/img/VET.svg'
import XMRSrc from 'assets/img/XMR.svg'
import XRPSrc from 'assets/img/XRP.svg'
// Icon
import {Cube} from 'icons'


type PropsType = {
    children?: never
}

const MultiCoin: FC<PropsType> = memo(() => {
    const {
        ATOMAnim, BCHAnim, BNBAnim, BTCAnim, DCRAnim, DGBAnim, EOSAnim,
        ETHAnim, LTCAnim, TRXAnim, USDTAnim, VETAnim, XMRAnim, XRPAnim,
        divRef,
    } = useMultiCoinEf()

    return (
        <Container className={'multi-coin-block'}>
            <Typography type={"title-66"} color={"secondary"} className={'multi-coin-block__title'}>
                Multi-Coin
                <span className={'multi-coin-block__title-span'}> Support</span>
            </Typography>
            <Typography className={'multi-coin-block__text'} type={"text-20"} color={"primary"}>
                Manage BTC, BCH, ETH, ETC, LTC,
            </Typography>
            <Typography type={"text-20"} color={"primary"}>
                and all your ERC-20 tokens.
            </Typography>

            <animated.img className={'multi-coin-block__ATOM icon'} style={ATOMAnim} src={ATOMSrc} alt="icon coin ATOM"/>
            <animated.img className={'multi-coin-block__BCH icon'} style={BCHAnim} src={BCHSrc} alt="icon coin BCH"/>
            <animated.img className={'multi-coin-block__BNB icon'} style={BNBAnim} src={BNBSrc} alt="icon coin BNB"/>
            <animated.img className={'multi-coin-block__BTC icon'} style={BTCAnim} src={BTCSrc} alt="icon coin BTC"/>
            <animated.img className={'multi-coin-block__DCR icon'} style={DCRAnim} src={DCRSrc} alt="icon coin DCR"/>
            <animated.img className={'multi-coin-block__DGB icon'} style={DGBAnim} src={DGBSrc} alt="icon coin DGB"/>
            <animated.img className={'multi-coin-block__EOS icon'} style={EOSAnim} src={EOSSrc} alt="icon coin EOS"/>
            <animated.img className={'multi-coin-block__ETH icon'} style={ETHAnim} src={ETHSrc} alt="icon coin ETH"/>
            <animated.img className={'multi-coin-block__LTC icon'} style={LTCAnim} src={LTCSrc} alt="icon coin LTC"/>
            <animated.img className={'multi-coin-block__TRX icon'} style={TRXAnim} src={TRXSrc} alt="icon coin TRX"/>
            <animated.img className={'multi-coin-block__USDT icon'} style={USDTAnim} src={USDTSrc} alt="icon coin USDT"/>
            <animated.img className={'multi-coin-block__VET icon'} style={VETAnim} src={VETSrc} alt="icon coin VET"/>
            <animated.img className={'multi-coin-block__XMR icon'} style={XMRAnim} src={XMRSrc} alt="icon coin XMR"/>
            <animated.img className={'multi-coin-block__XRP icon'} style={XRPAnim} src={XRPSrc} alt="icon coin XRP"/>

            <Cube className={'multi-coin-block__cube cube-1'}/>
            <Cube className={'multi-coin-block__cube cube-2'}/>
            <Cube className={'multi-coin-block__cube cube-3'}/>
            <Cube className={'multi-coin-block__cube cube-4'}/>
            <Cube className={'multi-coin-block__cube cube-5'}/>
            <Cube className={'multi-coin-block__cube cube-6'}/>
            <Cube className={'multi-coin-block__cube cube-7'}/>
            <Cube className={'multi-coin-block__cube cube-8'}/>
            <Cube className={'multi-coin-block__cube cube-9'}/>
            <Cube className={'multi-coin-block__cube cube-10'}/>

            <span className={'multi-coin-block__target'} ref={divRef} />
        </Container>
    )
})

export default MultiCoin
