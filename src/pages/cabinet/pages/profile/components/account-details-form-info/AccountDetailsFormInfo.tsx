// Core
import React, {FC, memo, useState} from 'react'
import {Formik} from "formik"
import * as Yup from "yup"
import clsx from "clsx"
// Ant Components
import {Select, Button , Input as InputAnt, Row, Col, Skeleton} from 'antd'
import {Form, Input, Select as SelectFormik} from "formik-antd"
// Component
import {FormikHandler} from 'components'
// Element
import {Typography} from 'elements'
// Hook
import {useAccountDetailsFormInfoEf} from './useAccountDetailsFormInfoEf'
// Utils
import {config} from 'utils'
// Type
import {TPhoneCodes} from 'types/cabinet/profile'


type PropsType = {
    children?: never
}

type TNumberCode = {
    value: string
    handlerChange: (value: string) => void
    list: TPhoneCodes[]
    disabled?: boolean
}

const SignupSchema = Yup.object().shape({
    first_name: Yup.string()
        .required('Required'),
    last_name: Yup.string()
        .required('Required'),
    login: Yup.string()
        .required('Required'),
    day: Yup.string()
        .matches(/^(3[01]|[12][0-9]|[1-9])$/, '1 to 31'),
    year: Yup.string()
        .min(4, 'Min 4 symbol')
        .matches(/^([1-2][09][0-9][0-9])$/, 'Min year 1900')
})


const Option = Select.Option

const NumberCode:FC<TNumberCode> = memo(({disabled = false, value, list, handlerChange}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState('')

    const handlerOpen = (state: boolean) => setIsOpen(state)

    return (
        <Select
            showSearch
            disabled={disabled}
            value={value}
            onChange={handlerChange}
            className={clsx('select-after', {'profile__account__form__info__content_phone__select_open': isOpen})}
            dropdownMatchSelectWidth={280}
            dropdownClassName={'profile__account__form__info__content_phone_drop'}
            onDropdownVisibleChange={handlerOpen}
            showArrow={!isOpen}
            searchValue={search}
            filterOption={(input, option) => {
                if (option && option.key && typeof option.key === "string" && option.key.match(input.toLocaleLowerCase())) {
                    return true
                } else if (option && option.title && option.title.match(input.toLocaleLowerCase())) {
                    return true
                } else {
                    return false
                }
            }}
            onSearch={(value: string) => {
                const val = value.match(/\w/g)
                const search = val && val.length > 0 ? val.join('') : ''

                setSearch(search)
            }}
        >
            {list.map(elem => (
                <Option key={elem.name.toLocaleLowerCase()} value={elem.id} title={elem.dial}>
                    <img className="profile__account__form__info__content_flag" src={`${config.app.apiURL}${elem.flag}`} alt=""/>
                    <Typography type={"text-16"} color={"primary"}>
                        {elem.name}<span className={'profile__account__form__info__content_code'}> +{elem.dial} </span>
                    </Typography>
                </Option>
            ))}
        </Select>
    )
})

