// Core
import React, {FC, memo} from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from "react-redux"
// Ant Components
import {Row} from 'antd'
// Styles
import './NewsList.scss'
// Elements
import {Typography, Container, Button, CardNews} from 'elements'
// Hook
import {useNewsListEf} from './useNewsListEf'
import useScreen from "use-screen"
// Selector
import {appSelect} from 'selectors'


type PropsType = {
    children?: never
}


const NewsList: FC<PropsType> = memo(() => {
    const {
        news
    } = useNewsListEf()

    const lang = useSelector(appSelect.language)
    
    return (
        <Container className={'about__news'}>
            <Typography style={{marginBottom: 25}} type={"title-48"} color={"primary"}>
                Our News
            </Typography>
            <Row>
                
                {  news && news.map((news, key) => <CardNews lang={lang} key={key} data={news}/>) }
                
            </Row>

            <div className={'about__news-btn-wrapper news-list__button'}>
                <NavLink to={`/${lang}/news`}>
                    <Button style={{width: 204}} color={"secondary"} variant={'outlined'}>
                        See all news
                    </Button>
                </NavLink>
            </div>
        </Container>
    )
})

export default NewsList
