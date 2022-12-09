// Core
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Selector
import {cabinetMainSelect} from 'selectors/cabinet'
// Actions
import {cabinetMainActions} from 'actions/cabinet'
// Type
import {MenuList} from 'types/cabinet/cabinet-main-type'


export const useSiderEf = () => {
    const dispatch = useDispatch()
    const menuMode = useSelector(cabinetMainSelect.menu_mode)
    const siderMode = useSelector(cabinetMainSelect.sider_mode)

    const handlerClick = () => {
        dispatch(cabinetMainActions.set_sider_mode(!siderMode))
    }

    const handlerSelect = (value: MenuList) => {
        dispatch(cabinetMainActions.set_menu_mode(value))
    }

    return {
        menuMode, siderMode,
        handlerSelect, handlerClick,

    }
}
