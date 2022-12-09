// Core
import React, {FC, memo} from 'react'
import {Redirect} from "react-router-dom"
// import  from 'react-protected-mailto'
// Ant Components
import {Row, Col} from 'antd'
// Style
import './Contacts.scss'
// Components
import {Form} from './components'
// Elements
import {Typography, Container} from 'elements'
// Icons
import {ContactMail, ContactCall} from 'icons'
// Hooks
import { useContactsEf } from './useContactsEf'


type PropsType = {
    children?: never
}

const Contacts: FC<PropsType> = memo(() => {
    const {
        isAuth, lang,
    } = useContactsEf()

    if (isAuth) return <Redirect to={`/${lang}/cabinet`}/>

    return (
        <Container className={'contacts'}>
            <Row>
                <Col xl={12} xs={24}>
                    <Row>
                        <Col xl={20} xs={24}>
                            <Typography className={'contacts__title'} type={"title-48"} color={"primary"}>
                                Question? Comments? Ideas?
                                <span className={'contacts__title-span'}>We are always happy to help!</span>
                            </Typography>
                            <Typography className={'contacts__text'} type={"text-20"} color={"primary"}>
                                Your feedback is really important to us. Tell us Your needs, and we will contact you shortly
                            </Typography>
                            <div className={'contacts__mail'}>
                                <ContactMail style={{marginRight: 24}} />
                                <Typography type={"link-36"} color={"secondary"}>
                                    <a href="mailto:noreply@catchcoin.io">noreply@catchcoin.io</a>
                                </Typography>
                            </div>
                            <div className={'contacts__call'}>
                                <ContactCall style={{marginRight: 24}} />
                                <Typography type={"link-36"} color={"secondary"}>
                                    <a href="tel:1000000000">+1 00 000 00 00</a>
                                </Typography>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xl={12} xs={24}>
                    <Form/>
                </Col>
            </Row>
        </Container>
    )
})

export default Contacts
