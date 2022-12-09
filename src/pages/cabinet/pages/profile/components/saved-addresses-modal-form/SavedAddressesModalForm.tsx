// Core
import React, {FC, memo} from 'react'
import {Formik} from "formik"
import {Form, Input} from "formik-antd"
import * as Yup from "yup"
import {Select as SelectFormik} from "formik-antd/lib/select"
// Ant Components
import {Button} from 'antd'
// Hook
import {useSavedAddressesModalFormEf} from './useSavedAddressesModalFormEf'
// Utils
import {config} from "utils"
// Components
import { FormikHandler } from 'components'


type PropsType = {
    children?: never
    id: string | null
    mode: boolean
}

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required'),
    wallet_address: Yup.string()
        .required('Required'),
    currency_id: Yup.string()
        .required('Required'),
})

const SavedAddressesModalForm: FC<PropsType> = memo(({id, mode}) => {
    const {
        init, currencyListCrypto, loadAddressTableModalForm, errorAddressTableModalForm,
        handlerEdit, handlerAdd,
    } = useSavedAddressesModalFormEf(id, mode)

    return (<>
        {
            init && (
                <Formik onSubmit={id !== null ? handlerEdit : handlerAdd} initialValues={init} validationSchema={SignupSchema}>
                    {({errors, values, touched}) => (
                        <Form className={'profile__addresses__modal_form'}>

                            <Form.Item
                                name={'currency_id'}
                                label={'Assets name'}
                                labelCol={{span: 24}}
                                wrapperCol={{span: 24}}
                            >
                                <SelectFormik
                                    name={'currency_id'}
                                    style={{ width: '100%' }}
                                    className={'input-select'}
                                    size={"middle"}
                                    placeholder={'Assets name'}
                                    disabled={loadAddressTableModalForm}
                                >
                                    {
                                        currencyListCrypto && currencyListCrypto.map(elem => (
                                            <SelectFormik.Option key={elem.full_name} value={elem.id} >
                                                <div className={'profile__addresses__modal_form__currency'}>
                                                    <img width={20} src={config.app.apiURL + elem.icon} alt={`${elem.full_name} icon`} />
                                                    {elem.full_name}
                                                </div>
                                            </SelectFormik.Option>
                                        ))
                                    }
                                </SelectFormik>
                            </Form.Item>

                            <Form.Item
                                name={'wallet_address'}
                                label={'Wallet Address'}
                                labelCol={{span: 24}}
                                wrapperCol={{span: 24}}
                            >
                                <Input
                                    disabled={loadAddressTableModalForm}
                                    className={'input-item'}
                                    size={'middle'}
                                    name='wallet_address'
                                    placeholder={'Wallet Address'}
                                />
                            </Form.Item>

                            <Form.Item
                                name={'name'}
                                label={'Recipient Name'}
                                labelCol={{span: 24}}
                                wrapperCol={{span: 24}}
                            >
                                <Input
                                    disabled={loadAddressTableModalForm}
                                    className={'input-item'}
                                    size={'middle'}
                                    name='name'
                                    placeholder={'Recipient Name'}
                                />
                            </Form.Item>

                            <Button
                                style={{marginTop: 16, width: '100%'}}
                                type="primary"
                                htmlType="submit"
                                loading={loadAddressTableModalForm}
                            >
                                {
                                    id === null ? 'Create' : 'Save changes'
                                }
                            </Button>
                            <FormikHandler data={errorAddressTableModalForm} />
                        </Form>
                    )}
                </Formik>
            )
        }
    </>)
})

export default SavedAddressesModalForm
