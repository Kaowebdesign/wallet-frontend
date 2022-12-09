// Core
import React, {FC, memo} from 'react'
import {NavLink, Redirect} from "react-router-dom"
// Style
import './NewsPage.scss'
// Ant Components
import {Row, Col, Breadcrumb, Image} from 'antd'
// Hook
import {useNewsPageEf} from './useNewsPageEf'

import {Container, Typography} from "elements";
import {config, converterTime, filters} from "utils";


type PropsType = {
    children?: never
}

const NewsPage: FC<PropsType> = memo(() => {
    const {
        isAuth, lang, newsPage
    } = useNewsPageEf()

    if (isAuth) return <Redirect to={`/${lang}/cabinet`}/>
    // if (redirect) return <Redirect to={`/${lang}/${redirect}`}/>
    // if (!redirectNoFound) return <Redirect to={`/${lang}/news`}/>

    return (
        <section className={'news-page'}>
            {
                newsPage &&
                <div className={'news-page__wrap'}>
                    <div className={'news__head-area news-page__head-area'}>
                        <Container type={"div"}>
                            <Row justify={'center'}>
                                <Col span={24} lg={16}>
                                    <Breadcrumb separator=">" className={'news-page__breadcrumb'}>
                                        <Breadcrumb.Item>
                                            <Typography type={'text-22'} color={'secondary'} weight={'regular'}>
                                                <NavLink to={`/${lang}/`} className={'news-page__link'}>Cointy</NavLink>
                                            </Typography>
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item>
                                            <Typography type={'text-22'} color={'secondary'} weight={'regular'}>
                                                <NavLink to={`/${lang}/news`} className={'news-page__link'}>News</NavLink>
                                            </Typography>
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item>
                                            <Typography type={'text-22'} color={'light-purple'} weight={'regular'}>{ newsPage.title }</Typography>
                                        </Breadcrumb.Item>
                                    </Breadcrumb>
                                    <Typography type={"title-66"} color={"primary"} align={"center"} className={'news-page__caption'}>
                                        { newsPage.title }
                                    </Typography>
                                    <div className={'news-page__date-wrap'}>
                                        <Typography type={'text-22'} color={'secondary'} weight={'regular'}>
                                            <NavLink to={`/${lang}/news/${filters.toUrlFriendly(newsPage.category)}`} className={'news-page__link'}>{ newsPage.category }</NavLink>
                                        </Typography>
                                        <Typography type={'text-22'} color={'light-purple'} weight={'regular'} className={'news-page__date'}>
                                            { converterTime.get_news_time(newsPage.date) }
                                        </Typography>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <Container type={"div"}>
                        <Row justify={'center'}>
                            <Col span={24} lg={16}>
                                {
                                    newsPage.img &&
                                    <Image
                                        className={'news-page__img'}
                                        src={config.app.apiURL + newsPage.img.url}
                                        alt={newsPage.img.alt}
                                        preview={false}
                                        placeholder={
                                            <Image
                                                className={'card-news__item-img'}
                                                preview={false}
                                                src={config.app.apiURL + newsPage.img.url}
                                                alt={newsPage.img.alt}
                                            />
                                        }
                                    />
                                }
                            </Col>
                        </Row>
                        <Row justify={'center'}>
                            <Col span={24} lg={16}>
                                <div dangerouslySetInnerHTML={{ __html: newsPage.text }} className={'news-page__text rendered'}></div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            }
        </section>
    )
})

export default NewsPage
