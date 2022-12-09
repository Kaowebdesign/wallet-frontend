// Core
import React, {FC, memo} from 'react'
// Element
import {Typography} from 'elements'
// Style
import './ComingSoon.scss'
// Assets
import comingSoonSrc from "assets/img/coming-soon.svg"


type PropsType = {
    children?: never
}

const ComingSoon: FC<PropsType> = memo(() => {

    return (
        <div className={'coming-soon'}>
            <img src={comingSoonSrc} alt="coming soon"/>
            <Typography className={'coming-soon_title'} type={"title-18"} color={"primary"} weight={"medium"}>
                Coming soon...
            </Typography>
            <Typography className={'coming-soon_subtitle'} type={"text-16"} color={"primary"}>
                We are working hard to get this up and running
            </Typography>
        </div>
    )
})

export default ComingSoon
