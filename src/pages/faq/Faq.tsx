// Core
import React, {FC, memo} from 'react'
import {Redirect} from "react-router-dom"
// Ant Components
import { Col, Row, Tabs, Collapse } from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './Faq.scss'
// Hook
import {useFaqEf} from './useFaqEf'
// Elements
import { Container, Typography, GetStarted } from "elements"
import { Chevron } from "icons"


type PropsType = {
    children?: never
}

const Faq: FC<PropsType> = memo(() => {
    const {
        isAuth, lang, faqCategories, tab, handlerTab, currentFaq
    } = useFaqEf()

    const { Panel } = Collapse;

    if (isAuth) return <Redirect to={`/${lang}/cabinet`}/>

    return (
        <section className={'faq'}>
            <div className={'news__head-area faq__head-area'}>
                <div className="faq__head-area-wrapper">
                    <Typography type={"title-72"} color={"primary"} align={"center"}>
                        How can we <span className={'news__title-span'}>help</span>?
                    </Typography>
                    <Typography className={'news__head-area-text faq__head-area-text'} type={"text-24"} color={"primary"} align={"center"}>
                        Get answers and explore new ways to use Cointy
                    </Typography>
                </div>
            </div>
            <Container type={"div"} className={'faq__container'}>
                <Tabs activeKey={tab} className={'news__tabs'} tabPosition={'top'} onChange={handlerTab} centered>
                    {
                        faqCategories && faqCategories.map((category, key) =>
                            <Tabs.TabPane tab={<Typography type={"text-22"} style={{padding: '0 10px', marginBottom: 10}} color={"secondary"} transform={"capitalize"}>{ category }</Typography>} key={ category }>
                                <Row className={'news__item-wrapper'} justify={'center'}>
                                    <Col className={'faq__col'} span={23} lg={16}>
                                        <Collapse ghost expandIconPosition={'right'} expandIcon={() => <Chevron /> }>
                                        {
                                            currentFaq && currentFaq.map((elem, key) =>
                                                <Panel header={ <Typography type={'title-36'} color={'primary'}>{ elem.title }</Typography> } key={ key } className={'faq__panel'}>
                                                    {
                                                        <div dangerouslySetInnerHTML={{ __html: elem.text }} className={'faq__text rendered'}></div>
                                                    }
                                                </Panel>
                                            )
                                        }
                                        </Collapse>
                                    </Col>
                                </Row>
                            </Tabs.TabPane>
                        )
                    }
                </Tabs>
            </Container>
            <GetStarted
                url={`/${lang}/contacts`}
                text={'Still need help?'}
                description={'We understand that all of this can be very confusing,\n so we\'re here to help.'}
                buttonTitle={'Contact us'}
            />
        </section>
    )
})

export default Faq
