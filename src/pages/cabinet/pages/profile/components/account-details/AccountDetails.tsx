// Core
import React, {FC, memo} from 'react'
// Ant Components
import {Avatar, Upload, Button, Divider} from 'antd'
// Ant Icon
import {UserOutlined} from '@ant-design/icons'
// Components
import {AccountDetailsFormAddress, AccountDetailsFormInfo} from '../'
// Element
import {Typography} from 'elements'
import {FormContainer, NodeError} from 'pages/cabinet/elements'
// Hook
import {useAccountDetailsEf} from './useAccountDetailsEf'
// Utils
import {config} from 'utils'


type PropsType = {
    children?: never
}

const AccountDetails: FC<PropsType> = memo(() => {
    const {
        user, loadAvatar, loadAccount, info,
        handlerUpload, handlerReload,
    } = useAccountDetailsEf()

    return (<>
        {
            !loadAccount && !info.login.length
                ? (
                    <NodeError handler={handlerReload} withHandler={true} />
                )
                : (
                    <div className={'profile__account'}>
                        <Typography style={{marginBottom: 24}} type={"title-18"} transform={"capitalize"} color={"primary"}>
                            Profile Photo
                        </Typography>

                        <div className={'profile__account__upload'}>
                            <Avatar
                                className={'header-cab__item header-cab__avatar'}
                                size={64}
                                icon={ <UserOutlined className={'header-cab__avatar-icon'} />}
                                src={user && user.avatar ? config.app.apiURL + user.avatar : '' }
                            />
                            <div className={'profile__account__upload_wrapper'}>
                                <Typography type={"text-16"} color={"primary"}>
                                    Upload your photo
                                </Typography>

                                <div className={'profile__account__upload_wrapper_btn'}>
                                    <Button type="default" size={"middle"} loading={loadAvatar}>
                                        <input className={'profile__account__upload_wrapper_btn_input'} type="file" name="file" onChange={handlerUpload} />
                                        Upload
                                    </Button>

                                    <Typography type={"text-16"} color={"gray"}>
                                        Max file size is 2mb
                                    </Typography>
                                </div>
                            </div>
                        </div>

                        <div className={'profile__account__form'}>
                            <FormContainer className={'profile__account__form__info'} title={'Personal Info'}>
                                <AccountDetailsFormInfo/>
                            </FormContainer>
                            <Divider type={"vertical"} style={{height: 604, marginTop: 50}}/>
                            <FormContainer className={'profile__account__form__address'} title={'Registered Address'}>
                                <AccountDetailsFormAddress/>
                            </FormContainer>
                        </div>
                    </div>
                )
        }
    </>)
})

export default AccountDetails
