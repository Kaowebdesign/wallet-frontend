// Core
import React, {FC, memo} from 'react'
import {Formik} from "formik";
import * as Yup from "yup";
// Ant Components
import {Button, Image, Modal, Table} from 'antd'
import MaskedInput from 'antd-mask-input'
import {Form, Input} from "formik-antd"
// Ant Icon
import {LoadingOutlined} from '@ant-design/icons'
// Hook
import {useCloseAccountEf} from './useCloseAccountEf'
// Styles
import './CloseAccount.scss'
// Elements
import {Typography} from "elements";
// Assets
import errorImage from "assets/img/illustration_delete.png";
// Types
import {IWalletDataItem} from "types/cabinet/settings-type";
import {NavLink} from "react-router-dom";
import {FormikHandler} from "components";
import {config} from "../../../../../../../../utils";


type PropsType = {
    children?: never
}

const CardNumberScheme = Yup.object().shape({
    card: Yup.string()
        .nullable()
        .required('Required')
})

const CloseAccountScheme = Yup.object().shape({
    card: Yup.string()
        .nullable()
        .required('Required'),
    name: Yup.string()
        .required('Required'),
    password: Yup.string()
        .required('Required'),
    descr: Yup.string()
})

const CloseAccount: FC<PropsType> = memo(() => {
    const {
        isCloseAccModal, isCloseFull, walletData, currentCurrency,  validCard, loadForm, closeAccountError,
        handlerToggleCloseAccount, handlerToggleCloseFullAccount, handlerBlurCardNumber, handlerSubmitCardNUmber
    } = useCloseAccountEf()

    const { Column } = Table;

    const init = {
        card: '',
        name: '',
        descr: '',
        password: ''
    }

    return (
        <>
            <div className={'cab-settings__title-wrap'}>
                <Typography type={'text-16'} weight={'medium'} color={'primary'}>Close account</Typography>
            </div>
            <div className={'cab-settings__item'}>
                <Typography type={'text-16'} color={'primary'}>Withdraw funds and close your account</Typography>
            </div>
            <Button danger type="text" onClick={handlerToggleCloseAccount} className={'cancel'}>
                Close Account
            </Button>
            <Modal visible={isCloseAccModal} centered onCancel={handlerToggleCloseAccount} footer={false} className={'cab-settings__closeacc-modal'}>
                <Image width={108} height={108} src={errorImage} preview={false} className={'cab-settings__error-img'}/>
                <Typography type={'title-18'} weight={'semibold'} color={'primary'} className={'cab-settings__closeacc-title'}>Close your account</Typography>
                <Typography type={'text-16'} color={'primary'}>Do you really want to close your account? All your assets will be withdrawn to a bank card.</Typography>
                <div className={'cab-settings__closeacc-btns'}>
                    <Button type="default" onClick={handlerToggleCloseAccount} className={'cab-settings__cancel cab-settings__closeacc-button default'}>
                        Cancel
                    </Button>
                    <Button type="primary" onClick={handlerToggleCloseFullAccount} danger className={'cab-settings__closeacc-button danger'}>
                        Close account
                    </Button>
                </div>
            </Modal>
            <Modal visible={isCloseFull} closable={false} onCancel={handlerToggleCloseFullAccount} title={false} footer={false} width={'100%'} wrapClassName={'close-account__modal-wrap'}>
                <div className={'close-account__header'}>
                    <div className="close-account__container close-account__header-container">
                        <Typography type={'text-16'} weight={'medium'} color={'primary'}>Close account</Typography>
                        <a href={'#'} className={'close-account__header-close'} onClick={handlerToggleCloseFullAccount}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.15591 7.99944L15.0153 1.01507C15.1135 0.898996 15.0309 0.722656 14.8791 0.722656H13.0979C12.993 0.722656 12.8925 0.769531 12.8233 0.849888L7.99073 6.61105L3.15814 0.849888C3.09117 0.769531 2.99073 0.722656 2.88358 0.722656H1.10233C0.950549 0.722656 0.867959 0.898996 0.966173 1.01507L6.82555 7.99944L0.966173 14.9838C0.944173 15.0097 0.930058 15.0413 0.925505 15.075C0.920953 15.1086 0.926153 15.1429 0.940489 15.1737C0.954825 15.2045 0.977695 15.2305 1.00638 15.2487C1.03507 15.2669 1.06837 15.2764 1.10233 15.2762H2.88358C2.9885 15.2762 3.08894 15.2294 3.15814 15.149L7.99073 9.38784L12.8233 15.149C12.8903 15.2294 12.9907 15.2762 13.0979 15.2762H14.8791C15.0309 15.2762 15.1135 15.0999 15.0153 14.9838L9.15591 7.99944Z" fill="#332E54"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className={'close-account__body'}>
                    <div className="close-account__container">
                        <div className={'cab-settings__title-wrap'}>
                            <Typography type={'text-16'} weight={'medium'} color={'primary'}>My wallets</Typography>
                        </div>
                        {
                            <Table
                                dataSource={walletData}
                                pagination={false}
                                className={'base-table base-table__wallets'}
                                summary={(pageData) => {
                                    let totalValue: number = 0;

                                    pageData.forEach(({value}) => {
                                        totalValue += +value;
                                    });

                                    return (
                                        <>
                                            <Table.Summary.Row>
                                                <Table.Summary.Cell index={0}></Table.Summary.Cell>
                                                <Table.Summary.Cell index={1}>Total value:</Table.Summary.Cell>
                                                <Table.Summary.Cell index={2} colSpan={2}>
                                                    {currentCurrency?.sign} {totalValue}
                                                </Table.Summary.Cell>
                                            </Table.Summary.Row>
                                        </>
                                    )
                                }}
                            >
                                <Column
                                    title={'Assets Name'}
                                    dataIndex={'name'}
                                    fixed={'left'}
                                    render={ (name, row: IWalletDataItem) => (
                                        <div className={'base-table__icon-wrap'}>
                                            <Image src={config.app.apiURL+row.icon} preview={false} className={'base-table__icon'} />
                                            {name}
                                        </div>
                                    )}
                                />
                                <Column
                                    title={'Balance'}
                                    dataIndex={'balance'}
                                    key={'balance'}
                                    fixed={true}
                                    width={200}
                                />
                                <Column
                                    title={`Value, ${currentCurrency?.name}`}
                                    dataIndex={'value'}
                                    key={'value'}
                                    fixed={true}
                                    width={200}
                                />
                            </Table>
                        }
                    </div>
                    <div className="close-account__container">
                        <div className={'close-account__bottom'}>
                            <div className={'cab-settings__title-wrap'}>
                                <Typography type={'text-16'} weight={'medium'} color={'primary'}>Cart for withraw</Typography>
                            </div>
                            <div className={'close-account__bottom-wrap'}>
                                <div className={'close-account__card-wrap'}>
                                    <Formik onSubmit={handlerSubmitCardNUmber} initialValues={init} validationSchema={CloseAccountScheme} autoComplete={'off'}>
                                        {({errors, values, touched, setFieldValue}) => (
                                            <Form>
                                                <Form.Item
                                                    name={'card'}
                                                    label={'Card Number'}
                                                    labelCol={{span: 24}}
                                                    wrapperCol={{span: 24}}
                                                >
                                                    <MaskedInput
                                                        mask="1111 1111 1111 1111"
                                                        placeholder={'XXXX XXXX XXXX XXXX'}
                                                        name="card"
                                                        className={'input-item medium'}
                                                        onChange={e => {
                                                            const value = e.target.value || ''
                                                            setFieldValue('card', value)
                                                            handlerBlurCardNumber(e.target.value)
                                                        }}
                                                    />
                                                </Form.Item>

                                                <Form.Item
                                                    name={'name'}
                                                    label={'Cardholder Name'}
                                                    labelCol={{span: 24}}
                                                    wrapperCol={{span: 24}}
                                                >
                                                    <Input
                                                        disabled={loadForm}
                                                        className={'input-item medium'}
                                                        size={'middle'}
                                                        name='name'
                                                        placeholder={'Cardholder Name'}
                                                    />
                                                </Form.Item>

                                                <Form.Item
                                                    name={'descr'}
                                                    label={'Reasons for closing account (optional)'}
                                                    labelCol={{span: 24}}
                                                    wrapperCol={{span: 24}}
                                                >
                                                    <Input.TextArea
                                                        disabled={loadForm}
                                                        className={'input-item close-account__textarea'}
                                                        size={'middle'}
                                                        name='descr'
                                                        placeholder={'Describe reasons for closing account'}
                                                    />
                                                </Form.Item>

                                                <Form.Item
                                                    name={'password'}
                                                    label={'Enter password for confirmation'}
                                                    labelCol={{span: 24}}
                                                    wrapperCol={{span: 24}}
                                                    style={{marginBottom: 40}}
                                                >
                                                    <Input.Password
                                                        disabled={loadForm}
                                                        className={'input-item medium'}
                                                        size={'middle'}
                                                        name='password'
                                                        placeholder={'Enter password'}
                                                    />
                                                </Form.Item>

                                                <div className={'close-account__footer'}>
                                                    <div className="close-account__container close-account__footer-container">
                                                        <Button htmlType={'submit'} danger className={'cab-settings__closeacc-button danger'} disabled={!validCard || !values.name || !values.password}>
                                                            Close account
                                                        </Button>
                                                    </div>
                                                </div>

                                                <FormikHandler data={closeAccountError}/>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                                <div className={'close-account__description'}>
                                    <Typography type={'text-16'} color={'primary'}>You will be able to withdraw all your funds, and then your CatchCoin account will be permanently closed.</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
})

export default CloseAccount
