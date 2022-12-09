// Core
import {ChangeEvent, useEffect} from "react"
import {useSelector, useDispatch} from 'react-redux'
// Action
import {profileActions} from 'actions/cabinet'
import {appActions} from 'actions'
// Selector
import {authSelect} from "selectors"
import {profileSelect} from "selectors/cabinet"


export const useAccountDetailsEf = () => {
    const dispatch = useDispatch()
    const user = useSelector(authSelect.user)
    const loadAvatar = useSelector(profileSelect.load_avatar)
    const loadAccount = useSelector(profileSelect.load_account)
    const info = useSelector(profileSelect.info)
    const errorAvatar = useSelector(profileSelect.error_avatar)

    const handlerUpload = (val: ChangeEvent<HTMLInputElement>) => {

        dispatch(profileActions.watch_update_avatar(val.target.files && val.target.files[0]))
    }

    const handlerReload = () => {
        dispatch(profileActions.watch_account(true))
    }


    useEffect(() => {
         if (typeof errorAvatar === "string") {
             dispatch(appActions.set_alert({
                 type: "error",
                 header: 'error',
                 text: errorAvatar,
             }))

             dispatch(profileActions.error_avatar(null))
         }
    }, [dispatch, errorAvatar])

    return {
        user, loadAvatar, loadAccount, info,
        handlerUpload, handlerReload,
    }
}
