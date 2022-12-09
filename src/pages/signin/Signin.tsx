// Core
import React, {FC, memo} from 'react'
import * as Yup from "yup"
import {NavLink, Redirect} from "react-router-dom"
import {Formik} from "formik"
// Ant Components
import {Form, Input} from "formik-antd"
// Ant Icon
import {LoadingOutlined} from '@ant-design/icons'
// Hook
import {useSigninEf} from './useSigninEf'
// Elements
import {Auth, Button, Typography} from "elements"
// Components
import {FormikHandler} from "components"


type PropsType = {
    children?: never
}

const SignupSchema = Yup.object().shape({
    password: Yup.string()
        .required('Required'),
    login: Yup.string()
        .required('Required')
        .email('Not valid email')
})

const Signin: FC<PropsType> = memo(() => {
    const {
        loadForm, formErrors, twoFa, isAuth, notFoundRedirect, lang,
        handlerSubmit,
    } = useSigninEf()

    const init = {
        login: '',
        password: '',
    }

    if (isAuth) return <Redirect to={`/${lang}/cabinet`}/>
    if (twoFa) return <Redirect to={`/${lang}/two-fa`}/>
    if (notFoundRedirect) return <Redirect to={`/${lang}/`}/>

    return (
        <Auth className={'sign'}>
            <div className="sign__wrapper">
                <Typography className={'sign__title'} type={"title-36"} color={"primary"} weight={"medium"}>
                    Sign In
                </Typography>

                <Formik onSubmit={handlerSubmit} initialValues={init} validationSchema={SignupSchema} autoComplete={'off'}>
                    {({errors, values, touched}) => (
                        <Form className={'sign__form'} autoComplete='off' >
                            <Form.Item
                                name={'login'}
                                label={'Email'}
                                labelCol={{span: 24}}
                                wrapperCol={{span: 24}}
                            >
                                <Input
                                    disabled={loadForm}
                                    className={'input-item'}
                                    size={'large'}
                                    name='login'
                                    placeholder={'example@mail.com'}
                                />
                            </Form.Item>

                            <Form.Item
                                name={'password'}
                                label={'Password'}
                                labelCol={{span: 24}}
                                wrapperCol={{span: 24}}
                                style={{marginBottom: 40}}
                            >
                                <Input.Password
                                    disabled={loadForm}
                                    className={'input-item'}
                                    size={'large'}
                                    name='password'
                                    placeholder={'Enter password'}
                                />
                            </Form.Item>

                            <Typography type={"link-18"} color={"secondary"}>
                                <NavLink to={`/${lang}/password-recovery`}>
                                    Forgot Password?
                                </NavLink>
                            </Typography>

                            <Button
                                loader={
                                    loadForm
                                        ? () => <LoadingOutlined className={'sign__loader-icon'} spin/>
                                        : null
                                }
                                loaderPosition={"center"}
                                size={"full"}
                                type={"submit"}
                                color={"secondary"}
                                variant={"contained"}
                                className={'sign__btn'}
                            >
                                Sign In
                            </Button>

                            <Typography align={"center"} style={{lineHeight: 1.7, margin: '28px 0'}} type={"text-18"} color={"primary"}>
                                Don’t have account?

                                <NavLink to={`/${lang}/signup`}>
                                    <Typography style={{margin: '0 5px'}} type={"link-18"} color={"secondary"}>
                                        Sign Up
                                    </Typography>
                                </NavLink>
                            </Typography>
                            <FormikHandler data={formErrors}/>
                        </Form>
                    )}
                </Formik>
            </div>
        </Auth>
    )
})

export default Signin
