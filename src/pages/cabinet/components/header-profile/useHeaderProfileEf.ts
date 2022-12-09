// Core
import {useDispatch, useSelector} from 'react-redux'
// Actions
import {authActions} from 'actions'
// Selector
import {profileSelect} from "selectors/cabinet"
import {authSelect} from "selectors"
// Action
import {profileActions} from "actions/cabinet"


export const useHeaderProfileEf = () => {
    const dispatch = useDispatch()
    const tab = useSelector(profileSelect.tab)
    const loadLogout = useSelector(authSelect.load_logout)

    const handlerTab = (value: string) => {
        dispatch(profileActions.set_tab(value))
    }

    const handlerClick = () => {
        dispatch(authActions.watch_logout())
    }

    return {
        tab, loadLogout,
        handlerClick, handlerTab,
    }
}
