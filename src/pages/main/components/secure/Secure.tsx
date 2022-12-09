// Core
import React, {FC, memo} from 'react'
// Ant Components
import {Row, Col} from 'antd'
// Style
import './Secure.scss'
// Elements
import {Typography, Container} from 'elements'
// Assets
import secureGridSrc from 'assets/img/secure-grid.png'
import lockSrc from 'assets/img/lock.png'


type PropsType = {
    children?: never
}

const Secure: FC<PropsType> = memo(() => {

    return <section className={'secure'}>
        <Container type={'div'} className={'secure__container'}>
            <Row>
                <Col xl={14} md={15} xs={24}>
                    <Typography type={"title-48"} className={'secure__title'}>
                        Discover the
                        <span className={'secure__text-blur'}> secure </span>
                        vault for your digital assets. Store your coins
                        <span className={'secure__text-blur'}> without worries</span>
                    </Typography>
                </Col>
                <Col xl={10} md={14} xs={24} className={'secure__text-wrapper'}>
                    <Typography type={"text-20"} className={'secure__text-top'}>
                        Most blockchain assets, such as coins, tokens or smart contracts are controlled by security credentials, known as key pairs, which consists of private and public keys. To transfer coins, tokens or send a command to a smart contract, you have to use a private key associated with it.
                    </Typography>
                    <Typography type={"text-20"} className={'secure__text-bottom'}>
                        The only way the attacker can gain control over your blockchain assets is to get hold of your private keys.
                    </Typography>
                </Col>
            </Row>
            <img className={'secure__lock'} src={lockSrc} alt="lock"/>
        </Container>
       <div className={'secure__grid-wrapper'}>
           <img className={'secure__grid'} src={secureGridSrc} alt="grid"/>
       </div>
    </section>
})

export default Secure
