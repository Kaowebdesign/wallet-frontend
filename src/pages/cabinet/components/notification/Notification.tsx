// Core
import React, {FC, memo} from 'react'
// Ant Components
import {Popover} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './Notification.scss'
// Hook
import {useNotificationEf} from './useNotificationEf'
// Element
import {Typography} from "elements"
// Icon
import {NotNotification} from 'icons'



const Notification: FC = memo(({children}) => {
    const {
        notificationMode, handlerNotification,
    } = useNotificationEf()

    return (
        <Popover
            className={'header-notification'}
            overlayClassName={'header-notification_wrapper'}
            placement="bottomRight"
            trigger="click"
            visible={notificationMode}
            onVisibleChange={handlerNotification}
            title={(
                <div>
                    <Typography type={"title-18"} color={"primary"}>
                        Notification
                    </Typography>
                </div>
            )}
            content={(<>
                <NotNotification/>
                <Typography style={{marginTop: 20}} type={"text-16"} color={"primary"}>
                    No notification
                </Typography>
            </>)}
        >
            {children}
        </Popover>
    )
})

export default Notification
