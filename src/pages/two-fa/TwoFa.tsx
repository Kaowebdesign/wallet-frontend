// Core
import React, {FC, memo} from 'react'
import * as Yup from "yup"
import {Redirect} from "react-router-dom"
import {Formik} from "formik"
// Ant Components
import {Form, Input} from "formik-antd"
// Ant Icon
import {LoadingOutlined} from '@ant-design/icons'
// Hook
import {useTwoFaEf} from './useTwoFaEf'
// Elements
import {Auth, Button, Typography} from "elements"
// Components
import {FormikHandler} from 'components'


type PropsType = {
    children?: never
}

const SignupSchema = Yup.object().shape({
    code: Yup.string()
        .required('Required')
})

const TwoFa: FC<PropsType> = memo(() => {
    const {
        loadForm, twoFa, isAuth, formErrors, notFoundRedirect, lang,
        handlerSubmit, handlerResend,
    } = useTwoFaEf()

    const init = {
        code: '',
    }

    if (isAuth) return <Redirect to={`/${lang}/cabinet`}/>
    if (!twoFa || notFoundRedirect) return <Redirect to={`/${lang}/signin`}/>

    return (
        <Auth className={'sign'}>
            <div className="sign__wrapper">
                <Typography className={'sign__title'} type={"title-36"} color={"primary"} weight={"medium"}>
                    Two Factor Authentication
                </Typography>

                <Typography className={'sign__text'} type={"text-18"} color={"primary"}>
                    {
                        twoFa?.method === 'method_email'
                            ? ' Enter the code from the Email'
                            : ' Enter the code from Google Authenticator'
                    }

                </Typography>

                <Formik onSubmit={handlerSubmit} initialValues={init} validationSchema={SignupSchema}>
                    {({errors, values, touched}) => (
                        <Form className={'sign__form'}>
                            <Form.Item
                                name={'code'}
                                label={'Code'}
                                labelCol={{span: 24}}
                                wrapperCol={{span: 24}}
                            >
                                <Input
                                    className={'input-item'}
                                    size={'large'}
                                    name='code'
                                    placeholder={'Enter Code'}
                                />
                            </Form.Item>

                            {
                                twoFa?.method === 'method_email' && (
                                    <Typography onClick={handlerResend} style={{margin: '28px 0'}} type={"text-18"} color={"primary"}>
                                        <Typography type={"link-18"} color={"secondary"}>
                                            <a>
                                                Resend code
                                            </a>
                                        </Typography>
                                    </Typography>
                                )
                            }

                            <Button
                                style={{marginTop: 32}}
                                loader={
                                    loadForm
                                        ? () => <LoadingOutlined className={'sign__loader-icon'} spin />
                                        : null
                                }
                                loaderPosition={"center"}
                                size={"full"}
                                type={"submit"}
                                color={"secondary"}
                                variant={"contained"}
                            >
                                Confirm
                            </Button>

                            <FormikHandler data={formErrors}/>
                        </Form>
                    )}
                </Formik>
            </div>
        </Auth>
    )
})

export default TwoFa
