// Core
import React, {FC, memo} from 'react'
// Ant Components
import {Row, Col} from 'antd'
// Style
import './Receive.scss'
// Hook
import useScreen from "use-screen"
// Elements
import {Typography, Container, Bubble} from 'elements'
// Assets
import posterReceiveSrc from 'assets/img/poster-receive.png'


type PropsType = {
    children?: never
}

const Receive: FC<PropsType> = memo(() => {
    const {isMobile} = useScreen()

    return (
        <Container className={'receive'}>
            <Typography className={'receive__title'} type={"title-66"} color={"primary"} align={"center"}>
                Easily
               <span className={'receive__title-span'}> Send </span>
                And
                <span className={'receive__title-span'}> Receive </span>
                Crypto
            </Typography>
            
            <Typography className={'receive__text-top'} type={"text-20"} color={"primary"} align={"center"}>
                Pay anyone in the world with just
            </Typography>

            <Typography className={'receive__text-bottom'} type={"text-20"} color={"primary"}  align={"center"}>
                their Catchcoin username
            </Typography>
            <div className="receive__poster-wrapper">
                <div style={{backgroundImage: `url(${posterReceiveSrc})`}} className={'receive__poster'}/>
                <div className={'receive__bubble-wrapper'}>
                    <Bubble className={'receive__bubble'} color={"secondary"} arrow={isMobile ? "top-right" : "right-bottom"}>
                        <Row>
                            <Col xs={24}>
                                <Row gutter={[12, 12]}>
                                    <Col xs={16}>
                                        <Typography type={"text-18"}>
                                            Send from @Kevin
                                        </Typography>
                                    </Col>
                                    <Col xs={8}>
                                        <Typography type={"text-18"}>
                                            500 BAT
                                        </Typography>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={24}>
                                <Row>
                                    <Col xs={16}>
                                        <Typography type={"text-18"}>
                                            0js34s...23rw
                                        </Typography>
                                    </Col>
                                    <Col xs={8}>
                                        <Typography type={"text-18"}>
                                            $60.00
                                        </Typography>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Bubble>
                </div>
            </div>
        </Container>
    )
})

export default Receive
