// Core
import React, {FC, memo} from 'react'
import {NavLink} from 'react-router-dom'
import clsx from "clsx"
import useScreen from 'use-screen'
// Ant Components
import {Row, Col} from 'antd'
// Style
import './Header.scss'
// Hook
import {useHeaderEf} from './useHeaderEf'
import {useCheckPage} from "hooks"
// Element
import {Container, Typography, Button} from 'elements'
// Components
import {LanguageList, Logo} from 'components'
import {IconNav} from "./components"


type PropsType = {
    children?: never
}

const Header: FC<PropsType> = memo(() => {
    const {
        lang,
        handlerMenuMode, handlerClickMain,
    } = useHeaderEf()

    const { isMobile, screenWidth } = useScreen()
    const {active, layout, shadow} = useCheckPage()

    return (<>
        {
            layout
                ? <header className={clsx('header', {'shadow': shadow})}>
                    <Container className={'header__container'}>
                        <Row align={'middle'}>
                            <Col xs={8}  sm={12}>
                                <Row align={'middle'}>
                                    <Col className={'header__logo-wrapper'}>
                                        <div className={'header__logo'}>
                                            <Logo
                                                style={{ marginTop: isMobile ? 0 : -10 }}
                                                hide={(screenWidth < 600) || (screenWidth > 1200 && screenWidth < 1440)}
                                                handlerClick={handlerClickMain}
                                            />
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className={clsx('header__links', {'Hide': screenWidth < 1200})}>
                                            <Row gutter={[40,0]}>
                                                <Col>
                                                    <Typography
                                                        type={"link-20"}
                                                        color={"primary"}
                                                        className={active === 'about' ? 'action' : ''}
                                                    >
                                                        <NavLink to={`/${lang}/about`}>
                                                            About
                                                        </NavLink>
                                                    </Typography>
                                                </Col>
                                                <Col>
                                                    <Typography
                                                        type={"link-20"}
                                                        color={"primary"}
                                                        className={active === 'news' ? 'action' : ''}
                                                    >
                                                        <NavLink to={`/${lang}/news`}>
                                                            News
                                                        </NavLink>
                                                    </Typography>
                                                </Col>
                                                <Col>
                                                    <Typography
                                                        type={"link-20"}
                                                        color={"primary"}
                                                        className={active === 'faq' ? 'action' : ''}
                                                    >
                                                        <NavLink to={`/${lang}/faq`}>
                                                            FAQ
                                                        </NavLink>
                                                    </Typography>
                                                </Col>
                                                <Col>
                                                    <Typography
                                                        type={"link-20"}
                                                        color={"primary"}
                                                        className={active === 'contacts' ? 'action' : ''}
                                                    >
                                                        <NavLink to={`/${lang}/contacts`}>
                                                            Contacts
                                                        </NavLink>
                                                    </Typography>
                                                </Col>
                                            </Row>

                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col xs={16}  sm={12}>
                                <Row justify={'end'} align={'middle'} className={'header__right-wrapper'}>
                                    <LanguageList />
                                    <Typography
                                        type={"link-20"}
                                        color={"primary"}
                                        className={clsx('header__signin', {'Hide': screenWidth < 1200})}
                                    >
                                        <NavLink to={`/${lang}/signin`}>
                                            Sign in
                                        </NavLink>
                                    </Typography>
                                    <NavLink to={`/${lang}/signup`} className={clsx({'Hide': screenWidth < 1200})}>
                                        <Button color={"secondary"} variant={"outlined"}>
                                            Sign up
                                        </Button>
                                    </NavLink>

                                    <Button
                                        color={"secondary"}
                                        variant={"contained"}
                                        size={'icon'}
                                        className={clsx({'Hide': screenWidth > 1199})}
                                        onClick={handlerMenuMode}
                                    >
                                        <IconNav/>
                                    </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </header>
                :''
        }
    </>)
})

export default Header
