// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Selector
import {appSelect, authSelect} from 'selectors'
import {cabinetMainSelect, profileSelect, settingsCabinetSelect} from 'selectors/cabinet'
// Action
import {authActions} from "actions"
import {cabinetMainActions, profileActions, settingsCabinetAction} from 'actions/cabinet'
// Hooks
import {useRouter, useTimeout} from "hooks"
// Utils
import {config} from 'utils'
// Types
import {MenuList} from 'types/cabinet/cabinet-main-type'


export const useCabinetEf = () => {
    const {query, push} = useRouter<{tab: MenuList, sab_tab: string}>()
    const dispatch = useDispatch()
    const isAuth = useSelector(authSelect.is_auth)
    const lang = useSelector(appSelect.language)
    const menuMode = useSelector(cabinetMainSelect.menu_mode)
    const profileTab = useSelector(profileSelect.tab)
    const settingTab = useSelector(settingsCabinetSelect.tab)
    const autoLogout = useSelector(cabinetMainSelect.auto_logout)

    const [emptyTab, setEmptyTab] = useState(false)

    // useTimeout(() => typeof autoLogout === "number" && autoLogout && dispatch(cabinetMainActions.tick_auto_logout()), 1000)

    useEffect(() => {
        if (query.sab_tab) {
            config.cabinet.profile.tab.includes(query.sab_tab) && dispatch(profileActions.set_tab(query.sab_tab))
            config.cabinet.setting.tab.includes(query.sab_tab) && dispatch(settingsCabinetAction.set_tab(query.sab_tab))
        }

        !config.cabinet.profile.tab.includes(query.sab_tab) && dispatch(profileActions.set_tab(config.cabinet.profile.tab[0]))
        !config.cabinet.setting.tab.includes(query.sab_tab) && dispatch(settingsCabinetAction.set_tab(config.cabinet.setting.tab[0]))
    }, [dispatch])

    useEffect(() => {
        if (isAuth) {
            if (menuMode === 'home') {
                push(`/${lang}/cabinet`)
            } else if (menuMode === 'profile') {

                if (profileTab && [config.cabinet.profile.tab[1], config.cabinet.profile.tab[2]].includes(profileTab)) {
                    push(`/${lang}/cabinet/${menuMode}/${profileTab}`)
                } else {
                    push(`/${lang}/cabinet/${menuMode}`)
                }

            } else if (menuMode === 'setting') {

                if (settingTab && [config.cabinet.setting.tab[1], config.cabinet.setting.tab[2]].includes(settingTab)) {
                    push(`/${lang}/cabinet/${menuMode}/${settingTab}`)
                } else {
                    push(`/${lang}/cabinet/${menuMode}`)
                }

            } else {
                push(`/${lang}/cabinet/${menuMode}`)
            }
        }
    }, [menuMode, lang, isAuth, profileTab, settingTab])

    useEffect(() => {
        const primaryTab = !query.tab
            ? 'home'
            : config.cabinet.main.menu_mode.includes(query.tab)
                ? query.tab
                : null

        if (primaryTab) {
            dispatch(cabinetMainActions.set_menu_mode(primaryTab))
        } else {
            setEmptyTab(true)
        }
        // dispatch(cabinetMainActions.set_auto_logout(5))
    }, [dispatch])


    // useEffect(() => {
    //    if (typeof autoLogout === "number" && !autoLogout) {
    //        dispatch(cabinetActions.set_auto_logout(null))
    //        dispatch(authActions.watch_logout())
    //    }
    // }, [dispatch, autoLogout])


    return {
        isAuth, lang, emptyTab, menuMode,
    }
}