const AccountDetailsFormInfo: FC<PropsType> = memo(() => {
    const {
        info, code, phoneCodes, loadAccount, shadowPhone, valPhone, phoneInput, loadInfo, errorInfo, disabled, prefix,
        handlerSubmit, handlerNumberCodeChange, handlerPhoneFocus, handlerPhoneBluer, handlerPhoneChange, handlerChangeUpdate,
    } = useAccountDetailsFormInfoEf()

    return (
        <>
            {
                loadAccount
                    ? (<>
                        <div className='c-skeleton__input'>
                            <Skeleton.Input active  className='c-skeleton__input_label' />
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
                        <Formik onSubmit={handlerSubmit} initialValues={info} validationSchema={SignupSchema}>
                            {({errors, values, touched}) => (
                                <Form className={'profile__account__form__info__content'}>
                                    <Form.Item
                                        name={'first_name'}
                                        label={'First name'}
                                        labelCol={{span: 24}}
                                        wrapperCol={{span: 24}}
                                    >
                                        <Input
                                            onChange={(event) => handlerChangeUpdate({...values, first_name: event.target.value})}
                                            disabled={loadInfo}
                                            className={'input-item'}
                                            size={'middle'}
                                            name='first_name'
                                            placeholder={'First name'}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name={'last_name'}
                                        label={'Last name'}
                                        labelCol={{span: 24}}
                                        wrapperCol={{span: 24}}
                                    >
                                        <Input
                                            onChange={(event) => handlerChangeUpdate({...values, last_name: event.target.value})}
                                            disabled={loadInfo}
                                            className={'input-item'}
                                            size={'middle'}
                                            name='last_name'
                                            placeholder={'Last name'}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name={'login'}
                                        label={'Login'}
                                        labelCol={{span: 24}}
                                        wrapperCol={{span: 24}}
                                    >
                                        <Input
                                            onChange={(event) => handlerChangeUpdate({...values, login: event.target.value})}
                                            disabled={loadInfo}
                                            className={'input-item'}
                                            size={'middle'}
                                            name='login'
                                            placeholder={'Login'}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name={'birth_date'}
                                        label={'Date of birth'}
                                        labelCol={{span: 24}}
                                        wrapperCol={{span: 24}}
                                    >
                                        <InputAnt.Group className={'profile__account__form__info__content_group'}>
                                            <Row gutter={12}>
                                                <Col span={6}>
                                                    <Form.Item name={'day'}>
                                                        <Input
                                                            onChange={(e) => handlerChangeUpdate({...values, day: e.target.value})}
                                                            disabled={loadInfo}
                                                            name={'day'}
                                                            className={'input-item'}
                                                            size={'middle'}
                                                            placeholder={'Day'}
                                                        />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={10}>
                                                    <Form.Item name={'mouth'}>
                                                        <SelectFormik
                                                            onChange={(e: string) => handlerChangeUpdate({...values, mouth: e})}
                                                            name={'mouth'}
                                                            style={{ width: '100%' }}
                                                            className={'input-select profile__account__form__info__content_select'}
                                                            size={"middle"}
                                                            placeholder={'Month'}
                                                            disabled={loadInfo}
                                                        >
                                                            {
                                                                config.app.months.map(elem => (
                                                                    <Option key={elem.title} value={elem.val}>{elem.title}</Option>
                                                                ))
                                                            }
                                                        </SelectFormik>
                                                    </Form.Item>
                                                </Col>
                                                <Col span={8}>
                                                    <Form.Item name={'year'}>
                                                        <Input
                                                            onChange={(e) => handlerChangeUpdate({...values, year: e.target.value})}
                                                            disabled={loadInfo}
                                                            name={'year'}
                                                            className={'input-item'}
                                                            size={'middle'}
                                                            placeholder={'Year'}
                                                        />
                                                    </Form.Item>

                                                </Col>
                                            </Row>
                                        </InputAnt.Group>
                                    </Form.Item>

                                    <Form.Item
                                        label={'Email'}
                                        name={'email'}
                                        labelCol={{span: 24}}
                                        wrapperCol={{span: 24}}
                                    >
                                        <Input
                                            disabled={true}
                                            name={'email'}
                                            className={'input-item'}
                                            size={'middle'}
                                            placeholder={'example@mail.com'}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name={'phone'}
                                        label={'Phone Number'}
                                        labelCol={{span: 24}}
                                        wrapperCol={{span: 24}}
                                        className={clsx(
                                            'profile__account__form__info__content_phone',
                                            {
                                                'profile__account__form__info__content_phone_focus': shadowPhone,
                                                'phone_disabled': loadInfo,
                                            })
                                        }
                                    >
                                        <Input
                                            ref={phoneInput}
                                            onFocus={handlerPhoneFocus}
                                            onBlur={handlerPhoneBluer}
                                            onChange={(e) => handlerPhoneChange(e, values)}
                                            maxLength={15}
                                            value={valPhone}
                                            prefix={(
                                                <Typography color={"primary"} type={"text-16"}>{prefix}</Typography>
                                            )}
                                            addonBefore={
                                                <NumberCode
                                                    disabled={loadInfo}
                                                    list={phoneCodes}
                                                    value={code}
                                                    handlerChange={handlerNumberCodeChange}
                                                />
                                            }
                                            disabled={loadInfo}
                                            className={'input-item'}
                                            size={'middle'}
                                            name='phone'
                                            placeholder={'(00) 000 00 00'}
                                        />
                                    </Form.Item>

                                    <Button style={{marginTop: 16}} type="primary" htmlType="submit" loading={loadInfo} disabled={disabled}>
                                        Save changes
                                    </Button>
                                    <FormikHandler data={errorInfo}/>
                                </Form>
                            )}
                        </Formik>
                    )
            }
        </>
    )
})

export default AccountDetailsFormInfo
