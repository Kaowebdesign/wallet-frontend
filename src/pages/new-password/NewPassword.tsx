// Core
import React, {FC, memo} from 'react'
import {Redirect} from "react-router-dom"
import {Formik} from "formik"
// Ant Components
import {Popover} from "antd"
import {Form, Input} from "formik-antd"
// Ant Icons
import {LoadingOutlined} from "@ant-design/icons"
// Hook
import {useNewPasswordEf} from './useNewPasswordEf'
import {useRouter} from "hooks"
import useScreen from 'use-screen'
// Components
import {ValidatePasswordStatus} from "components"
// Elements
import {Auth, Button, Typography} from "elements"
// Components
import {FormikHandler} from "components"


type PropsType = {
    children?: never
}

const NewPassword: FC<PropsType> = memo(() => {
    const {screenWidth} = useScreen()
    const {query} = useRouter()
    const {
        validPassword, loadForm, showValidate, isAuth, notFoundRedirect, formErrors, lang,
        handlerSubmit, handlerBlur, handlerFocus,
        // @ts-ignore
    } = useNewPasswordEf(query.token)

    const init = {
        password: '',
    }

    if (isAuth) return <Redirect to={`/${lang}/cabinet`}/>
    if (notFoundRedirect) return <Redirect to={`/${lang}/signin`}/>

    return (
        <Auth className={'sign'}>
            <div className="sign__wrapper">
                <Typography className={'sign__title'} type={"title-36"} color={"primary"}>
                    New Password
                </Typography>

                <Typography className={'sign__text'} type={"text-18"} color={"primary"} weight={"medium"}>
                    Your new password must  be different from previous
                    used passwords
                </Typography>

                <Formik onSubmit={handlerSubmit} initialValues={init}>
                    {({errors, values, touched}) => (
                        <Form className={'sign__form'}>
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
                                Save
                            </Button>
                            <FormikHandler data={formErrors} />
                        </Form>
                    )}
                </Formik>
            </div>
        </Auth>
    )
})

export default NewPassword
