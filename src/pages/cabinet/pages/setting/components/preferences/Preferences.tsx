// Core
import React, {FC, memo} from 'react'
import {Formik} from 'formik'
// Ant Components
import { Select, Button, Skeleton, Empty } from 'antd'
import { Form } from 'formik-antd'
// Ant Icon
import {} from '@ant-design/icons'
// Hook
import {usePreferencesEf} from './usePreferencesEf'
// Elements
import {Typography} from "elements";
import {NodeError} from "pages/cabinet/elements"


type PropsType = {
    children?: never
}

const SettingPreferences: FC<PropsType> = memo(() => {
    const {
        userTimezones, currency, currencyIndex, timezoneIndex, languages,
        currentLanguage, changedValues, handleChangeUserTimezone, loadSettings,
        handleChangeUserCurrency, handleChangeLanguage, handleSubmit, handleRequestData
    } = usePreferencesEf()

    const { Option } = Select;

    return (
        <div className={'cab-settings'}>
            <div className={'cab-settings__title-wrap'}>
                <Typography type={'text-16'} weight={'medium'} color={'primary'}>Preferences</Typography>
            </div>
            {
                !loadSettings && (!currencyIndex || !currentLanguage) ?
                    <>
                        <NodeError withHandler={true} handler={() => handleRequestData()} />
                    </>
                    :
                    <div className={'cab-settings__wrap'}>
                        <div className={'cab-settings__item'}>
                            <div className={'cab-settings__label'}>
                                <Typography type={'text-16'} color={'primary'}>Account curency</Typography>
                            </div>
                            {
                                loadSettings ?
                                    <Skeleton.Input active size={'default'} className={'cab-settings__skeleton-input'}/>
                                    :
                                    currency && currencyIndex &&
                                    <Select onChange={handleChangeUserCurrency} value={currencyIndex.toString()}
                                            style={{width: 320}} className={'cab-settings__select input-select'}>
                                        {currency.map((currency, key) => <Option value={currency.id.toString()}
                                                                                 key={key}>{currency.name + '   ' + currency.full_name}</Option>)}
                                    </Select>

                            }
                        </div>
                        <div className={'cab-settings__item'}>
                            <div className={'cab-settings__label'}>
                                <Typography type={'text-16'} color={'primary'}>Time Zone</Typography>
                            </div>
                            {
                                loadSettings ?
                                    <Skeleton.Input active size={'default'} className={'cab-settings__skeleton-input'}/>
                                    :
                                    userTimezones &&
                                    (
                                        timezoneIndex === -1 ?
                                            <Select showSearch style={{width: 320}} onChange={handleChangeUserTimezone}
                                                    optionFilterProp="children"
                                                    filterOption={(input, data) =>
                                                        data?.children.toLowerCase().indexOf(input.toLowerCase()) !== -1
                                                    }
                                                    className={'cab-settings__select input-select'}>
                                                {userTimezones.map((timezone, key) => <Option value={timezone.name}
                                                                                              key={key}>{timezone.value}</Option>)}
                                            </Select>
                                            :
                                            <Select showSearch value={userTimezones[timezoneIndex].name} style={{width: 320}}
                                                    onChange={handleChangeUserTimezone}
                                                    optionFilterProp="children"
                                                    filterOption={(input, data) =>
                                                        data?.children.toLowerCase().indexOf(input.toLowerCase()) !== -1
                                                    }
                                                    className={'cab-settings__select input-select'}>
                                                {userTimezones.map((timezone, key) => <Option value={timezone.name}
                                                                                              key={key}>{timezone.value}</Option>)}
                                            </Select>
                                    )
                            }
                        </div>
                        <div className={'cab-settings__item'}>
                            <div className={'cab-settings__label'}>
                                <Typography type={'text-16'} color={'primary'}>Language</Typography>
                            </div>
                            {
                                loadSettings ?
                                    <Skeleton.Input active size={'default'} className={'cab-settings__skeleton-input'}/>
                                    :
                                    languages && currentLanguage &&
                                    <Select value={currentLanguage} onChange={handleChangeLanguage} style={{width: 320}}
                                            className={'cab-settings__select input-select'}>
                                        {languages.map((language, key) => <Option value={language.lang}
                                                                                  key={key}>{language.name}</Option>)}
                                    </Select>
                            }
                        </div>
                        <Button type="primary" size={"middle"} className={'cab-settings__button'} onClick={handleSubmit}
                                disabled={!changedValues}>
                            Save changes
                        </Button>
                    </div>
            }
        </div>
    )
})

export default SettingPreferences
