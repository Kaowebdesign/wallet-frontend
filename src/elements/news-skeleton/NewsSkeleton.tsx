// Core
import React, {FC, memo} from 'react'
// Ant Components
import {Col, Row, Skeleton} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './NewsSkeleton.scss'
import clsx from "clsx";


type PropsType = {
    children?: never
}

const NewsSkeleton: FC<PropsType> = memo(() => {

    return (
        <>
            <div className={'news__tab-wrapper'}>
                <Row className={'news__item-wrapper'}>
                    <Col xl={ 24 } md={ 24 } xs={24} className={clsx('card-news')}>
                        <div className={'card-news__full news-sk-full'}>
                            <div className={'news-sk-full__left'}>
                                <Skeleton.Image className={'news-sk-full__image'} />
                            </div>
                            <div className={'card-news__content-full news-sk-full__content'}>
                                <Skeleton active paragraph={{ rows: 4 }} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
})

export default NewsSkeleton