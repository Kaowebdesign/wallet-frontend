// Core
import {useSelector, useDispatch} from 'react-redux'
// Actions
import {authActions} from 'actions'
import {cabinetMainActions} from 'actions/cabinet'
// Selector
import {authSelect} from 'selectors'
import {cabinetMainSelect} from 'selectors/cabinet'
// Types
import {ModalAssets} from 'types/cabinet/cabinet-main-type'



export const useHeaderEf = () => {
    const dispatch = useDispatch()
    const menuMode = useSelector(cabinetMainSelect.menu_mode)
    const notificationMode = useSelector(cabinetMainSelect.notification_mode)
    const user = useSelector(authSelect.user)

    const handlerLogOut = () => {
        dispatch(authActions.watch_logout())
    }

    const handlerAssets = (value: ModalAssets) => {
        if (value === 'send') {
            dispatch(cabinetMainActions.set_send_asset_mode(true))
        } else if (value === 'receive') {
            dispatch(cabinetMainActions.set_receive_asset_mode(true))
        }
    }

    const handlerProfile = () => {
        dispatch(cabinetMainActions.set_menu_mode('profile'))
    }

    return {
        menuMode, user, notificationMode,
        handlerLogOut, handlerAssets, handlerProfile,
    }
}
