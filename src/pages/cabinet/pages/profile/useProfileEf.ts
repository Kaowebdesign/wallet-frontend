// Core
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Selector
import { profileSelect, cabinetMainSelect } from 'selectors/cabinet'
// Action
import {profileActions} from "actions/cabinet"
// Utils
import { config } from 'utils'


export const useProfileEf = () => {
    const dispatch = useDispatch()
    const phoneCodes = useSelector(profileSelect.phone_codes)
    const menuMode = useSelector(cabinetMainSelect.menu_mode)
    const tab = useSelector(profileSelect.tab)
    const loadFirst = useSelector(profileSelect.load_first)

    useEffect(() => {
        if ( tab === config.cabinet.profile.tab[0] && menuMode === 'profile' && !loadFirst.includes(config.cabinet.profile.tab[0])) {
            dispatch(profileActions.update_load_first(config.cabinet.profile.tab[0]))
            dispatch(profileActions.watch_account(phoneCodes.length === 0))
        }
        else if (tab === config.cabinet.profile.tab[1] && menuMode === 'profile' && !loadFirst.includes(config.cabinet.profile.tab[1])) {
            dispatch(profileActions.update_load_first(config.cabinet.profile.tab[1]))
            dispatch(profileActions.watch_address_table({}))
        } else if (tab === config.cabinet.profile.tab[2] && menuMode === 'profile' ) {
            dispatch(profileActions.watch_activity_table({}))
        }
    }, [dispatch, tab, menuMode])

    return {
        tab,
    }
}
