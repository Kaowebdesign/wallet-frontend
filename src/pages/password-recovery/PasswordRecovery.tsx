// Core
import React, {FC, memo} from 'react'
import {NavLink, Redirect} from "react-router-dom"
import {Formik} from "formik"
import * as Yup from "yup"
// Ant Components
import {Form, Input} from "formik-antd"
// Ant Icon
import {LoadingOutlined} from '@ant-design/icons'
// Hook
import {usePasswordRecoveryEf} from './usePasswordRecoveryEf'
// Elements
import {Auth, Button, Typography} from "elements"
// Components
import {FormikHandler} from "components"


type PropsType = {
    children?: never
}

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .required('Required')
        .email('Not valid email'),
})

const PasswordRecovery: FC<PropsType> = memo(() => {
    const {
        loadForm, isAuth, notFoundRedirect, formErrors, lang,
        handlerSubmit
    } = usePasswordRecoveryEf()

    const init = {
        email: '',
    }

    if (isAuth) return <Redirect to={`/${lang}/cabinet`}/>
    if (notFoundRedirect) return <Redirect to={`/${lang}/signin`}/>

    return (
        <Auth className={'sign'}>
            <div className="sign__wrapper">
                <Typography className={'sign__title'} type={"title-36"} color={"primary"} weight={"medium"}>
                    Password recovery
                </Typography>

                <Typography className={'sign__text'} type={"text-18"} color={"primary"}>
                    No worries! To recover your password, specify your e-mail to which your account is registered.
                </Typography>

                <Formik onSubmit={handlerSubmit} initialValues={init} validationSchema={SignupSchema}>
                    {({errors, values, touched}) => (
                        <Form className={'sign__form'}>
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

                            <Button
                                style={{marginTop: 32}}
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
                            >
                                Send
                            </Button>

                            <Typography align={"center"} style={{margin: '28px 0'}} type={"text-18"} color={"primary"}>
                                    <Typography type={"link-18"} color={"secondary"}>
                                        <NavLink to={`/${lang}/signin`}>
                                            Back to Sign In
                                        </NavLink>
                                    </Typography>
                            </Typography>
                            <FormikHandler data={formErrors} />
                        </Form>
                    )}
                </Formik>
            </div>
        </Auth>
    )
})

export default PasswordRecovery
