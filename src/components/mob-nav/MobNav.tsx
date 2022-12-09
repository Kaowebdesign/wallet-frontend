// Core
import React, {FC, memo} from 'react'
import {useSpring, animated} from 'react-spring'
import clsx from "clsx"
import {NavLink} from 'react-router-dom'
// Ant Components
import {Row, Col} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './MobNav.scss'
// Hook
import {useMobNavEf} from './useMobNavEf'
import {useRouter} from "hooks"
// Elements
import {Button, Typography} from 'elements'
// Icons
import {FacebookIcon, InstagramIcon, TwitterIcon} from 'icons'


type PropsType = {
    children?: never
}

const MobNav: FC<PropsType> = memo(() => {
    const {menuMode, show, handlerClick} = useMobNavEf()
    const {match} = useRouter()

    const showAnim = useSpring({
        from: {clipPath: menuMode ? 'circle(0% at 100% -11%)' : 'circle(300.0% at 100% 1%)'},
        to: {clipPath: menuMode ? 'circle(300.0% at 100% 1%)' : 'circle(0% at 100% -11%)'},
        delay: 30,
        config: { mass: 1, tension: 280, friction: 120 },
    })

    return (
        <nav className={clsx('mob-mav', {'show': show})}>
            <animated.div style={showAnim}>
                <div className={'mob-mav__wrapper'}>
                    <Row className={'mob-mav__row'}>
                        <Col xs={24}>
                            <Row align={'middle'} justify={'center'} gutter={[24,24]}>
                                <Col xs={24} className={'mob-mav__link-item'}>
                                    <Typography
                                        type={"link-36"}
                                        color={"primary"}
                                        className={match.path === '/about' ? 'action' : ''}
                                    >
                                        <NavLink to={'about'} onClick={handlerClick}>
                                            About
                                        </NavLink>
                                    </Typography>
                                </Col>
                                <Col xs={24} className={'mob-mav__link-item'}>
                                    <Typography
                                        type={"link-36"}
                                        color={"primary"}
                                        className={match.path === '/news' ? 'action' : ''}
                                    >
                                        <NavLink to={'news'} onClick={handlerClick}>
                                            News
                                        </NavLink>
                                    </Typography>
                                </Col>
                                <Col xs={24} className={'mob-mav__link-item'}>
                                    <Typography
                                        type={"link-36"}
                                        color={"primary"}
                                        className={match.path === '/faq' ? 'action' : ''}
                                    >
                                        <NavLink to={'faq'} onClick={handlerClick}>
                                            FAQ
                                        </NavLink>
                                    </Typography>
                                </Col>
                                <Col xs={24} className={'mob-mav__link-item'}>
                                    <Typography
                                        type={"link-36"}
                                        color={"primary"}
                                        className={match.path === '/contacts' ? 'action' : ''}
                                    >
                                        <NavLink to={'contacts'} onClick={handlerClick}>
                                            Contacts
                                        </NavLink>
                                    </Typography>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24} className={'mob-mav__auth'}>
                            <Row align={'middle'}>
                                <Col xs={11} sm={12}>
                                   <Row justify={'end'} className={'mob-mav__signin'}>
                                       <Typography
                                           type={"link-28"}
                                           color={"primary"}
                                           className={match.path === '/signin' ? 'action' : ''}
                                       >
                                           <NavLink to={'signin'} onClick={handlerClick}>
                                               Sign in
                                           </NavLink>
                                       </Typography>
                                   </Row>
                                </Col>
                                <Col xs={13} sm={12}>
                                    <NavLink to={'signup'} onClick={handlerClick}>
                                        <Button color={"secondary"} variant={"outlined"}>
                                            Sign up
                                        </Button>
                                    </NavLink>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24} className={'mob-mav__social'}>
                           <Row gutter={[25, 0]} justify={'center'}>
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
                </div>
            </animated.div>
        </nav>
    )
})

export default MobNav
