// Core
import {useSelector, useDispatch} from 'react-redux'
// Action
import {appActions} from 'actions'
// Selector
import {appSelect} from "selectors"


export const useHeaderEf = () => {
    const dispatch = useDispatch()
    const menuMode = useSelector(appSelect.menu_mode)
    const lang = useSelector(appSelect.language)

    const handlerMenuMode = () => dispatch(appActions.set_menu_mode(!menuMode))
    const handlerClickMain = () => dispatch(appActions.set_menu_mode(false))

    return {
        lang,
        handlerMenuMode, handlerClickMain,
    }
}
