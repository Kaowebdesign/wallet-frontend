// Core
import React, {FC, memo} from 'react'
import {Formik} from "formik";
import * as Yup from "yup";
// Ant Components
import {Button, Image, Modal, Space, Tooltip} from 'antd'
import {Form, Input} from "formik-antd";
// Ant Icon
import {InfoCircleOutlined, MailOutlined} from '@ant-design/icons'
// Hook
import {useTwoFaEf} from './useTwoFaEf'
// Components
import {FormikHandler} from "components";
// Elements
import {Typography} from "elements";
// Types
import {ETwoFaType} from "types/cabinet/settings-type";
// Images
import googleAuth from "assets/img/google-authenticator.svg";
// QR code component
const QRCode = require('qrcode.react');




type PropsType = {
    children?: never
}

const TwoFaScheme = Yup.object().shape({
    code: Yup.number()
        .required('Required')
})

const TwoFa: FC<PropsType> = memo(() => {
    const {
        isModalEmail, isModalGoogle, twoFaType, twofaErrors, user, push, twofaDataGoogle, resetForm,
        handlerToggleEmailModal, handlerToggleGoogleModal, handlerSubmitTwoFaEmail, handlerRequestTwoFaEmail,
        handlerRequestDisconnectTwoFaEmail, handlerRequestTwoFaGoogle, handlerSubmitTwoFaGoogle, handlerRequestDisconnectTwoFaGoogle
    } = useTwoFaEf()

    const activateTwoFa = {
        code: ''
    }

    return (
        <>
            <div className={'cab-settings__title-wrap cab-settings__title-flex'}>
                <Typography type={'text-16'} weight={'medium'} color={'primary'}>Two-factor authentication</Typography>
                <Tooltip placement="right" title={'You can choose only one method of 2FA Authentication'}>
                    <button className={'cab-settings__icon'}>
                        <InfoCircleOutlined />
                    </button>
                </Tooltip>
            </div>
            <Space direction="vertical" size={16} className={'cab-settings__auth-cards'}>
                <div className={'auth-card'}>
                    <MailOutlined size={20}/>
                    <div className="auth-card__content">
                        <Typography type={'text-16'} color={'primary'} className={'auth-card__title'}>Via email (Current)</Typography>
                        <Typography type={'text-16'} color={'gray'} className={'auth-card__description'}>We sent a security code to the email that you used for sign up.</Typography>
                        {
                            twoFaType.toString() === ETwoFaType.email.toString() ?
                                <Button type="default" className={'default'} onClick={handlerRequestDisconnectTwoFaEmail}>
                                    Remove
                                </Button>
                                :
                                <Button type="primary" onClick={handlerRequestTwoFaEmail} disabled={twoFaType.toString() === ETwoFaType.google.toString()}>
                                    Set Up
                                </Button>
                        }
                    </div>
                </div>
                <div className={'auth-card'}>
                    <Image width={20} height={20} src={googleAuth} preview={false} />
                    <div className="auth-card__content">
                        <Typography type={'text-16'} color={'primary'} className={'auth-card__title'}>Via Google Authenticator</Typography>
                        <Typography type={'text-16'} color={'gray'} className={'auth-card__description'}>Install an authenticator app on your phone.</Typography>
                        {
                            twoFaType.toString() === ETwoFaType.google.toString() ?
                                <Button type="default" className={'default'} onClick={handlerRequestDisconnectTwoFaGoogle}>
                                    Remove
                                </Button>
                                :
                                <Button type="primary" onClick={handlerRequestTwoFaGoogle} disabled={twoFaType.toString() === ETwoFaType.email.toString()}>
                                    Set Up
                                </Button>
                        }
                    </div>
                </div>
            </Space>
            <Modal title={twoFaType.toString() === ETwoFaType.email.toString() ? `Remove 2FA via Email` : `Set Up 2FA via Email`} centered visible={isModalEmail} onCancel={handlerToggleEmailModal} footer={false} className={'cab-settings__twofa-modal'}>
                {
                    twoFaType.toString() === ETwoFaType.email.toString() ?
                        <Typography type={'text-18'} color={'primary'}>You want to remove 2FA via email. We recommend setting up another option of 2FA to secure your account.</Typography>
                        :
                        <div>
                            <Typography type={'text-18'} color={'primary'}>Enter the code from the email sent to</Typography>
                            <Typography type={'text-18'} color={'primary'} weight={'medium'}>{user && user.email}</Typography>
                        </div>
                }

                <Formik onSubmit={handlerSubmitTwoFaEmail} initialValues={activateTwoFa} validationSchema={TwoFaScheme}>
                    {({errors, values}) => (
                        <Form className={'sign__form'}>
                            <div className={'cab-settings__item'}>
                                <Form.Item
                                    name={'code'}
                                    label={'Code'}
                                    labelCol={{span: 24}}
                                    wrapperCol={{span: 24}}
                                    hasFeedback={false}
                                >
                                    <Input
                                        // onFocus={handlerFocus}
                                        // onBlur={handlerBlur}
                                        className={'input-item medium'}
                                        size={'middle'}
                                        name='code'
                                        placeholder={'Enter Code'}
                                    />
                                </Form.Item>
                            </div>
                            <div className={'cab-settings__item'}>
                                {
                                    twoFaType.toString() === ETwoFaType.email.toString() ?
                                        <Button type="primary" htmlType="submit" danger className={'danger full-width'}>
                                            Remove
                                        </Button>
                                        :
                                        <Button type="primary" htmlType="submit" className={'full-width'}>
                                            Confirm
                                        </Button>
                                }

                            </div>
                            <FormikHandler data={twofaErrors} reset={push !== null  || resetForm}/>
                        </Form>
                    )}
                </Formik>
            </Modal>
            <Modal title={twoFaType.toString() === ETwoFaType.google.toString() ? `Remove 2FA via Google Authenticator` : `Set Up 2FA via Google Authenticator`} centered visible={isModalGoogle} onCancel={handlerToggleGoogleModal} footer={false} className={'cab-settings__twofa-modal'}>
                {
                    twoFaType.toString() !== ETwoFaType.google.toString() &&
                    <Typography type={'text-18'} color={'primary'}>Download Google Authenticator in <a href={'https://apps.apple.com/ru/app/google-authenticator/id388497605'} className={'typography link secondary'}>App Store</a> or <a href={'https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=ru&gl=US'} className={'typography link secondary'}>Google Play</a> and scan QR Code below with the App.</Typography>
                }
                {
                    twoFaType.toString() !== ETwoFaType.google.toString() && twofaDataGoogle && user &&
                    <div className={'twofa__qr'}>
                        <div className={'twofa__qr-box'}>
                            <QRCode value={'otpauth://totp/CatchCoin:'+user.email+'?secret='+twofaDataGoogle?.secret} size={140} fgColor={'#332E54'}/>
                        </div>
                    </div>
                }
                {
                    twoFaType.toString() === ETwoFaType.google.toString() ?
                        <Typography type={'text-18'} color={'primary'}>You want to remove 2FA via email. We recommend setting up another option of 2FA to secure your account. Enter the code generated by the App for confirmation.</Typography>
                        :
                        <Typography type={'text-18'} color={'primary'}>If you have any problem with scanning the QR code enter code generated by the App.</Typography>
                }

                <Formik onSubmit={handlerSubmitTwoFaGoogle} initialValues={activateTwoFa} validationSchema={TwoFaScheme}>
                    {({errors, values}) => (
                        <Form className={'sign__form'}>
                            <div className={'cab-settings__item'}>
                                <Form.Item
                                    name={'code'}
                                    label={'Code'}
                                    labelCol={{span: 24}}
                                    wrapperCol={{span: 24}}
                                    hasFeedback={false}
                                >
                                    <Input
                                        // onFocus={handlerFocus}
                                        // onBlur={handlerBlur}
                                        className={'input-item medium'}
                                        size={'middle'}
                                        name='code'
                                        placeholder={'Enter Code'}
                                    />
                                </Form.Item>
                            </div>
                            <div className={'cab-settings__item'}>
                                {
                                    twoFaType.toString() === ETwoFaType.google.toString() ?
                                        <Button type="primary" htmlType="submit" danger className={'danger full-width'}>
                                            Remove
                                        </Button>
                                        :
                                        <Button type="primary" htmlType="submit" className={'full-width'}>
                                            Confirm
                                        </Button>
                                }

                            </div>
                            <FormikHandler data={twofaErrors} reset={push !== null || resetForm}/>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </>
    )
})

export default TwoFa
