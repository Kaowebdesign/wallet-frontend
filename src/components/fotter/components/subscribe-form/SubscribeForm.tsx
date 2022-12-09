// Core
import React, {FC, memo} from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'
// Ant Components
import { Form, Input } from 'formik-antd'
// Ant Icon
import {LoadingOutlined, SendOutlined} from '@ant-design/icons'
// Style
import './SubscribeForm.scss'
// Hook
import {useSubscribeFormEf} from './useSubscribeFormEf'
// Components
import {FormikHandler} from 'components'
// Elements
import {Button} from "elements"
import clsx from "clsx"



type PropsType = {
    children?: never
}

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
})

const SubscribeForm: FC<PropsType> = memo(() => {
    const {
        alert,
        formErrors,
        loadForm,
        handlerSubmit,
    } = useSubscribeFormEf()

    return (
        <Formik
            initialValues={{
                email: '',
            }}
            onSubmit={handlerSubmit}
            validationSchema={SignupSchema}
        >
            <Form>
                <Form.Item name='email'>
                    <Input
                        className={clsx('subscribe-form__input', 'input-item')}
                        size={'large'}
                        name='email'
                        placeholder='E-mail'
                        addonAfter={
                            <Button
                                type={"submit"}
                                size={"icon"}
                                color={"secondary"}
                                variant={"contained"}
                                className={'left-radius'}
                                loader={
                                    loadForm
                                        ? () => <LoadingOutlined className={'sign__loader-icon'} spin/>
                                        : null
                                }
                            >
                                <SendOutlined />
                            </Button>
                        }
                    />
                </Form.Item>
                <FormikHandler data={formErrors} reset={alert && alert.type === "success"}/>
            </Form>
        </Formik>
    )
})

export default SubscribeForm
