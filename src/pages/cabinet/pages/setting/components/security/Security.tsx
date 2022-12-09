// Core
import React, {FC, memo} from 'react'
import {Formik} from "formik";
import * as Yup from 'yup'
// Ant Components
import {Popover, Tooltip, Button, Modal, Image, Space} from 'antd'
import { InfoCircleOutlined, MailOutlined} from '@ant-design/icons';
import {Form, Input, InputNumber} from 'formik-antd'
// Hook
import {useSecurityEf} from './useSecurityEf'
import useScreen from "use-screen";
// Elements
import {Typography} from "elements";
// Components
import {FormikHandler} from 'components'
import ChangePassword from "./components/ChangePassword/ChangePassword";
import TwoFa from "./components/TwoFa/TwoFa";
import CloseAccount from "./components/CloseAccount/CloseAccount";
// Styles
import 'elements/auth/Auth.scss'
// Images
import errorImage from 'assets/img/illustration_delete.png'
import googleAuth from 'assets/img/google-authenticator.svg'
// Types
import {TAutoLogout} from "types/cabinet/settings-type";


type PropsType = {
    children?: never
}

const AutoLogoutSchema = Yup.object().shape({
    auto_logout: Yup.string()
        .nullable()
        .min(1,'Must be between 1 and 3600 minutes')
        .max(3600,'Must be between 1 and 3600 minutes')
        .matches(/^([1-9]|[1-3][1-6][0-9][0-9])/, 'Must be between 1 and 3600 minutes')
        .required('Required'),
})



const SettingSecurity: FC<PropsType> = memo(() => {
    const {screenWidth} = useScreen()

    const {
        logoutErrors, loadForm, showLogout, logout,
        handlerAutoLogout, handlerSubmitAutoLogout
    } = useSecurityEf()

    const initLogout: TAutoLogout = {
        auto_logout: logout || 60
    }

    return (
        <div className={'cab-security'}>
            <div className={'cab-security__wrap'}>
                <ChangePassword />
                <TwoFa />
                <div className={'cab-settings__title-wrap cab-settings__title-flex'}>
                    <Typography type={'text-16'} weight={'medium'} color={'primary'}>Auto Logout</Typography>
                    <Tooltip placement="right" title={'After a certail period of inactivity, you will be automatically logged out of your wallet'}>
                        <button className={'cab-settings__icon'}>
                            <InfoCircleOutlined />
                        </button>
                    </Tooltip>
                </div>
                {
                    showLogout ?
                        <Formik onSubmit={handlerSubmitAutoLogout} initialValues={initLogout} validationSchema={AutoLogoutSchema}>
                            {({errors, values}) => (
                                <Form className={'sign__form'}>
                                    <div className={'cab-settings__item'}>
                                        <Form.Item
                                            name={'auto_logout'}
                                            label={''}
                                            labelCol={{span: 24}}
                                            wrapperCol={{span: 24}}
                                            hasFeedback={false}
                                        >
                                            <InputNumber
                                                // onFocus={handlerFocus}
                                                // onBlur={handlerBlur}
                                                className={'input-item'}
                                                size={'middle'}
                                                name='auto_logout'
                                                min={1}
                                                max={3600}
                                                // parser={value => value ? value.toString().replace(/[^-0-9-.]/g, '') : ''}
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className={'cab-settings__item'}>
                                        <Button type="default" onClick={handlerAutoLogout} className={'cab-settings__cancel'}>
                                            Cancel
                                        </Button>
                                        <Button type="primary" htmlType="submit" loading={loadForm}>
                                            Save
                                        </Button>
                                    </div>
                                    <FormikHandler data={logoutErrors}/>
                                </Form>
                            )}
                        </Formik>
                    :
                        <div>
                            <div className={'cab-settings__item'}>
                                <Typography type={'text-16'} color={'primary'}>{logout} minutes</Typography>
                            </div>
                            <div className={'cab-settings__item'}>
                                <Button type="primary" onClick={handlerAutoLogout}>
                                    Change
                                </Button>
                            </div>
                        </div>
                }
                <CloseAccount />
            </div>
        </div>
    )
})

export default SettingSecurity
