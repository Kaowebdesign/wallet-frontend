// Core
import React, {FC, memo} from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from "react-redux"
// Ant Components
import {Row} from 'antd'
// Elements
import {Typography, Container, Button, CardNews} from 'elements'
// Hooks
import useScreen from "use-screen"
// Utils
import {mackNews} from "utils"
// Selector
import {appSelect} from 'selectors'

type PropsType = {
    children?: never
}

const News: FC<PropsType> = memo(() => {
    const {screenWidth} = useScreen()
    const lang = useSelector(appSelect.language)

    const data = screenWidth < 1030 && screenWidth >= 768 ? [mackNews[0], mackNews[1]] :  [mackNews[0], mackNews[1], mackNews[2]]

    return (
        <Container className={'about__news'}>
            <Typography style={{marginBottom: 25}} type={"title-48"} color={"primary"}>
                Our News
            </Typography>
            <Row
            >
                {
                    data.map(elem => <CardNews lang={lang} key={elem.id} data={elem}/>)
                }
            </Row>

            <div className={'about__news-btn-wrapper'}>
                <NavLink to={`/${lang}/news`}>
                    <Button style={{width: 204}} color={"secondary"}>
                        See all news
                    </Button>
                </NavLink>
            </div>
        </Container>
    )
})

export default News
