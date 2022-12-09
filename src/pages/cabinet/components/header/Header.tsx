// Core
import React, {FC, memo} from 'react'
import clsx from "clsx"
// Ant Components
import {Avatar, Badge, Layout, Popover, Select} from 'antd'
// Ant Icons
import IconCreator, { BellOutlined, UserOutlined } from '@ant-design/icons'
// Icons
import {Moon, ArrowLine} from 'icons'
// Element
import {Typography} from 'elements'
// Style
import './Header.scss'
// Hook
import {useHeaderEf} from './useHeaderEf'
// Components
import {HeaderProfile, HeaderSetting, Notification} from '../index'
// Utils
import {config} from "utils"
// Types
import {MenuList} from 'types/cabinet/cabinet-main-type'


type PropsType = {
    children?: never
}

const { Option } = Select

const getHeaderPage = (mode: MenuList) => {
    switch(mode) {
        case "profile": return <HeaderProfile/>
        case "setting": return <HeaderSetting/>
        default: return null
    }
}

const Header: FC<PropsType> = memo(() => {
    const {
        menuMode, user, notificationMode,
        handlerAssets, handlerProfile,
    } = useHeaderEf()

    const HeaderPage = menuMode ? getHeaderPage(menuMode) : ''

    return (
        <Layout.Header className="header-cab">
            <div className={'header-cab__wrapper'}>
                <Moon disabled className={clsx('header-cab__item')} />

                <Notification>
                    <span className={clsx('header-cab__notification', {'header-cab__notification_active': notificationMode})}>
                        <Badge count={0}>
                            <BellOutlined className={clsx('header-cab__item header-cab__icon')} style={{fontSize: 18}} />
                        </Badge>
                    </span>
                </Notification>

                <Select
                    className={'header-cab__item header-cab__select'}
                    value={'def'}
                    style={{ width: 167}}
                    onChange={handlerAssets}
                >
                    <Option value="def" className={'header-cab__def-select'}>New transaction</Option>
                    <Option value="send" className={'header-cab__option'}>
                        <ArrowLine className={'header-cab__option-arrow'} />
                        Send Assets
                    </Option>
                    <Option value="receive" className={'header-cab__option'}>
                        <ArrowLine className={'header-cab__option-arrow revers'} />
                        Receive Assets
                    </Option>
                </Select>

                <div className={clsx('header-cab__profile', {'header-cab__profile_active': menuMode === 'profile'})} onClick={handlerProfile}>
                    <Avatar
                        className={'header-cab__item header-cab__avatar'}
                        size={32}
                        icon={ <UserOutlined className={'header-cab__avatar-icon'} />}
                        src={user && user.avatar ? config.app.apiURL + user.avatar : '' }
                    />

                    <Typography type={"text-16"} className={'header-cab__name'} color={menuMode === 'profile' ? 'secondary' : 'primary'} >
                        {user?.login}
                    </Typography>

                </div>
            </div>

            <div className={clsx('header-cab__page-header', {'show': HeaderPage})}>
                {HeaderPage ? HeaderPage : ''}
            </div>
        </Layout.Header>
    )
})

export default Header
