// Core
import React, {FC, memo} from 'react'
// Elements
import {Typography} from 'elements'
// Assets
import aboutScreenCenterSrc from 'assets/img/about-screen-center.png'


type PropsType = {
    children?: never
}

const Headarea: FC<PropsType> = memo(() => {
    return (
        <section className={'about__headarea'}>
            <Typography className={'about__headarea-title-top'} type={"title-78"} color={"primary"} align={"center"}>
                Your new digital
            </Typography>
            <Typography className={'about__headarea-title-bottom'} type={"title-78"} color={"secondary"} align={"center"}>
                currency wallet
            </Typography>
            <img className={'about__headarea-screen'} src={aboutScreenCenterSrc} alt={'screen dashboard'} />
        </section>
    )
})

export default Headarea
