// Core
import React, {FC, memo} from 'react'
import {NavLink} from "react-router-dom"
// Style
import './GetStarted.scss'
// Elements
import {Button, Container, Typography} from "../index"
// Assets
import secureGridSrc from "assets/img/secure-grid.png"
import coinsAboutSrc from "assets/img/coins-about.png"


type PropsType = {
    children?: never
    title?: string,
    text: string,
    textTran?: string
    description?: string,
    buttonTitle?: string
    url: string,
}

const GetStarted: FC<PropsType> = memo(({text, title, textTran, description, buttonTitle, url,}) => {

    return (
        <Container className={'get-started'}>
            <Typography type={"title-66"} align={"center"}>
                {text}
            </Typography>
            <Typography style={{marginTop: 20}} type={"text-18"} align={"center"} weight={'regular'} >
                { description ? description.split('\n').map((item, i) => <span key={i}>{item}<br/></span>) : '' }
            </Typography>
            <Typography style={{marginTop: 30}} type={"title-48"} align={"center"}>
                {title}
                <span className={'get-started__text-tran'}> {textTran} </span>
            </Typography>
            <NavLink to={url}>
                <Button style={{marginTop: 40}} variant={"contained"}>
                    { buttonTitle ? buttonTitle : 'Get Started' }
                </Button>
            </NavLink>
            <div className={'get-started__grid-wrapper'}>
                <img className={'get-started__grid'} src={secureGridSrc} alt="grid"/>
            </div>
            <img className={'get-started__cointy'} src={coinsAboutSrc} alt="cointy icons"/>
        </Container>
    )
})

export default GetStarted
