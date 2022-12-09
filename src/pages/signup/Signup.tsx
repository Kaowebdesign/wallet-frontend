// Core
import React, {FC, memo} from 'react'
import {Formik} from 'formik'
import {Form, Input, Checkbox} from 'formik-antd'
import * as Yup from 'yup'
import {NavLink, Redirect} from 'react-router-dom'
// Ant Components
import {Row, Col, Popover} from 'antd'
// Ant Icon
import {LoadingOutlined} from '@ant-design/icons'
// Hook
import {useSignupEf} from './useSignupEf'
import useScreen from 'use-screen'
// Elements
import {Auth, Typography, Button} from 'elements'
// Components
import {ValidatePasswordStatus} from 'components'
import {FormikHandler} from 'components'



type PropsType = {
    children?: never
}

const SignupSchema = Yup.object().shape({
    login: Yup.string()
        .required('Required'),
    firstName: Yup.string()
        .required('Required'),
    lastName: Yup.string()
        .required('Required'),
    email: Yup.string()
        .required('Required')
        .email('Not valid email'),
})

const Signup: FC<PropsType> = memo(() => {
    const {screenWidth} = useScreen()
    const {
        validPassword, loadForm, successSignup, showValidate, formErrors, isAuth, lang,
        handlerSubmit, handlerFocus, handlerBlur,
    } = useSignupEf()

    const init = {
        firstName: '',
        lastName: '',
        login: '',
        email: '',
        password: '',
        agree: false,
        subscribe: false,
    }

    if (isAuth) return <Redirect to={`/${lang}/cabinet`}/>
    if (successSignup) return <Redirect to={`/${lang}/check-email`} />

    return (
        <Auth className={'sign'}>
            <div className="sign__wrapper">
                <Typography className={'sign__title'} type={"title-36"} color={"primary"} weight={"medium"}>
                    Sign Up
                </Typography>

                <Formik onSubmit={handlerSubmit} initialValues={init} validationSchema={SignupSchema}>
                    {({errors, values, touched}) => (
                        <Form className={'sign__form'} autoComplete={'off'}>
                            <Row >
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        name={'firstName'}
                                        label={'First Name'}
                                        labelCol={{span: 24}}
                                        wrapperCol={{span: 24}}
                                        className={'from-group-item from-group-item_left'}
                                    >
                                        <Input
                                            disabled={loadForm}
                                            className={'input-item'}
                                            size={'large'}
                                            name='firstName'
                                            placeholder={'John'}
                                        />
                                    </Form.Item>
                                </Col>

                                <Col xs={24} md={12}>
                                    <Form.Item
                                        name={'lastName'}
                                        label={'Last Name'}
                                        labelCol={{span: 24}}
                                        wrapperCol={{span: 24}}
                                        className={'from-group-item from-group-item_right'}
                                    >
                                        <Input
                                            disabled={loadForm}
                                            className={'input-item'}
                                            size={'large'}
                                            name='lastName'
                                            placeholder={'Smith'}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item
                                name={'login'}
                                label={'Login'}
                                labelCol={{span: 24}}
                                wrapperCol={{span: 24}}
                            >
                                <Input
                                    autoComplete="off"
                                    disabled={loadForm}
                                    className={'input-item'}
                                    size={'large'}
                                    name='login'
                                    placeholder={'John_Smith'}
                                />
                            </Form.Item>

                            <Form.Item
                                name={'email'}
                                label={'Email'}
                                labelCol={{span: 24}}
                                wrapperCol={{span: 24}}
                            >
                                <Input
                                    disabled={loadForm}
                                    className={'input-item'}
                                    size={'large'}
                                    name='email'
                                    placeholder={'example@mail.com'}
                                />
                            </Form.Item>

                            <Form.Item
                                name={'password'}
                                label={'Password'}
                                labelCol={{span: 24}}
                                wrapperCol={{span: 24}}
                                validateStatus={!validPassword && touched && touched.password ? 'error' : ''}
                                hasFeedback={false}
                                help={
                                   screenWidth >= 1200 && (
                                        <Typography style={{marginTop: 5}} type={"text-12"} color={"primary"}>
                                            Password Strength:
                                            {
                                                validPassword
                                                    ? <span className={'sign__strongt'}> strong</span>
                                                    : <span  className={'sign__weak'}> weak</span>
                                            }
                                        </Typography>
                                    )
                                }
                            >
                                <Popover
                                    visible={screenWidth >= 1200 && showValidate}
                                    placement="rightBottom"
                                    content={<ValidatePasswordStatus password={values.password} />}
                                    trigger="click"
                                >
                                    <Input.Password
                                        disabled={loadForm}
                                        onFocus={handlerFocus}
                                        onBlur={handlerBlur}
                                        className={'input-item'}
                                        size={'large'}
                                        name='password'
                                        placeholder={'Enter password'}
                                    />
                                </Popover>
                            </Form.Item>
                            {
                               screenWidth < 1200 && (<ValidatePasswordStatus password={values.password} />)
                            }
                            <div className={'sign__checkbox-wrapper'}>
                                <Checkbox
                                    disabled={loadForm}
                                    className={'sign__checkbox-item'}
                                    name={'agree'}
                                />
                                <div className={'sign__checkbox-label'}>
                                    <Typography style={{lineHeight: 1.7}} type={"text-16"} color={"primary"}>
                                        By creating an account I agree to
                                        <a href={`/${lang}/privacy-policy`} target={'_blank'}>
                                            <Typography style={{margin: '0 5px'}} type={"link-16"} color={"secondary"}>
                                                Terms of Use
                                            </Typography>
                                        </a>

                                        and

                                        <a href={`/${lang}/terms-of-use`} target={'_blank'}>
                                            <Typography style={{margin: '0 5px'}} type={"link-16"} color={"secondary"}>
                                                Privacy Policy
                                            </Typography>
                                        </a>
                                    </Typography>
                                </div>
                            </div>

                            {/*<div className={'sign__checkbox-wrapper'}>*/}
                            {/*    <Checkbox*/}
                            {/*        className={'sign__checkbox-item'}*/}
                            {/*        name={'subscribe'}*/}
                            {/*        disabled={loadForm}*/}
                            {/*    />*/}
                            {/*    <div className={'sign__checkbox-label'}>*/}
                            {/*        <Typography style={{lineHeight: 1.7}} type={"text-16"} color={"primary"}>*/}
                            {/*            I want to receive emails about product updates*/}
                            {/*        </Typography>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <Button
                                loader={
                                    loadForm
                                        ? () => <LoadingOutlined className={'sign__loader-icon'} spin/>
                                        : null
                                }
                                loaderPosition={"center"}
                                disabled={!values.agree}
                                size={"full"}
                                type={"submit"}
                                color={"secondary"}
                                variant={"contained"}
                                className={'sign__btn'}
                            >
                                <Typography type={"text-20"}>
                                    Sign Up
                                </Typography>
                            </Button>

                            <Typography align={"center"} style={{lineHeight: 1.7, margin: '28px 0'}} type={"text-18"} color={"primary"}>
                                Already have account?

                                <NavLink to={`/${lang}/signin`}>
                                    <Typography style={{margin: '0 5px'}} type={"link-18"} color={"secondary"}>
                                        Sign in
                                    </Typography>
                                </NavLink>
                            </Typography>

                            <FormikHandler data={formErrors} />
                        </Form>
                    )}
                </Formik>
            </div>
        </Auth>
    )
})

export default Signup
