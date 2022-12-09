// Core
import React, {FC, memo} from 'react'
import {NavLink} from "react-router-dom"
import clsx from "clsx"
// Ant Components
import {Col, Image} from 'antd'
// Style
import './CardNews.scss'
// Elements
import {Typography} from "../index"
// Types
import {NewsType} from 'types/main-types'
import {Language} from "types/app-type"
// Utils
import { filters, converterTime, config } from 'utils'


type PropsType = {
    children?: never
    data: NewsType
    full?: boolean
    showGroup?: boolean
    lang: Language,
    currentCategory?: boolean
    onClick?: () => void
}

type LinkWrapperType = {
    link?: string | null
    className?: string
}


const LinkWrapper: FC<LinkWrapperType> = memo( ({children, link = null, className = ''}) => {

    return (
        <>
            {
                link
                    ?  <NavLink to={link} className={className}>{children}</NavLink>
                    : children
            }
        </>
    )
})

const CardNews: FC<PropsType> = memo(({data, full = false, showGroup = true, lang, currentCategory = false, onClick }) => {
    const {date, text, title, id, img, category, url} = data

    return (
        <Col xl={full ? 24 : 8} md={full ? 24 : 12} xs={24} className={clsx('card-news')}>
            {/*<LinkWrapper link={full ? null : `/${lang}/news-pages/${id}`}>*/}
            <div>
                <div className={clsx({'card-news__full': full, 'card-news__item': !full})}>
                    <Image
                        className={clsx('card-news__item-img', {'card-news__item-img-full': full})}
                        src={config.app.apiURL+img.url}
                        alt={img.alt}
                        preview={false}
                        placeholder={
                            <Image
                                className={'card-news__item-img'}
                                preview={false}
                                src={config.app.apiURL+img.url}
                                alt={img.alt}
                            />
                        }
                    />
                    <div className={clsx({'card-news__content-full': full})}>
                        <Typography style={{margin: '20px 0'}} type={"text-16"} color={"light-purple"}>
                            {
                                showGroup && (
                                    currentCategory
                                        ?
                                        <Typography type={"link-16"} color={"secondary"}>
                                            {category}
                                        </Typography>
                                        :
                                        <NavLink to={`/${lang}/news/${filters.toUrlFriendly(category)}`} onClick={onClick}>
                                            <Typography type={"link-16"} color={"secondary"}>
                                                {category}
                                            </Typography>
                                        </NavLink>
                                )
                            }
                            <span> • </span> {converterTime.get_news_time(date)}
                        </Typography>
                        <LinkWrapper link={full ? null : `/${lang}/news-page/${url}`} className={'card-news__link'} >
                            <Typography className={'card-news__title'} type={"text-22"} color={"primary"}>
                                {title}
                            </Typography>
                        </LinkWrapper>
                        {
                            full && (
                                <>
                                    <Typography className={'card-news__text'} type={"text-20"} color={"primary"}>
                                        {text}
                                    </Typography>
                                    <Typography className={'card-news__link'} type={"link-20"} color={"secondary"}>
                                        <NavLink to={`/${lang}/news-page/${url}`}>
                                            Read the article
                                        </NavLink>
                                    </Typography>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </Col>
    )
})

export default CardNews
