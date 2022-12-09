// Core
import React, {FC, memo} from 'react'
import {Formik} from "formik";
import * as Yup from "yup";
// Hook
import {useChangePasswordEf} from './usechangePasswordEf'
// Ant components
import {Button, Popover} from "antd";
import {Form, Input} from "formik-antd";
// Elements
import {Typography} from "elements";
// Components
import {FormikHandler, ValidatePasswordStatus} from "components";
import useScreen from "use-screen";



type PropsType = {
    children?: never
}

const ChangePasswordSchema = Yup.object().shape({
    password: Yup.string()
        .required('Required'),
    cPassword: Yup.string()
        .required('Required')
})

const ChangePassword: FC<PropsType> = memo(() => {
    const {push, passwordErrors, validPassword, loadForm, showValidate, handlerFocus, handlerBlur, handlerSubmitPassword} = useChangePasswordEf()
    const {screenWidth} = useScreen()

    const init = {
        password: '',
        cPassword: '',
    }

    return (
        <>
            <div className={'cab-settings__title-wrap'}>
                <Typography type={'text-16'} weight={'medium'} color={'primary'}>Change password</Typography>
            </div>
            <Formik onSubmit={handlerSubmitPassword} initialValues={init} validationSchema={ChangePasswordSchema}>
                {({errors, values, touched}) => (
                    <Form className={'sign__form'}>
                        <div className={'cab-settings__item'}>
                            <Form.Item
                                name={'password'}
                                label={'Current Password'}
                                labelCol={{span: 24}}
                                wrapperCol={{span: 24}}
                                // validateStatus={touched && touched.password ? 'error' : ''}
                                hasFeedback={false}
                            >
                                <Input.Password
                                    // onFocus={handlerFocus}
                                    // onBlur={handlerBlur}
                                    disabled={loadForm}
                                    className={'input-item medium'}
                                    size={'middle'}
                                    name='password'
                                    placeholder={'Enter current password'}
                                />
                            </Form.Item>
                        </div>
                        <div className={'cab-settings__item'}>
                            <Form.Item
                                name={'password_repeat'}
                                label={'New Password'}
                                labelCol={{span: 24}}
                                wrapperCol={{span: 24}}
                                validateStatus={!validPassword && touched && touched.cPassword ? 'error' : ''}
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
                                    content={<ValidatePasswordStatus password={values.cPassword} />}
                                    trigger="click"
                                >
                                    <Input.Password
                                        disabled={loadForm}
                                        onFocus={handlerFocus}
                                        onBlur={handlerBlur}
                                        className={'input-item cab-settings__input medium'}
                                        size={'middle'}
                                        name='cPassword'
                                        placeholder={'Enter new password'}
                                    />
                                </Popover>
                            </Form.Item>
                        </div>
                        {
                            screenWidth < 1200 && (<ValidatePasswordStatus password={values.cPassword} />)
                        }
                        <div className={'cab-settings__item'}>
                            <Button type="primary" htmlType="submit" loading={loadForm} disabled={!validPassword}>
                                Save changes
                            </Button>
                        </div>
                        <FormikHandler data={passwordErrors} reset={push !== null} />
                    </Form>
                )}
            </Formik>
        </>
    )
})

export default ChangePassword
