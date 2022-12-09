// Core
import React, {FC, memo} from 'react'
import {NavLink} from "react-router-dom"
import clsx from "clsx"
// Ant Components
import {Row, Col, Divider} from 'antd'
// Style
import './Footer.scss'
// Hook
import {useCheckPage} from "hooks"
import {useFooterEf} from './useFooterEf'
// Elements
import {Typography, Container} from 'elements'
// Icons
import {FacebookIcon, InstagramIcon, TwitterIcon} from "icons"
// Components
import {SubscribeForm} from './components'
import {Logo} from 'components'


type PropsType = {
    children?: never
}

const LinksData = {
    left: [{url: 'about', title: 'About'}, {url: 'news', title: 'News'}, {url: 'faq', title: 'FAQ'}],
    right: [{url: 'contacts', title: 'Contacts'}, {url: 'privacy-policy', title: 'Privacy Policy'}, {url: 'terms-of-use', title: 'Terms of Use'}],
}

const LinkItem = ({url, title, pathname}: {url: string, title: string, pathname: string}) => {
    const {lang} = useFooterEf()

    return (
        <Col xs={24}>
            <Typography
                type={"link-22"}
                color={"primary"}
                className={pathname === url ? 'action' : ''}
            >
                <NavLink to={`/${lang}/${url}`}>
                    {title}
                </NavLink>
            </Typography>
        </Col>
    )
}

const Header: FC<PropsType> = memo(() => {
    const {active, layout} = useCheckPage()

    return (<>
        {
            layout
                ?  <footer className={clsx('footer')}>
                    <Container>
                        <Divider plain/>
                        <Row className={'footer__wrapper'}>
                            <Col lg={6} md={10} xs={24} className={'footer__info'}>
                                <Row>
                                    <Col xs={24}>
                                        <Logo/>
                                    </Col>
                                    <Col xs={24} className={'footer__date'}>
                                        <Typography type={"text-16"} color={"primary"}>
                                            © {new Date().getFullYear()}. All rights reserved.
                                        </Typography>
                                    </Col>
                                    <Col xs={24} className={'footer__social-top hide md'}>
                                        <Row gutter={[25, 0]} justify={'start'}>
                                            <Col>
                                                <a href="https://www.facebook.com/" target={'_blanc'}>
                                                    <FacebookIcon/>
                                                </a>
                                            </Col>
                                            <Col>
                                                <a href="https://www.instagram.com/" target={'_blanc'}>
                                                    <InstagramIcon/>
                                                </a>
                                            </Col>
                                            <Col>
                                                <a href="https://twitter.com/" target={'_blanc'}>
                                                    <TwitterIcon/>
                                                </a>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={8} md={12} xs={24} className={'footer__nav'}>
                                <Row justify={'start'}>
                                    <Col xs={12}>
                                        <Row gutter={[10, 20]}>
                                            {
                                                LinksData.left.map(elem => <LinkItem key={elem.url} {...elem} pathname={active} />)
                                            }
                                        </Row>
                                    </Col>
                                    <Col xs={12}>
                                        <Row gutter={[10, 20]}>
                                            {
                                                LinksData.right.map(elem => <LinkItem key={elem.url} {...elem} pathname={active} />)
                                            }
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={10} md={14} xs={24} className={'footer__subscribe'}>
                                <Typography type={"title-22"} color={"primary"}>
                                    Subscribe now
                                </Typography>
                                <Typography type={"text-20"} color={"primary"} className={'footer__subscribe-text'}>
                                    Stay up-to-date with the newsletter
                                </Typography>
                                <SubscribeForm/>
                            </Col>

                            <Col xs={24} className={'footer__social-bottom visible md'}>
                                <Row gutter={[25, 0]} justify={'start'}>
                                    <Col>
                                        <a href="https://www.facebook.com/" target={'_blanc'}>
                                            <FacebookIcon/>
                                        </a>
                                    </Col>
                                    <Col>
                                        <a href="https://www.instagram.com/" target={'_blanc'}>
                                            <InstagramIcon/>
                                        </a>
                                    </Col>
                                    <Col>
                                        <a href="https://twitter.com/" target={'_blanc'}>
                                            <TwitterIcon/>
                                        </a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </footer>
                : ''
        }
    </>)
})

export default Header