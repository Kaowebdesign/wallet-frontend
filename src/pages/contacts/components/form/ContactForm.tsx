// Core
import React, {FC, memo} from 'react'
import {Formik} from "formik"
import * as Yup from "yup"
// Ant Components
import {Col, Row} from 'antd'
import {Form, Input} from "formik-antd"
// Ant Icon
import {LoadingOutlined} from '@ant-design/icons'
// Hook
import {useFormEf} from './useFormEf'
// Components
import {FormikHandler} from "components"
// Elements
import {Button, Typography} from "elements"


type PropsType = {
    children?: never
}

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .required('Required')
        .email('Not valid email'),
    message: Yup.string()
        .required('Required')
        .max(100, 'Limit max 100 symbol'),
})


const ContactForm: FC<PropsType> = memo(() => {
    const {
        formErrors, loadForm, alert,
        handlerSubmit,
    } = useFormEf()

    const init = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    }

    return (
        <div className={'sign contacts__form'}>
            <Formik onSubmit={handlerSubmit} initialValues={init} validationSchema={SignupSchema} validateOnMount={true}>
                {({errors, values, setErrors, resetForm, isValid}) => {
                    return (
                        <Form className={'sign__form'}>
                            <Row gutter={24}>
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        name={'firstName'}
                                        label={'First Name'}
                                        labelCol={{span: 24}}
                                        wrapperCol={{span: 24}}
                                        className={'sign__input-group-left'}
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
                                        className={'sign__input-group-right'}
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
                                name={'message'}
                                label={'Message'}
                                labelCol={{span: 24}}
                                wrapperCol={{span: 24}}
                            >
                                <Input.TextArea
                                    disabled={loadForm}
                                    className={'input-item'}
                                    size={'large'}
                                    name='message'
                                    placeholder={'Let us know how we can help'}
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
                                disabled={!isValid}
                            >
                                <Typography type={"text-20"}>
                                    Send
                                </Typography>
                            </Button>
                            <FormikHandler data={formErrors} reset={alert && alert.type === "success"} />
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
})

export default ContactForm
