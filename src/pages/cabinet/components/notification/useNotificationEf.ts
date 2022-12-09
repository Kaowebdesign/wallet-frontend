// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Action
import {cabinetMainActions} from "actions/cabinet"
// Selector
import cabinetMainSelect from 'selectors/cabinet/cabinet-main-selector'


export const useNotificationEf = () => {
    const dispatch = useDispatch()
    const notificationMode = useSelector(cabinetMainSelect.notification_mode)

    const handlerNotification = () => {
        dispatch(cabinetMainActions.set_notification_mode(!notificationMode))
    }

    return {
        notificationMode, handlerNotification
    }
}
