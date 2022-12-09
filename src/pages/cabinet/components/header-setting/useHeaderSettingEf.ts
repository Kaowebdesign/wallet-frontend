// Core
import {useSelector, useDispatch} from 'react-redux'
import {settingsCabinetSelect} from "selectors/cabinet"
// Action
import {settingsCabinetAction} from "actions/cabinet"


export const useHeaderSettingEf = () => {
    const dispatch = useDispatch()
    const tab = useSelector(settingsCabinetSelect.tab)

    const handlerTab = (value: string) => {
        dispatch(settingsCabinetAction.set_tab(value))
    }

    return {
        tab, handlerTab
    }
}
