// Core
import React, {FC, memo} from 'react'
import {animated} from "react-spring"
import {NavLink} from 'react-router-dom'
// Ant Components
import {Row, Col} from 'antd'
// Style
import './HeadArea.scss'
// Hook
import {useHeadAreaEf} from './useHeadAreaEf'
// Elements
import {Container, Typography, Button} from 'elements'
// Assets
import bgHeadAreaSrc from 'assets/img/bg-head-area.png'
import chartsSrc from 'assets/img/charts.png'
import chartSrc from 'assets/img/chart.png'
import walletSrc from 'assets/img/wallet.png'
import coinsSrc from 'assets/img/coins.png'
import elementsSrc from 'assets/img/elements.png'


type PropsType = {
    children?: never
}


const HeadArea: FC<PropsType> = memo(() => {
    const {
        coinsAnim, elementsAnim, walletAnim, chartAnim, chartsAnim, lang,
    } = useHeadAreaEf()

    return(
        <Container className={'head-area'}>
            <Row>
                <Col xl={12} xs={24}>
                    <Typography type={"title-78"} color={"primary"} transform={"capitalize"} className={'head-area__title-top'}>
                        All Your Catchcoin
                    </Typography>
                    <Typography type={"title-78"} color={"secondary"} transform={"capitalize"}  className={'head-area__title-bottom'}>
                        In One Place
                    </Typography>
                    <Typography type={"text-24"} color={"primary"} className={'head-area__text'}>
                        Catchcoin —  is the best solution for storing, selling, buying, exchanging your blockchain assets.
                    </Typography>
                    <NavLink to={`/${lang}/signup`}>
                        <Button
                            color={"secondary"}
                            className={'head-area__btn'}
                            variant={"contained"}
                        >
                            Get Started
                        </Button>
                    </NavLink>
                </Col>
                <Col xl={12} xs={24} className={'head-area__area'}>
                    <animated.img style={chartsAnim} src={chartsSrc} className={'head-area__charts-img'} alt="charts"/>
                    <animated.img style={walletAnim} src={walletSrc} className={'head-area__wallet-img'} alt="wallet"/>
                    <animated.img style={chartAnim} src={chartSrc} className={'head-area__chart-img'} alt="chart"/>
                    <animated.img style={coinsAnim} src={coinsSrc} className={'head-area__coins-img'} alt="coins"/>
                    <animated.img style={elementsAnim} src={elementsSrc} className={'head-area__elements-img'} alt="elements"/>
                </Col>
            </Row>
            <img src={bgHeadAreaSrc} className={'head-area__grid-img'} alt="grid background"/>
        </Container>
    )
})

export default HeadArea
