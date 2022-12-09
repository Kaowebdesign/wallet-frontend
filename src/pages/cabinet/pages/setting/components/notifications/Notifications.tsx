// Core
import React, {FC, memo} from 'react'
// Ant Components
import { Switch, Skeleton } from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Hook
import {useNotificationsEf} from './useNotificationsEf'
// Elements
import {Typography} from "elements";
import {NodeError} from "pages/cabinet/elements"
// Style
import './Notifications.scss'


type PropsType = {
    children?: never
}

const SettingNotifications: FC<PropsType> = memo(() => {
    const {cryptoSelected, infoSelected, loadSettings, onChangeCrypto, onChangeInfo, handleRequestData} = useNotificationsEf()

    return (
        <>
            <div className={'cab-settings__title-wrap'}>
                <Typography type={'text-16'} weight={'medium'} color={'primary'}>Notifications</Typography>
            </div>
            {
                !loadSettings && (cryptoSelected == null || infoSelected == null) ?
                    <NodeError handler={() => handleRequestData()} withHandler={true}/>
                :
                    <div className={'cab-notifications'}>
                        <div className={'cab-notifications__wrap'}>
                            <div className={'cab-notifications__item'}>
                                <Typography type={'text-16'} color={'primary'}>Get notified when I send or receive
                                    crypto:</Typography>
                                {
                                    loadSettings ?
                                        <Skeleton.Button active size={'small'} shape={'round'}
                                                         className={'cab-settings__skeleton-switch'}/>
                                        :
                                        cryptoSelected !== null && <Switch checked={cryptoSelected} onChange={onChangeCrypto}
                                                                  className={'cab-notifications__switch'}/>
                                }
                            </div>
                            <div className={'cab-notifications__item'}>
                                <Typography type={'text-16'} color={'primary'}>Get notified when there are recommended
                                    action for me account:</Typography>
                                {
                                    loadSettings ?
                                        <Skeleton.Button active size={'small'} shape={'round'}
                                                         className={'cab-settings__skeleton-switch'}/>
                                        :
                                        infoSelected !== null && <Switch checked={infoSelected} onChange={onChangeInfo}
                                                                  className={'cab-notifications__switch'}/>
                                }
                            </div>
                        </div>
                    </div>

            }
        </>
    )
})

export default SettingNotifications
