// Core
import React, {FC, memo} from 'react'
import {Formik} from "formik"
import * as Yup from "yup"
// Ant Components
import {Button, Col, Input as InputAnt, Row, Skeleton} from 'antd'
import {Form, Input, Select} from "formik-antd"
// Component
import {FormikHandler} from "components"
// Hook
import {useAccountDetailsFormAddressEf} from './useAccountDetailsFormAddressEf'


type PropsType = {
    children?: never
}

const SignupSchema = Yup.object().shape({
    country: Yup.string()
        .required('Required'),
})

const AccountDetailsFormAddress: FC<PropsType> = memo(() => {
    const {
        loadAccount, loadAddress, errorAddress, address, disabled, phoneCodes,
        handlerSubmit, handlerDisabled,
    } = useAccountDetailsFormAddressEf()

    return (<>
        {
            loadAccount
                ? (<>
                    <div className='c-skeleton__input'>
                        <Skeleton.Input active className='c-skeleton__input_label' />
                        <Skeleton.Input active className='c-skeleton__input_field' />
                    </div>
                    <div className='c-skeleton__input'>
                        <Skeleton.Input active className='c-skeleton__input_label' />
                        <Skeleton.Input active className='c-skeleton__input_field' />
                    </div>
                    <div className='c-skeleton__input'>
                        <Skeleton.Input active className='c-skeleton__input_label' />
                        <Skeleton.Input active className='c-skeleton__input_field' />
                    </div>
                    <div className='c-skeleton__input'>
                        <Skeleton.Input active className='c-skeleton__input_label' />
                        <Skeleton.Input active className='c-skeleton__input_field' />
                    </div>
                    <div className='c-skeleton__input'>
                        <Skeleton.Input active className='c-skeleton__input_label' />
                        <Skeleton.Input active className='c-skeleton__input_field' />
                    </div>
                    <Skeleton.Button active style={{width: 120, marginTop: 8}}/>
                </>)
                : (
                    <Formik onSubmit={handlerSubmit} initialValues={address} validationSchema={SignupSchema}>
                        {({errors, values, touched}) => (
                            <Form className={'profile__account__form__address__content'}>
                                <Form.Item
                                    name={'country'}
                                    label={'Country'}
                                    labelCol={{span: 24}}
                                    wrapperCol={{span: 24}}
                                >
                                    <Select
                                        showSearch
                                        onChange={(e) => handlerDisabled({...values, country: e})}
                                        disabled={loadAddress}
                                        className={'input-select rotate-false profile__account__form__info__content_select'}
                                        size={'middle'}
                                        name='country'
                                        placeholder={'Country'}
                                    >
                                        {
                                            phoneCodes.map(elem => (
                                                <Select.Option key={elem.name} value={elem.name}>
                                                    {elem.name}
                                                </Select.Option>
                                            ))
                                        }
                                    </Select>
                                </Form.Item>

                                <InputAnt.Group>
                                    <Row gutter={20}>
                                        <Col span={15}>
                                            <Form.Item
                                                label={'State & Region'}
                                                labelCol={{span: 24}}
                                                wrapperCol={{span: 24}}
                                                name={'state'}
                                            >
                                                <Input
                                                    onChange={(e) => handlerDisabled({...values, state: e.target.value})}
                                                    disabled={loadAddress}
                                                    name={'state'}
                                                    className={'input-item'}
                                                    size={'middle'}
                                                    placeholder={'Region'}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={9}>
                                            <Form.Item
                                                name={'zip'}
                                                label={'ZIP'}
                                                labelCol={{span: 24}}
                                                wrapperCol={{span: 24}}
                                            >
                                                <Input
                                                    onChange={(e) => handlerDisabled({...values, zip: e.target.value})}
                                                    disabled={loadAddress}
                                                    name={'zip'}
                                                    className={'input-item'}
                                                    size={'middle'}
                                                    placeholder={'ZIP Code'}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </InputAnt.Group>

                                <Form.Item
                                    name={'city'}
                                    label={'City'}
                                    labelCol={{span: 24}}
                                    wrapperCol={{span: 24}}
                                >
                                    <Input
                                        onChange={(e) => handlerDisabled({...values, city: e.target.value})}
                                        disabled={loadAddress}
                                        className={'input-item'}
                                        size={'middle'}
                                        name='city'
                                        placeholder={'City'}
                                    />
                                </Form.Item>

                                <Form.Item
                                    name={'address'}
                                    label={'Street Address'}
                                    labelCol={{span: 24}}
                                    wrapperCol={{span: 24}}
                                >
                                    <Input
                                        onChange={(e) => handlerDisabled({...values, address: e.target.value})}
                                        disabled={loadAddress}
                                        className={'input-item'}
                                        size={'middle'}
                                        name='address'
                                        placeholder={'Street Address'}
                                    />
                                </Form.Item>

                                <Form.Item
                                    name={'apartment'}
                                    label={'Address line 1'}
                                    labelCol={{span: 24}}
                                    wrapperCol={{span: 24}}
                                >
                                    <Input
                                        onChange={(e) => handlerDisabled({...values, apartment: e.target.value})}
                                        disabled={loadAddress}
                                        className={'input-item'}
                                        size={'middle'}
                                        name='apartment'
                                        placeholder={'Apartment, suite, unit, floor, etc.'}
                                    />
                                </Form.Item>

                                <Form.Item
                                    name={'second_address'}
                                    label={'Address line 2'}
                                    labelCol={{span: 24}}
                                    wrapperCol={{span: 24}}
                                >
                                    <Input
                                        onChange={(e) => handlerDisabled({...values, second_address: e.target.value})}
                                        disabled={loadAddress}
                                        className={'input-item'}
                                        size={'middle'}
                                        name='second_address'
                                        placeholder={'Apartment, suite, unit, floor, etc.'}
                                    />
                                </Form.Item>

                                <Button style={{marginTop: 16}} type="primary" htmlType="submit" loading={loadAddress} disabled={disabled}>
                                    Save changes
                                </Button>
                                <FormikHandler data={errorAddress}/>
                            </Form>
                        )}
                    </Formik>
                )
        }
    </>)
})

export default AccountDetailsFormAddress
